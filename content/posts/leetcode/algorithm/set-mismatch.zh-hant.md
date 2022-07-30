---
title: LeetCode 算法題 – Set Mismatch
date: 2019-03-02T04:14:57+00:00
categories:
  - Programing
tags:
  - LeetCode
  - Go
---

集合 **S** 一般包含數字 **1~n**，但由於數據錯誤，其中的一個數字重複了，導致缺失了某一數字。

現給出一個數組 **nums**，請找出其中重複和缺失的數字。

<!--more-->

## 原題

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

  * 正確的數組中，每個數字只出現一次，範圍[1,n]
  * 找出重複的數字和缺失的數字

用 Map 記錄出現的數字次數，則可輕鬆地的找到重複的數字。

至於缺失的數字，筆者暫時想到兩種方式：

  * 異或，(1^1)^(2^2)^...^(x)^...^(n^n)，則可知道缺失的數字是x
  * Map 是已出現了的數字集合，只需再次遍歷一遍，則可得到缺失的數字

## 實現

完整代碼和測試已託管在 [go-algorithm][1]。

### 實現一

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

### 實現二

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
