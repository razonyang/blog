---
title: 阿里云 RDS MySQL 5.7 Specified key was too long; max key length is 767 bytes
date: 2018-06-09T09:10:15+00:00
categories:
  - Programing
tags:
  - MySQL
  - Aliyun
---

最近将数据库服务迁移到阿里云的 RDS（MySQL 5.7） 时出现错误：

> Specified key was too long; max key length is 767 bytes

只需要修改参数 **innodb_large_prefix** 为 **ON** 即可。
