+++
type = "docs"
title = "Arch Linux 安装指南 - 创建用户"
linkTitle = "创建用户"
date = 2022-05-19T14:39:26+08:00
# description = ""
featured = false
draft = false
comment = true
toc = true
reward = true
pinned = false
carousel = false
categories = ["Linux"]
tags = ["useradd"]
series = ["Arch Linux 安装指南"]
images = []
navWeight = 60
+++

通常我们不会以 root 用户来使用系统，本文将介绍如何创建一个非特权的用户。

<!--more-->

## 创建用户

```bash
$ sudo useradd -G wheel -m foobar
```

- `foobar` 为用户名，请自行修改。
- `-G` 指定用户组，`wheel` 是一个特殊的用户组，用于获取管理员权限（sudo），后续步骤会进行说明。

## 设置密码

```bash
$ sudo passwd foobar
```

## Sudoer

```bash
$ sudo visudo
```

```text
## Uncomment to allow members of group wheel to execute any command
#%wheel ALL=(ALL:ALL) ALL
```

去掉 `%wheel ALL=(ALL:ALL) ALL` 前面的 `#` 以取消注释，让 `wheel` 用户组获得管理员权限。
