+++
type = "docs"
title = "Linux 和 Windows 双系统时间冲突的原因和解决方法"
date = 2022-04-19T12:31:46+08:00
# description = "" # Used by description meta tag, summary will be used instead if not set or empty.
featured = true
draft = false
comment = true
toc = true
reward = true
pinned = false
categories = ["Windows", "Linux"]
tags = ["Dual Boot", "hardware clock", "system-clock", "UTC", "localtime"]
series = ["System"]
images = []
+++

相信不少刚安装完 Linux 和 Windows 双系统的童鞋们，都会遇到两个系统之间的时间冲突问题。本文将简要地阐明其中原由，并给出相应的解决方法。

<!--more-->

## 硬件时钟和系统时钟

Linux 系统存在着两个时钟：硬件时钟（hardware clock，RTC）和系统时钟（system clock）。硬件时钟位于主板，其由电池驱动，即使电脑没电仍然继续工作。我们可以通过 BIOS 界面或者操作系统对硬件时钟进行设置。而系统时钟由 Linux 维护，初始化后就独立于硬件时钟运行。大多数操作系统的标准行为如下：

1. 于启动时，基于硬件时钟对系统时钟进行初始化。
1. 系统时钟保持精确的时间。
1. 于关机时，基于系统时钟对硬件时钟进行设置。

## 时间标准

有两个时间标准：localtime 和 UTC。而不同操作系统之间，使用的时间标准是不一样的。默认地，Windows 使用 localtime，macOS 使用 UTC，其他 UNIX 和类 UNIX 系统各有不同。

## 解决方法

正因不同操作系统使用了不同的时间标准，才会产生两个系统之间时间冲突的问题。解决方法也很简单，统一多个系统的时间标准即可。

### Windows 使用 UTC

于 Windows 系统，以管理员身份启动终端执行以下命令：

```shell
reg add "HKEY_LOCAL_MACHINE\System\CurrentControlSet\Control\TimeZoneInformation" /v RealTimeIsUniversal /d 1 /t REG_DWORD /f
```

### Linux 使用 localtime

```shell
$ timedatectl set-local-rtc 1
```

### 结论

那么问题来了，究竟是用 localtime 呢？还是 UTC 呢？ 在引导时，硬件时钟使用 localtime 可能会导致一些意想不到的行为。所以笔者还是推荐在 Windows 使用 UTC 的做法。
