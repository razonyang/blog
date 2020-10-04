---
title: Flarum Nginx 配置
date: 2020-04-04T07:20:29+00:00
categories:
  - Programing
tags:
  - Flarum
  - Nginx
---

Flarum Nginx 配置示例。

<!--more-->

```nginx
server {
    server_name forum.local;
    root /path-to-flarum/public;
    index index.php;
    include /path-to-flarum/.nginx.conf;

    location ~ \.php$ {
        fastcgi_pass   php;
        fastcgi_index  index.php;
        fastcgi_param  SCRIPT_FILENAME  $document_root$fastcgi_script_name;
        include        fastcgi_params;
    }
}
```
