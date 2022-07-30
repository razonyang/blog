---
title: Arch Linux SDDM 黑屏的解決方法
date: 2019-12-21T11:07:34+00:00
categories:
  - Linux
tags:
  - Arch Linux
  - SDDM
---

Arch Linux SDDM 黑屏的解決方法。

<!--more-->

安裝 **xrandr**：

```shell
$ sudo pacman -S xrandr
```

編輯 **/usr/share/sddm/scripts/Xsetup** 並添加以下命令即可：

```shell
xrandr --auto
```

> 如果設置了 sddm 開機自啟，你可能需要 chroot 到原系統進行修改。
