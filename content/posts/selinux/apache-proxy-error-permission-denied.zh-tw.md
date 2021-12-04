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

SELinux Apache proxy error permission denied 的解決方法。

<!--more-->

在啟動 Apache 的時候出現以下類似錯誤時：

> \[proxy:error] [pid 28961:tid 139839546509056\] (13)Permission denied: AH00957: HTTP: attempt to connect to 198.143.164.251:80 (*) failed.

執行以下命令，並重啟即可：

```shell
# /usr/sbin/setsebool -P httpd_can_network_connect 1
```
