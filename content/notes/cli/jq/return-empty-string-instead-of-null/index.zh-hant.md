---
title: '使 jq 無匹配時返回空字符串，而非 null'
description: '當使用 jq 解析 JSON 而無匹配項時將會返回 null，而某些場景下，返回空字符串會更方便。'
date: '2024-06-28T10:49:35Z'
draft: false
categories: ["命令行工具"]
tags: ["jq", "JSON", "null"]
series: ["開發"]
images: []
---

## 背景

最近利用 `jq` 寫了幾個 GitHub Actions，其輸出（`outputs`）只能作為字符串，而 `"null"` 字符串永遠為真，而這種場景下，`jq` 於無匹配時返回空字符串更方便。

## 解決方案

可以通過追加 `// empty` 註釋，以返回空字符串，而非 `null`。

{{< page-resource-content "code/example" >}}
