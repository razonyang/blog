+++
type = "docs"
title = "創建用戶"
linkTitle = "創建用戶"
description = "基於安全性等方面的考慮，通常我們不會以 root 用戶來使用系統，本文將介紹如何創建一個非特權的用戶。"
date = 2022-05-19T14:39:26+08:00
# description = ""
featured = false
draft = false
comment = true
toc = true
reward = true
pinned = false
categories = ["Linux"]
tags = ["useradd", "wheel", "sudo"]
series = ["Arch Linux 安裝指南"]
images = []
nav_weight = 10
[nav_icon]
vendor = "bs"
name = "person"
+++

## 創建用戶

{{< page-resource-content "code/useradd" >}}

- `foobar` 為用戶名，請自行修改。
- `-G` 指定用戶組，`wheel` 是一個特殊的用戶組，用於獲取管理員權限（sudo），後續步驟會進行說明。

## 設置密碼

{{< page-resource-content "code/passwd" >}}

## Sudoer

為了讓用戶可以獲取管理員權限，我們需要修改 sudo 的配置。

{{< page-resource-content "code/visudo" >}}

若出現類似 `visudo: no editor found (editor path = /usr/bin/vi)` 等找不到編輯器的錯誤，可以通過 `EDITOR` 指定編輯器，或者安裝對應的編輯器。

{{< page-resource-content "code/visudo-editor" >}}

{{< page-resource-content "code/visudo-conf" >}}

去掉 `%wheel ALL=(ALL:ALL) ALL` 前面的 `#` 以取消註釋，讓 `wheel` 用戶組獲得管理員權限。
