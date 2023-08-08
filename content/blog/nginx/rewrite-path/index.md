+++
title = "Nginx 重定向路径"
date = 2022-07-30T14:04:27+08:00
# description = ""
featured = false
draft = false
comment = true
toc = true
reward = true
pinned = false
categories = ["Nginx"]
tags = []
series = ["Development"]
images = []
+++

上篇文章笔者[利用 rename 批量替换文件后缀名]({{< ref "blog/linux/replace-extensions-via-rename" >}})，以将站点语言 `zh-cn`、`zh-tw` 分别改为了 `zh-hans`、 `zh-hant`。
但这是不够的，还需要将旧路径重定向到新路径。由于笔者将站点容器化，利用 Nginx 来处理请求，并部署到个人的 k3s 集群，本文将简单说明如何使用 Nginx 进行重定向。

<!--more-->

## 目的

`/zh-cn/`、`/zh-tw/` 分别重定向到 `/zh-hans/`、`/zh-hant/`。

## 配置

```nginx
server {
    rewrite ^/zh-cn/(.*)$ /zh-hans/$1 permanent;
    rewrite ^/zh-tw/(.*)$ /zh-hant/$1 permanent;
}
```

- `$1` 为匹配/捕获到的 `(.*)` 字符。
- `permanent` 永久重定向，也就是 `301` 重定向。
