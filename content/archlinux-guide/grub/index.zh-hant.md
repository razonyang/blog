+++
type = "docs"
title = "Arch Linux 安裝 GRUB"
linkTitle = "GRUB"
date = 2022-05-19T14:39:26+08:00
# description = ""
featured = false
draft = false
comment = true
toc = true
reward = true
pinned = false
categories = ["Linux"]
tags = ["GRUB"]
series = ["Arch Linux 安裝指南"]
images = []
nav_weight = 70
+++

本文簡單介紹安裝 GRUB 引導程序。

<!--more-->

> 本指南只針對 UEFI 模式進行說明。

## 安裝

```bash
$ sudo pacman -S grub efibootmgr
```

> 如果是雙系統，還需要安裝 `os-prober`。

```bash
$ sudo grub-install --target=x86_64-efi --efi-directory=/boot --bootloader-id=GRUB
```

## 配置

### 修改配置

配置文件位於 `/etc/default/grub`，可按情況自行修改。

> 對於雙系統，需要將其中的 `GRUB_DISABLE_OS_PROBER` 設爲 `false`，默認是註釋了的，取消註釋即可。

### 生成配置

```bash
$ sudo grub-mkconfig -o /boot/grub/grub.cfg
```
