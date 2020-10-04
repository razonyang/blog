---
title: Arch Linux 开启 multilib
date: 2019-12-21T13:03:48+00:00
categories:
  - Linux
tags:
  - Arch Linux
  - multilib
---

Arch Linux 有些软件是 32 位的，我们需要开启 multilib 才可以安装。下面介绍如何 Arch Linux 如何开启 multilib。

<!--more-->

## 启用

取消注释 **/etc/pacman.conf** 文件中的下面两行即可：

```conf
[multilib]
Include = /etc/pacman.d/mirrorlist
```

## 更新

启用后，我们还需要更新软件包列表并升级系统：

```shell
# pacman -Syu
```
