+++
title = "Caddy 2 重定向舊路徑到新路徑"
description = "Caddy 2 重定向舊路徑到新路徑配置說明"
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

最近筆者將博客主題更換為 [Bootstrap](https://github.com/razonyang/hugo-theme-bootstrap)，為了以後方便增添和區分繁體中文，打算將以前簡體中文路徑由 `/zh/` 改為 `/zh-cn/`。而筆者使用的是 Caddy 2 服務器，正好相關教程太少，順便寫一篇教程，以記錄和方便其他有類似需求的小夥伴們。
<!--more-->

## 配置

廢話少說，直接上碼。

```caddy
@zh {
  path_regexp zh ^/zh/(.*)$
}
redir @zh /zh-cn/{http.regexp.zh.1} 301
```

配置十分簡單，只用到了 [`path_regexp`](https://caddyserver.com/docs/caddyfile/matchers#path-regexp) 和 [`redir`](https://caddyserver.com/docs/caddyfile/directives/redir) 指令。

### 說明

1. 首先定義了一個名為 `@zh` 的命名匹配器，用於 `redir` 指令。
1. `path_regexp` 指定了正則的名稱 `zh`，其可以通過 `{http.regexp.zh.*}` 來獲取相關數據。
1. `^/zh/(.*)$` 正則匹配以 `/zh/` 路徑的其餘部分為 `{http.regexp.zh.1}`。
1. 最後 `redir` 到新的路徑 `/zh-cn/` 即可。
