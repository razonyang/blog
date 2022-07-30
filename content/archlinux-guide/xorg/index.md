+++
type = "docs"
title = "Arch Linux 安装 Xorg"
linkTitle = "Xorg"
date = 2022-05-19T14:39:26+08:00
# description = ""
featured = false
draft = false
comment = true
toc = true
reward = true
pinned = false
carousel = false
categories = ["Linux"]
tags = ["Xorg", "xinit"]
series = ["Arch Linux 安装指南"]
images = []
navWeight = 50
+++

在安装桌面环境之前，我们先安装 Xorg 服务器，确保 Xorg 可以正常工作。

<!--more-->

## 安装 Xorg

```bash
$ sudo pacman -S xorg-server
```

## 安装驱动

首先检查机器的显卡信息：

```bash
$ lspci -v | grep -A1 -e VGA -e 3D
00:02.0 VGA compatible controller: Intel Corporation TigerLake-H GT1 [UHD Graphics] (rev 01) (prog-if 00 [VGA controller])
        DeviceName: Onboard - Video
--
01:00.0 VGA compatible controller: NVIDIA Corporation GA106M [GeForce RTX 3060 Mobile / Max-Q] (rev a1) (prog-if 00 [VGA controller])
        Subsystem: Dell Device 0a70
```

可以看到有两个显卡：Intel 和 NVIDIA，接着我们按照[驱动安装](https://wiki.archlinux.org/title/Xorg#Driver_installation)所列的表格进行驱动安装：

```bash
$ sudo pacman -S xf86-video-intel nvidia nvidia-utils
```

你也可以通过以下命令以列出所有开源显卡驱动：

```bash
$ sudo pacman -Ss xf86-video
```

## 运行测试

> 建议安装驱动后，重启机器，以免导致运行 Xorg 失败，不好排查问题。

在安装 Xorg 和 驱动后，我们需要验证下 Xorg 是否可以正常运行。

```bash
$ sudo pacman -S xorg-xinit xorg-twm xterm xorg-xclock
$ cp /etc/X11/xinit/xinitrc ~/.xinitrc
$ startx
```

如无意外，将会看到一个简单的图形界面，这说明 Xorg 已经可以正常工作了。接下来我们就可以安装喜欢的桌面环境，如：[KDE]({{< ref "/archlinux-guide/kde" >}})。

如果没有正常启动 Xorg，确保安装了正确的显卡驱动，也可以参考官网的[问题排查](https://wiki.archlinux.org/title/Xorg#Troubleshooting)章节。
