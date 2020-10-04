---
title: SDDM 4K 屏幕设置 1920×1080 分辨率
date: 2020-06-10T23:51:10+00:00
categories:
  - Linux
tags:
  - SDDM
  - 4K
---

在 4K 显示屏下，SDDM 界面显示得非常小，我们可以通过 `xrandr` 命令解决。

<!--more-->

列出显示器：

```shell
$ xrandr --listmonitors
Monitors: 2
 0: +*HDMI-0 1920/700x1080/390+0+0  HDMI-0
 1: +eDP-1-1 1920/344x1080/193+1920+0  eDP-1-1
```

其中 `eDP-1-1` 是笔者笔记本的内置显示器，`DMI-0` 则是的外接显示器。

接着添加以下命令到 `/usr/share/sddm/scripts/Xsetup` 即可：

```shell
$ vim /usr/share/sddm/scripts/Xsetup
xrandr --output eDP-1-1 --mode 1920x1080
```

  * `output` 为显示器名称。
  * `mode` 为分辨率。
