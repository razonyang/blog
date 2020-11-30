---
title: KDE Plasma 无法启动 TIM
date: 2019-07-21T05:42:12+00:00
categories:
  - Linux
tags:
  - KDE
  - PLASMA
  - TIM
  - Arch Linux
---

在 KDE Plasma 桌面环境无法使用 TIM，提示：

> X Error of failed request: BadWindow (invalid Window parameter)  
> Major opcode of failed request: 20 (X_GetProperty)  
> Resource id in failed request: 0x0  
> Serial number of failed request: 10  
> Current serial number in output stream: 10

<!--more-->

## 解决

需要先安装 `gnome-settings-daemon` 并启动 `/usr/lib/gsd-xsettings`，本文以 Arch Linux 为例。

```shell
# pacman -S gnome-settings-daemon
    
$ /usr/lib/gsd-xsettings &
```

可以将 `/usr/lib/gsd-xsettings` 命令添加到 KDE 设置的自动启动中。

## 相关文章

  * [KDE 环境完全无法使用 wine-tim][1]

 [1]: https://github.com/wszqkzqk/deepin-wine-ubuntu/issues/12
