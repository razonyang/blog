+++
type = "docs"
title = "Arch Linux 安裝 Fcitx 中文輸入法"
linkTitle = "Fcitx 中文輸入法"
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
series = ["Arch Linux 安裝指南"]
images = []
nav_weight = 22
[nav_icon]
  vendor = "bs"
  name = "keyboard"
+++

Arch Linux 安裝中文輸入法 Fcitx：谷歌拼音和搜狗拼音。

<!--more-->

## 安裝

```shell
$ sudo pacman -S fcitx fcitx-googlepinyin fcitx-im fcitx-configtool
```

- `fcitx-googlepinyin` - 谷歌拼音輸入法。
- `fcitx-configtool` - 圖形配置軟件。

## 安裝搜狗輸入法

由於搜狗輸入法包在 AUR，我們需要先安裝一個 AUR 助手，如：[YAY]({{< ref "/archlinux-guide/yay" >}})。

```bash
$ yay -S fcitx-sogoupinyin
```

## 環境變量

```bash
$ echo -e "GTK_IM_MODULE=fcitx\nQT_IM_MODULE=fcitx\nXMODIFIERS=@im=fcitx" > ~/.pam_environment
```

需要重新登錄後生效。

## 配置輸入法

安裝完畢了，啓動 fcitx，然後右鍵托盤圖標，配置添加我們的輸入法即可，如：Google Pinyin。

## 排查錯誤

如果輸入法沒法正常工作，可以通過 **fcitx-diagnose** 排查。

 [1]: https://wiki.archlinux.org/index.php/Fcitx#Chinese

