---
# type: docs
title: '通過 nmcli 連接 WIFI'
description: '本文簡述如何利用 nmcli 連接 WIFI。'
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
---

## 掃描並列出 WIFI 熱點

{{< page-resource-content "code/rescan-list" >}}

## 連接 WIFI 熱點

{{< page-resource-content "code/connect" >}}

將其中的 `<SSID>` 替換為附近的 WIFI 熱點，比如上訴例子的 `RAZON WIFI`，然後按提示輸入密碼即可。
