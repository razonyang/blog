---
title: Linux 利用 ss 查看進程監聽的端口
date: 2020-03-11T01:35:09+00:00
categories:
  - Linux
tags:
  - ss
---

Linux 利用 ss 查看進程監聽的端口。

<!--more-->

```shell
$ sudo  ss -tulpn | grep 8080
tcp    LISTEN    0    4096    127.0.0.1:8080    0.0.0.0:*    users:(("main",pid=2405713,fd=11)) 
```

其中 `pid` 是進程 ID。
