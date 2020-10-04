---
title: Arch Linux Network Manager 的安装和使用
date: 2019-12-21T15:23:02+00:00
categories:
  - Linux
tags:
  - Arch Linux
  - Network Manager
---

Arch Linux Network Manager 的安装和使用教程。

<!--more-->

## 安装

```shell
# pacman -S networkmanager
```

## 启动

```shell
# systemctl enable NetworkManager
# systemctl start NetworkManager
```

> 注意服务名的大小写。

## 命令行

### WIFI

查看 WIFI 列表：

```shell
$ nmcli device wifi list
```

连接 WIFI：

```shell
$ nmcli device wifi connect wifiname password wifipassword
```

**wifiname** 和 **wifipassword** 分别为 WIFI 名称和密码，如果有空格，可以用反斜杠（转义符）+空格 `\` 表示空格。

## 图形

<https://wiki.archlinux.org/index.php/NetworkManager#Front-ends>
