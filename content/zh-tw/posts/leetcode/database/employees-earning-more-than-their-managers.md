---
title: LeetCode 數據庫面試題 – 超過經理收入的員工
date: 2018-12-06T11:27:34+00:00
categories:
  - Programing
tags:
  - LeetCode
  - MySQL
---

Employee 表包含所有員工，他們的經理也屬於員工。每個員工都有一個 Id，此外還有一列對應員工的經理的 Id。

<!--more-->

| Id | Name  | Salary | ManagerId |
| -- | ----- | ------ | --------- |
| 1  | Joe   | 70000  | 3         |
| 2  | Henry | 80000  | 4         |
| 3  | Sam   | 60000  | NULL      |
| 4  | Max   | 90000  | NULL      |

給定 Employee 表，編寫一個 SQL 查詢，該查詢可以獲取收入超過他們經理的員工的姓名。在上面的表格中，Joe 是唯一一個收入超過他的經理的員工。

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

## 原題

來源：力扣（LeetCode）  
鏈接：<https://leetcode-cn.com/problems/employees-earning-more-than-their-managers>
