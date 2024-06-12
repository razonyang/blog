+++
type = "docs"
title = "Arch Linux 安装 GRUB"
linkTitle = "GRUB"
description = "要启动系统，引导程序必不可少，而本文简单介绍安装 GRUB 引导程序。"
date = 2022-05-19T14:39:26+08:00
# description = ""
featured = false
draft = false
comment = true
toc = true
reward = true
pinned = false
categories = ["Linux"]
tags = ["GRUB", "os-prober", "efibootmgr", "双系统", "引导程序"]
series = ["Arch Linux 安装指南"]
images = []
nav_weight = 4
[nav_icon]
vendor = "bs"
name = "power"
+++

> 本指南只针对 UEFI 模式进行说明。

## 安装

{{< page-resource-content "code/install" >}}

> 如果是双系统，还需要安装 `os-prober`。

{{< page-resource-content "code/grub-install" >}}

## 配置

### 修改配置

配置文件位于 `/etc/default/grub`，可按情况自行修改。

> 对于双系统，需要将其中的 `GRUB_DISABLE_OS_PROBER` 设为 `false`，默认是注释了的，取消注释即可。

### 生成配置

{{< page-resource-content "code/grub-mkconfig" >}}

### 双系统

若没识别 Windows 启动项，不急，先完成基本系统的安装，后续启动到新系统时，挂载 Windows 的启动分区（可通过 `fdisk -l | grep EFI` 查看），再次生成配置即可。

{{< page-resource-content "code/mount-ms-boot" >}}

将 `/dev/xxx` 改为对应的盘符即可。
