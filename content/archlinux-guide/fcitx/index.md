+++
type = "docs"
title = "Arch Linux 安装 Fcitx 中文输入法"
linkTitle = "Fcitx 中文输入法"
date = 2022-05-19T14:39:26+08:00
# description = ""
featured = false
draft = false
comment = true
toc = true
reward = true
pinned = false
categories = ["Linux"]
tags = ["Fcitx", "fcitx-googlepinyin", " fcitx-im", "fcitx-configtool"]
series = ["Arch Linux 安装指南"]
images = []
nav_weight = 22
[nav_icon]
  vendor = "bs"
  name = "keyboard"
+++

Arch Linux 安装中文输入法 Fcitx：谷歌拼音和搜狗拼音。

<!--more-->

## 安装

```shell
$ sudo pacman -S fcitx fcitx-googlepinyin fcitx-im fcitx-configtool
```

- `fcitx-googlepinyin` - 谷歌拼音输入法。
- `fcitx-configtool` - 图形配置软件。

## 安装搜狗输入法

由于搜狗输入法包在 AUR，我们需要先安装一个 AUR 助手，如：[YAY]({{< ref "/archlinux-guide/yay" >}})。

```bash
$ yay -S fcitx-sogoupinyin
```

## 环境变量

```bash
$ echo -e "GTK_IM_MODULE=fcitx\nQT_IM_MODULE=fcitx\nXMODIFIERS=@im=fcitx" > ~/.pam_environment
```

需要重新登录后生效。

## 配置输入法

安装完毕了，启动 fcitx，然后右键托盘图标，配置添加我们的输入法即可，如：Google Pinyin。

## 排查错误

如果输入法没法正常工作，可以通过 **fcitx-diagnose** 排查。

 [1]: https://wiki.archlinux.org/index.php/Fcitx#Chinese

