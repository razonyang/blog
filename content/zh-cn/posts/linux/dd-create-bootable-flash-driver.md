---
title: 利用 dd 命令刻录 U 盘系统启动盘
date: 2020-02-19T10:56:59+00:00
categories:
  - Linux
tags:
  - dd
---

在 Linux 或者 macOS 下，我们可以通过 `dd` 刻录系统启动盘到U盘里。

<!--more-->

首先需要准备一个系统镜像和一个的 U 盘。

接着查看U盘的设备标识：

```shell
$ sudo fdisk -l
```

比如我们这里获得的U盘标识为**/dev/sdX**。

最后使用 `dd` 刻录即可：

```shell
$ sudo dd if=/path/to/system.iso of=/dev/sdX status=progress
```

  * `if`：input file，系统镜像的路径。
  * `of`：output file，目标设备，**/dev/sdX** 为上一步骤获得的U盘的标识。
  * `status`：设置为 `progress` 可以显示写入状态。
