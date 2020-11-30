---
title: LeetCode 算法题 – Set Mismatch
date: 2019-03-02T04:14:57+00:00
categories:
  - Programing
tags:
  - LeetCode
  - Go
---

集合 **S** 一般包含数字 **1~n**，但由于数据错误，其中的一个数字重复了，导致缺失了某一数字。

现给出一个数组 **nums**，请找出其中重复和缺失的数字。

<!--more-->

## 原题

The set S originally contains numbers from 1 to n.  
But unfortunately, due to the data error, one of the numbers in the set got duplicated to another number in the set,  
which results in repetition of one number and loss of another number.

Given an array nums representing the data status of this set after the error.  
Your task is to firstly find the number occurs twice and then find the number that is missing. Return them in the form of an array.

Example 1:

    Input: nums = [1,2,2,4]
    Output: [2,3]

Note:

  * The given array size will in the range [2, 10000].
  * The given array's numbers won't have any order.

## 分析

  * 正确的数组中，每个数字只出现一次，范围[1,n]
  * 找出重复的数字和缺失的数字

用 Map 记录出现的数字次数，则可轻松地的找到重复的数字。

至于缺失的数字，笔者暂时想到两种方式：

  * 异或，(1^1)^(2^2)^...^(x)^...^(n^n)，则可知道缺失的数字是x
  * Map 是已出现了的数字集合，只需再次遍历一遍，则可得到缺失的数字

## 实现

完整代码和测试已托管在 [go-algorithm][1]。

### 实现一

```go
func findErrorNums(nums []int) []int {
    m := make(map[int]bool, len(nums))
    v := make([]int, 2)

    for i := 0; i < len(nums); i++ {
        v[1] ^= i + 1
        if m[nums[i]] {
            v[0] = nums[i]
        } else {
            m[nums[i]] = true
            v[1] ^= nums[i]
        }
    }

    return v
}
```

### 实现二

```go
func findErrorNums(nums []int) []int {
    m := make(map[int]bool, len(nums))
    v := make([]int, 2)

    for _, num := range nums {
        if m[num] {
            v[0] = num
        }

        m[num] = true
    }

    for i := 1; i <= len(nums); i++ {
        if !m[i] {
            v[1] = i
            break
        }
    }

    return v
}
```

 [1]: https://github.com/razonyang/go-algorithm
