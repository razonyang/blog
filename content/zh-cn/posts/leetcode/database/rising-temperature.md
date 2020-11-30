---
title: LeetCode 数据库面试题 – 上升的温度
date: 2019-10-06T13:10:12+00:00
categories:
  - Programing
tags:
  - LeetCode
  - MySQL
---

给定一个 Weather 表，编写一个 SQL 查询，来查找与之前（昨天的）日期相比温度更高的所有日期的 Id。

<!--more-->

| Id(INT) | RecordDate(DATE) | Temperature(INT) |
| ------- | ---------------- | ---------------- |
| 1       | 2015-01-01       | 10               |
| 2       | 2015-01-02       | 25               |
| 3       | 2015-01-03       | 20               |
| 4       | 2015-01-04       | 30               |

例如，根据上述给定的 Weather 表格，返回如下 Id:

| Id |
| -- |
| 2  |
| 4  |

## 解答

```sql
SELECT
    w1.Id
FROM
    Weather w1
LEFT JOIN
    Weather w2
        ON DATEDIFF(w1.RecordDate, w2.RecordDate) = 1
WHERE w2.Id IS NOT NULL 
    AND w1.Temperature > w2.Temperature
```

## 原题

来源：力扣（LeetCode）  
链接：<https://leetcode-cn.com/problems/rising-temperature>
