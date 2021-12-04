---
title: CentOS Repository epel is listed more than once in the configuration
date: 2020-01-08T17:00:56+00:00
categories:
  - Linux
tags:
  - CentOS
  - EPEL
---

在使用 `yum` 如果出現以下提示，一般是設置了多個 epel 倉庫：

> Repository epel is listed more than once in the configuration

<!--more-->

倉庫列表位於 `/etc/yum.repos.d/`：

```shell
$ ls -l /etc/yum.repos.d/ | grep pel
-rw-r--r-- 1 root root  230 Jan  8 11:29 CentOS-Epel.repo
-rw-r--r-- 1 root root 1050 Sep 18 07:25 epel.repo
-rw-r--r-- 1 root root 1149 Sep 18 07:25 epel-testing.repo
```

可以看到系統有多個 epel 的倉庫，我們逐一檢查：

```shell
$ cat /etc/yum.repos.d/CentOS-Epel.repo
[epel]
...
```

```shell 
$ cat /etc/yum.repos.d/epel.repo
[epel]
...
```

然後把多餘的 [epel] 註釋或者刪除即可。
