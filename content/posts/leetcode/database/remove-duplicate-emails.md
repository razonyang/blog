---
title: LeetCode 数据库面试题 – 删除重复的电子邮箱（Remove Duplicate Emails）
date: 2018-06-05T08:17:55+00:00
categories:
  - Programing
tags:
  - LeetCode
  - MySQL
---

编写一个 SQL 查询，来删除 Person 表中所有重复的电子邮箱，重复的邮箱里只保留 Id 最小 的那个。

<!--more-->

| Id | Email            |
| -- | ---------------- |
| 2  | bob@example.com  |
| 3  | john@example.com |

Id 是这个表的主键。  
例如，在运行你的查询语句之后，上面的 Person 表应返回以下几行:

| Id | Email            |
| -- | ---------------- |
| 1  | john@example.com |
| 2  | bob@example.com  |

   
提示：

  * 执行 SQL 之后，输出是整个 Person 表。
  * 使用 `delete` 语句。

## 解答

### 自连接

```sql
DELETE p1
FROM Person p1, Person p2
WHERE p1.Email = p2.Email AND p1.Id > p2.Id
```

### WHERE NOT IN

```sql
DELETE FROM Person
WHERE Id NOT IN (
    SELECT * FROM (
        SELECT min(Id) as Id
        FROM Person
        GROUP BY Email
    ) temp
)
```

WHERE NOT IN 要用临时表，MySQL 不允许直接在原表子查询，否则会出现错误：

> You can't specify target table 'Person' for update in FROM clause

## 原题

<https://leetcode-cn.com/problems/delete-duplicate-emails>
