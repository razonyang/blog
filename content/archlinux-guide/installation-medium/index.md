+++
type = "docs"
title = "制作 Arch Linux LiveUSB 安装介质"
linkTitle = "LiveUSB"
description = "本文简单说明下如何制作 Arch Linux 的 LiveUSB 安装介质。"
date = 2022-05-19T14:39:26+08:00
# description = ""
featured = false
draft = false
comment = true
toc = true
reward = true
pinned = false
categories = ["Linux"]
tags = ["LiveUSB"]
series = ["Arch Linux 安装指南"]
images = []
nav_weight = 2
[nav_icon]
vendor = "bs"
name = "usb-drive"
+++

## 准备

- 一个 U 盘
- Arch Linux 的 ISO 文件，可从 [Download](https://archlinux.org/download/) 页面获取。

## 制作

### dd

{{< page-resource-content "code/dd" >}}

- `if` - input file，改成下载的 ISO 镜像的路径。
- `of` - output file，将 `/dev/sdx` 改为挂载的 U 盘，可以通过 `lsblk` 查看。

### 其他

也可以通过 [Rufus](https://rufus.ie/) 和 [USBwriter](https://sourceforge.net/p/usbwriter/wiki/Documentation/) 之类的软件制作启动 U 盘。

接下来，我们就可以启动 LiveUSB [安装 Arch Linux]({{< ref "/archlinux-guide/installation" >}}) 了。
