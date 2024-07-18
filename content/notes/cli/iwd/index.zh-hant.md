---
# type: docs
title: '使用 IWD 連接無線網絡'
description: 'IWD 為基於 Linux 的設備提供全面的 Wi-Fi 連接解決方案，本文將介紹如何通過 iwd 進行無線網絡連接。'
date: '2024-07-18T04:17:54Z'
categories: ["命令行"]
tags: ["iwd", "WiFi", "Wi-Fi", "Linux"]
series: []
images: ["/images/covers/wifi.jpg"]
---

## 查看設備列表

{{< page-resource-content "data/iwctl" >}}

> `wlan0` 是本機的網絡設備名稱，後續將會用到，請根據情況對後續命令進行修改。

## 掃描 Wi-Fi 熱點

{{< page-resource-content "data/iwctl-list" >}}

## 連接 Wi-Fi 熱點

以 `RAZON WIFI` 為例：

{{< page-resource-content "data/iwctl-connect" >}}

如果 `station list` 顯示 `connected` 說明連接成功。
