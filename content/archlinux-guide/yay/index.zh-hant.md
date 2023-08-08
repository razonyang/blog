+++
type = "docs"
title = "Arch Linux 安裝 AUR 助手 YAY"
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
series = ["Arch Linux 安裝指南"]
images = []
nav_weight = 1
+++

YAY（Yet another Yogurt） 是 Arch Linux 的一個 AUR（Arch User Repository） 助手，可以讓我們更方便地安裝 AUR 上的軟件包，如：QQ、TIM、WPS OFFICE 等等。下面介紹 YAY 的安裝和使用。

<!--more-->

## 安裝

```shell
$ git clone https://aur.archlinux.org/yay
$ cd yay
$ GOPROXY=https://goproxy.cn makepkg -si
```

> 因爲 YAY 是 Go 語言編寫的，編譯的時候需要安裝 Go modules，但是被牆了，所以我們需要設置 `GOPROXY` 代理。

如果沒法 git clone，可以到 [YAY][1] 軟件包頁面下載快照並解壓。

 [1]: https://aur.archlinux.org/packages/yay/
