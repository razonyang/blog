---
title: LeetCode 数据库面试题 – 分数排名(Rank Scores)
date: 2020-02-06T14:10:21+00:00
categories:
  - Programing
tags:
  - LeetCode
  - MySQL
---

编写一个 SQL 查询来实现分数排名。如果两个分数相同，则两个分数排名（Rank）相同。请注意，平分后的下一个名次应该是下一个连续的整数值。换句话说，名次之间不应该有“间隔”。

<!--more-->

| Id | Score |
|:--|:--|
| 1  | 3.50  |
| 2  | 3.65  |
| 3  | 4.00  |
| 4  | 3.85  |
| 5  | 4.00  |
| 6  | 3.65  |

例如，根据上述给定的 Scores 表，你的查询应该返回（按分数从高到低排列）：

| Score | Rank |
|---|---|
| 4.00  | 1    |
| 4.00  | 1    |
| 3.85  | 2    |
| 3.65  | 3    |
| 3.65  | 3    |
| 3.50  | 4    |

## 分析

据题意，我们可以按 score 降序处理，然后进行以下判断即可：

  * 分数相同，排名不变
  * 分数不同，排名 +1

## 解答

这里引入两个变量 `@score`, `@rank` 用来分别存储上一条记录的 score 和 rank，以便进行分数判断和排名计算。

```sql
SELECT
    Score,
    CAST(Rank AS SIGNED) as Rank
FROM (
    SELECT
        Score,
        @rank := IF(@score=Score, @rank, @rank + 1) as Rank,
        @score := Score
    FROM
        Scores s,
        (SELECT @score := null, @rank := 0) t
    ORDER BY
        Score DESC
) t
```

## 原题

来源：力扣（LeetCode）  
链接：<https://leetcode-cn.com/problems/rank-scores>
