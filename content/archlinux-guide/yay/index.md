+++
type = "docs"
title = "Arch Linux 安装 AUR 助手 YAY"
linkTitle = "AUR 助手 YAY"
date = 2022-05-19T14:39:26+08:00
# description = ""
featured = false
draft = false
comment = true
toc = true
reward = true
pinned = false
categories = ["Linux"]
tags = ["YAY", "AUR"]
series = ["Arch Linux 安装指南"]
images = []
[nav_icon]
vendor = "bs"
name = "boxes"
+++

YAY（Yet another Yogurt） 是 Arch Linux 的一个 AUR（Arch User Repository） 助手，可以让我们更方便地安装 AUR 上的软件包，如：谷歌浏览器（Google Chrome），QQ、TIM、WPS OFFICE 等等。下面介绍 YAY 的安装和使用。

<!--more-->

## 安装

```shell
$ git clone https://aur.archlinux.org/yay
$ cd yay
$ GOPROXY=https://goproxy.cn makepkg -si
```

> 因为 YAY 是 Go 语言编写的，编译的时候需要安装 Go modules，但是被墙了，所以我们需要设置 `GOPROXY` 代理。

如果没法 git clone，可以到 [YAY][1] 软件包页面下载快照并解压。

 [1]: https://aur.archlinux.org/packages/yay/
