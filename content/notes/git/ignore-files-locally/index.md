---
# type: docs
title: 'Git 忽略本地文件'
description: '众所周知，我们可以通过 .gitignore 文件忽略一些文件，避免被提交到仓库，而某些情况下，你可能并不希望所有人忽略该文件。'
date: '2024-06-13T03:49:08Z'
draft: false
categories: ["开发"]
tags: ["Git", ".gitignore"]
series: ["笔记"]
images: ["/images/covers/git.jpg"]
---

## 实际案例

1. 本地的项目配置，但与本地环境息息相关，提交反而导致项目出错。

## 修改本地配置

这种情况下，我们可以修改项目下的 `.git/info/exclude`，其格式和 `.gitignore` 相同。
