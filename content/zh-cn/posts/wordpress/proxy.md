---
title: WordPress 设置代理
date: 2020-03-12T17:48:36+00:00
categories:
  - Programing
tags:
  - Proxy
  - WordPress
---

如果你的 WordPress 所在服务器在境内，应该是无法在线自动更新的，这是因为境内发出的请求，WordPress 都会返回 429 Too Many Requests。本篇介绍如何通过代理解决。

<!--more-->

## 步骤

  * 一台境外的服务器。
  * 设置正向代理服务，可以参考 [Apache 正向代理配置][1]。
  * 修改 WordPress 配置。

> 题外话，Nginx 似乎并不支持正向代理 HTTPS 请求（CONNECT 会返回 400 状态码）。

## 修改配置

本文假定你已经正确设置了正向代理的境外服务器。

修改 `wp-config.php`，添加以下常量：

```php
define('WP_PROXY_HOST', 'wp.errlogs.com'); // 代理主机地址，可以为 IP。
define('WP_PROXY_PORT', '4040'); // 代理主机端口。

// Basic Auth 的帐号和密码，可选。
// define('WP_PROXY_USERNAME', 'foo');
// define('WP_PROXY_PASSWORD', 'bar');

// 跳过代理的主机列表，可选。
// define('WP_PROXY_BYPASS_HOSTS', '127.0.0.1, localhost');
```

 [1]: /posts/apache/forward-proxy
