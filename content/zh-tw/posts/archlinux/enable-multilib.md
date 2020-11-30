---
title: Arch Linux 開啟 multilib
date: 2019-12-21T13:03:48+00:00
categories:
  - Linux
tags:
  - Arch Linux
  - multilib
---

Arch Linux 有些軟件是 32 位的，我們需要開啟 multilib 才可以安裝。下面介紹如何 Arch Linux 如何開啟 multilib。

<!--more-->

## 啟用

取消註釋 **/etc/pacman.conf** 文件中的下面兩行即可：

```conf
[multilib]
Include = /etc/pacman.d/mirrorlist
```

## 更新

啟用後，我們還需要更新軟件包列表並升級系統：

```shell
# pacman -Syu
```
