+++
type = "docs"
title = "创建用户"
linkTitle = "创建用户"
description = "基于安全性等方面的考虑，通常我们不会以 root 用户来使用系统，本文将介绍如何创建一个非特权的用户。"
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
series = ["Arch Linux 安装指南"]
images = []
nav_weight = 10
[nav_icon]
vendor = "bs"
name = "person"
+++

## 创建用户

{{< page-resource-content "code/useradd" >}}

- `foobar` 为用户名，请自行修改。
- `-G` 指定用户组，`wheel` 是一个特殊的用户组，用于获取管理员权限（sudo），后续步骤会进行说明。

## 设置密码

{{< page-resource-content "code/passwd" >}}

## Sudoer

为了让用户可以获取管理员权限，我们需要修改 sudo 的配置。

{{< page-resource-content "code/visudo" >}}

若出现类似 `visudo: no editor found (editor path = /usr/bin/vi)` 等找不到编辑器的错误，可以通过 `EDITOR` 指定编辑器，或者安装对应的编辑器。

{{< page-resource-content "code/visudo-editor" >}}

{{< page-resource-content "code/visudo-conf" >}}

去掉 `%wheel ALL=(ALL:ALL) ALL` 前面的 `#` 以取消注释，让 `wheel` 用户组获得管理员权限。
