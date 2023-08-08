+++
type = "docs"
title = "Arch Linux 聲音"
linkTitle = "聲音"
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

系統安裝後，有可能無法識別一些聲音設備，比如耳機。

<!--more-->

先安裝 ALSA 工具和一些固件：

```
$ sudo pacman -S alsa-utils alsa-firmware sof-firmware alsa-ucm-conf
```

然後重啟即可。
