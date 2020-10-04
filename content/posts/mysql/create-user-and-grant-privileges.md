---
title: MySQL 创建用户并授权
date: 2020-01-09T11:00:12+00:00
categories:
  - Programing
tags:
  - MySQL
---

MySQL 创建用户并授权教程。

<!--more-->

## 创建用户

```sql
CREATE USER 'user'@'host' IDENTIFIED BY 'password'
```

比如创建一个密码为 `foobar` 的本地用户 `razon`：

```sql
CREATE USER 'razon'@'localhost' IDENTIFIED BY 'foobar'
```

## 授权

```sql
GRANT privileges ON database.table TO 'user'@'host'
```

  * `database.table` 指定数据库表，`database.*` 指整个数据库
  * `privileges` 根据 `database.table` 的不同有不一样的选项，详情请戳 [MySQL Privileges][1]

一般的，我们为每个数据库新增一个管理帐号，比如将数据库 `foobar` 的所有权限授予 `razon`：

```sql
GRANT ALL ON foobar.* TO 'razon'@'localhost'
```

 [1]: https://dev.mysql.com/doc/refman/5.7/en/grant.html#grant-global-privileges
