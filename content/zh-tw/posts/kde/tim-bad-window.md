---
title: KDE Plasma 無法啟動 TIM
date: 2019-07-21T05:42:12+00:00
categories:
  - Linux
tags:
  - KDE
  - PLASMA
  - TIM
  - Arch Linux
---

在 KDE Plasma 桌面環境無法使用 TIM，提示：

> X Error of failed request: BadWindow (invalid Window parameter)  
> Major opcode of failed request: 20 (X_GetProperty)  
> Resource id in failed request: 0x0  
> Serial number of failed request: 10  
> Current serial number in output stream: 10

<!--more-->

## 解決

需要先安裝 `gnome-settings-daemon` 並啟動 `/usr/lib/gsd-xsettings`，本文以 Arch Linux 為例。

```shell
# pacman -S gnome-settings-daemon
    
$ /usr/lib/gsd-xsettings &
```

可以將 `/usr/lib/gsd-xsettings` 命令添加到 KDE 設置的自動啟動中。

## 相關文章

  * [KDE 環境完全無法使用 wine-tim][1]

 [1]: https://github.com/wszqkzqk/deepin-wine-ubuntu/issues/12
