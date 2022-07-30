---
title: PHP 設置 Redis 存儲 Session
date: 2020-01-06T23:21:40+00:00
categories:
  - Programing
tags:
  - PHP
  - Redis
  - Session
---

最近購買了 Redis 雲數據庫，打算將 PHP Session 存放到 Redis。

<!--more-->

## 安裝

首先需要安裝 PHPRedis 擴展，這裡以 CentOS 為例：

```shell
# yum install php-redis
```

```shell
# pecl install redis
```

> 在 CentOS 中可以通過 `yum install php-pear` 安裝 pecl 命令。

其他環境可以參考官方[安裝指南][1]。

## 配置

緊接著進行 Redis 配置，其中主要配置為 **session.save_handler** 和 **session.save_path**：

```ini
session.save_handler = redis
session.save_path = "tcp://host:port?auth=password&database=0"
```

**session.save_path** 中 `auth` 為 Redis 密碼，`database` 為數據庫，都是可選的。

## 測試

測試前，需要重啟 PHP 服務，然後寫個測試腳本：

```php
session_start();
$count = $_SESSION['count'] ?? 0;
$_SESSION['count'] = ++$count;
echo $count;
```

另外開啟 Redis 監控：

```shell
$ redis-cli -h <host> -a <password> monitor
OK
```

如果沒有差錯，可以看到頁面數值隨刷新次數遞增，監控結果類似：

```shell
1578351808.114912 [0 172.18.124.156:40210] "GET" "PHPREDIS_SESSION:3aac30ca920c61b2cc21677e41b7dad3"
1578351808.116330 [0 172.18.124.156:40210] "SETEX" "PHPREDIS_SESSION:3aac30ca920c61b2cc21677e41b7dad3" "1440" "count|i:1;"
```

在 Redis 裡面也可以看到相關 Session 的信息：

```shell
$ redis-cli -h <host>
> keys *
1) "PHPREDIS_SESSION:3aac30ca920c61b2cc21677e41b7dad3"
```

自此安裝完成。

## 問題排查

如果出現問題，先利用 **phpinfo** 確保 **session.save_handler** 和 **session.save_path** 是否生效。測試後請記得刪除，否則暴露敏感信息，比如 Redis 連接信息 -- [PHP 安全 – 不要暴露 phpinfo][2]。

如果 php.ini 已經配置了 **session.save_handler** 和 **session.save_path**，但是沒有生效，有三個可能性高的原因：

  * 修改後沒有保存和重啟 PHP 服務。
  * 修改了錯誤的 php.ini，phpinfo 會打印其加載的 ini 文件，仔細檢查即可。
  * PHP-FPM 的 www.conf 中覆蓋了 php.ini 的配置，比如 `php_value[session.save_handler] = files`

如果配置正常，利用 `redis-cli monitor` 查看指令是否正常，筆者安裝時就遇到 php 配置問題導致 Redis 無法保存 Session 的問題，詳情可以參看 [Issue][3]。

 [1]: https://github.com/phpredis/phpredis/blob/develop/INSTALL.markdown
 [2]: /posts/php/security-do-not-expose-your-phpinfo
 [3]: https://github.com/phpredis/phpredis/issues/1694
