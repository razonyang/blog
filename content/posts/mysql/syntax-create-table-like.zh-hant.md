---
title: MySQL CREATE TABLE … LIKE
date: 2016-11-12T04:43:32+00:00
categories:
  - Programing
tags:
  - MySQL
---

`CREATE TABLE ... LIKE` 基於另一個表的定義創建一個空表，包括原表的所有列屬性和索引。

<!--more-->

```sql
CREATE TABLE new_tbl LIKE orig_tbl;
```

新創建的空表使用原表相同版本的存儲格式。用戶需要擁有對原表的 `SELECT` 權限。

`LIKE` 只能用於基表，而不能用於視圖。

> 注意  
> 當 `LOCK TABLES` 語句生效時，不能執行 `CREATE TABLE` 或 `CREATE TABLE ... LIKE`。  
> `CREATE TABLE ... LIKE` 和 `CREATE TABLE` 一樣，會進行相同的檢查，不僅僅是複製 `.fim` 文件。  
> 這意味著，如果當前的SQL模式和創建原表時的模式不同時，那麼表的定義可能會被認為是無效的，且語句將會執行失敗。

對於 `CREATE TABLE ... LIKE`，目標表會保存原表已有的列信息，但是不會保存任何數據目錄、索引目錄和外鍵。

如果要複製臨時表 `TEMPORARY`，可以使用 `CREATE TEMPORARY TABLE ... LIKE`。

原文：[CREATE TABLE ... LIKE Syntax][1]

 [1]: https://dev.mysql.com/doc/refman/5.7/en/create-table-like.html
