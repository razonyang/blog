---
title: A stop job is running for MariaDB database service(Waiting for page_cleaner)
date: 2020-02-25T07:06:25+00:00
categories:
  - Linux
tags:
  - Arch Linux
  - MariaDB
---

A stop job is running for MariaDB database service(Waiting for page_cleaner)  原因及解決方法。

<!--more-->

在關機或重啟的時候發現：

> A stop job is running for MariaDB database service.

居然需要耗時幾十分鐘，強制關機重啟後，利用以下命令檢查日誌：

```shell
$ journalctl -u mariadb.service
Feb 25 14:37:57 archlinux mysqld[580]: 2020-02-25 14:37:57 0 [Note] InnoDB: Waiting for page_cleaner to finish flushing of buffer pool
Feb 25 14:38:57 archlinux mysqld[580]: 2020-02-25 14:38:57 0 [Note] InnoDB: Waiting for page_cleaner to finish flushing of buffer pool
Feb 25 14:39:57 archlinux mysqld[580]: 2020-02-25 14:39:57 0 [Note] InnoDB: Waiting for page_cleaner to finish flushing of buffer pool
Feb 25 14:40:58 archlinux mysqld[580]: 2020-02-25 14:40:58 0 [Note] InnoDB: Waiting for page_cleaner to finish flushing of buffer pool
...
```

## 解決

經過一番搜索，可以通過以下命令解決：

```shell
$ timedatectl set-local-rtc 0
```

## 相關鏈接：

[How to fix MariaDB when it gets stuck during shutdown (Waiting for page_cleaner)?][1]

 [1]: https://superuser.com/questions/1420699/how-to-fix-mariadb-when-it-gets-stuck-during-shutdown-waiting-for-page-cleaner
