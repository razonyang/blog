---
title: LeetCode 算法題 – Remove Element
date: 2018-09-02T04:11:43+00:00
categories:
  - Programing
tags:
  - LeetCode
  - Go
---

移除元素：

  * 移除整數數組中值與給定數字相等的元素，並返回其最終的長度
  * 不能分配額外的內存

<!--more-->

## 原題

Given an array and a value, remove all instances of that value in place and return the new length.

Do not allocate extra space for another array, you must do this in place with constant memory.

The order of elements can be changed. It doesn't matter what you leave beyond the new length.

Example:

Given input array nums = [3,2,2,3], val = 3

Your function should return length = 2, with the first two elements of nums being 2.

## 分析

本題難度低，主要的為題是不能分配額外的內存，所以需要在原數組進行修改，那麼接下來就很簡單了，  
遍歷數組，將和給定數值相等的元素移除即可。

## 實現

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
