+++
title = "利用 Github Actions 打包 Go 二进制文件"
date = 2022-07-29T16:05:54+08:00
# description = ""
featured = false
draft = false
comment = true
toc = true
reward = true
pinned = false
carousel = false
categories = []
tags = []
series = []
images = []
+++

今天写了个简繁体转换的命令行工具 [gopencc](https://github.com/razonyang/gopencc)，以便对博客内容的简繁体转换。自然地，笔者也为各个平台编译打包为二进制执行文件，但是每次手动编译并上传到 GitHub Releases Assets 是十分耗时和枯燥的，幸好我们可以通过 GitHub Actions 来解决这个问题。

<!--more-->

## 目标

每次发布新版本时，触发 GitHub Actions，对其进行编译和打包，并上传到 GitHub Releases Assets。

## 配置

{{% code/go-github-actions-releases-binaries %}}

更多配置请参阅 [Go Release Binaries](https://github.com/marketplace/actions/go-release-binaries)。
