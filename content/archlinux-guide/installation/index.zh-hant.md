+++
type = "docs"
title = "安裝 Arch Linux 系統"
description = "本指南旨在詳細地描述安裝 Arch Linux 系統的細節，如磁盤分區（LVM）、啟動引導（GRUB）、網絡設置、添加用戶、中文輸入法、AUR 助手（YAY）、桌面環境（KDE）等等。"
linkTitle = "安裝"
date = 2022-05-19T14:39:26+08:00
# description = ""
featured = false
draft = false
comment = true
toc = true
reward = true
pinned = true
categories = ["Linux", "Arch Linux"]
tags = ["BIOS", "Windows", "雙系統", "LVM", "分區", "GRUB", "AUR", "YAY", "KDE", "中文輸入法", "UEFI"]
series = ["Arch Linux 安裝指南"]
nav_weight = 1
[nav_icon]
vendor = "bs"
name = "cloud-download"
+++

## 寫在前面

本指南僅以 **UEFI** 模式引導進行安裝。

另外請嚴格遵守每個步驟的先後順序，並注意命令結果是否正常無誤，以避免出錯而從頭來過。

## 雙系統說明

若打算安裝 Windows 和 Arch Linux 雙系統，請先安裝 Windows。

對於雙系統，筆者建議安裝到不同的硬盤，後續即使要重裝 Windows，只需要提前拔掉或於 BIOS 中禁用 Arch Linux 所在硬盤。

## 啟動 LiveUSB

在[製作 LiveUSB 安裝介質]({{< ref "/archlinux-guide/installation-medium" >}})之後，我們需要進入 BIOS，並將 LiveUSB 的啟動順序調至首位，以便電腦啟動 LiveUSB，一些電腦也可以生成一次性的可供選擇的啟動菜單。

由於不同品牌型號的電腦，進入 BIOS 的按鍵各不相同，請根據電腦品牌型號自行搜索。

## 驗證引導模式

啟動進入 LiveUSB 系統後，先確認驗證引導模式是否為 UEFI。

{{< page-resource-content "data/efivars" >}}

如果顯示有目錄且無錯誤，則系統是以 UEFI 模式引導的，**本指南也只針對 UEFI 模式安裝的。**

## 網絡

由於安裝的過程中需要通過網絡下載各種安裝包，我們需要驗證網絡是否正常。

### 有線網絡

一般有線網絡會自動連接。

### 無線網絡

當沒有有線網絡的情況下，我們也可以[通過 `iwd` 連接 Wi-Fi]({{< relref "notes/cli/iwd" >}})。

### 網絡測試

{{< page-resource-content "data/ping" >}}

### 鏡像源

為了更快地安裝軟件包，建議使用[國內的鏡像源](https://archlinux.org/mirrorlist/?country=CN&protocol=http&protocol=https&ip_version=4&use_mirror_status=on)。以網易鏡像源為例，
只需編輯 `/etc/pacman.d/mirrorlist` 文件，並將 `Server = http://mirrors.163.com/archlinux/$repo/os/$arch` 放置**最上方**即可。

## 更新系統時間

{{< page-resource-content "data/time" >}}

## 分區和掛載

請參閱[分區和掛載]({{<ref "/archlinux-guide/partition" >}})，請確保掛載無誤，因為後續步驟都是將軟件和配置寫入硬盤。

{{% bs/alert danger %}}
不管是查漏補缺還是系統維護，重新啟動 LiveUSB 後，都需要重新掛載分區。
{{% /bs/alert %}}

## 安裝必要的軟件

{{< page-resource-content "data/pacstrap" >}}

由於本指南使用了 LVM 分區，需要額外安裝 `lvm2`。你也可以安裝其他額外的軟件：如 `vim`、`base-devel` 等等。

## 配置系統

### Fstab

生成 fstab 文件：

{{< page-resource-content "data/fstab" >}}

### Chroot

Change root 到新安裝的系統：

{{< page-resource-content "data/chroot" >}}

### 時區

{{< page-resource-content "data/timezone" >}}

### Initramfs

由於使用了 LVM 分區，我們需要對 `/etc/mkinitcpio.conf` 進行配置，於 `block` 和 `filesystems` 之間插入 `lvm2`：

{{< page-resource-content "data/mkinitcpio-conf" >}}

創建 Initramfs：

{{< page-resource-content "data/mkinitcpio" >}}

### Root 密碼

{{< page-resource-content "data/passwd" >}}

### 字體

安裝字體，以避免中文亂碼，更多字體請參閱[中文本地化](https://wiki.archlinux.org/title/Localization/Chinese#Fonts)。

{{< page-resource-content "data/fonts" >}}

## 安裝引導程序

要啟動系統，我們還需要安裝引導程序，這裡我們使用 GRUB 引導程序，詳情請參閱 [GRUB]({{< ref "/archlinux-guide/grub" >}})。

## 網絡管理器

網絡也是及其重要的一環，這裡我們安裝 Network Manager，並將其設置為開機自啟。

一般地新系統啟動後，會自動連接有線網絡，若想連接無線網絡，請參閱[通過 nmcli 連接 WIFI]({{< relref "blog/linux/nmcli-wifi" >}})。

{{< page-resource-content "data/networkmanager" >}}

## 總結

自此，一個基本的 Arch Linux 系統就安裝完畢了，重啟並拔出 U 盤即可進入新系統。

雙系統則需要進入 BIOS 調整引導順序，將 GRUB 調至第一位即可。

## 後續工作

- [創建用戶]({{< ref "/archlinux-guide/users" >}})
- [Xorg]({{< ref "/archlinux-guide/xorg" >}})
- [KDE 桌面環境]({{< ref "/archlinux-guide/kde" >}})
- [Fcitx 中文輸入法]({{< ref "/archlinux-guide/fcitx" >}})
- [YAY AUR 助手]({{< ref "/archlinux-guide/yay" >}})
