+++
title = "Caddy 2 重定向旧路径到新路径"
description = "Caddy 2 重定向旧路径到新路径配置说明"
date = 2020-11-29T05:03:54+08:00
draft = false
comment = true
toc = true
reward = true
categories = [
  "Server"
]
tags = [
  "Caddy"
]
+++

最近笔者将博客主题更换为 [Bootstrap](https://github.com/razonyang/hugo-theme-bootstrap)，为了以后方便增添和区分繁体中文，打算将以前简体中文路径由 `/zh/` 改为 `/zh-cn/`。而笔者使用的是 Caddy 2 服务器，正好相关教程太少，顺便写一篇教程，以记录和方便其他有类似需求的小伙伴们。
<!--more-->

## 配置

```caddy
@zh {
  path_regexp zh ^/zh/(.*)$
}
redir @zh /zh-cn/{http.regexp.zh.1} 301
```

配置十分简单，只用到了 [`path_regexp`](https://caddyserver.com/docs/caddyfile/matchers#path-regexp) 和 [`redir`](https://caddyserver.com/docs/caddyfile/directives/redir) 指令。

### 说明

1. 首先定义了一个名为 `@zh` 的命名匹配器，用于 `redir` 指令。
1. `path_regexp` 指定了正则的名称 `zh`，其可以通过 `{http.regexp.zh.*}` 来获取相关数据。
1. `^/zh/(.*)$` 正则匹配以 `/zh/` 路径的其余部分为 `{http.regexp.zh.1}`。
1. 最后 `redir` 到新的路径 `/zh-cn/` 即可。
