---
# type: docs
title: 'LVM 将分区容量割给其他分区'
description: '本文记录如何将容量从 LVM 分区分割给其他分区。'
date: '2024-07-20T20:48:13Z'
categories: ["Linux", "LVM"]
tags: ["lvreduce", "lvextend"]
series: []
images: ["/images/covers/disk.jpg"]
---

## 背景

昨天买了块立创泰山派开发板，还没到货，打算先编译个 SDK，发现 `home` 分区略小，不足以编译，而身旁又没有空闲且容量大的硬盘，于是乎打算从 `root` 分区中割出点容量。

## 准备

使用 LiveUSB 启动并执行后续步骤。

## 缩小分区容量

{{< page-resource-content "data/lvreduce" >}}

1. `-L 128GiB` 指定了缩小后的容量。
2. `/dev/arch/root` 为目标分区，请根据自身情况修改。

## 扩展分区容量

{{< page-resource-content "data/lvextend" >}}

1. `-l +100%FREE` 表示将剩余的空余容量都分给分区，注意是 `-l` 是**小写**的 L。
2. `/dev/arch/home` 为目标分区，请根据自身情况修改。
