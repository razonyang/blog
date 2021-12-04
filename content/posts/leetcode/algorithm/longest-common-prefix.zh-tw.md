---
title: LeetCode 算法題 – Longest Common Prefix
date: 2017-12-02T04:11:47+00:00
categories:
  - Programing
tags:
  - LeetCode
  - Go
---

編寫一個方法返回字符串數組的最長公共前綴。

<!--more-->

## 原題

Write a function to find the longest common prefix string amongst an array of strings.

## 分析

依據題意，需要注意以下幾點：

- 區分大小寫
- 空數組的處理

## 實現

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
