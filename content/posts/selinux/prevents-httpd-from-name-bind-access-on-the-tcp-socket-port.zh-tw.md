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

SELinux is preventing httpd from name_bind access on the tcp_socket port 的解決方法。

<!--more-->

Apache 遇到以下類似錯誤時：

> SELinux is preventing /usr/sbin/httpd from name_bind access on the tcp_socket port 4040

可以通過以下命令解決：

```shell
# semanage port -a -t httpd_port_t -p tcp [port]
```

- `[port]` 改為對應的端口即可，如 `4040`。
