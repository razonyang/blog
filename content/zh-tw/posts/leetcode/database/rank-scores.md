---
title: LeetCode 數據庫面試題 – 分數排名(Rank Scores)
date: 2020-02-06T14:10:21+00:00
categories:
  - Programing
tags:
  - LeetCode
  - MySQL
---

編寫一個 SQL 查詢來實現分數排名。如果兩個分數相同，則兩個分數排名（Rank）相同。請注意，平分後的下一個名次應該是下一個連續的整數值。換句話說，名次之間不應該有“間隔”。

<!--more-->

| Id | Score |
|:--|:--|
| 1  | 3.50  |
| 2  | 3.65  |
| 3  | 4.00  |
| 4  | 3.85  |
| 5  | 4.00  |
| 6  | 3.65  |

例如，根據上述給定的 Scores 表，你的查詢應該返回（按分數從高到低排列）：

| Score | Rank |
|---|---|
| 4.00  | 1    |
| 4.00  | 1    |
| 3.85  | 2    |
| 3.65  | 3    |
| 3.65  | 3    |
| 3.50  | 4    |

## 分析

據題意，我們可以按 score 降序處理，然後進行以下判斷即可：

  * 分數相同，排名不變
  * 分數不同，排名 +1

## 解答

這裡引入兩個變量 `@score`, `@rank` 用來分別存儲上一條記錄的 score 和 rank，以便進行分數判斷和排名計算。

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

## 原題

來源：力扣（LeetCode）  
鏈接：<https://leetcode-cn.com/problems/rank-scores>
