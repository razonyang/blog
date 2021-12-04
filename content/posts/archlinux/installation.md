---
title: Arch Linux 安装教程
date: 2019-12-21T15:06:02+00:00
excerpt: 记一次 ArchLinux 安装过程。
categories:
  - Linux
tags:
  - Arch Linux
---

记一次 ArchLinux 安装步骤。

<!--more-->

## U 盘启动

首先[下载 Arch Linux][1] 的 ISO 镜像，然后使用刻录工具（如 Windows 下的 USBWriter， Linux 下的 `dd` 命令）刻录到 U 盘即可。

> macOS 应该也有 `dd` 命令。

  * [利用 `dd` 命令刻录U盘启动盘][2]

## 启动 LiveUSB

由于笔者的笔记本是 4K 屏，如果不设置 GRUB 的引导参数，进入系统后字体会十分的小，不利于安装。只需要按 **e** 编辑引导记录，后面加上 **video=1024x768** 或者 **nomodeset** 即可。

## 磁盘分区

笔者预留了 120GiB 左右的磁盘容量给 Linux，用于办公足矣。以下是我的分区方案：

| 分区 | 类型 | 大小 | 说明 |
|:---|:---|:---|:---|
| root | ext4 | 50GiB | 如果日常使用 Docker 的话，建议 100 GiB |
| swap | swap | 16GiB | 一般和内存大小相同 |
| home | ext4 | 剩余的容量 | - |

分区方案很多，不过建议单独一个 home 分区，因为我们几乎所有的用户资料都会放在这里，即使重装系统或者其他 Linux 发行版，我们都不用担心这个 home 分区。

可以使用 fdisk 或者 parted 进行分区，这里不再赘述，下面是我的分区：

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

可以看到 /dev/nvme0n1p7 - 9 是刚创建的 Linux 分区，分别为 **/**、**swap** 和 **/home** 分区，其中由于我的是双系统，其中标记有 EFI 的分区，也就是 /dev/nvme0n1p1 是 **boot** 分区。

## 分区类型

```shell
# mkfs.ext4 /dev/nvme0n1p7
# mkfs.ext4 /dev/nvme0n1p9
# mkswap /dev/nvme0n1p8
# swapon /dev/nvme0n1p8
```

## 挂载分区

```shell
# mount /dev/nvme0n1p7 /mnt

# mkdir /mnt/home
# mount /dev/nvme0n1p9 /mnt/home

# mkdir /mnt/boot
# mount /dev/nvme0n1p1 /mnt/boot
```

## 网络

在进行下一步前，我们需要确保网络是否正常，我们需要网络去下载和安装软件包。

### 有线

有线连接一般会自动处理和连接，如果身边没有其他网络设备，也可以用手机 USB 共享网络给电脑，不过需要的流量很大，不推荐使用。

### WIFI

```shell
# wifi-menu -o
```

> 该命令会扫描附近的 WIFI，填写密码后连接。

### 测试

```shell
$ ping archlinux.org
```

## 国内镜像源

在安装必须软件之前，先修改下国内源，否则严重影响你的安装进度。

```shell
# vim /etc/pacman.d/mirrorlist
```

搜索 China，选择其中一个 Server 粘贴到文件第一行即可。如果你使用 vi/vim，可以 **yy** 复制一行，**p** 粘贴所复制的一行。

## 安装必须的软件

```shell
# pacstrap /mnt base base-devel linux linux-firmware
```

> base-devel 不是必须的，建议加上

## 配置系统

### Fstab

```shell
# genfstab -U /mnt >> /mnt/etc/fstab
```

### Chroot

```shell
# arch-chroot /mnt
```

### 时区

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

### 密码

```shell
# passwd
```

### 字体

笔者比较喜欢文泉驿的字体：

```shell
# pacman -S wqy-microhei wqy-zenhei wqy-bitmapfont
```

你也可以安装其他[中文字体][3]。

## 后续

自此系统安装几乎完成，但是先别急着重启，还差系统引导、网络两个重要步骤，否则你还得 live 环境重新 `chroot`，比较繁琐。

  * [GRUB][4]
  * [Network Manager][5]
  * [Fcitx 输入法][6]

 [1]: https://www.archlinux.org/download/
 [2]: /posts/linux/dd-create-bootable-flash-driver
 [3]: https://wiki.archlinux.org/index.php/Fonts#Chinese
 [4]: /posts/archlinux/grub
 [5]: /posts/archlinux/network-manager
 [6]: /posts/archlinux/fcitx
