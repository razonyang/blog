---
title: LeetCode 数据库面试题 – 超过经理收入的员工
date: 2018-12-06T11:27:34+00:00
categories:
  - Programing
tags:
  - LeetCode
  - MySQL
---

Employee 表包含所有员工，他们的经理也属于员工。每个员工都有一个 Id，此外还有一列对应员工的经理的 Id。

<!--more-->

| Id | Name  | Salary | ManagerId |
| -- | ----- | ------ | --------- |
| 1  | Joe   | 70000  | 3         |
| 2  | Henry | 80000  | 4         |
| 3  | Sam   | 60000  | NULL      |
| 4  | Max   | 90000  | NULL      |

给定 Employee 表，编写一个 SQL 查询，该查询可以获取收入超过他们经理的员工的姓名。在上面的表格中，Joe 是唯一一个收入超过他的经理的员工。

| Employee |
| -------- |
| Joe      |

## 解答

```sql
SELECT
    e.Name as Employee
FROM Employee e
LEFT JOIN Employee m
    ON m.Id = e.ManagerId
WHERE e.Salary > m.Salary
```

## 原题

来源：力扣（LeetCode）  
链接：<https://leetcode-cn.com/problems/employees-earning-more-than-their-managers>
