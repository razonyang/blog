---
title: LeetCode 数据库面试题 – 超过5名学生的课
date: 2019-03-08T13:13:24+00:00
categories:
  - Programing
tags:
  - LeetCode
  - MySQL
---

有一个courses 表 ，有: student (学生) 和 class (课程)。

请列出所有超过或等于5名学生的课。

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

应该输出:

| class |
| ----- |
| Math  |

Note:  
学生在每个课中不应被重复计算。

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

## 原题

来源：力扣（LeetCode）  
链接：<https://leetcode-cn.com/problems/classes-more-than-5-students>
