---
title: Arch Linux 修改國內源
date: 2019-12-22T05:29:47+00:00
categories:
  - Linux
tags:
  - Arch Linux
---

Arch Linux 的鏡像配置文件在 **/etc/pacman.d/mirrorlist**，裡面一般涵蓋了國內的鏡像源。

```shell
# vim /etc/pacman.d/mirrorlist
```

搜索 China，將其中一個 Server 放在頭部即可。
