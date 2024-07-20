---
type: docs
title: 'Arch Linux 系统维护'
linkTitle: '系统维护'
description: '本文将简述如何利用 LiveUSB 进行系统维护，以拯救系统。'
date: '2024-07-03T03:58:33Z'
categories: ["Linux"]
tags: ["LiveUSB"]
series: ["Arch Linux 安装指南"]
nav_icon:
  vendor: fas
  name: screwdriver-wrench
images: []
---

## 背景

Arch Linux 安装后，难免会遇到一些问题，从而导致无法正常开机，比如：

- 由于 Xorg 安装不成功，而又未经验证，将桌面显示管理器（如 SDDM）设为开机自启时，则会导致无法看到图形界面或命令行终端界面，从而无法进行任何操作，这种情况则需要禁止桌面显示管理器开机自启，直至相关问题得以解决。
- 某些系统错误导致无法开机，比如前些天笔者老笔记本出现了 “Failed to load kernel“ 的错误。
- LVM 分区容量调整。

## 准备

你需要准备一个 LiveUSB，也就是用于系统安装的 U 盘，笔者建议保留一个独立的 U 盘，方便后续维护。

## 原理

由于系统无法开机等原因，而无法**直接**在原系统上修正错误，所以我们需要通过外部工具（LiveUSB）进入（`arch-chroot`）系统，然后对原系统进行修改。

## 步骤

1. 开机启动 LiveUSB
2. [挂载系统的分区]({{< relref "archlinux-guide/partition/#挂载分区" >}})，请按照自己系统的分区情况进行挂载，并确保挂载无误。
3. [连接网络]({{< relref "archlinux-guide/installation/#网络" >}})，可选。
4. `arch-chroot /mnt` 进入新系统后，进行问题排查和修复。
5. 问题修复后，重启机器并进入原系统验证。
