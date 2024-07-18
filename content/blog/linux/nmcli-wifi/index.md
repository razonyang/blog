---
# type: docs
title: '通过 nmcli 连接 WIFI'
description: '本文简述如何利用 nmcli 连接 WIFI。'
date: '2023-09-12T05:23:02Z'
draft: false
categories:
  - Linux
tags:
  - nmcli
  - Network Manager
  - WIFI
series:
  - CLI
images: ["/images/covers/network.jpg"]
featured: true
---

## 扫描并列出 WIFI 热点

{{< page-resource-content "code/rescan-list" >}}

## 连接 WIFI 热点

{{< page-resource-content "code/connect" >}}

将其中的 `<SSID>` 替换为附近的 WIFI 热点，比如上诉例子的 `RAZON WIFI`，然后按提示输入密码即可。
