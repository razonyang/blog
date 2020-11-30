---
title: SDDM 4K 屏幕設置 1920×1080 分辨率
date: 2020-06-10T23:51:10+00:00
categories:
  - Linux
tags:
  - SDDM
  - 4K
---

在 4K 顯示屏下，SDDM 界面顯示得非常小，我們可以通過 `xrandr` 命令解決。

<!--more-->

列出顯示器：

```shell
$ xrandr --listmonitors
Monitors: 2
 0: +*HDMI-0 1920/700x1080/390+0+0  HDMI-0
 1: +eDP-1-1 1920/344x1080/193+1920+0  eDP-1-1
```

其中 `eDP-1-1` 是筆者筆記本的內置顯示器，`DMI-0` 則是的外接顯示器。

接著添加以下命令到 `/usr/share/sddm/scripts/Xsetup` 即可：

```shell
$ vim /usr/share/sddm/scripts/Xsetup
xrandr --output eDP-1-1 --mode 1920x1080
```

  * `output` 為顯示器名稱。
  * `mode` 為分辨率。
