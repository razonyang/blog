+++
type = "docs"
title = "Arch Linux 安裝指南 - 創建用戶"
linkTitle = "創建用戶"
date = 2022-05-19T14:39:26+08:00
# description = ""
featured = false
draft = false
comment = true
toc = true
reward = true
pinned = false
categories = ["Linux"]
tags = ["useradd"]
series = ["Arch Linux 安裝指南"]
images = []
nav_weight = 60
+++

通常我們不會以 root 用戶來使用系統，本文將介紹如何創建一個非特權的用戶。

<!--more-->

## 創建用戶

```bash
$ sudo useradd -G wheel -m foobar
```

- `foobar` 爲用戶名，請自行修改。
- `-G` 指定用戶組，`wheel` 是一個特殊的用戶組，用於獲取管理員權限（sudo），後續步驟會進行說明。

## 設置密碼

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

去掉 `%wheel ALL=(ALL:ALL) ALL` 前面的 `#` 以取消註釋，讓 `wheel` 用戶組獲得管理員權限。
