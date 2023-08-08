+++
title = "Nginx 重定向路徑"
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

上篇文章筆者[利用 rename 批量替換文件後綴名]({{< ref "blog/linux/replace-extensions-via-rename" >}})，以將站點語言 `zh-cn`、`zh-tw` 分別改爲了 `zh-hans`、 `zh-hant`。
但這是不夠的，還需要將舊路徑重定向到新路徑。由於筆者將站點容器化，利用 Nginx 來處理請求，並部署到個人的 k3s 集羣，本文將簡單說明如何使用 Nginx 進行重定向。

<!--more-->

## 目的

`/zh-cn/`、`/zh-tw/` 分別重定向到 `/zh-hans/`、`/zh-hant/`。

## 配置

```nginx
server {
    rewrite ^/zh-cn/(.*)$ /zh-hans/$1 permanent;
    rewrite ^/zh-tw/(.*)$ /zh-hant/$1 permanent;
}
```

- `$1` 爲匹配/捕獲到的 `(.*)` 字符。
- `permanent` 永久重定向，也就是 `301` 重定向。
