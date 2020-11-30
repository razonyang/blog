---
title: LeetCode 数据库面试题 – 从不订购的客户
date: 2018-08-26T11:53:10+00:00
categories:
  - Programing
tags:
  - LeetCode
  - MySQL
---

某网站包含两个表，Customers 表和 Orders 表。编写一个 SQL 查询，找出所有从不订购任何东西的客户。

<!--more-->

Customers 表：

| 1 | Joe   |
| - | ----- |
| 2 | Henry |
| 3 | Sam   |
| 4 | Max   |

Orders 表：

| Id | CustomerId |
| -- | ---------- |
| 1  | 3          |
| 2  | 1          |

例如给定上述表格，你的查询应返回：

| Customers |
| --------- |
| Henry     |
| Max       |

## 解答

```sql
SELECT
    Name as Customers
FROM Customers
WHERE Id NOT IN (
    SELECT
        DISTINCT CustomerId
    FROM Orders
)
```

## 原题

来源：力扣（LeetCode）  
链接：<https://leetcode-cn.com/problems/customers-who-never-order>
