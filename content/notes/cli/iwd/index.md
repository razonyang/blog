---
# type: docs
title: '使用 IWD 连接无线网络'
description: 'IWD 为基于 Linux 的设备提供全面的 Wi-Fi 连接解决方案，本文将介绍如何通过 iwd 进行无线网络连接。'
date: '2024-07-18T04:17:54Z'
categories: ["命令行"]
tags: ["iwd", "WiFi", "Wi-Fi", "Linux"]
series: []
images: ["/images/covers/wifi.jpg"]
---

## 查看设备列表

{{< page-resource-content "data/iwctl" >}}

> `wlan0` 是本机的网络设备名称，后续将会用到，请根据情况对后续命令进行修改。

## 扫描 Wi-Fi 热点

{{< page-resource-content "data/iwctl-list" >}}

## 连接 Wi-Fi 热点

以 `RAZON WIFI` 为例：

{{< page-resource-content "data/iwctl-connect" >}}

如果 `station list` 显示 `connected` 说明连接成功。
