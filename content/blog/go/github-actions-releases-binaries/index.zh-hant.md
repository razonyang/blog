+++
title = "利用 Github Actions 打包 Go 二進制文件"
date = 2022-07-29T16:05:54+08:00
# description = ""
featured = false
draft = false
comment = true
toc = true
reward = true
pinned = false
categories = []
tags = []
series = []
images = []
+++

今天寫了個簡繁體轉換的命令行工具 [gopencc](https://github.com/razonyang/gopencc)，以便對博客內容的簡繁體轉換。自然地，筆者也爲各個平臺編譯打包爲二進制執行文件，但是每次手動編譯並上傳到 GitHub Releases Assets 是十分耗時和枯燥的，幸好我們可以通過 GitHub Actions 來解決這個問題。

<!--more-->

## 目標

每次發佈新版本時，觸發 GitHub Actions，對其進行編譯和打包，並上傳到 GitHub Releases Assets。

## 配置

{{% code/go-github-actions-releases-binaries %}}

更多配置請參閱 [Go Release Binaries](https://github.com/marketplace/actions/go-release-binaries)。
