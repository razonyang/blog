---
title: YAY 設置 AUR 鏡像
date: 2020-01-06T22:44:52+00:00
categories:
  - Linux
tags:
  - Arch Linux
  - AUR
  - YAY
---

YAY 默認的 AUR 鏡像很慢，我們可以通過 `--aururl` 指定國內的 AUR 鏡像。

<!--more-->

```shell
$ yay --aururl "mirror“ --save
```

比如清華 AUR 鏡像

```shell
$ yay --aururl "https://aur.tuna.tsinghua.edu.cn" --save
```
