---
title: NGINX 反向代理 WebSocket
date: 2019-02-01T05:39:21+00:00
categories:
  - Programing
tags:
  - Nginx
  - Proxy
  - Websocket
---

NGINX 反向代理 WebSocket 配置說明。

<!--more-->

## 配置

```nginx
# 定義 WebSocket Upstream
upstream websocket {
    server 127.0.0.1:2333;
}
    
server {
    # ...

    # 代理 WebSocket 請求
    location /ws/ {
        proxy_pass http://websocket;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "Upgrade";
    }
    
    # ...
}
```

## 相關資料

  * [NGINX as a WebSocket Proxy][1]

 [1]: https://www.nginx.com/blog/websocket-nginx/
