+++
title = "利用 rename 批量替换文件后缀名"
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

由于 Hugo 本地化功能仅支持 `zh-hans` 和 `zh-hant`，不支持 `zh-cn`、`zh-tw`、`zh-hk` 等中文语言代码，而笔者站点基于文件后缀名进行多语言化的，要更改语言代码，需要批量修改文件后缀名，而这正是本文主角 rename 的大显身手的时候。

<!--more-->

## 目标

将 `.zh-tw.md` 的文件名改为 `.zh-hant.md`。

## 解决

```bash
$ rename "s/.zh-tw.md$/.zh-hant.md/" **/*.md
```

- `s/.zh-tw.md$/.zh-hant.md/` 正则表达式，格式：`s/search_pattern/replacement/`，互相以 `/` 分开。
- `**/*.md` 匹配所有以 `.md` 为后缀的文件。
