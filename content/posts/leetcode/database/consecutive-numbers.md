---
title: LeetCode 数据库面试题 – 连续出现的数字
date: 2020-02-07T02:35:56+00:00
categories:
  - Programing
tags:
  - LeetCode
  - MySQL
---

编写一个 SQL 查询，查找所有至少连续出现三次的数字。

<!--more-->

| Id | Num |
| -- | --- |
| 1  | 1   |
| 2  | 1   |
| 3  | 1   |
| 4  | 2   |
| 5  | 1   |
| 6  | 2   |
| 7  | 2   |

例如，给定上面的 Logs 表， 1 是唯一连续出现至少三次的数字。

> 假设 Id 是连续的。

| ConsecutiveNums |
| --------------- |
| 1               |

## 解答

左连接自身获得前两条记录，判断 Num 是否一样，最后 **DISTINCT** 去掉重复的 Num 即可。

```sql
SELECT
    DISTINCT l1.Num AS ConsecutiveNums
FROM
    Logs l1,
    Logs l2,
    Logs l3
WHERE
    l1.Id = l2.Id - 1
    AND l2.Id = l3.Id - 1
    AND l1.Num = l2.Num
    AND l2.Num = l3.Num
;
```

## 原题

来源：力扣（LeetCode）  
链接：<https://leetcode-cn.com/problems/consecutive-numbers>
