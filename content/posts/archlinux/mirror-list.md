---
title: Arch Linux 修改国内源
date: 2019-12-22T05:29:47+00:00
categories:
  - Linux
tags:
  - Arch Linux
---

Arch Linux 的镜像配置文件在 **/etc/pacman.d/mirrorlist**，里面一般涵盖了国内的镜像源。

```shell
# vim /etc/pacman.d/mirrorlist
```

搜索 China，将其中一个 Server 放在头部即可。
