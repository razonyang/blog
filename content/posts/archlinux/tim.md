---
title: Arch Linux 安装 TIM
date: 2019-12-21T14:53:23+00:00
categories:
  - Linux
tags:
  - Arch Linux
  - TIM
---

Arch Linux 安装 TIM 教程。

<!--more-->

> TIM 需要[开启 Arch Linux multilib][1]。

## 安装

```shell
$ yay -S deepin.com.qq.office
```

此处以 yay 为例，你也可以用其他已有的 AUR 助手，或者手动下载解压，再 `makepkg -si`。

## 问题

如果桌面快捷方式启动不了，可以通过命令行启动，来查看具体的错误：

```shell
$ /opt/deepinwine/apps/Deepin-TIM/run.sh
```

## 相关

  * [KDE Plasma 无法启动 TIM][2]

 [1]: /posts/archlinux/enable-multiib
 [2]: /posts/kde/tim-bad-window/
