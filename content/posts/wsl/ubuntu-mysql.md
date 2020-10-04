---
title: WSL(Ubuntu) 安装 MySQL(MariaDB)
date: 2019-12-12T23:31:11+00:00
categories:
  - Programing
tags:
  - MariaDB
  - MySQL
  - Ubuntu
  - WSL
---

WSL(Ubuntu) 安装 MySQL(MariaDB) 教程。

<!--more-->

## 安装

```shell
$ sudo apt install mariadb-server
```

## 启动服务

```shell
$ sudo service mysql start
```

## 配置

```shell
$ sudo mysql_secure_installation
```

## 用户

此步骤是可选的，不过建议新增一个用户，CLI 客户端用 root 用户连接时需要系统管理指令 sudo，否则会得到以下错误：

> ERROR 1698 (28000): Access denied for user 'root'@'localhost'

```sql
/* 创建密码为 password 的用户 user */
CREATE USER 'user'@'localhost' IDENTIFIED BY 'password';
/* 分配数据库 dbname 的权限给 user */
GRANT ALL PRIVILEGES ON dbname.* TO 'user'@'localhost';
```
