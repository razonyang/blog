+++
type = "docs"
title = "Arch Linux 安装 KDE 桌面环境"
linkTitle = "KDE 桌面环境"
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
tags = ["KDE", "xinit", "SDDM"]
series = ["Arch Linux 安装指南"]
images = []
navWeight = 40
+++

在上篇文章，我们安装了 [Xorg]({{< ref "/archlinux-guide/xorg" >}})，本文将介绍如何安装 KDE 桌面环境。

<!--more-->

## 安装

```bash
$ sudo pacman -S plasma
```

## 启动方式

启动方式有多种，如之前安装 Xorg 时用到的 `xinit`，也可以实用显示管理器。

### xinit

修改 `~/.xinitrc` 为：

```text
export DESKTOP_SESSION=plasma
exec startplasma-x11
```

启动测试：

```bash
$ startx
```

### 显示管理器

这里以 SDDM 为例：

```bash
$ sudo pacman -S sddm
```

启动测试：

```bash
$ sudo systemctl start sddm
```

**在确保可以正常启动后**，将 SDDM 设置为开机自启：

```bash
$ sudo systemctl enable sddm
```

## 实用工具

- `plasma-nm` - Network Manager 的托盘图标和图形管理界面。
- `terminator` - 笔者比较喜欢的一款终端。
- `konsole` - KDE 官方终端。
- `spectacle` - 屏幕截图工具。

## 总结

自此，我们算是完成了基本 KDE 桌面环境的安装，接下来就是安装[中文输入法]({{< ref "/archlinux-guide/fcitx" >}})了。


