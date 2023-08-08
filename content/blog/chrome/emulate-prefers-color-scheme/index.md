+++
type = "posts"
title = "Chrome 浏览器模拟 prefers-color-scheme，调试亮色和深色模式"
date = 2022-06-25T09:25:50+08:00
# description = ""
featured = false
draft = false
comment = true
toc = true
reward = true
pinned = false
categories = ["Chrome"]
tags = ["prefers-color-scheme", "深色模式", "Google 浏览器"]
series = ["Web"]
images = []
authors = ["RazonYang"]
+++

本文将介绍 Chrome 浏览器下如何调试亮色和深色模式，也就是模拟 `prefers-color-scheme`。

<!--more-->

{{< bilibili BV1MN4y1G7SK >}}

1. 首先 `F12` 调出开发者工具面板。

1. 然后 <kbd><kbd>CTRL</kbd>+<kbd>SHIFT</kbd>+<kbd>P</kbd></kbd> 打开命令输入界面。

1. 然后键入 `prefers`，即可出现模拟 `prefers-color-scheme` 的选项。

![模拟 prefers-color-scheme](command.png#center)
