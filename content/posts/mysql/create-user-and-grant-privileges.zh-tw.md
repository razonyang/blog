---
title: MySQL 創建用戶並授權
date: 2020-01-09T11:00:12+00:00
categories:
  - Programing
tags:
  - MySQL
---

MySQL 創建用戶並授權教程。

<!--more-->

## 創建用戶

```sql
CREATE USER 'user'@'host' IDENTIFIED BY 'password'
```

比如創建一個密碼為 `foobar` 的本地用戶 `razon`：

```sql
CREATE USER 'razon'@'localhost' IDENTIFIED BY 'foobar'
```

## 授權

```sql
GRANT privileges ON database.table TO 'user'@'host'
```

  * `database.table` 指定數據庫表，`database.*` 指整個數據庫
  * `privileges` 根據 `database.table` 的不同有不一樣的選項，詳情請戳 [MySQL Privileges][1]

一般的，我們為每個數據庫新增一個管理帳號，比如將數據庫 `foobar` 的所有權限授予 `razon`：

```sql
GRANT ALL ON foobar.* TO 'razon'@'localhost'
```

 [1]: https://dev.mysql.com/doc/refman/5.7/en/grant.html#grant-global-privileges
