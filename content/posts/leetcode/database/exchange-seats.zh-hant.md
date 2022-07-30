---
title: LeetCode 數據庫面試題 – 換座位（Exchange Seats）
date: 2019-04-12T06:34:59+00:00
categories:
  - Programing
tags:
  - LeetCode
  - MySQL
---

小美是一所中學的信息科技老師，她有一張 seat 座位表，平時用來儲存學生名字和與他們相對應的座位 ID,其中縱列的 ID 是連續遞增的。小美想改變相鄰倆學生的座位。

你能不能幫她寫一個 SQL query 來輸出小美想要的結果呢？

<!--more-->

示例：

| id | student |
| -- | ------- |
| 1  | Abbot   |
| 2  | Doris   |
| 3  | Emerson |
| 4  | Green   |
| 5  | Jeames  |

假如數據輸入的是上表，則輸出結果如下：

| id | student |
| -- | ------- |
| 1  | Doris   |
| 2  | Abbot   |
| 3  | Green   |
| 4  | Emerson |
| 5  | Jeames  |

注意：

如果學生人數是奇數，則不需要改變最後一個同學的座位。

## 分析

依題，座位 ID 是連續的，我們可以獲取前後座位的信息，並做以下處理即可：

  * 當前座位 ID 為奇數，和後一個座位的同學換座。
  * 當前座位 ID 為偶數，和前一個座位的同學換座。
  * 如果前/後座位為空，則不換座。

## 解答

```sql
SELECT
    s.id,
    IFNULL(IF(s.id%2=1, n.student, p.student), s.student) as student
FROM seat s
LEFT JOIN seat p ON p.id = s.id-1
LEFT JOIN seat n ON n.id = s.id+1
```

## 原題

<https://leetcode-cn.com/problems/exchange-seats>
