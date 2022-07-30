+++
type = "docs"
title = "安裝 Arch Linux 系統"
linkTitle = "安裝"
date = 2022-05-19T14:39:26+08:00
# description = ""
featured = false
draft = false
comment = true
toc = true
reward = true
pinned = true
carousel = false
categories = []
tags = []
series = ["Arch Linux 安裝指南"]
images = []
navWeight = 100
+++

本指南旨在詳細地描述搭建 Arch Linux 系統的細節，如磁盤分區、啓動引導（GRUB）、網絡設置、添加用戶、中文輸入法、AUR 助手（YAY）、桌面環境（KDE）等等。

<!--more-->

> 如果你打算安裝 Windows 和 Arch Linux 雙系統，請先安裝 Windows。

## 寫在前面

本指南僅以 UEFI 模式引導進行安裝。

## 啓動 LiveUSB 

在[製作 LiveUSB 安裝介質]({{< ref "/archlinux-guide/installation-medium" >}})之後，我們需要進入 BIOS，並將 LiveUSB 的啓動順序調至首位，以便電腦啓動 LiveUSB，部分電腦也可以生成一次性的可供選擇的啓動菜單。

由於不同品牌型號的電腦，進入 BIOS 的鍵各不相同，這個請根據情況進行搜索。

## 驗證引導模式

```
# ls /sys/firmware/efi/efivars
```

如果顯示有目錄且無錯誤，則系統是以 UEFI 模式引導的。本指南也只針對 UEFI 模式安裝的。

## 網絡

由於安裝的過程中需要通過網絡下載各種安裝包，我們需要驗證網絡是否正常。

### 有線網絡

一般有線網絡會自動連接。

### 無線網絡

當沒有有線網絡的情況下，我們也可以通過 `iwd` 連接 WIFI。

```bash
$ iwctl
$ [iwd]# device list
                                    Devices                                    
--------------------------------------------------------------------------------
  Name                Address             Powered   Adapter   Mode      
--------------------------------------------------------------------------------
  wlan0               6e:35:5e:19:51:c3   on        phy0      station
```

> `wlan0` 是本機的網絡設備名稱，後續將會用到，請根據情況對後續命令進行修改。

然後掃描並列出可用的 WIFI 熱點：

```bash
[iwd]# station wlan0 scan
[iwd]# station wlan0 get-networks
                               Available networks                             
--------------------------------------------------------------------------------
    Network name                    Security          Signal
--------------------------------------------------------------------------------
  > RAZON WIFI                      psk               ****  
  ...
  ...
```

然後連接 WIFI 熱點，以 `RAZON WIFI` 爲例：

```bash
[iwd]# station wlan0 connect "RAZON WIFI"
```

如果 `station list` 顯示 `connected` 說明連接成功。

### 網絡測試

```bash
$ ping archlinux.org
```

## 更新系統時間

```bash
$ timedatectl set-ntp true
```

## 分區和掛載

請參閱[分區]({{<ref "/archlinux-guide/partition" >}})。

## 安裝必要的軟件

```bash
$ pacstrap /mnt base linux linux-firmware lvm2
```

由於本指南使用了 LVM 分區，需要額外安裝 `lvm2`。你也可以安裝其他額外的軟件：如 `vim`、`base-devel` 等等。

## 配置系統

### Fstab

生成 fstab 文件：

```bash
$ genfstab -U /mnt >> /mnt/etc/fstab
```

### Chroot

Change root 到新安裝的系統：

```bash
$ arch-chroot /mnt
```

### 時區

```bash
$ ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
```

### Initramfs

由於使用了 LVM 分區，我們需要對 `/etc/mkinitcpio.conf` 進行配置，於 `block` 和 `filesystems` 之間插入 `lvm2`：

```
HOOKS=(base udev ... block lvm2 filesystems)
```

創建 Initramfs：

```bash
$ mkinitcpio -P
```

### Root 密碼

```bash
$ passwd
```

### 字體

```bash
$ sudo pacman -S wqy-microhei wqy-zenhei
```

更多字體請參閱[中文本地化](https://wiki.archlinux.org/title/Localization/Chinese#Fonts)。

## 安裝引導程序

請參閱 [GRUB]({{< ref "/archlinux-guide/grub" >}})。

## 網絡

```bash
$ sudo pacman -S networkmanager
$ sudo systemctl enable NetworkManager
```

## 總結

自此，一個基本的 Arch Linux 系統就安裝完畢了，重啓並拔出 U 盤即可進入新系統。

## 後續工作

- [創建用戶]({{< ref "/archlinux-guide/users" >}})
- [Xorg]({{< ref "/archlinux-guide/xorg" >}})
- [KDE 桌面環境]({{< ref "/archlinux-guide/kde" >}})
- [Fcitx 中文輸入法]({{< ref "/archlinux-guide/fcitx" >}})
- [YAY AUR 助手]({{< ref "/archlinux-guide/yay" >}})
