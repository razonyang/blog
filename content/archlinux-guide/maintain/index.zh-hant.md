---
type: docs
title: 'Arch Linux 系統維護'
linkTitle: '系統維護'
description: '本文將簡述如何利用 LiveUSB 進行系統維護，以拯救系統。'
date: '2024-07-03T03:58:33Z'
categories: ["Linux"]
tags: ["LiveUSB"]
series: ["Arch Linux 安裝指南"]
nav_icon:
  vendor: fas
  name: screwdriver-wrench
images: []
---

## 背景

Arch Linux 安裝後，難免會遇到一些問題，從而導致無法正常開機，比如：

- 由於 Xorg 安裝不成功，而又未經驗證，將桌面顯示管理器（如 SDDM）設為開機自啟時，則會導致無法看到圖形界面或命令行終端界面，從而無法進行任何操作，這種情況則需要禁止桌面顯示管理器開機自啟，直至相關問題得以解決。
- 某些系統錯誤導致無法開機，比如前些天筆者老筆記本出現了 “Failed to load kernel“ 的錯誤。

## 準備

你需要準備一個 LiveUSB，也就是用於系統安裝的 U 盤，筆者建議保留一個獨立的 U 盤，方便後續維護。

## 原理

由於系統無法開機等原因，而無法**直接**在原系統上修正錯誤，所以我們需要通過外部工具（LiveUSB）進入（`arch-chroot`）系統，然後對原系統進行修改。

## 步驟

1. 開機啟動 LiveUSB
2. [掛載系統的分區]({{< relref "archlinux-guide/partition/#掛載分區" >}})，請按照自己系統的分區情況進行掛載，並確保掛載無誤。
3. [連接網絡](archlinux-guide/installation/#網絡)，可選。
4. `arch-chroot /mnt` 進入新系統後，進行問題排查和修復。
5. 問題修復後，重啟機器並進入原系統驗證。
