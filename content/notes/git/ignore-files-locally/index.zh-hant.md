---
# type: docs
title: 'Git 忽略本地文件'
description: '眾所周知，我們可以通過 .gitignore 文件忽略一些文件，避免被提交到倉庫，而某些情況下，你可能並不希望所有人忽略該文件。'
date: '2024-06-13T03:49:08Z'
draft: false
categories: ["開發"]
tags: ["Git", ".gitignore"]
series: ["筆記"]
images: ["/images/covers/git.jpg"]
---

## 實際案例

1. 本地的項目配置，但與本地環境息息相關，提交反而導致項目出錯。

## 修改本地配置

這種情況下，我們可以修改項目下的 `.git/info/exclude`，其格式和 `.gitignore` 相同。
