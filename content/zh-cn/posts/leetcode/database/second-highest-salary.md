---
title: LeetCode 数据库面试题 – 第二高的薪水（Second Highest Salary）
date: 2019-04-05T08:30:22+00:00
categories:
  - Programing
tags:
  - LeetCode
  - MySQL
---

编写一个 SQL 查询，获取 Employee 表中第二高的薪水（Salary） 。

<!--more-->

| Id | Salary |
| -- | ------ |
| 1  | 100    |
| 2  | 200    |
| 3  | 300    |

例如上述 Employee 表，SQL查询应该返回 200 作为第二高的薪水。如果不存在第二高的薪水，那么查询应返回 null。

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

## 原题

<https://leetcode-cn.com/problems/second-highest-salary>
