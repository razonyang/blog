---
title: Arch Linux 安装 GRUB
date: 2019-12-21T15:15:00+00:00
categories:
  - Linux
tags:
  - Arch Linux
  - GRUB
---

本文介绍的是 UEFI 系统的 GRUB 安装教程。

<!--more-->

## 安装

```shell
# pacman -S grub efibootmgr
```

> 如果是双系统，你还需要安装 **os-prober**

```shell
# grub-install --target=x86_64-efi --efi-directory=/boot --bootloader-id=GRUB --removable
```

> /boot 是我的启动分区。

## 配置

配置文件为：**/etc/default/grub**。

生成配置（每次修改都需要重新生成配置）

```shell
# grub-mkconfig -o /boot/grub/grub.cfg
```

| 参数 | 推荐值 | 说明 |
|:---|:---|:---|
| GRUB_DEFAULT | saved | |
| GRUB_SAVEDEFAULT | true | 是否记住上次的选择，需要将 GRUB_DEFAULT 设置为 saved |
| GRUB_TIMEOUT | 5 | 引导选择界面逗留时间，单位秒 |
| GRUB_CMDLINE_LINUX_DEFAULT | | Linux 默认启动参数 |
| GRUB_CMDLINE_LINUX| | Linux 启动参数，如果是 4k 屏，建议加上 video=1024x768 |
