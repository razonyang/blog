---
title: SELinux is preventing httpd from name_bind access on the tcp_socket port
date: 2020-07-06T07:06:10+00:00
categories:
  - Linux
tags:
  - Apache
  - httpd
  - SELinux
---

SELinux is preventing httpd from name_bind access on the tcp_socket port 的解决方法。

<!--more-->

Apache 遇到以下类似错误时：

> SELinux is preventing /usr/sbin/httpd from name_bind access on the tcp_socket port 4040

可以通过以下命令解决：

```shell
# semanage port -a -t httpd_port_t -p tcp [port]
```

- `[port]` 改为对应的端口即可，如 `4040`。
