+++
type = "docs"
title = "测试 Go Module 的本地修改"
date = 2022-04-17T16:29:25+08:00
# description = "" # Used by description meta tag, summary will be used instead if not set or empty.
featured = false
draft = false
comment = true
toc = true
reward = true
pinned = false
categories = ["Go"]
tags = ["Hugo"]
series = ["Development"]
images = []
+++

最近笔者正在为自己写的主题 [Hugo Bootstrap](https://github.com/razonyang/hugo-theme-bootstrap) 做一个默认模板，以便新手快速入门。
主题将作为 Go Module 进行安装，但期间发现一些小 Bug，本地调试会更便捷，于是乎有了这篇文章。

<!--more-->

目前 `go.mod` 如下：

```text
module github.com/razonyang/hugo-theme-bootstrap-skeleton

go 1.18

require github.com/razonyang/hugo-theme-bootstrap v0.76.0 // indirect
```

我们可以通过 `replace` 指令实现：

```text
replace github.com/razonyang/hugo-theme-bootstrap => /home/razonyang/Projects/razonyang/hugo-theme-bootstrap
```
