---
title: LeetCode 算法题 – Longest Common Prefix
date: 2017-12-02T04:11:47+00:00
categories:
  - Programing
tags:
  - LeetCode
  - Go
---

编写一个方法返回字符串数组的最长公共前缀。

<!--more-->

## 原题

Write a function to find the longest common prefix string amongst an array of strings.

## 分析

依据题意，需要注意以下几点：

- 区分大小写
- 空数组的处理

## 实现

```go
func longestCommonPrefix(strs []string) string {
    if len(strs) == 0 {
        return ""
    }

    max := len(strs[0])

    for i := 1; i < len(strs); i++ {
        max = min(max, len(strs[i]))
        for j := 0; j < max; j++ {
            if strs[i][j] != strs[i-1][j] {
                max = j
                continue
            }
        }
    }

    return strs[0][:max]
}

func min(a, b int) int {
    if a > b {
        return b
    }

    return a
}
```
