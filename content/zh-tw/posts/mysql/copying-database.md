---
title: MySQL 複製數據庫
date: 2017-07-01T04:42:23+00:00
categories:
  - Programing
tags:
  - MySQL
---

MySQL拷貝一個數據庫，只需要簡單的幾個命令。

<!--more-->

**導出數據庫**

```shell
$ mysqldump db1 > dump.sql
```

**創建數據庫**

```shell
$ mysqladmin create db2
```

**導入數據**

```shell
$ mysql db2 < dump.sql
```

> `mysqldump`不能使用`--databases`參數，因為這會使得導出的SQL會包含`USE db1`命令。

原文：[Making a Copy of a Database][1]

 [1]: https://dev.mysql.com/doc/refman/5.7/en/mysqldump-copying-database.html
