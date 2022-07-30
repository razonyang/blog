---
title: WordPress 設置代理
date: 2020-03-12T17:48:36+00:00
categories:
  - Programing
tags:
  - Proxy
  - WordPress
---

如果你的 WordPress 所在服務器在境內，應該是無法在線自動更新的，這是因為境內發出的請求，WordPress 都會返回 429 Too Many Requests。本篇介紹如何通過代理解決。

<!--more-->

## 步驟

  * 一臺境外的服務器。
  * 設置正向代理服務，可以參考 [Apache 正向代理配置][1]。
  * 修改 WordPress 配置。

> 題外話，Nginx 似乎並不支持正向代理 HTTPS 請求（CONNECT 會返回 400 狀態碼）。

## 修改配置

本文假定你已經正確設置了正向代理的境外服務器。

修改 `wp-config.php`，添加以下常量：

```php
define('WP_PROXY_HOST', 'wp.errlogs.com'); // 代理主機地址，可以為 IP。
define('WP_PROXY_PORT', '4040'); // 代理主機端口。

// Basic Auth 的帳號和密碼，可選。
// define('WP_PROXY_USERNAME', 'foo');
// define('WP_PROXY_PASSWORD', 'bar');

// 跳過代理的主機列表，可選。
// define('WP_PROXY_BYPASS_HOSTS', '127.0.0.1, localhost');
```

 [1]: /posts/apache/forward-proxy
