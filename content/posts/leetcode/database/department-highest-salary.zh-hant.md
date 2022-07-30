---
title: LeetCode 數據庫面試題 – 部門工資最高的員工
date: 2020-02-10T02:53:03+00:00
categories:
  - Programing
tags:
  - LeetCode
  - MySQL
---

Employee 表包含所有員工信息，每個員工有其對應的 Id, salary 和 department Id。

編寫一個 SQL 查詢，找出每個部門工資最高的員工。例如，根據上述給定的表格，Max 在 IT 部門有最高工資，Henry 在 Sales 部門有最高工資。

<!--more-->

| Id | Name  | Salary | DepartmentId |
| -- | ----- | ------ | ------------ |
| 1  | Joe   | 70000  | 1            |
| 2  | Henry | 80000  | 2            |
| 3  | Sam   | 60000  | 2            |
| 4  | Max   | 90000  | 1            |

Department 表包含公司所有部門的信息。

| Id | Name  |
| -- | ----- |
| 1  | IT    |
| 2  | Sales |

| Department | Employee | Salary |
| ---------- | -------- | ------ |
| IT         | Max      | 90000  |
| Sales      | Henry    | 80000  |

## 解答

  1. 子查詢獲取每個部門最高的工資。
  2. 再使用 WHERE IN 篩選。

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

> `ORDER BY e.Id` 是無關緊要的，只是結果集順序問題。

## 原題

來源：力扣（LeetCode）  
鏈接：<https://leetcode-cn.com/problems/department-highest-salary>
