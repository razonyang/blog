---
title: Arch Linux 安裝 MariaDB
date: 2019-12-21T14:36:11+00:00
categories:
  - Linux
tags:
  - Arch Linux
  - MariaDB
---

Arch Linux 安裝 MariaDB。

<!--more-->

```shell
# pacman -S mariadb
# mariadb-install-db --user=mysql --basedir=/usr --datadir=/var/lib/mysql
# systemctl start mysqld
# mysql_secure_installation
# systemctl enable mysqld
```
