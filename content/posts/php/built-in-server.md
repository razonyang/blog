---
title: PHP 内置的服务器
date: 2019-12-01T05:22:07+00:00
categories:
  - Programing
tags:
  - PHP
---

一般地，PHP 项目需要搭配 Web 服务器一起使用，如最常见的 NGINX 或 Apache。但有些时候，如果急切需要搭建一个 PHP Web 运行环境，但是又没有已安装好的 Web 服务器，此时就轮到 PHP 内置的服务器登场了。

<!--more-->

也正因为 PHP 内置服务器可以提供一个便捷 Web 开发环境，很多框架都有提供相应的命令行，如：Yii 的 `yii serve`、Laravel 的 `artisan serve`。虽然十分方便，当然也有需要注意的点。

## 用法

首先自然是介绍用法：

```shell
$ php -S localhost:2333 [-t html] [-c php.ini] [router.php]
```

  * `-S` 指定服务器的 Domain/IP 和端口
  * `-t` 指定根目录，默认为当前目录，其默认会执行 `index.php` 或 `index.html`，如果没有这两个文件，则会返回 404
  * `-c` 指定配置文件
  * `router.php` 自定义路由

## 例子

紧接着开始运行我们的 PHP 内置服务器：

1.启动服务

```shell
$ php -S localhost:2333                            
PHP 7.3.4 Development Server started at Fri Apr 26 16:57:36 2019
Listening on http://localhost:2333
Document root is /home/razon/html
Press Ctrl-C to quit.
```

2.测试

```shell
$ echo "<?php\necho 'hello world';" > index.php
$ curl http://localhost:2333
hello world
```

## 路由

如果定义了路由，其会接收所有的请求并处理，PHP 将根据路由返回的结果进行下一步操作。  
如果返回 `false`，那么将直接返回请求的文件，否则将返回输出的内容。

```php
<?php
if (preg_match('/\.(?:png|jpg|jpeg|gif)$/', $_SERVER["REQUEST_URI"])) {
    // 如果是静态文件，则直接返回
    return false;
}

// 其他请求交由 index.php 处理
require __DIR__ . '/index.php';
```

## 注意

虽然 PHP 内置服务器十分便捷，但是也有需要注意的点：

  * 不能用于生产环境
  * 不能并发处理请求，正因为如此，如果出现了并发问题，我们很难去寻找问题的根源

### 并发

> The web server runs only one single-threaded process, so PHP applications will stall if a request is blocked. —— [PHP built-in web server][1]

从官方文档可以知道，PHP 内置服务器是单线程的进程，其不支持并发处理。

## 总结

尽管内置服务器十分便利，但是由于其不能并发处理请求，这使得其主要用于简单的情景。复杂的情景，很可能导致更多的问题。

## 相关内容

  * [Built-in web server][1]

 [1]: https://www.php.net/manual/en/features.commandline.webserver.php
