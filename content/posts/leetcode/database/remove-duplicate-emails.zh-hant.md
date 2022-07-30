---
title: LeetCode 數據庫面試題 – 刪除重複的電子郵箱（Remove Duplicate Emails）
date: 2018-06-05T08:17:55+00:00
categories:
  - Programing
tags:
  - LeetCode
  - MySQL
---

編寫一個 SQL 查詢，來刪除 Person 表中所有重複的電子郵箱，重複的郵箱裡只保留 Id 最小 的那個。

<!--more-->

| Id | Email            |
| -- | ---------------- |
| 2  | bob@example.com  |
| 3  | john@example.com |

Id 是這個表的主鍵。  
例如，在運行你的查詢語句之後，上面的 Person 表應返回以下幾行:

| Id | Email            |
| -- | ---------------- |
| 1  | john@example.com |
| 2  | bob@example.com  |

   
提示：

  * 執行 SQL 之後，輸出是整個 Person 表。
  * 使用 `delete` 語句。

## 解答

### 自連接

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

WHERE NOT IN 要用臨時表，MySQL 不允許直接在原表子查詢，否則會出現錯誤：

> You can't specify target table 'Person' for update in FROM clause

## 原題

<https://leetcode-cn.com/problems/delete-duplicate-emails>
