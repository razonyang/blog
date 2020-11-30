---
title: LeetCode 算法題 – Two Sum
date: 2017-08-02T04:11:10+00:00
categories:
  - Programing
tags:
  - LeetCode
  - Go
---

給定一個整數數組，如果兩個元素值之和等於給定的值，則返回它們的索引。  
你可以假定只有一個明確的答案，而且不能使用同一元素兩次。

<!--more-->

## 原題

Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,  
return [0, 1].

## 分析

  * 目標：兩元素的索引
  * 依據：兩元素的值之和與給定的值是否相等

## 實現

### 雙重循環

按照題意，腦海最開始浮現的解法是用雙重循環，將每個元素和其他元素相加，判斷是否和給定值相等即可，相等則返回結束，否則繼續。

```go
func twoSum(nums []int, target int) []int {
    for i := 0; i < len(nums); i++ {
        for j := i + 1; j < len(nums); j++ {
            if nums[i]+nums[j] == target {
                return []int{i, j}
            }
        }
    }

    return []int{}
}
```

### Map

但是雙重循環的時間複雜度是 O(n^2)，是否有更好的解法呢？ 是否可以使用 **Map** 呢？如何使用呢？

根據之前的分析，換個角度看，**依據**可以理解為：給定值和元素之間的差值，那麼用 Map 來存儲 **'數值' => '索引'** 的映射的話，則問題迎刃而解。

```go
func twoSum(nums []int, target int) []int {
    m := map[int]int{}
    for i := 0; i < len(nums); i++ {
        m[nums[i]] = i
    }

    for i := 0; i < len(nums); i++ {
        minus := target - nums[i]
        if j, ok := m[minus]; ok && i != j {
            return []int{i, j}
        }
    }

    return []int{}
}
```

### Map 改良版

上面的 Map 解法的使得時間複雜度從 O(n^2) 將為 O(n)，確切來說是2*O(n)，因為額外用了一個循環，將整數和其索引的映射存儲到 Map 中，如果將兩個循環合併在一起呢？

仔細思考了下，於是得出以下優化後的代碼，其中 **m[nums[i]] = i** 放在判斷後面，可以避免多次使用同一元素。

```go
func twoSum(nums []int, target int) []int {
    m := map[int]int{}

    for i := 0; i < len(nums); i++ {
        minus := target - nums[i]
        if j, ok := m[minus]; ok {
            return []int{i, j}
        }

        // the code placed here can avoid using the same element twice.
        m[nums[i]] = i
    }

    return []int{}
}
```
