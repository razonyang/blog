---
title: YAY 设置 AUR 镜像
date: 2020-01-06T22:44:52+00:00
categories:
  - Linux
tags:
  - Arch Linux
  - AUR
  - YAY
---

YAY 默认的 AUR 镜像很慢，我们可以通过 `--aururl` 指定国内的 AUR 镜像。

<!--more-->

```shell
$ yay --aururl "mirror“ --save
```

比如清华 AUR 镜像

```shell
$ yay --aururl "https://aur.tuna.tsinghua.edu.cn" --save
```
