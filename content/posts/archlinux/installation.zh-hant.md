---
title: Arch Linux 安裝教程
date: 2019-12-21T15:06:02+00:00
excerpt: 記一次 ArchLinux 安裝過程。
categories:
  - Linux
tags:
  - Arch Linux
---

記一次 ArchLinux 安裝步驟。

<!--more-->

## U 盤啟動

首先[下載 Arch Linux][1] 的 ISO 鏡像，然後使用刻錄工具（如 Windows 下的 USBWriter， Linux 下的 `dd` 命令）刻錄到 U 盤即可。

> macOS 應該也有 `dd` 命令。

  * [利用 `dd` 命令刻錄U盤啟動盤][2]

## 啟動 LiveUSB

由於筆者的筆記本是 4K 屏，如果不設置 GRUB 的引導參數，進入系統後字體會十分的小，不利於安裝。只需要按 **e** 編輯引導記錄，後面加上 **video=1024x768** 或者 **nomodeset** 即可。

## 磁盤分區

筆者預留了 120GiB 左右的磁盤容量給 Linux，用於辦公足矣。以下是我的分區方案：

| 分區 | 類型 | 大小 | 說明 |
|:---|:---|:---|:---|
| root | ext4 | 50GiB | 如果日常使用 Docker 的話，建議 100 GiB |
| swap | swap | 16GiB | 一般和內存大小相同 |
| home | ext4 | 剩餘的容量 | - |

分區方案很多，不過建議單獨一個 home 分區，因為我們幾乎所有的用戶資料都會放在這裡，即使重裝系統或者其他 Linux 發行版，我們都不用擔心這個 home 分區。

可以使用 fdisk 或者 parted 進行分區，這裡不再贅述，下面是我的分區：

```shell
# fdisk -l
...
Device             Start        End   Sectors  Size Type
/dev/nvme0n1p1      2048     534527    532480  260M EFI System
/dev/nvme0n1p2    534528     567295     32768   16M Microsoft reserved
/dev/nvme0n1p3    567296  419997695 419430400  200G Microsoft basic data
/dev/nvme0n1p4 419997696  629712895 209715200  100G Microsoft basic data
/dev/nvme0n1p5 629712896  734570495 104857600   50G Microsoft basic data
/dev/nvme0n1p6 998166528 1000214527   2048000 1000M Windows recovery environment
/dev/nvme0n1p7 734570496  839428095 104857600   50G Linux filesystem
/dev/nvme0n1p8 839428096  872982527  33554432   16G Linux filesystem
/dev/nvme0n1p9 872982528  998166527 125184000 59.7G Linux filesystem
```

可以看到 /dev/nvme0n1p7 - 9 是剛創建的 Linux 分區，分別為 **/**、**swap** 和 **/home** 分區，其中由於我的是雙系統，其中標記有 EFI 的分區，也就是 /dev/nvme0n1p1 是 **boot** 分區。

## 分區類型

```shell
# mkfs.ext4 /dev/nvme0n1p7
# mkfs.ext4 /dev/nvme0n1p9
# mkswap /dev/nvme0n1p8
# swapon /dev/nvme0n1p8
```

## 掛載分區

```shell
# mount /dev/nvme0n1p7 /mnt

# mkdir /mnt/home
# mount /dev/nvme0n1p9 /mnt/home

# mkdir /mnt/boot
# mount /dev/nvme0n1p1 /mnt/boot
```

## 網絡

在進行下一步前，我們需要確保網絡是否正常，我們需要網絡去下載和安裝軟件包。

### 有線

有線連接一般會自動處理和連接，如果身邊沒有其他網絡設備，也可以用手機 USB 共享網絡給電腦，不過需要的流量很大，不推薦使用。

### WIFI

```shell
# wifi-menu -o
```

> 該命令會掃描附近的 WIFI，填寫密碼後連接。

### 測試

```shell
$ ping archlinux.org
```

## 國內鏡像源

在安裝必須軟件之前，先修改下國內源，否則嚴重影響你的安裝進度。

```shell
# vim /etc/pacman.d/mirrorlist
```

搜索 China，選擇其中一個 Server 粘貼到文件第一行即可。如果你使用 vi/vim，可以 **yy** 複製一行，**p** 粘貼所複製的一行。

## 安裝必須的軟件

```shell
# pacstrap /mnt base base-devel linux linux-firmware
```

> base-devel 不是必須的，建議加上

## 配置系統

### Fstab

```shell
# genfstab -U /mnt >> /mnt/etc/fstab
```

### Chroot

```shell
# arch-chroot /mnt
```

### 時區

```shell
# ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
```

### 本地化

```shell
# nano /etc/locale.gen
en_US.UTF-8 UTF-8
zh_CN.UTF-8 UTF-8
zh_TW.UTF-8 UTF-8

# locale-gen
```

```shell
# nano /etc/locale.conf
LANG=en_US.UTF-8
```

### 密碼

```shell
# passwd
```

### 字體

筆者比較喜歡文泉驛的字體：

```shell
# pacman -S wqy-microhei wqy-zenhei wqy-bitmapfont
```

你也可以安裝其他[中文字體][3]。

## 後續

自此係統安裝幾乎完成，但是先別急著重啟，還差系統引導、網絡兩個重要步驟，否則你還得 live 環境重新 `chroot`，比較繁瑣。

  * [GRUB][4]
  * [Network Manager][5]
  * [Fcitx 輸入法][6]

 [1]: https://www.archlinux.org/download/
 [2]: /posts/linux/dd-create-bootable-flash-driver
 [3]: https://wiki.archlinux.org/index.php/Fonts#Chinese
 [4]: /posts/archlinux/grub
 [5]: /posts/archlinux/network-manager
 [6]: /posts/archlinux/fcitx
