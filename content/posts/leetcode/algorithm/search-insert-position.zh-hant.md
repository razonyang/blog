---
title: LeetCode 算法題 – Search Insert Position
date: 2018-06-22T04:11:40+00:00
categories:
  - Programing
tags:
  - LeetCode
  - Go
---

現給出一個已排序（升序）的數組和一個 **target** 值，如果找到該 **target**，則返回其所在數組的索引。  
如果沒有找到，則按照升序，返回 **target** 應被插入的位置。

<!--more-->

你可以假定數組沒有重複的值。

## 原題

Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You may assume no duplicates in the array.

Here are few examples.

  * [1,3,5,6], 5 → 2
  * [1,3,5,6], 2 → 1
  * [1,3,5,6], 7 → 4
  * [1,3,5,6], 0 → 0

## 分析

  * 數組按升序排序
  * 找到：如果 target 與某數值相等，則返回該數值所在的數組的索引
  * 插入：如果 target 比某數值小，則返回該數值所在數組的索引

## 實現

```go
func searchInsert(nums []int, target int) int {
    for idx, num := range nums {
        if num >= target {
            return idx
        }
    }

    return len(nums)
}
```
