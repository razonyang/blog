---
title: Arch Linux 安裝 TIM
date: 2019-12-21T14:53:23+00:00
categories:
  - Linux
tags:
  - Arch Linux
  - TIM
---

Arch Linux 安裝 TIM 教程。

<!--more-->

> TIM 需要[開啟 Arch Linux multilib][1]。

## 安裝

```shell
$ yay -S deepin.com.qq.office
```

此處以 yay 為例，你也可以用其他已有的 AUR 助手，或者手動下載解壓，再 `makepkg -si`。

## 問題

如果桌面快捷方式啟動不了，可以通過命令行啟動，來查看具體的錯誤：

```shell
$ /opt/deepinwine/apps/Deepin-TIM/run.sh
```

## 相關

  * [KDE Plasma 無法啟動 TIM][2]

 [1]: /posts/archlinux/enable-multiib
 [2]: /posts/kde/tim-bad-window/
