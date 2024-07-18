+++
type = "docs"
title = "安装 Arch Linux 系统"
description = "本指南旨在详细地描述安装 Arch Linux 系统的细节，如磁盘分区（LVM）、启动引导（GRUB）、网络设置、添加用户、中文输入法、AUR 助手（YAY）、桌面环境（KDE）等等。"
linkTitle = "安装"
date = 2022-05-19T14:39:26+08:00
# description = ""
featured = false
draft = false
comment = true
toc = true
reward = true
pinned = true
categories = ["Linux", "Arch Linux"]
tags = ["BIOS", "Windows", "双系统", "LVM", "分区", "GRUB", "AUR", "YAY", "KDE", "中文输入法", "UEFI"]
series = ["Arch Linux 安装指南"]
nav_weight = 1
[nav_icon]
vendor = "bs"
name = "cloud-download"
+++

## 写在前面

本指南仅以 **UEFI** 模式引导进行安装。

另外请严格遵守每个步骤的先后顺序，并注意命令结果是否正常无误，以避免出错而从头来过。

## 双系统说明

若打算安装 Windows 和 Arch Linux 双系统，请先安装 Windows。

对于双系统，笔者建议安装到不同的硬盘，后续即使要重装 Windows，只需要提前拔掉或于 BIOS 中禁用 Arch Linux 所在硬盘。

## 启动 LiveUSB

在[制作 LiveUSB 安装介质]({{< ref "/archlinux-guide/installation-medium" >}})之后，我们需要进入 BIOS，并将 LiveUSB 的启动顺序调至首位，以便电脑启动 LiveUSB，一些电脑也可以生成一次性的可供选择的启动菜单。

由于不同品牌型号的电脑，进入 BIOS 的按键各不相同，请根据电脑品牌型号自行搜索。

## 验证引导模式

启动进入 LiveUSB 系统后，先确认验证引导模式是否为 UEFI。

{{< page-resource-content "data/efivars" >}}

如果显示有目录且无错误，则系统是以 UEFI 模式引导的，**本指南也只针对 UEFI 模式安装的。**

## 网络

由于安装的过程中需要通过网络下载各种安装包，我们需要验证网络是否正常。

### 有线网络

一般有线网络会自动连接。

### 无线网络

当没有有线网络的情况下，我们也可以[通过 `iwd` 连接 Wi-Fi]({{< relref "notes/cli/iwd" >}})。

### 网络测试

{{< page-resource-content "data/ping" >}}

### 镜像源

为了更快地安装软件包，建议使用[国内的镜像源](https://archlinux.org/mirrorlist/?country=CN&protocol=http&protocol=https&ip_version=4&use_mirror_status=on)。以网易镜像源为例，
只需编辑 `/etc/pacman.d/mirrorlist` 文件，并将 `Server = http://mirrors.163.com/archlinux/$repo/os/$arch` 放置**最上方**即可。

## 更新系统时间

{{< page-resource-content "data/time" >}}

## 分区和挂载

请参阅[分区和挂载]({{<ref "/archlinux-guide/partition" >}})，请确保挂载无误，因为后续步骤都是将软件和配置写入硬盘。

{{% bs/alert danger %}}
不管是查漏补缺还是系统维护，重新启动 LiveUSB 后，都需要重新挂载分区。
{{% /bs/alert %}}

## 安装必要的软件

{{< page-resource-content "data/pacstrap" >}}

由于本指南使用了 LVM 分区，需要额外安装 `lvm2`。你也可以安装其他额外的软件：如 `vim`、`base-devel` 等等。

## 配置系统

### Fstab

生成 fstab 文件：

{{< page-resource-content "data/fstab" >}}

### Chroot

Change root 到新安装的系统：

{{< page-resource-content "data/chroot" >}}

### 时区

{{< page-resource-content "data/timezone" >}}

### Initramfs

由于使用了 LVM 分区，我们需要对 `/etc/mkinitcpio.conf` 进行配置，于 `block` 和 `filesystems` 之间插入 `lvm2`：

{{< page-resource-content "data/mkinitcpio-conf" >}}

创建 Initramfs：

{{< page-resource-content "data/mkinitcpio" >}}

### Root 密码

{{< page-resource-content "data/passwd" >}}

### 字体

安装字体，以避免中文乱码，更多字体请参阅[中文本地化](https://wiki.archlinux.org/title/Localization/Chinese#Fonts)。

{{< page-resource-content "data/fonts" >}}

## 安装引导程序

要启动系统，我们还需要安装引导程序，这里我们使用 GRUB 引导程序，详情请参阅 [GRUB]({{< ref "/archlinux-guide/grub" >}})。

## 网络管理器

网络也是及其重要的一环，这里我们安装 Network Manager，并将其设置为开机自启。

一般地新系统启动后，会自动连接有线网络，若想连接无线网络，请参阅[通过 nmcli 连接 WIFI]({{< relref "blog/linux/nmcli-wifi" >}})。

{{< page-resource-content "data/networkmanager" >}}

## 总结

自此，一个基本的 Arch Linux 系统就安装完毕了，重启并拔出 U 盘即可进入新系统。

双系统则需要进入 BIOS 调整引导顺序，将 GRUB 调至第一位即可。

## 后续工作

- [创建用户]({{< ref "/archlinux-guide/users" >}})
- [Xorg]({{< ref "/archlinux-guide/xorg" >}})
- [KDE 桌面环境]({{< ref "/archlinux-guide/kde" >}})
- [Fcitx 中文输入法]({{< ref "/archlinux-guide/fcitx" >}})
- [YAY AUR 助手]({{< ref "/archlinux-guide/yay" >}})
