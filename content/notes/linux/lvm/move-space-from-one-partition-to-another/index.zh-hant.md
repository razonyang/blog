---
# type: docs
title: 'LVM 將分區容量分給其他分區'
description: '本文記錄如何將容量從 LVM 分區分割給其他分區。'
date: '2024-07-20T20:48:13Z'
categories: ["Linux", "LVM"]
tags: ["lvreduce", "lvextend"]
series: []
images: ["/images/covers/disk.jpg"]
---

## 背景

昨天買了塊立創泰山派開發板，還沒到貨，打算先編譯個 SDK，發現 `home` 分割槽略小，不足以編譯，而身旁又沒有空閒且容量大的硬碟，於是乎打算從 `root` 分區中割出點容量。

## 準備

使用 LiveUSB 啟動並執行後續步驟。

## 縮小分區容量

{{< page-resource-content "data/lvreduce" >}}

1. `-L 128GiB` 指定了縮小後的容量。
2. `/dev/arch/root` 為目標分區，請根據自身情況修改。

## 擴展分區容量

{{< page-resource-content "data/lvextend" >}}

1. `-l +100%FREE` 表示將剩餘的空餘容量都分給分區，注意是 `-l` 是**小寫**的 L。
2. `/dev/arch/home` 為目標分區，請根據自身情況修改。
