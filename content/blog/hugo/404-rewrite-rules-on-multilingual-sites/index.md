+++
title = "Hugo 多语言站点中 404 页面的重定向规则"
date = 2022-07-31T21:43:30+08:00
# description = ""
featured = false
draft = false
comment = true
toc = true
reward = true
pinned = false
categories = ["Hugo"]
tags = ["404"]
series = ["Web"]
images = []
+++

在 Hugo 多语言站点中，一般需要为 404 页面设置额外的重定向规则。

<!--more-->

## 问题

在多语言站点中，有几个情况，假设 `en` 为默认语言。

| 语言 | `defaultContentLanguageInSubdir` | 404 页面 |
|---|---|---|
| `en` | `false` | `/404.html` |
| `en` | `true` | `/en/404.html` |
| `zh-hans` | `true` | `/zh-hans/404.html` |
| `zh-hant` | `true` | `/zh-hant/404.html` |

可以看到 404 页面也是多语言化的，我的目标方案是根据首个路径匹配语言，尝试查找 404 页面，匹配失败则使用默认语言的 404 页面。

## Nginx

```nginx
server {
    location ~* ^/([^/]+) {
        index  index.html index.htm;
        error_page 404 = @error;
    }

    error_page 404 /404.html;
    location @error {
        try_files /$1/404.html /404.html =404;
    }
}
```

1. 这里先定义了一个 `@error` 块，利用 `try_files` 于第一个路径下尝试匹配 `404.html` ，失败则使用默认的 404 页面。
1. 如果你开启了 `defaultContentLanguageInSubdir`，在站点构建时，还需要将默认的 404 页面复制到根目录。

> 也许还可以根据请求头，以获取用户偏好的语言进行更准确的语言匹配，由于笔者经验有限，只能后续有空再研究研究。

## Netlify

```toml
[[redirects]]
  from = "/:lang/*"
  to = "/:lang/404.html"
  status = 404

[[redirects]]
  from = "/*"
  to = "/en/404.html" # Replace the "en" to your default language code.
  # to = "/404.html" # Use it when a monolingual site or "defaultContentLanguageInSubdir" is disabled.
  status = 404
```

## Cloudflare Pages

Cloudflare Pages 已经为你设置好 404 页面重定向规则，你无须做额外配置。
