---
title: Arch Linux 安装中文输入法 Fcitx
date: 2019-12-21T10:47:41+00:00
categories:
  - Linux
tags:
  - Arch Linux
  - Fcitx
---

Arch Linux 安装中文输入法 Fcitx。

<!--more-->

## 安装

```shell
$ sudo pacman -S fcitx fcitx-googlepinyin fcitx-im fcitx-configtool
```

**fcitx-googlepinyin** 是我偏爱的输入法之一，你可以在[中文输入法][1]中找到其他输入法，比如搜狗输入法。

**fcitx-configtool** 是图形配置软件，后面会用到。

## 环境变量

编辑 **~/.pam_environment**，输入以下内容：

    GTK_IM_MODULE=fcitx
    QT_IM_MODULE=fcitx
    XMODIFIERS=@im=fcitx

需要重新登录后生效。

## 配置输入法

安装完毕了，启动 fcitx，然后右键托盘图标，配置添加我们的输入法即可，如：Google Pinyin。

## 排查错误

如果输入法没法正常工作，可以通过 **fcitx-diagnose** 排查。

 [1]: https://wiki.archlinux.org/index.php/Fcitx#Chinese
