+++
title = "Hugo 多語言站點中 404 頁面的重定向規則"
date = 2022-07-31T21:43:30+08:00
# description = ""
featured = false
draft = false
comment = true
toc = true
reward = true
pinned = false
carousel = false
categories = ["Hugo"]
tags = ["404"]
series = ["Web"]
images = []
+++

在 Hugo 多語言站點中，一般需要爲 404 頁面設置額外的重定向規則。

<!--more-->

## 問題

在多語言站點中，有幾個情況，假設 `en` 爲默認語言。

| 語言 | `defaultContentLanguageInSubdir` | 404 頁面 |
|---|---|---|
| `en` | `false` | `/404.html` |
| `en` | `true` | `/en/404.html` |
| `zh-hans` | `true` | `/zh-hans/404.html` |
| `zh-hant` | `true` | `/zh-hant/404.html` |

可以看到 404 頁面也是多語言化的，我的目標方案是根據首個路徑匹配語言，嘗試查找 404 頁面，匹配失敗則使用默認語言的 404 頁面。

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

1. 這裏先定義了一個 `@error` 塊，利用 `try_files` 於第一個路徑下嘗試匹配 `404.html` ，失敗則使用默認的 404 頁面。
1. 如果你開啓了 `defaultContentLanguageInSubdir`，在站點構建時，還需要將默認的 404 頁面複製到根目錄。

> 也許還可以根據請求頭，以獲取用戶偏好的語言進行更準確的語言匹配，由於筆者經驗有限，只能後續有空再研究研究。

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

Cloudflare Pages 已經爲你設置好 404 頁面重定向規則，你無須做額外配置。
