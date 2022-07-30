---
title: WSL(Ubuntu) 安裝 MySQL(MariaDB)
date: 2019-12-12T23:31:11+00:00
categories:
  - Programing
tags:
  - MariaDB
  - MySQL
  - Ubuntu
  - WSL
---

WSL(Ubuntu) 安裝 MySQL(MariaDB) 教程。

<!--more-->

## 安裝

```shell
$ sudo apt install mariadb-server
```

## 啟動服務

```shell
$ sudo service mysql start
```

## 配置

```shell
$ sudo mysql_secure_installation
```

## 用戶

此步驟是可選的，不過建議新增一個用戶，CLI 客戶端用 root 用戶連接時需要系統管理指令 sudo，否則會得到以下錯誤：

> ERROR 1698 (28000): Access denied for user 'root'@'localhost'

```sql
/* 創建密碼為 password 的用戶 user */
CREATE USER 'user'@'localhost' IDENTIFIED BY 'password';
/* 分配數據庫 dbname 的權限給 user */
GRANT ALL PRIVILEGES ON dbname.* TO 'user'@'localhost';
```
