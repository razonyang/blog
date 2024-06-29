---
title: LeetCode 算法题 – Find The Difference
date: 2020-02-02T03:39:03+00:00
categories:
  - Programing
tags:
  - LeetCode
  - Go
---

给定两个只包含小写字母的字符串 **s** 和 **t**，其中字符串 **t** 是由字符串 **s** 乱序后，再在随机位置添加一个字母而成，请找到该随机添加的字母。  

<!--more-->

例如：s = **abcd**, t = **abcde**, 其中 **e** 是随机添加的字母。  
其实这个例子不够明确，又比如 s = **abcde**, t = **aedceb**, 随机添加的字母还是 **e**。 

## 原题

Given two strings s and t which consist of only lowercase letters.  
String t is generated by random shuffling string s and then add one more letter at a random position.  
Find the letter that was added in t.  
Example:

Input:  
s = "abcd"  
t = "abcde"

Output:  
e

Explanation:  
'e' is the letter that was added.

## 分析

  * 字符串 **t** 的字母总数比 **s** 多 1
  * 字符串 **t** 的字母类别数和 **s** 相同或多 1

## 实现

### 实现一

依题意，用 **map[byte]int** 存储字符串 s 中每个字母出现的次数，如果字符串 t 中某个字母不存在于 map 或出现次数过多，则该字母为随机添加的字母。

时间复杂度： O(n)

```go
func findTheDifferenceMap(s string, t string) byte {
    m := make(map[byte]int, len(s))
    for i := 0; i < len(s); i++ {
        m[s[i]] += 1
    }

    var b byte
    for i := 0; i < len(t); i++ {
        if count, ok := m[t[i]]; !ok || count <= 0 {
            b = t[i]
            break
        } else {
            m[t[i]] -= 1
        }
    }

    return b
}
```

### 实现二

可以利用 XOR 解决

```go
func findTheDifferenceXOR(s string, t string) byte {
    var b byte
    for i := 0; i < len(s); i++ {
        b ^= s[i] ^ t[i]
    }
    b ^= t[len(t)-1]

    return b
}
```

### 性能

```go
type pair struct {
    s string
    t string
}

var pairs = []pair{
    {"abcd", "abcde"},
    {"abcd", "aebcd"},
    {"abcd", "abecd"},
    {"abcd", "abced"},
}

func BenchmarkFindTheDifferenceMap(b *testing.B) {
    var p pair
    for n := 0; n < b.N; n++ {
        p = pairs[n%len(pairs)]
        findTheDifferenceMap(p.s, p.t)
    }
}
func BenchmarkFindTheDifferenceXOR(b *testing.B) {
    var p pair
    for n := 0; n < b.N; n++ {
        p = pairs[n%len(pairs)]
        findTheDifferenceXOR(p.s, p.t)
    }
}
```

结果：

> BenchmarkFindTheDifferenceMap-12 4990208 241 ns/op  
> BenchmarkFindTheDifferenceXOR-12 90979062 12.7 ns/op

虽然测试不严谨，不过后者性能更高。