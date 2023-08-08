+++
type = "docs"
title = "Arch Linux 安裝 Xorg"
linkTitle = "Xorg"
date = 2022-05-19T14:39:26+08:00
# description = ""
featured = false
draft = false
comment = true
toc = true
reward = true
pinned = false
categories = ["Linux"]
tags = ["Xorg", "xinit"]
series = ["Arch Linux 安裝指南"]
images = []
nav_weight = 50
+++

在安裝桌面環境之前，我們先安裝 Xorg 服務器，確保 Xorg 可以正常工作。

<!--more-->

## 安裝 Xorg

```bash
$ sudo pacman -S xorg-server
```

## 安裝驅動

首先檢查機器的顯卡信息：

```bash
$ lspci -v | grep -A1 -e VGA -e 3D
00:02.0 VGA compatible controller: Intel Corporation TigerLake-H GT1 [UHD Graphics] (rev 01) (prog-if 00 [VGA controller])
        DeviceName: Onboard - Video
--
01:00.0 VGA compatible controller: NVIDIA Corporation GA106M [GeForce RTX 3060 Mobile / Max-Q] (rev a1) (prog-if 00 [VGA controller])
        Subsystem: Dell Device 0a70
```

可以看到有兩個顯卡：Intel 和 NVIDIA，接着我們按照[驅動安裝](https://wiki.archlinux.org/title/Xorg#Driver_installation)所列的表格進行驅動安裝：

```bash
$ sudo pacman -S xf86-video-intel nvidia nvidia-utils
```

你也可以通過以下命令以列出所有開源顯卡驅動：

```bash
$ sudo pacman -Ss xf86-video
```

## 運行測試

> 建議安裝驅動後，重啓機器，以免導致運行 Xorg 失敗，不好排查問題。

在安裝 Xorg 和 驅動後，我們需要驗證下 Xorg 是否可以正常運行。

```bash
$ sudo pacman -S xorg-xinit xorg-twm xterm xorg-xclock
$ cp /etc/X11/xinit/xinitrc ~/.xinitrc
$ startx
```

如無意外，將會看到一個簡單的圖形界面，這說明 Xorg 已經可以正常工作了。接下來我們就可以安裝喜歡的桌面環境，如：[KDE]({{< ref "/archlinux-guide/kde" >}})。

如果沒有正常啓動 Xorg，確保安裝了正確的顯卡驅動，也可以參考官網的[問題排查](https://wiki.archlinux.org/title/Xorg#Troubleshooting)章節。
