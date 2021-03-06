---
title: LeetCode 数据库面试题 – 第N高的薪水
date: 2020-02-22T03:04:07+00:00
categories:
  - Programing
tags:
  - LeetCode
  - MySQL
---

编写一个 SQL 查询，获取 Employee 表中第 n 高的薪水（Salary）。

<!--more-->

| Id | Salary |
| -- | ------ |
| 1  | 100    |
| 2  | 200    |
| 3  | 300    |

例如上述 Employee 表，n = 2 时，应返回第二高的薪水 200。如果不存在第 n 高的薪水，那么查询应返回 null。

| getNthHighestSalary(2) |
| ---------------------- |
| 200                    |

## 解答

```sql
CREATE FUNCTION getNthHighestSalary(N INT) RETURNS INT
BEGIN
    # offset 和 N 相差 1
    DECLARE i INT;
    SET i = N-1;
    RETURN (
      SELECT (
          SELECT
            DISTINCT Salary
          FROM
            Employee
          ORDER BY Salary DESC
          LIMIT 1 OFFSET i
      )
  );
END
```

## 原题

来源：力扣（LeetCode）  
链接：<https://leetcode-cn.com/problems/nth-highest-salary>
