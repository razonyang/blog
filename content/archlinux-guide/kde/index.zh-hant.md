+++
type = "docs"
title = "Arch Linux 安裝 KDE 桌面環境"
linkTitle = "KDE 桌面環境"
date = 2022-05-19T14:39:26+08:00
# description = ""
featured = false
draft = false
comment = true
toc = true
reward = true
pinned = false
categories = ["Linux"]
tags = ["KDE", "xinit", "SDDM"]
series = ["Arch Linux 安裝指南"]
images = []
nav_weight = 21
[nav_icon]
vendor = "simple"
name = "kde"
+++

在上篇文章，我們安裝了 [Xorg]({{< ref "/archlinux-guide/xorg" >}})，本文將介紹如何安裝 KDE 桌面環境。

<!--more-->

## 安裝

```bash
$ sudo pacman -S plasma
```

## 啓動方式

啓動方式有多種，如之前安裝 Xorg 時用到的 `xinit`，也可以實用顯示管理器。

### xinit

修改 `~/.xinitrc` 爲：

```text
export DESKTOP_SESSION=plasma
exec startplasma-x11
```

啓動測試：

```bash
$ startx
```

### 顯示管理器

這裏以 SDDM 爲例：

```bash
$ sudo pacman -S sddm
```

啓動測試：

```bash
$ sudo systemctl start sddm
```

**在確保可以正常啓動後**，將 SDDM 設置爲開機自啓：

```bash
$ sudo systemctl enable sddm
```

## 實用工具

- `plasma-nm` - Network Manager 的托盤圖標和圖形管理界面。
- `terminator` - 筆者比較喜歡的一款終端。
- `konsole` - KDE 官方終端。
- `spectacle` - 屏幕截圖工具。
- `dolphin` - KDE 文件管理。
- `kscree` - KDE 多顯示器管理器。

## 總結

自此，我們算是完成了基本 KDE 桌面環境的安裝，接下來就是安裝[中文輸入法]({{< ref "/archlinux-guide/fcitx" >}})了。
