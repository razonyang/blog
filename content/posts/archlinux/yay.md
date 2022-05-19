---
title: Arch Linux 安装 YAY
date: 2019-12-21T12:03:43+00:00
categories:
  - Linux
tags:
  - Arch Linux
  - AUR
  - YAY
---

YAY（Yet another Yogurt） 是 Arch Linux 的一个 AUR（Arch User Repository） 助手，可以让我们更方便地安装 AUR 上的软件包，如：QQ、TIM、WPS OFFICE 等等。下面介绍 YAY 的安装和使用。

<!--more-->

## 安装

```shell
$ git clone https://aur.archlinux.org/yay
$ cd yay
$ GOPROXY=https://goproxy.cn makepkg -si
```

如果没法 git clone，可以到 [YAY][1] 软件包页面下载快照并解压。

 [1]: https://aur.archlinux.org/packages/yay/
