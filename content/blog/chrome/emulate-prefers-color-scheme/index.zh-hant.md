+++
type = "posts"
title = "Chrome 瀏覽器模擬 prefers-color-scheme，調試亮色和深色模式"
date = 2022-06-25T09:25:50+08:00
# description = ""
featured = false
draft = false
comment = true
toc = true
reward = true
pinned = false
carousel = false
categories = ["Chrome"]
tags = ["prefers-color-scheme", "深色模式", "Google 瀏覽器"]
series = ["Web"]
images = []
authors = ["RazonYang"]
+++

本文將介紹 Chrome 瀏覽器下如何調試亮色和深色模式，也就是模擬 `prefers-color-scheme`。

<!--more-->

{{< bilibili BV1MN4y1G7SK >}}

1. 首先 `F12` 調出開發者工具面板。

1. 然後 <kbd><kbd>CTRL</kbd>+<kbd>SHIFT</kbd>+<kbd>P</kbd></kbd> 打開命令輸入界面。

1. 然後鍵入 `prefers`，即可出現模擬 `prefers-color-scheme` 的選項。

![模擬 prefers-color-scheme](command.png#center)
