---
title: LeetCode 算法題 – Fizz Buzz
date: 2019-03-02T03:55:09+00:00
categories:
  - Programing
tags:
  - LeetCode
  - Go
---

編寫一個程序，用字符串表示數字 1 到 n，其中：

  * 如果數字是**3**的倍數，則輸出**Fizz**
  * 如果數字是**5**的倍數，則輸出**Buzz**
  * 如果數字是**3**和**5**的倍數，則輸出**FizzBuzz**

<!--more-->

## 原題

Write a program that outputs the string representation of numbers from 1 to n.  
But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.

Example:

    n = 15,
    
    Return:
    [
        "1",
        "2",
        "Fizz",
        "4",
        "Buzz",
        "Fizz",
        "7",
        "8",
        "Fizz",
        "Buzz",
        "11",
        "Fizz",
        "13",
        "14",
        "FizzBuzz"
    ]

## 實現

### 實現一

```go
func fizzBuzz(n int) []string {
    ret := make([]string, n)

    for i := 1; i <= n; i++ {
        if i%15 == 0 {
            ret[i-1] = "FizzBuzz"
        } else if i%5 == 0 {
            ret[i-1] = "Buzz"
        } else if i%3 == 0 {
            ret[i-1] = "Fizz"
        } else {
            ret[i-1] = strconv.Itoa(i)
        }
    }

    return ret
}
```

### 實現二

```go
func fizzBuzz(n int) []string {
    ret := make([]string, n)
    three := 3
    five := 5
    fifteen := 15

    for i := 1; i <= n; i++ {
        if i == fifteen {
            ret[i-1] = "FizzBuzz"
            fifteen += 15
            five += 5
            three += 3
        } else if i == five {
            ret[i-1] = "Buzz"
            five += 5
        } else if i == three {
            ret[i-1] = "Fizz"
            three += 3
        } else {
            ret[i-1] = strconv.Itoa(i)
        }
    }

    return ret
}
```

> 經過測試，兩個版本的性能差不多。
