+++
type = "docs"
title = "Arch Linux 分區和掛載"
linkTitle =  "分區和掛載"
description = "本文將介紹如何創建並掛載 LVM 分區。"
date = 2022-05-19T14:39:26+08:00
# description = ""
featured = false
draft = false
comment = true
toc = true
reward = true
pinned = false
categories = ["Linux"]
tags = ["分區", "Swap", "LVM"]
series = ["Arch Linux 安裝指南"]
images = []
nav_weight = 3
[nav_icon]
vendor = "fas"
name = "hard-drive"
+++

## 分區方案

我的分區方案是十分隨意的：

{{< page-resource-content "data/partitions" >}}

由於我的是 500G 的硬盤，所以 `/home` 的大小給足了點，請根據自身情況調整即可。

## 分區

首先確定磁盤的標識：

{{< page-resource-content "code/fdisk" >}}

> 本文則以 `/dev/nvme1n1` 為例。

由於筆者使用的是 LVM 分區，筆者嘗試過將 `/boot` 作為 LVM 的邏輯卷，不過出現無法識別和啟動的問題，所以建議將磁盤分為兩個區，一個用作 `/boot` 分區，剩下的作為 LVM 的物理卷，其餘的 `home`、`swap` 和 `root` 分區均作為 LVM 邏輯卷。

> 注意以下操作會清空磁盤，請謹慎操作。

{{< page-resource-content "code/parted" >}}

兩個分區創建完畢，接下來就是創建 LVM 的物理卷。

## LVM 物理卷

{{< page-resource-content "code/pvcreate" >}}

## LVM 卷組

{{< page-resource-content "code/vgcreate" >}}

- `arch` 是卷組的名稱，後續命令均以此券名為例，可自行修改。

## 邏輯卷

緊接著就是按照分區方案進行分區了。

{{< page-resource-content "code/lvcreate" >}}

- `-l +100%FREE` 是指剩餘的空間，注意 `-l` 是小寫的 L。

## 建立文件系統

{{< page-resource-content "code/mkfs" >}}

## 掛載分區

{{% bs/alert warning %}}
此步驟最為重要，因為安裝系統的過程就是將系統文件寫入到對應的硬盤，請確保分區掛載成功。
{{% /bs/alert %}}

{{< page-resource-content "code/mount" >}}

`/dev/nvme1n1p1` 是最開始創建的啟動分區，可以通過 `fdisk -l` 確定。

自此，我們已經創建並掛載了分區，可以繼續[安裝 Arch Linux]({{< ref "/archlinux-guide/installation#分區和掛載" >}})。
