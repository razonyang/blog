+++
title = "GRUB 如何設置 Linux 內核參數"
date = 2022-11-29T20:47:53+08:00
# description = ""
featured = false
draft = false
comment = true
toc = true
reward = true
pinned = false
carousel = false
categories = ["Linux"]
tags = ["GRUB"]
series = ["Development"]
images = []
+++

今天對 Arch Linux 系統進行全量更新重啟後，發現外置顯示器無法識別了，查看 `dmesg` 的信息後，發現 NVIDIA 模塊並未成功加載。經查閱 WIKI 後，需要設置 `ibt=off` 內核參數。
本文將記錄 GRUB 如何設置 Linux 內核參數。

<!--more-->

## 臨時修改

臨時修改可以方便地測試和驗證內核參數是否有效地解決問題，而這只需要在系統啟動時，選中條目，`e` 鍵即可進入編輯模式，將參數追加到 `linux` 所在行。

## 永久修改

經過臨時修改驗證後，是時候將其修改永久保存，將內核參數追加到 `/etc/default/grub` 文件中的 `GRUB_CMDLINE_LINUX_DEFAULT`，每個參數以空格隔開。比如：

```text
GRUB_CMDLINE_LINUX_DEFAULT="loglevel=3 quiet ibt=off"
```

保存後，重新生成 GRUB 的配置文件，這裏以 Arch 為例。

```bash
sudo grub-mkconfig -o /boot/grub/grub.cfg
```

最後重啟即可。
