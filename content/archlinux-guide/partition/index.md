+++
type = "docs"
title = "Arch Linux 分区和挂载"
linkTitle = "分区"
date = 2022-05-19T14:39:26+08:00
# description = ""
featured = false
draft = false
comment = true
toc = true
reward = true
pinned = false
carousel = false
categories = []
tags = []
series = []
images = []
navWeight = 80
+++

本文将介绍如何创建 LVM 分区及其挂载。

<!--more-->

## 分区方案

我的分区方案是十分随意的：

| 分区 | 大小 |
|---|---|
| `/boot` | 512MiB |
| `/home` | 128GiB |
| `swap` | 16GiB |
| `root` | 剩余空间 |

由于我的是 500G 的硬盘，所以 `/home` 的大小给足了点，请根据自身情况调整即可。

## 分区

首先确定磁盘的标识：

```bash
$ fdisk -l
Disk /dev/nvme1n1: 465.76 GiB, 500107862016 bytes, 976773168 sectors
Disk model: KIOXIA-EXCERIA SSD  
```

> 本文则以 `/dev/nvme1n1` 为例。

由于笔者是 LVM 分区，笔者尝试过将 `/boot` 作为 LVM 的逻辑卷，不过出现无法识别和启动的问题，所以建议将磁盘分为两个区，一个用作 `/boot` 分区，剩下的作为 LVM 的物理卷，其余的 `home`、`swap` 和 `root` 分区均作为 LVM 逻辑卷。

> 注意以下操作会清空磁盘，请谨慎操作。

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

两个分区创建完毕，接下来就是创建 LVM 的物理卷。

## LVM 物理卷

```bash
$ pvcreate /dev/nvme1n1
```

## LVM 卷组

```bash
$ vgcreate vg0 /dev/nvme1n1
```

- `vg0` 是卷组的名称，可自行修改。

## 逻辑卷

紧接着就是按照分区方案进行分区了。

```bash
$ lvcreate -L 128GiB vg0 -n home
$ lvcreate -L 16GiB vg0 -n swap
$ lvcreate -l +100%FREE vg0 -n root
```

- `-l +100%FREE` 是指剩余的空间，注意 `-l` 是小写的 L。

## 建立文件系统

```bash
$ mkfs.ext4 /dev/vg0/root
$ mkfs.ext4 /dev/vg0/home
$ mkswap /dev/vg0/swap
```

## 挂载分区


```bash
$ mount /dev/vg0/root /mnt
$ mkdir /mnt/home
$ mount /dev/vg0/home /mnt/home
$ mkdir /mnt/boot
$ mount /dev/nvme1n1p1 /mnt/boot
$ swapon /dev/vg0/swap
```

`/dev/nvme1n1p1` 是最开始创建的启动分区，可以通过 `fdisk -l` 确定。

自此，我们已经创建了分区并挂载，可以继续[安装 Arch Linux]({{< ref "/archlinux-guide/installation#分区和挂载" >}})。
