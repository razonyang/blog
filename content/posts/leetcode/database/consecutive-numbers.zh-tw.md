---
title: LeetCode 數據庫面試題 – 連續出現的數字
date: 2020-02-07T02:35:56+00:00
categories:
  - Programing
tags:
  - LeetCode
  - MySQL
---

編寫一個 SQL 查詢，查找所有至少連續出現三次的數字。

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

例如，給定上面的 Logs 表， 1 是唯一連續出現至少三次的數字。

> 假設 Id 是連續的。

| ConsecutiveNums |
| --------------- |
| 1               |

## 解答

左連接自身獲得前兩條記錄，判斷 Num 是否一樣，最後 **DISTINCT** 去掉重複的 Num 即可。

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

## 原題

來源：力扣（LeetCode）  
鏈接：<https://leetcode-cn.com/problems/consecutive-numbers>
