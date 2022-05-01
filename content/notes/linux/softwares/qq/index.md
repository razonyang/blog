+++
type = "docs"
title = "Linux 官方版 QQ"
linkTitle = "QQ"
date = 2022-04-30T13:18:09+08:00
# description = "" # Used by description meta tag, summary will be used instead if not set or empty.
featured = false
draft = false
comment = true
toc = true
reward = true
pinned = false
carousel = false
categories = ["Arch Linux"]
tags = ["QQ", "yay", "AUR"]
series = ["Linux"]
images = []
+++

由于重新安装了 Arch Linux，需要重新安装 QQ，于是乎去官网看了下，居然发现已经有官方 [Linux 版 QQ](https://im.qq.com/linuxqq/)。虽然功能稀少，UI 提升空间很大，不过对于办公沟通足矣。而且依赖少，不需要 `wine`，总体来说还是不错的。

<!--more-->

安装教程官网就有，这里不再赘述，本文补充一下在 Arch Linux 下的安装和卸载。

## Arch Linux

### 安装

除了官网下载并利用 `pacman` 安装的方式，我们还可以利用 AUR 助手进行安装，比如 `yay`。

```shell
$ yay -S linuxqq
```

### 卸载

```shell
$ sudo pacman -R linuxqq
```
