---
title: MySQL 复制数据库
date: 2017-07-01T04:42:23+00:00
categories:
  - Programing
tags:
  - MySQL
---

MySQL拷贝一个数据库，只需要简单的几个命令。

<!--more-->

**导出数据库**

```shell
$ mysqldump db1 > dump.sql
```

**创建数据库**

```shell
$ mysqladmin create db2
```

**导入数据**

```shell
$ mysql db2 < dump.sql
```

> `mysqldump`不能使用`--databases`参数，因为这会使得导出的SQL会包含`USE db1`命令。

原文：[Making a Copy of a Database][1]

 [1]: https://dev.mysql.com/doc/refman/5.7/en/mysqldump-copying-database.html
