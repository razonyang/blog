+++
type = "docs"
title = "Arch Linux 声音"
linkTitle = "声音"
date = 2022-12-05T12:44:12+08:00
# description = ""
featured = false
draft = false
comment = true
toc = true
reward = true
pinned = false
categories = []
tags = ["ALSA"]
series = []
images = []
+++

系统安装后，有可能无法识别一些声音设备，比如耳机。

<!--more-->

先安装 ALSA 工具和一些固件：

```
$ sudo pacman -S alsa-utils alsa-firmware sof-firmware alsa-ucm-conf
```

然后重启即可。
