+++
# type = "docs"
title = "Linux 没有正确识别扬声器输出设备的解决方法"
date = 2022-05-01T10:49:37+08:00
# description = "" # Used by description meta tag, summary will be used instead if not set or empty.
featured = false
draft = false
comment = true
toc = true
reward = true
pinned = false
categories = []
tags = ["Audio", "Speaker"]
series = ["Linux"]
images = []
+++

最近在新买的笔记本上安装了 Arch Linux，不过没有正确识别扬声器输出设备，这是因为新型的笔记本还需要安装 `sof-firmware` 和 `alsa-ucm-conf` 固件。

<!--more-->

```shell
$ sudo pacman -S sof-firmware alsa-ucm-conf
```

安装后，重启即可。
