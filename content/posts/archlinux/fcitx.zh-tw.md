---
title: Arch Linux 安裝中文輸入法 Fcitx
date: 2019-12-21T10:47:41+00:00
categories:
  - Linux
tags:
  - Arch Linux
  - Fcitx
---

Arch Linux 安裝中文輸入法 Fcitx。

<!--more-->

## 安裝

```shell
$ sudo pacman -S fcitx fcitx-googlepinyin fcitx-im fcitx-configtool
```

**fcitx-googlepinyin** 是我偏愛的輸入法之一，你可以在[中文輸入法][1]中找到其他輸入法，比如搜狗輸入法。

**fcitx-configtool** 是圖形配置軟件，後面會用到。

## 環境變量

編輯 **~/.pam_environment**，輸入以下內容：

    GTK_IM_MODULE=fcitx
    QT_IM_MODULE=fcitx
    XMODIFIERS=@im=fcitx

需要重新登錄後生效。

## 配置輸入法

安裝完畢了，啟動 fcitx，然後右鍵托盤圖標，配置添加我們的輸入法即可，如：Google Pinyin。

## 排查錯誤

如果輸入法沒法正常工作，可以通過 **fcitx-diagnose** 排查。

 [1]: https://wiki.archlinux.org/index.php/Fcitx#Chinese
