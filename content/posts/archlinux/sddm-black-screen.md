---
title: Arch Linux SDDM 黑屏的解决方法
date: 2019-12-21T11:07:34+00:00
categories:
  - Linux
tags:
  - Arch Linux
  - SDDM
---

Arch Linux SDDM 黑屏的解决方法。

<!--more-->

安装 **xrandr**：

```shell
$ sudo pacman -S xrandr
```

编辑 **/usr/share/sddm/scripts/Xsetup** 并添加以下命令即可：

```shell
xrandr --auto
```

> 如果设置了 sddm 开机自启，你可能需要 chroot 到原系统进行修改。
