+++
title = "GRUB 如何设置 Linux 内核参数"
date = 2022-11-29T20:47:53+08:00
# description = ""
featured = false
draft = false
comment = true
toc = true
reward = true
pinned = false
categories = ["Linux"]
tags = ["GRUB"]
series = ["Development"]
images = []
+++

今天对 Arch Linux 系统进行全量更新重启后，发现外置显示器无法识别了，查看 `dmesg` 的信息后，发现 NVIDIA 模块并未成功加载。经查阅 WIKI 后，需要设置 `ibt=off` 内核参数。
本文将记录 GRUB 如何设置 Linux 内核参数。

<!--more-->

## 临时修改

临时修改可以方便地测试和验证内核参数是否有效地解决问题，而这只需要在系统启动时，选中条目，`e` 键即可进入编辑模式，将参数追加到 `linux` 所在行。

## 永久修改

经过临时修改验证后，是时候将其修改永久保存，将内核参数追加到 `/etc/default/grub` 文件中的 `GRUB_CMDLINE_LINUX_DEFAULT`，每个参数以空格隔开。比如：

```text
GRUB_CMDLINE_LINUX_DEFAULT="loglevel=3 quiet ibt=off"
```

保存后，重新生成 GRUB 的配置文件，这里以 Arch 为例。

```bash
sudo grub-mkconfig -o /boot/grub/grub.cfg
```

最后重启即可。
