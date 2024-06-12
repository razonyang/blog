+++
type = "docs"
title = "Arch Linux 分区和挂载"
linkTitle =  "分区和挂载"
description = "本文将介绍如何创建并挂载 LVM 分区。"
date = 2022-05-19T14:39:26+08:00
# description = ""
featured = false
draft = false
comment = true
toc = true
reward = true
pinned = false
categories = ["Linux"]
tags = ["分区", "Swap", "LVM"]
series = ["Arch Linux 安装指南"]
images = []
nav_weight = 3
[nav_icon]
vendor = "fas"
name = "hard-drive"
+++

## 分区方案

我的分区方案是十分随意的：

{{< page-resource-content "data/partitions" >}}

由于我的是 500G 的硬盘，所以 `/home` 的大小给足了点，请根据自身情况调整即可。

## 分区

首先确定磁盘的标识：

{{< page-resource-content "code/fdisk" >}}

> 本文则以 `/dev/nvme1n1` 为例。

由于笔者使用的是 LVM 分区，笔者尝试过将 `/boot` 作为 LVM 的逻辑卷，不过出现无法识别和启动的问题，所以建议将磁盘分为两个区，一个用作 `/boot` 分区，剩下的作为 LVM 的物理卷，其余的 `home`、`swap` 和 `root` 分区均作为 LVM 逻辑卷。

> 注意以下操作会清空磁盘，请谨慎操作。

{{< page-resource-content "code/parted" >}}

两个分区创建完毕，接下来就是创建 LVM 的物理卷。

## LVM 物理卷

{{< page-resource-content "code/pvcreate" >}}

## LVM 卷组

{{< page-resource-content "code/vgcreate" >}}

- `arch` 是卷组的名称，后续命令均以此券名为例，可自行修改。

## 逻辑卷

紧接着就是按照分区方案进行分区了。

{{< page-resource-content "code/lvcreate" >}}

- `-l +100%FREE` 是指剩余的空间，注意 `-l` 是小写的 L。

## 建立文件系统

{{< page-resource-content "code/mkfs" >}}

## 挂载分区

{{% bs/alert warning %}}
此步骤最为重要，因为安装系统的过程就是将系统文件写入到对应的硬盘，请确保分区挂载成功。
{{% /bs/alert %}}

{{< page-resource-content "code/mount" >}}

`/dev/nvme1n1p1` 是最开始创建的启动分区，可以通过 `fdisk -l` 确定。

自此，我们已经创建并挂载了分区，可以继续[安装 Arch Linux]({{< ref "/archlinux-guide/installation#分区和挂载" >}})。
