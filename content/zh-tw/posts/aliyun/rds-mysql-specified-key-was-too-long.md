---
title: 阿里雲 RDS MySQL 5.7 Specified key was too long; max key length is 767 bytes
date: 2018-06-09T09:10:15+00:00
categories:
  - Programing
tags:
  - MySQL
  - Aliyun
---

最近將數據庫服務遷移到阿里雲的 RDS（MySQL 5.7） 時出現錯誤：

> Specified key was too long; max key length is 767 bytes

只需要修改參數 **innodb_large_prefix** 為 **ON** 即可。
