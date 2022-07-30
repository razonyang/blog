---
title: LeetCode 數據庫面試題 – 從不訂購的客戶
date: 2018-08-26T11:53:10+00:00
categories:
  - Programing
tags:
  - LeetCode
  - MySQL
---

某網站包含兩個表，Customers 表和 Orders 表。編寫一個 SQL 查詢，找出所有從不訂購任何東西的客戶。

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

例如給定上述表格，你的查詢應返回：

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

## 原題

來源：力扣（LeetCode）  
鏈接：<https://leetcode-cn.com/problems/customers-who-never-order>
