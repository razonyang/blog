---
title: LeetCode 數據庫面試題 – 第二高的薪水（Second Highest Salary）
date: 2019-04-05T08:30:22+00:00
categories:
  - Programing
tags:
  - LeetCode
  - MySQL
---

編寫一個 SQL 查詢，獲取 Employee 表中第二高的薪水（Salary） 。

<!--more-->

| Id | Salary |
| -- | ------ |
| 1  | 100    |
| 2  | 200    |
| 3  | 300    |

例如上述 Employee 表，SQL查詢應該返回 200 作為第二高的薪水。如果不存在第二高的薪水，那麼查詢應返回 null。

| SecondHighestSalary |
| ------------------- |
| 200                 |

## 答案

```sql
SELECT (
    SELECT
        DISTINCT Salary
    FROM Employee
    ORDER BY Salary DESC
    LIMIT 1,1
) as SecondHighestSalary
```

## 原題

<https://leetcode-cn.com/problems/second-highest-salary>
