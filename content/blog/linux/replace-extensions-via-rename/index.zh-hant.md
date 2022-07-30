+++
title = "利用 rename 批量替換文件後綴名"
date = 2022-07-30T12:43:35+08:00
# description = ""
featured = false
draft = false
comment = true
toc = true
reward = true
pinned = false
carousel = false
categories = ["Linux"]
tags = ["rename"]
series = []
images = []
+++

由於 Hugo 本地化功能僅支持 `zh-hans` 和 `zh-hant`，不支持 `zh-cn`、`zh-tw`、`zh-hk` 等中文語言代碼，而筆者站點基於文件後綴名進行多語言化的，要更改語言代碼，需要批量修改文件後綴名，而這正是本文主角 rename 的大顯身手的時候。

<!--more-->

## 目標

將 `.zh-tw.md` 的文件名改爲 `.zh-hant.md`。

## 解決

```bash
$ rename "s/.zh-tw.md$/.zh-hant.md/" **/*.md
```

- `s/.zh-tw.md$/.zh-hant.md/` 正則表達式，格式：`s/search_pattern/replacement/`，互相以 `/` 分開。
- `**/*.md` 匹配所有以 `.md` 爲後綴的文件。
