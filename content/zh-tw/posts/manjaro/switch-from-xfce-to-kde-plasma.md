---
title: Manjaro 從 XFCE 桌面環境切換為 KDE Plasma 5
date: 2019-06-01T05:45:56+00:00
categories:
  - Linux
tags:
  - KDE
  - Manjaro
  - PLASMA
  - XFCE
---

Manjaro 從 XFCE 桌面環境切換為 KDE Plasma 5。

<!--more-->

## 安裝 KDE Plasma 5

### 安裝 KDE Plasma 桌面環境

```shell
# pacman -S plasma kio-extras
```

### 安裝 KDE 應用

```shell
# pacman -S kdebase
```

或者安裝 KDE 應用全家桶：

```shell
# pacman -S kde-applications
```

> 不過全家桶 kde-applications 有幾百個包，筆者還是喜歡按需安裝。

### 安裝顯示管理器

SDDM 是 KDE 推薦的顯示管理器。

```shell
# pacman -S sddm
# systemctl enable sddm.service --force
# systemctl reboot
```

### 安裝 Manjaro 的 Plasma 配置和主題

```shell
# pacman -S manjaro-kde-settings sddm-breath-theme manjaro-settings-manager-knotifier manjaro-settings-manager-kcm
```

### 重啟

安裝完成後，我們先別刪除 XFCE ，我們需要重啟下，查看 KDE Plasma 5 是否正常運行。

## 卸載 XFCE

在重啟驗證 KDE Plasma 5 正常運行後，我們需要清理 XFCE ，當然你也可以留著，可以在登錄時選擇不同的桌面環境。

```shell
# pacman -Rsc xfce4 xfce4-goodies blueman lightdm
```

> 如果未安裝了 `sddm`，請自行去掉上述命令中的 `lightdm` 包，以免出現意外情況。

## 相關文章

  * [Install Desktop Environments][1]

 [1]: https://wiki.manjaro.org/index.php/Install_Desktop_Environments
