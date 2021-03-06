---
title: LeetCode 算法题 – Search Insert Position
date: 2018-06-22T04:11:40+00:00
categories:
  - Programing
tags:
  - LeetCode
  - Go
---

现给出一个已排序（升序）的数组和一个 **target** 值，如果找到该 **target**，则返回其所在数组的索引。  
如果没有找到，则按照升序，返回 **target** 应被插入的位置。

<!--more-->

你可以假定数组没有重复的值。

## 原题

Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You may assume no duplicates in the array.

Here are few examples.

  * [1,3,5,6], 5 → 2
  * [1,3,5,6], 2 → 1
  * [1,3,5,6], 7 → 4
  * [1,3,5,6], 0 → 0

## 分析

  * 数组按升序排序
  * 找到：如果 target 与某数值相等，则返回该数值所在的数组的索引
  * 插入：如果 target 比某数值小，则返回该数值所在数组的索引

## 实现

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
