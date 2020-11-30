---
title: Manjaro 从 XFCE 桌面环境切换为 KDE Plasma 5
date: 2019-06-01T05:45:56+00:00
categories:
  - Linux
tags:
  - KDE
  - Manjaro
  - PLASMA
  - XFCE
---

Manjaro 从 XFCE 桌面环境切换为 KDE Plasma 5。

<!--more-->

## 安装 KDE Plasma 5

### 安装 KDE Plasma 桌面环境

```shell
# pacman -S plasma kio-extras
```

### 安装 KDE 应用

```shell
# pacman -S kdebase
```

或者安装 KDE 应用全家桶：

```shell
# pacman -S kde-applications
```

> 不过全家桶 kde-applications 有几百个包，笔者还是喜欢按需安装。

### 安装显示管理器

SDDM 是 KDE 推荐的显示管理器。

```shell
# pacman -S sddm
# systemctl enable sddm.service --force
# systemctl reboot
```

### 安装 Manjaro 的 Plasma 配置和主题

```shell
# pacman -S manjaro-kde-settings sddm-breath-theme manjaro-settings-manager-knotifier manjaro-settings-manager-kcm
```

### 重启

安装完成后，我们先别删除 XFCE ，我们需要重启下，查看 KDE Plasma 5 是否正常运行。

## 卸载 XFCE

在重启验证 KDE Plasma 5 正常运行后，我们需要清理 XFCE ，当然你也可以留着，可以在登录时选择不同的桌面环境。

```shell
# pacman -Rsc xfce4 xfce4-goodies blueman lightdm
```

> 如果未安装了 `sddm`，请自行去掉上述命令中的 `lightdm` 包，以免出现意外情况。

## 相关文章

  * [Install Desktop Environments][1]

 [1]: https://wiki.manjaro.org/index.php/Install_Desktop_Environments
