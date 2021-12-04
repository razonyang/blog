---
title: Arch Linux 安裝 YAY
date: 2019-12-21T12:03:43+00:00
categories:
  - Linux
tags:
  - Arch Linux
  - AUR
  - YAY
---

YAY（Yet another Yogurt） 是 Arch Linux 的一個 AUR（Arch User Repository） 助手，可以讓我們更方便地安裝 AUR 上的軟件包，如：QQ、TIM、WPS OFFICE 等等。下面介紹 YAY 的安裝和使用。

<!--more-->

## 安裝

```shell
$ git clone https://aur.archlinux.org/yay
$ cd yay
$ makepkg -si
```

如果沒法 git clone，可以到 [YAY][1] 軟件包頁面下載快照並解壓。

 [1]: https://aur.archlinux.org/packages/yay/
