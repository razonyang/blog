---
title: '使 jq 无匹配时返回空字符串，而非 null'
description: '当使用 jq 解析 JSON 而无匹配项时将会返回 null，而某些场景下，返回空字符串会更方便。'
date: '2024-06-28T10:49:35Z'
draft: false
categories: ["命令行工具"]
tags: ["jq", "JSON", "null"]
series: ["开发"]
images: []
---

## 背景

最近利用 `jq` 写了几个 GitHub Actions，其输出（`outputs`）只能作为字符串，而 `"null"` 字符串永远为真，而这种场景下，`jq` 于无匹配时返回空字符串更方便。

## 解决方案

可以通过追加 `// empty` 注释，以返回空字符串，而非 `null`。

{{< page-resource-content "code/example" >}}
