+++
type = "docs"
title = "Arch Linux 安装 GRUB"
linkTitle = "GRUB"
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
weight = 70
+++

本文简单介绍安装 GRUB 引导程序。

<!--more-->

> 本指南只针对 UEFI 模式进行说明。

## 安装

```bash
$ sudo pacman -S grub efibootmgr
```

> 如果是双系统，还需要安装 `os-prober`。

```bash
$ sudo grub-install --target=x86_64-efi --efi-directory=/boot --bootloader-id=GRUB
```

## 配置

### 修改配置

配置文件位于 `/etc/default/grub`，可按情况自行修改。

> 对于双系统，需要将其中的 `GRUB_DISABLE_OS_PROBER` 设为 `false`，默认是注释了的，取消注释即可。

### 生成配置

```bash
$ sudo grub-mkconfig -o /boot/grub/grub.cfg
```
