---
title: LeetCode 數據庫面試題 – 上升的溫度
date: 2019-10-06T13:10:12+00:00
categories:
  - Programing
tags:
  - LeetCode
  - MySQL
---

給定一個 Weather 表，編寫一個 SQL 查詢，來查找與之前（昨天的）日期相比溫度更高的所有日期的 Id。

<!--more-->

| Id(INT) | RecordDate(DATE) | Temperature(INT) |
| ------- | ---------------- | ---------------- |
| 1       | 2015-01-01       | 10               |
| 2       | 2015-01-02       | 25               |
| 3       | 2015-01-03       | 20               |
| 4       | 2015-01-04       | 30               |

例如，根據上述給定的 Weather 表格，返回如下 Id:

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

## 原題

來源：力扣（LeetCode）  
鏈接：<https://leetcode-cn.com/problems/rising-temperature>
