---
title: CentOS Repository epel is listed more than once in the configuration
date: 2020-01-08T17:00:56+00:00
categories:
  - Linux
tags:
  - CentOS
  - EPEL
---

在使用 `yum` 如果出现以下提示，一般是设置了多个 epel 仓库：

> Repository epel is listed more than once in the configuration

<!--more-->

仓库列表位于 `/etc/yum.repos.d/`：

```shell
$ ls -l /etc/yum.repos.d/ | grep pel
-rw-r--r-- 1 root root  230 Jan  8 11:29 CentOS-Epel.repo
-rw-r--r-- 1 root root 1050 Sep 18 07:25 epel.repo
-rw-r--r-- 1 root root 1149 Sep 18 07:25 epel-testing.repo
```

可以看到系统有多个 epel 的仓库，我们逐一检查：

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

然后把多余的 [epel] 注释或者删除即可。
