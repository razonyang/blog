---
title: 利用 dd 命令刻錄 U 盤系統啟動盤
date: 2020-02-19T10:56:59+00:00
categories:
  - Linux
tags:
  - dd
---

在 Linux 或者 macOS 下，我們可以通過 `dd` 刻錄系統啟動盤到U盤裡。

<!--more-->

首先需要準備一個系統鏡像和一個的 U 盤。

接著查看U盤的設備標識：

```shell
$ sudo fdisk -l
```

比如我們這裡獲得的U盤標識為**/dev/sdX**。

最後使用 `dd` 刻錄即可：

```shell
$ sudo dd if=/path/to/system.iso of=/dev/sdX status=progress
```

  * `if`：input file，系統鏡像的路徑。
  * `of`：output file，目標設備，**/dev/sdX** 為上一步驟獲得的U盤的標識。
  * `status`：設置為 `progress` 可以顯示寫入狀態。
