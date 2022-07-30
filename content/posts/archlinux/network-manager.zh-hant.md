---
title: Arch Linux Network Manager 的安裝和使用
date: 2019-12-21T15:23:02+00:00
categories:
  - Linux
tags:
  - Arch Linux
  - Network Manager
---

Arch Linux Network Manager 的安裝和使用教程。

<!--more-->

## 安裝

```shell
# pacman -S networkmanager
```

## 啟動

```shell
# systemctl enable NetworkManager
# systemctl start NetworkManager
```

> 注意服務名的大小寫。

## 命令行

### WIFI

查看 WIFI 列表：

```shell
$ nmcli device wifi list
```

連接 WIFI：

```shell
$ nmcli device wifi connect wifiname password wifipassword
```

**wifiname** 和 **wifipassword** 分別為 WIFI 名稱和密碼，如果有空格，可以用反斜槓（轉義符）+空格 `\` 表示空格。

## 圖形

<https://wiki.archlinux.org/index.php/NetworkManager#Front-ends>
