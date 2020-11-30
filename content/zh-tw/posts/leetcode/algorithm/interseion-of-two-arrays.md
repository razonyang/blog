---
title: LeetCode 算法題 – Intersection of Two Arrays
date: 2018-08-02T04:03:12+00:00
categories:
  - Programing
tags:
  - LeetCode
  - Go
---

編寫一個 function 獲取兩個數值數組的交集，交集中數值唯一。

<!--more-->

## 原題

Given two arrays, write a function to compute their intersection.  
Example:  
Given **nums1 = [1, 2, 2, 1]**, **nums2 = [2, 2]**, **return [2]**.  
**Note**:

  * Each element in the result must be unique.
  * The result can be in any order.

## 分析

  * 數值唯一
  * 順序隨意

## 實現

```go
func intersection(nums1 []int, nums2 []int) []int {
    m := make(map[int]bool)
    for _, num := range nums1 {
        m[num] = true
    }

    var v []int
    for _, num := range nums2 {
        if m[num] {
            v = append(v, num)
            delete(m, num)
        }
    }

    return v
}
```
