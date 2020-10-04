---
title: PHP 设置 Redis 存储 Session
date: 2020-01-06T23:21:40+00:00
categories:
  - Programing
tags:
  - PHP
  - Redis
  - Session
---

最近购买了 Redis 云数据库，打算将 PHP Session 存放到 Redis。

<!--more-->

## 安装

首先需要安装 PHPRedis 扩展，这里以 CentOS 为例：

```shell
# yum install php-redis
```

```shell
# pecl install redis
```

> 在 CentOS 中可以通过 `yum install php-pear` 安装 pecl 命令。

其他环境可以参考官方[安装指南][1]。

## 配置

紧接着进行 Redis 配置，其中主要配置为 **session.save_handler** 和 **session.save_path**：

```ini
session.save_handler = redis
session.save_path = "tcp://host:port?auth=password&database=0"
```

**session.save_path** 中 `auth` 为 Redis 密码，`database` 为数据库，都是可选的。

## 测试

测试前，需要重启 PHP 服务，然后写个测试脚本：

```php
session_start();
$count = $_SESSION['count'] ?? 0;
$_SESSION['count'] = ++$count;
echo $count;
```

另外开启 Redis 监控：

```shell
$ redis-cli -h <host> -a <password> monitor
OK
```

如果没有差错，可以看到页面数值随刷新次数递增，监控结果类似：

```shell
1578351808.114912 [0 172.18.124.156:40210] "GET" "PHPREDIS_SESSION:3aac30ca920c61b2cc21677e41b7dad3"
1578351808.116330 [0 172.18.124.156:40210] "SETEX" "PHPREDIS_SESSION:3aac30ca920c61b2cc21677e41b7dad3" "1440" "count|i:1;"
```

在 Redis 里面也可以看到相关 Session 的信息：

```shell
$ redis-cli -h <host>
> keys *
1) "PHPREDIS_SESSION:3aac30ca920c61b2cc21677e41b7dad3"
```

自此安装完成。

## 问题排查

如果出现问题，先利用 **phpinfo** 确保 **session.save_handler** 和 **session.save_path** 是否生效。测试后请记得删除，否则暴露敏感信息，比如 Redis 连接信息 -- [PHP 安全 – 不要暴露 phpinfo][2]。

如果 php.ini 已经配置了 **session.save_handler** 和 **session.save_path**，但是没有生效，有三个可能性高的原因：

  * 修改后没有保存和重启 PHP 服务。
  * 修改了错误的 php.ini，phpinfo 会打印其加载的 ini 文件，仔细检查即可。
  * PHP-FPM 的 www.conf 中覆盖了 php.ini 的配置，比如 `php_value[session.save_handler] = files`

如果配置正常，利用 `redis-cli monitor` 查看指令是否正常，笔者安装时就遇到 php 配置问题导致 Redis 无法保存 Session 的问题，详情可以参看 [Issue][3]。

 [1]: https://github.com/phpredis/phpredis/blob/develop/INSTALL.markdown
 [2]: /posts/php/security-do-not-expose-your-phpinfo
 [3]: https://github.com/phpredis/phpredis/issues/1694
