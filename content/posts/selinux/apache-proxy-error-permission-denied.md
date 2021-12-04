---
title: SELinux Apache proxy error permission denied
date: 2020-07-06T07:21:24+00:00
categories:
  - Linux
tags:
  - SELinux
  - Apache
  - httpd
---

SELinux Apache proxy error permission denied 的解决方法。

<!--more-->

在启动 Apache 的时候出现以下类似错误时：

> \[proxy:error] [pid 28961:tid 139839546509056\] (13)Permission denied: AH00957: HTTP: attempt to connect to 198.143.164.251:80 (*) failed.

执行以下命令，并重启即可：

```shell
# /usr/sbin/setsebool -P httpd_can_network_connect 1
```
