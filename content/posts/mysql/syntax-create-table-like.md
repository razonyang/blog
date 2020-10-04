---
title: MySQL CREATE TABLE … LIKE
date: 2016-11-12T04:43:32+00:00
categories:
  - Programing
tags:
  - MySQL
---

`CREATE TABLE ... LIKE` 基于另一个表的定义创建一个空表，包括原表的所有列属性和索引。

<!--more-->

```sql
CREATE TABLE new_tbl LIKE orig_tbl;
```

新创建的空表使用原表相同版本的存储格式。用户需要拥有对原表的 `SELECT` 权限。

`LIKE` 只能用于基表，而不能用于视图。

> 注意  
> 当 `LOCK TABLES` 语句生效时，不能执行 `CREATE TABLE` 或 `CREATE TABLE ... LIKE`。  
> `CREATE TABLE ... LIKE` 和 `CREATE TABLE` 一样，会进行相同的检查，不仅仅是复制 `.fim` 文件。  
> 这意味着，如果当前的SQL模式和创建原表时的模式不同时，那么表的定义可能会被认为是无效的，且语句将会执行失败。

对于 `CREATE TABLE ... LIKE`，目标表会保存原表已有的列信息，但是不会保存任何数据目录、索引目录和外键。

如果要复制临时表 `TEMPORARY`，可以使用 `CREATE TEMPORARY TABLE ... LIKE`。

原文：[CREATE TABLE ... LIKE Syntax][1]

 [1]: https://dev.mysql.com/doc/refman/5.7/en/create-table-like.html
