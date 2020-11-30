---
title: Arch Linux 安裝 GRUB
date: 2019-12-21T15:15:00+00:00
categories:
  - Linux
tags:
  - Arch Linux
  - GRUB
---

本文介紹的是 UEFI 系統的 GRUB 安裝教程。

<!--more-->

## 安裝

```shell
# pacman -S grub efibootmgr
```

> 如果是雙系統，你還需要安裝 **os-prober**

```shell
# grub-install --target=x86_64-efi --efi-directory=/boot --bootloader-id=GRUB --removable
```

> /boot 是我的啟動分區。

## 配置

配置文件為：**/etc/default/grub**。

生成配置（每次修改都需要重新生成配置）

```shell
# grub-mkconfig -o /boot/grub/grub.cfg
```

| 參數 | 推薦值 | 說明 |
|:---|:---|:---|
| GRUB_DEFAULT | saved | |
| GRUB_SAVEDEFAULT | true | 是否記住上次的選擇，需要將 GRUB_DEFAULT 設置為 saved |
| GRUB_TIMEOUT | 5 | 引導選擇界面逗留時間，單位秒 |
| GRUB_CMDLINE_LINUX_DEFAULT | | Linux 默認啟動參數 |
| GRUB_CMDLINE_LINUX| | Linux 啟動參數，如果是 4k 屏，建議加上 video=1024x768 |
