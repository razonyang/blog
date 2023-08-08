+++
title = "Arch Linux 重置 keyring"
date = 2022-08-28T11:19:13+08:00
# description = ""
featured = false
draft = false
comment = true
toc = true
reward = true
pinned = false
categories = ["Development"]
tags = ["ArchLinux"]
series = []
images = []
+++

最近大半年都在使用 WSL2 进行开发，今天切换到 Arch Linux 打算更新下系统，不出意外地出现了各种问题。

<!--more-->

```
error: failed to commit transaction (invalid or corrupted package (PGP signature))
Errors occured, no packages were upgraded.
```

`sudo pacman -S archlinux-keyring` 和 `sudo pacman-key --refresh-key` 都无法成功执行和解决问题。

于是打算重置 keyring 试试。

```bash
$ sudo rm -rf /etc/pacman.d/gnupg
$ sudo pacman-key --init
$ sudo pacman-key --populate archlinux
```

最后终于可以对系统进行全量更新了。
