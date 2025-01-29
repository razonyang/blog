---
# type: docs
title: 'WSL 2 Debian Failed to connect to bus: No such file or directory 的解决方法'
description: |
  此笔记记录如何解决 WSL 2 Debian 发行版上的 "Failed to connect to bus: No such file or directory" 错误。
date: '2025-01-30T01:59:06+08:00'
draft: false
categories: []
tags:
  - Debian
  - Debian 12
  - WSL
  - WSL 2
series: []
images: []
---

该错误由微软商店下载的 Debian 发行版并不自带 `dbus` 和 `dbus-user-session` 包导致的，安装并重启 WSL 即可。

## 安装 `dbus-user-session`

```sh
sudo apt install dbus-user-session
```

## 重启 WSL 2

于 Windows PowerShell 下执行以下命令以重启 WSL 2。

```sh
wsl --shutdown
wsl
```

## 相关参考

- https://github.com/microsoft/WSL/issues/10350
