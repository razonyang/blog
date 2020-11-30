---
title: Linux 清理 DNS 緩存
date: 2020-03-10T11:28:40+00:00
categories:
  - Linux
tags:
  - DNS
  - nscd
---

Linux 清理 DNS 緩存方法。

<!--more-->

```shell
$ sudo systemctl restart nscd
```

> **nscd**: name service cache daemon.
