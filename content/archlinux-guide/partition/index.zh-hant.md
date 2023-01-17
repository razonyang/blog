+++
type = "docs"
title = "Arch Linux 分區和掛載"
linkTitle = "分區"
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
tags = ["分區", "Swap", "LVM"]
series = ["Arch Linux 安裝指南"]
images = []
navWeight = 80
+++

本文將介紹如何創建 LVM 分區及其掛載。

<!--more-->

## 分區方案

我的分區方案是十分隨意的：

| 分區 | 大小 |
|---|---|
| `/boot` | 512MiB |
| `/home` | 128GiB |
| `swap` | 16GiB |
| `root` | 剩餘空間 |

由於我的是 500G 的硬盤，所以 `/home` 的大小給足了點，請根據自身情況調整即可。

## 分區

首先確定磁盤的標識：

```bash
$ fdisk -l
Disk /dev/nvme1n1: 465.76 GiB, 500107862016 bytes, 976773168 sectors
Disk model: KIOXIA-EXCERIA SSD  
```

> 本文則以 `/dev/nvme1n1` 爲例。

由於筆者是 LVM 分區，筆者嘗試過將 `/boot` 作爲 LVM 的邏輯卷，不過出現無法識別和啓動的問題，所以建議將磁盤分爲兩個區，一個用作 `/boot` 分區，剩下的作爲 LVM 的物理卷，其餘的 `home`、`swap` 和 `root` 分區均作爲 LVM 邏輯卷。

> 注意以下操作會清空磁盤，請謹慎操作。

```bash
$ parted /dev/nvme1n1
(parted) mklabel gpt
(parted) mkpart "EFI system partition" fat32 1MiB 513MiB
(parted) set 1 esp on
(parted) mkpart ext4 513MiB 100%
(parted) print                                                            
...
Number  Start    End        Size       File system  Name                  Flags
 1      1.00MiB  513MiB     512MiB     fat32        EFI system partition  boot, esp
 2      513MiB   476940MiB  476427MiB               ext4
```

兩個分區創建完畢，接下來就是創建 LVM 的物理卷。

## LVM 物理卷

```bash
$ pvcreate /dev/nvme1n1p2
```

## LVM 卷組

```bash
$ vgcreate vg0 /dev/nvme1n1p2
```

- `vg0` 是卷組的名稱，可自行修改。

## 邏輯卷

緊接着就是按照分區方案進行分區了。

```bash
$ lvcreate -L 128GiB vg0 -n home
$ lvcreate -L 16GiB vg0 -n swap
$ lvcreate -l +100%FREE vg0 -n root
```

- `-l +100%FREE` 是指剩餘的空間，注意 `-l` 是小寫的 L。

## 建立文件系統

```bash
$ mkfs.ext4 /dev/vg0/root
$ mkfs.ext4 /dev/vg0/home
$ mkswap /dev/vg0/swap
```

## 掛載分區


```bash
$ mount /dev/vg0/root /mnt
$ mkdir /mnt/home
$ mount /dev/vg0/home /mnt/home
$ mkdir /mnt/boot
$ mount /dev/nvme1n1p1 /mnt/boot
$ swapon /dev/vg0/swap
```

`/dev/nvme1n1p1` 是最開始創建的啓動分區，可以通過 `fdisk -l` 確定。

自此，我們已經創建了分區並掛載，可以繼續[安裝 Arch Linux]({{< ref "/archlinux-guide/installation#分區和掛載" >}})。
