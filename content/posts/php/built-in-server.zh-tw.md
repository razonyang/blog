---
title: PHP 內置的服務器
date: 2019-12-01T05:22:07+00:00
categories:
  - Programing
tags:
  - PHP
---

一般地，PHP 項目需要搭配 Web 服務器一起使用，如最常見的 NGINX 或 Apache。但有些時候，如果急切需要搭建一個 PHP Web 運行環境，但是又沒有已安裝好的 Web 服務器，此時就輪到 PHP 內置的服務器登場了。

<!--more-->

也正因為 PHP 內置服務器可以提供一個便捷 Web 開發環境，很多框架都有提供相應的命令行，如：Yii 的 `yii serve`、Laravel 的 `artisan serve`。雖然十分方便，當然也有需要注意的點。

## 用法

首先自然是介紹用法：

```shell
$ php -S localhost:2333 [-t html] [-c php.ini] [router.php]
```

  * `-S` 指定服務器的 Domain/IP 和端口
  * `-t` 指定根目錄，默認為當前目錄，其默認會執行 `index.php` 或 `index.html`，如果沒有這兩個文件，則會返回 404
  * `-c` 指定配置文件
  * `router.php` 自定義路由

## 例子

緊接著開始運行我們的 PHP 內置服務器：

1.啟動服務

```shell
$ php -S localhost:2333                            
PHP 7.3.4 Development Server started at Fri Apr 26 16:57:36 2019
Listening on http://localhost:2333
Document root is /home/razon/html
Press Ctrl-C to quit.
```

2.測試

```shell
$ echo "<?php\necho 'hello world';" > index.php
$ curl http://localhost:2333
hello world
```

## 路由

如果定義了路由，其會接收所有的請求並處理，PHP 將根據路由返回的結果進行下一步操作。  
如果返回 `false`，那麼將直接返回請求的文件，否則將返回輸出的內容。

```php
<?php
if (preg_match('/\.(?:png|jpg|jpeg|gif)$/', $_SERVER["REQUEST_URI"])) {
    // 如果是靜態文件，則直接返回
    return false;
}

// 其他請求交由 index.php 處理
require __DIR__ . '/index.php';
```

## 注意

雖然 PHP 內置服務器十分便捷，但是也有需要注意的點：

  * 不能用於生產環境
  * 不能併發處理請求，正因為如此，如果出現了併發問題，我們很難去尋找問題的根源

### 併發

> The web server runs only one single-threaded process, so PHP applications will stall if a request is blocked. —— [PHP built-in web server][1]

從官方文檔可以知道，PHP 內置服務器是單線程的進程，其不支持併發處理。

## 總結

儘管內置服務器十分便利，但是由於其不能併發處理請求，這使得其主要用於簡單的情景。複雜的情景，很可能導致更多的問題。

## 相關內容

  * [Built-in web server][1]

 [1]: https://www.php.net/manual/en/features.commandline.webserver.php
