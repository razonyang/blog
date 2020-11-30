---
title: LeetCode 数据库面试题 – 换座位（Exchange Seats）
date: 2019-04-12T06:34:59+00:00
categories:
  - Programing
tags:
  - LeetCode
  - MySQL
---

小美是一所中学的信息科技老师，她有一张 seat 座位表，平时用来储存学生名字和与他们相对应的座位 ID,其中纵列的 ID 是连续递增的。小美想改变相邻俩学生的座位。

你能不能帮她写一个 SQL query 来输出小美想要的结果呢？

<!--more-->

示例：

| id | student |
| -- | ------- |
| 1  | Abbot   |
| 2  | Doris   |
| 3  | Emerson |
| 4  | Green   |
| 5  | Jeames  |

假如数据输入的是上表，则输出结果如下：

| id | student |
| -- | ------- |
| 1  | Doris   |
| 2  | Abbot   |
| 3  | Green   |
| 4  | Emerson |
| 5  | Jeames  |

注意：

如果学生人数是奇数，则不需要改变最后一个同学的座位。

## 分析

依题，座位 ID 是连续的，我们可以获取前后座位的信息，并做以下处理即可：

  * 当前座位 ID 为奇数，和后一个座位的同学换座。
  * 当前座位 ID 为偶数，和前一个座位的同学换座。
  * 如果前/后座位为空，则不换座。

## 解答

```sql
SELECT
    s.id,
    IFNULL(IF(s.id%2=1, n.student, p.student), s.student) as student
FROM seat s
LEFT JOIN seat p ON p.id = s.id-1
LEFT JOIN seat n ON n.id = s.id+1
```

## 原题

<https://leetcode-cn.com/problems/exchange-seats>
