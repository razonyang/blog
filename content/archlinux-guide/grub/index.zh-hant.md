+++
type = "docs"
title = "Arch Linux 安裝 GRUB"
linkTitle = "GRUB"
description = "要啟動系統，引導程序必不可少，而本文簡單介紹安裝 GRUB 引導程序。"
date = 2022-05-19T14:39:26+08:00
# description = ""
featured = false
draft = false
comment = true
toc = true
reward = true
pinned = false
categories = ["Linux"]
tags = ["GRUB", "os-prober", "efibootmgr", "雙系統", "引導程序"]
series = ["Arch Linux 安裝指南"]
images = []
nav_weight = 4
[nav_icon]
vendor = "bs"
name = "power"
+++

> 本指南只針對 UEFI 模式進行說明。

## 安裝

{{< page-resource-content "code/install" >}}

> 如果是雙系統，還需要安裝 `os-prober`。

{{< page-resource-content "code/grub-install" >}}

## 配置

### 修改配置

配置文件位於 `/etc/default/grub`，可按情況自行修改。

> 對於雙系統，需要將其中的 `GRUB_DISABLE_OS_PROBER` 設為 `false`，默認是註釋了的，取消註釋即可。

### 生成配置

{{< page-resource-content "code/grub-mkconfig" >}}

### 雙系統

若沒識別 Windows 啟動項，不急，先完成基本系統的安裝，後續啟動到新系統時，掛載 Windows 的啟動分區（可通過 `fdisk -l | grep EFI` 查看），再次生成配置即可。

{{< page-resource-content "code/mount-ms-boot" >}}

將 `/dev/xxx` 改為對應的盤符即可。
