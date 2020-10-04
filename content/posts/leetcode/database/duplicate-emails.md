---
title: LeetCode 数据库面试题 – 查找重复的电子邮箱
date: 2019-07-06T11:22:37+00:00
categories:
  - Programing
tags:
  - LeetCode
  - MySQL
---

编写一个 SQL 查询，查找 Person 表中所有重复的电子邮箱。

<!--more-->

示例：

| Id | Email   |
| -- | ------- |
| 1  | a@b.com |
| 2  | c@d.com |
| 3  | a@b.com |

根据以上输入，你的查询应返回以下结果：

| Email   |
| ------- |
| a@b.com |

说明：所有电子邮箱都是小写字母。

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

## 原题

来源：力扣（LeetCode）  
链接：<https://leetcode-cn.com/problems/duplicate-emails>
