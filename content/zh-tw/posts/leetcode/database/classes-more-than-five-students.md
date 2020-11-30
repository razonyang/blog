---
title: LeetCode 數據庫面試題 – 超過5名學生的課
date: 2019-03-08T13:13:24+00:00
categories:
  - Programing
tags:
  - LeetCode
  - MySQL
---

有一個courses 表 ，有: student (學生) 和 class (課程)。

請列出所有超過或等於5名學生的課。

<!--more-->

例如,表:

| student | class    |
| ------- | -------- |
| A       | Math     |
| B       | English  |
| C       | Math     |
| D       | Biology  |
| E       | Math     |
| F       | Computer |
| G       | Math     |
| H       | Math     |
| I       | Math     |

應該輸出:

| class |
| ----- |
| Math  |

Note:  
學生在每個課中不應被重複計算。

## 解答

```sql
SELECT
    class
FROM (
    SELECT
        class,
        count(DISTINCT student) as amount
    FROM courses
    GROUP BY class
) t
WHERE amount >= 5
```

## 原題

來源：力扣（LeetCode）  
鏈接：<https://leetcode-cn.com/problems/classes-more-than-5-students>
