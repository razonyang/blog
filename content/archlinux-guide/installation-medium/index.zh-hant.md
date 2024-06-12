+++
type = "docs"
title = "製作 Arch Linux LiveUSB 安裝介質"
linkTitle = "LiveUSB"
description = "本文簡單說明下如何製作 Arch Linux 的 LiveUSB 安裝介質。"
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
series = ["Arch Linux 安裝指南"]
images = []
nav_weight = 2
[nav_icon]
vendor = "bs"
name = "usb-drive"
+++

## 準備

- 一個 U 盤
- Arch Linux 的 ISO 文件，可從 [Download](https://archlinux.org/download/) 頁面獲取。

## 製作

### dd

{{< page-resource-content "code/dd" >}}

- `if` - input file，改成下載的 ISO 鏡像的路徑。
- `of` - output file，將 `/dev/sdx` 改為掛載的 U 盤，可以通過 `lsblk` 查看。

### 其他

也可以通過 [Rufus](https://rufus.ie/) 和 [USBwriter](https://sourceforge.net/p/usbwriter/wiki/Documentation/) 之類的軟件製作啟動 U 盤。

接下來，我們就可以啟動 LiveUSB [安裝 Arch Linux]({{< ref "/archlinux-guide/installation" >}}) 了。
