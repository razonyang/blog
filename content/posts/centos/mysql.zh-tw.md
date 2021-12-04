---
title: CentOS 安裝 MySQL
date: 2019-05-01T03:29:36+00:00
categories:
  - Linux
tags:
  - CentOS
  - MySQL
---

CentOS MySQL 安裝教程。

<!--more-->

## 安裝倉庫

由於 CentOS 默認的數據庫是 MariaDB，我們需要手動下載和安裝 MySQL 的倉庫。

下載地址：<https://dev.mysql.com/downloads/repo/yum/> ，比如：

  * 8.0：<https://repo.mysql.com//mysql80-community-release-el7-1.noarch.rpm>
  * 5.7：<https://repo.mysql.com//mysql57-community-release-el7-11.noarch.rpm>

```shell
$ wget https://repo.mysql.com//mysql57-community-release-el7-11.noarch.rpm
# yum install mysql57-community-release-el7-11.noarch.rpm
```

> 如果需要其他版本的下載鏈接或者鏈接失效，請到官方下載頁面獲取最新的鏈接。

## 安裝

```shell
# yum install mysql-server
```

## 初始化

首先需要啟動服務：

```shell
# systemctl start mysqld
```

查看臨時密碼：

```shell
$ cat /var/log/mysqld.log | grep "temporary password"
2018-12-29T10:20:14.317126Z 1 [Note] A temporary password is generated for root@localhost: wl:>g!cvK3kd
```

初始化：

```shell
# mysql_secure_installation
```

> 初始化會提示輸入 root 密碼，也就是上一步獲得的 `wl:>g!cvK3kd`

## 測試

```shell
$ mysql -u root -p

mysql> select version();
+-----------+
| version() |
+-----------+
| 5.7.24    |
+-----------+
1 row in set (0.00 sec)
```

## 開機啟動

```shell
# systemctl enable mysqld
```
