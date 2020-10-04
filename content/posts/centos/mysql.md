---
title: CentOS 安装 MySQL
date: 2019-05-01T03:29:36+00:00
categories:
  - Linux
tags:
  - CentOS
  - MySQL
---

CentOS MySQL 安装教程。

<!--more-->

## 安装仓库

由于 CentOS 默认的数据库是 MariaDB，我们需要手动下载和安装 MySQL 的仓库。

下载地址：<https://dev.mysql.com/downloads/repo/yum/> ，比如：

  * 8.0：<https://repo.mysql.com//mysql80-community-release-el7-1.noarch.rpm>
  * 5.7：<https://repo.mysql.com//mysql57-community-release-el7-11.noarch.rpm>

```shell
$ wget https://repo.mysql.com//mysql57-community-release-el7-11.noarch.rpm
# yum install mysql57-community-release-el7-11.noarch.rpm
```

> 如果需要其他版本的下载链接或者链接失效，请到官方下载页面获取最新的链接。

## 安装

```shell
# yum install mysql-server
```

## 初始化

首先需要启动服务：

```shell
# systemctl start mysqld
```

查看临时密码：

```shell
$ cat /var/log/mysqld.log | grep "temporary password"
2018-12-29T10:20:14.317126Z 1 [Note] A temporary password is generated for root@localhost: wl:>g!cvK3kd
```

初始化：

```shell
# mysql_secure_installation
```

> 初始化会提示输入 root 密码，也就是上一步获得的 `wl:>g!cvK3kd`

## 测试

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

## 开机启动

```shell
# systemctl enable mysqld
```
