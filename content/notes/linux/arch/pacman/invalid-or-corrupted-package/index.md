+++
type = "docs"
title = "pacman Invalid or Corrupted Package"
linkTitle = "Invalid or Corrupted Package"
date = 2022-05-01T09:00:05+08:00
# description = "" # Used by description meta tag, summary will be used instead if not set or empty.
featured = false
draft = false
comment = true
toc = true
reward = true
pinned = false
carousel = false
categories = ["Arch Linux"]
tags = ["pacman", "archlinux-keyring"]
series = ["Linux"]
images = []
+++

今天更新 Arch Linux 时出现以下错误：

> File *** is corrupted (invalid or corrupted package (PGP signature)).

更新 `archlinux-keyring` 包即可解决。

<!--more-->

```shell
$ sudo pacman -Sy archlinux-keyring
```

然后更新系统：

```shell
$ sudo pacman -Syu
```
