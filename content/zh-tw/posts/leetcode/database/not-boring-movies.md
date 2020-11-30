---
title: LeetCode 數據庫面試題 – 有趣的電影（Not Boring Movies）
date: 2018-02-02T03:26:53+00:00
categories:
  - Programing
tags:
  - LeetCode
  - MySQL
---

某城市新開了一家影院，不少人很喜歡去這家影院。該影院也張貼了關於的電影的評級和描述的海報。

請寫出一條 SQL，返回 id 為奇數，且 description 不是 "boring" 的電影，並按 rating 降序。

<!--more-->

## 原題

X city opened a new cinema, many people would like to go to this cinema. The cinema also gives out a poster indicating the movies’ ratings and descriptions.

Please write a SQL query to output movies with an odd numbered ID and a description that is not 'boring'. Order the result by rating.

For example, table cinema:

|   id    | movie     |  description |  rating   |
|:-------:|:---------:|:------------:|:---------:|
|   1     | War       |   great 3D   |   8.9     |
|   2     | Science   |   fiction    |   8.5     |
|   3     | irish     |   boring     |   6.2     |
|   4     | Ice song  |   Fantacy    |   8.6     |
|   5     | House card|   Interesting|   9.1     |

For the example above, the output should be:

|   id    | movie     |  description |  rating   |
|:-------:|:---------:|:------------:|:---------:|
|   5     | House card|   Interesting|   9.1     |
|   1     | War       |   great 3D   |   8.9     |

## SQL

```sql
SELECT * 
FROM cinema
WHERE description != 'boring' AND id % 2 = 1
ORDER BY rating DESC
```
