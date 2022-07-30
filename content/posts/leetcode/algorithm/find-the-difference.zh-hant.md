---
title: LeetCode 算法題 – Find The Difference
date: 2020-02-02T03:39:03+00:00
categories:
  - Programing
tags:
  - LeetCode
  - Go
---

給定兩個只包含小寫字母的字符串 **s** 和 **t**，其中字符串 **t** 是由字符串 **s** 亂序後，再在隨機位置添加一個字母而成，請找到該隨機添加的字母。  

<!--more-->

例如：s = **abcd**, t = **abcde**, 其中 **e** 是隨機添加的字母。  
其實這個例子不夠明確，又比如 s = **abcde**, t = **aedceb**, 隨機添加的字母還是 **e**。 

## 原題

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

  * 字符串 **t** 的字母總數比 **s** 多 1
  * 字符串 **t** 的字母類別數和 **s** 相同或多 1

## 實現

### 實現一

依題意，用 **map[byte]int** 存儲字符串 s 中每個字母出現的次數，如果字符串 t 中某個字母不存在於 map 或出現次數過多，則該字母為隨機添加的字母。

時間複雜度： O(n)

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

### 實現二

可以利用 XOR 解決

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

結果：

> BenchmarkFindTheDifferenceMap-12 4990208 241 ns/op  
> BenchmarkFindTheDifferenceXOR-12 90979062 12.7 ns/op

雖然測試不嚴謹，不過後者性能更高。