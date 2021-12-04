---
title: LeetCode 算法题 – Two Sum
date: 2017-08-02T04:11:10+00:00
categories:
  - Programing
tags:
  - LeetCode
  - Go
---

给定一个整数数组，如果两个元素值之和等于给定的值，则返回它们的索引。  
你可以假定只有一个明确的答案，而且不能使用同一元素两次。

<!--more-->

## 原题

Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,  
return [0, 1].

## 分析

  * 目标：两元素的索引
  * 依据：两元素的值之和与给定的值是否相等

## 实现

### 双重循环

按照题意，脑海最开始浮现的解法是用双重循环，将每个元素和其他元素相加，判断是否和给定值相等即可，相等则返回结束，否则继续。

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

但是双重循环的时间复杂度是 O(n^2)，是否有更好的解法呢？ 是否可以使用 **Map** 呢？如何使用呢？

根据之前的分析，换个角度看，**依据**可以理解为：给定值和元素之间的差值，那么用 Map 来存储 **'数值' => '索引'** 的映射的话，则问题迎刃而解。

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

上面的 Map 解法的使得时间复杂度从 O(n^2) 将为 O(n)，确切来说是2*O(n)，因为额外用了一个循环，将整数和其索引的映射存储到 Map 中，如果将两个循环合并在一起呢？

仔细思考了下，于是得出以下优化后的代码，其中 **m[nums[i]] = i** 放在判断后面，可以避免多次使用同一元素。

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
