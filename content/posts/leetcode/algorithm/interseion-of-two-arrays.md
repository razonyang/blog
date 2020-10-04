---
title: LeetCode 算法题 – Intersection of Two Arrays
date: 2018-08-02T04:03:12+00:00
categories:
  - Programing
tags:
  - LeetCode
  - Go
---

编写一个 function 获取两个数值数组的交集，交集中数值唯一。

<!--more-->

## 原题

Given two arrays, write a function to compute their intersection.  
Example:  
Given **nums1 = [1, 2, 2, 1]**, **nums2 = [2, 2]**, **return [2]**.  
**Note**:

  * Each element in the result must be unique.
  * The result can be in any order.

## 分析

  * 数值唯一
  * 顺序随意

## 实现

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
