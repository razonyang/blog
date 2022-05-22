+++
type = "docs"
title = "安装 Arch Linux 系统"
linkTitle = "安装"
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
series = []
images = []
weight = 100
+++

本指南旨在详细地描述搭建 Arch Linux 系统的细节，如磁盘分区、启动引导（GRUB）、网络设置、添加用户、中文输入法、AUR 助手（YAY）、桌面环境（KDE）等等。

<!--more-->

> 如果你打算安装 Windows 和 Arch Linux 双系统，请先安装 Windows。

## 写在前面

本指南仅以 UEFI 模式引导进行安装。

## 启动 LiveUSB 

在[制作 LiveUSB 安装介质]({{< ref "/archlinux-guide/installation-medium" >}})之后，我们需要进入 BIOS，并将 LiveUSB 的启动顺序调至首位，以便电脑启动 LiveUSB，部分电脑也可以生成一次性的可供选择的启动菜单。

由于不同品牌型号的电脑，进入 BIOS 的键各不相同，这个请根据情况进行搜索。

## 验证引导模式

```
# ls /sys/firmware/efi/efivars
```

如果显示有目录且无错误，则系统是以 UEFI 模式引导的。本指南也只针对 UEFI 模式安装的。

## 网络

由于安装的过程中需要通过网络下载各种安装包，我们需要验证网络是否正常。

### 有线网络

一般有线网络会自动连接。

### 无线网络

当没有有线网络的情况下，我们也可以通过 `iwd` 连接 WIFI。

```bash
$ iwctl
$ [iwd]# device list
                                    Devices                                    
--------------------------------------------------------------------------------
  Name                Address             Powered   Adapter   Mode      
--------------------------------------------------------------------------------
  wlan0               6e:35:5e:19:51:c3   on        phy0      station
```

> `wlan0` 是本机的网络设备名称，后续将会用到，请根据情况对后续命令进行修改。

然后扫描并列出可用的 WIFI 热点：

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

然后连接 WIFI 热点，以 `RAZON WIFI` 为例：

```bash
[iwd]# station wlan0 connect "RAZON WIFI"
```

如果 `station list` 显示 `connected` 说明连接成功。

### 网络测试

```bash
$ ping archlinux.org
```

## 更新系统时间

```bash
$ timedatectl set-ntp true
```

## 分区和挂载

请参阅[分区]({{<ref "/archlinux-guide/partition" >}})。

## 安装必要的软件

```bash
$ pacstrap /mnt base linux linux-firmware lvm2
```

由于本指南使用了 LVM 分区，需要额外安装 `lvm2`。你也可以安装其他额外的软件：如 `vim`、`base-devel` 等等。

## 配置系统

### Fstab

生成 fstab 文件：

```bash
$ genfstab -U /mnt >> /mnt/etc/fstab
```

### Chroot

Change root 到新安装的系统：

```bash
$ arch-chroot /mnt
```

### 时区

```bash
$ ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
```

### Initramfs

由于使用了 LVM 分区，我们需要对 `/etc/mkinitcpio.conf` 进行配置，于 `block` 和 `filesystems` 之间插入 `lvm2`：

```
HOOKS=(base udev ... block lvm2 filesystems)
```

创建 Initramfs：

```bash
$ mkinitcpio -P
```

### Root 密码

```bash
$ passwd
```

### 字体

```bash
$ sudo pacman -S wqy-microhei wqy-zenhei
```

更多字体请参阅[中文本地化](https://wiki.archlinux.org/title/Localization/Chinese#Fonts)。

## 安装引导程序

请参阅 [GRUB]({{< ref "/archlinux-guide/grub" >}})。

## 网络

```bash
$ sudo pacman -S networkmanager
$ sudo systemctl enable NetworkManager
```

## 总结

自此，一个基本的 Arch Linux 系统就安装完毕了，重启并拔出 U 盘即可进入新系统。

## 后续工作

- [创建用户]({{< ref "/archlinux-guide/users" >}})
- [Xorg]({{< ref "/archlinux-guide/xorg" >}})
- [KDE 桌面环境]({{< ref "/archlinux-guide/kde" >}})
- [Fcitx 中文输入法]({{< ref "/archlinux-guide/fcitx" >}})
- [YAY AUR 助手]({{< ref "/archlinux-guide/yay" >}})
