---
# type: docs
title: '配置 WSL 默认用户'
description: '通过配置 /etc/wsl.conf 为 WSL 设置默认用户。'
date: '2024-06-29T13:46:02+08:00'
draft: false
categories: ["Linux"]
tags: ["WSL", "WSL2"]
series: ["开发"]
images: []
---

前段时间导入了 WSL 备份，可能期间出了些许问题，导致 WSL 的默认登录用户为 `root`，本文将记录如何通过修改 `/etc/wsl.conf` 配置来设置默认用户。

## 配置

编辑 `/etc/wsl.conf`，追加以下配置，修改其中的 `username` 并保存，然后重启 WSL 即可。

{{< page-resource-content "code/conf" >}}

{{< page-resource-content "code/restart" >}}
