---
title: SQLite IF 的等效方法
date: 2019-04-29T03:15:33+00:00
categories:
  - Programing
tags:
  - SQLite
  - if
---

SQLite 並沒有 IF 方法，不過我們可以使用 CASE WHEN 代替。

<!--more-->

```sql
SELECT
    CASE WHEN col = 1
    THEN 'foo'
    ELSE 'bar'
    END
FROM t1
```

也可以用於排序：

```sql
SELECT * FROM t1
ORDER BY CASE WHEN col=1 THEN 0 ELSE 1 END ASC
```
