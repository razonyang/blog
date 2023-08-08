+++
type = "docs"
title = "製作 Arch Linux LiveUSB 安裝介質"
linkTitle = "製作 LiveUSB 安裝介質"
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
nav_weight = 90
+++

本文簡單說明下如何製作 Arch Linux 的 LiveUSB 安裝介質。

<!--more-->

## 準備

- 一個 U 盤
- Arch Linux 的 ISO 文件，可從 [Download](https://archlinux.org/download/) 頁面獲取。

## 製作

### dd

```bash
$ sudo dd bs=4M if=/path/to/archlinux.iso of=/dev/sdx status=progress && sync
```

- `if` - input file，改成下載的 ISO 鏡像的路徑。
- `of` - output file，將 `/dev/sdx` 改爲掛載的 U 盤，可以通過 `lsblk` 查看。

### 其他

也可以通過 [Rufus](https://rufus.ie/) 和 [USBwriter](https://sourceforge.net/p/usbwriter/wiki/Documentation/) 之類的軟件製作啓動 U 盤。

接下來，我們就可以通過 LiveUSB [安裝 Arch Linux]({{< ref "/archlinux-guide/installation" >}}) 了。
