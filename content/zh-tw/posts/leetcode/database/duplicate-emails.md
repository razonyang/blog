---
title: LeetCode 數據庫面試題 – 查找重複的電子郵箱
date: 2019-07-06T11:22:37+00:00
categories:
  - Programing
tags:
  - LeetCode
  - MySQL
---

編寫一個 SQL 查詢，查找 Person 表中所有重複的電子郵箱。

<!--more-->

示例：

| Id | Email   |
| -- | ------- |
| 1  | a@b.com |
| 2  | c@d.com |
| 3  | a@b.com |

根據以上輸入，你的查詢應返回以下結果：

| Email   |
| ------- |
| a@b.com |

說明：所有電子郵箱都是小寫字母。

## 答案

```sql
SELECT 
    Email
FROM (
    SELECT 
        Email, count(*) as amount
    FROM Person
    GROUP BY Email
) t
WHERE amount > 1
```

## 原題

來源：力扣（LeetCode）  
鏈接：<https://leetcode-cn.com/problems/duplicate-emails>
