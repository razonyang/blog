---
title: LeetCode 算法题 – Remove Element
date: 2018-09-02T04:11:43+00:00
categories:
  - Programing
tags:
  - LeetCode
  - Go
---

移除元素：

  * 移除整数数组中值与给定数字相等的元素，并返回其最终的长度
  * 不能分配额外的内存

<!--more-->

## 原题

Given an array and a value, remove all instances of that value in place and return the new length.

Do not allocate extra space for another array, you must do this in place with constant memory.

The order of elements can be changed. It doesn't matter what you leave beyond the new length.

Example:

Given input array nums = [3,2,2,3], val = 3

Your function should return length = 2, with the first two elements of nums being 2.

## 分析

本题难度低，主要的为题是不能分配额外的内存，所以需要在原数组进行修改，那么接下来就很简单了，  
遍历数组，将和给定数值相等的元素移除即可。

## 实现

```go
func removeElement(nums []int, val int) int {
    for i := 0; i < len(nums); {
        if nums[i] == val {
            // remove current element from nums,
            // and the next element's index is i, not i++.
            nums = append(nums[:i], nums[i+1:]...)
        } else {
            i++
        }
    }

    return len(nums)
}
```
