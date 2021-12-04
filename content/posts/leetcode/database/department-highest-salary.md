---
title: LeetCode 数据库面试题 – 部门工资最高的员工
date: 2020-02-10T02:53:03+00:00
categories:
  - Programing
tags:
  - LeetCode
  - MySQL
---

Employee 表包含所有员工信息，每个员工有其对应的 Id, salary 和 department Id。

编写一个 SQL 查询，找出每个部门工资最高的员工。例如，根据上述给定的表格，Max 在 IT 部门有最高工资，Henry 在 Sales 部门有最高工资。

<!--more-->

| Id | Name  | Salary | DepartmentId |
| -- | ----- | ------ | ------------ |
| 1  | Joe   | 70000  | 1            |
| 2  | Henry | 80000  | 2            |
| 3  | Sam   | 60000  | 2            |
| 4  | Max   | 90000  | 1            |

Department 表包含公司所有部门的信息。

| Id | Name  |
| -- | ----- |
| 1  | IT    |
| 2  | Sales |

| Department | Employee | Salary |
| ---------- | -------- | ------ |
| IT         | Max      | 90000  |
| Sales      | Henry    | 80000  |

## 解答

  1. 子查询获取每个部门最高的工资。
  2. 再使用 WHERE IN 筛选。

```sql
SELECT
    d.Name as Department,
    e.Name as Employee,
    e.Salary as Salary
FROM
    Employee e
LEFT JOIN
    Department d
        ON e.DepartmentId = d.Id
WHERE (e.DepartmentId, e.Salary) IN (
    SELECT
        DepartmentId,
        MAX(Salary)
    FROM
        Employee
    GROUP BY
        DepartmentId
) AND d.Id IS NOT NULL
ORDER BY e.Id
```

> `ORDER BY e.Id` 是无关紧要的，只是结果集顺序问题。

## 原题

来源：力扣（LeetCode）  
链接：<https://leetcode-cn.com/problems/department-highest-salary>
