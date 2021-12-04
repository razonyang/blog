---
title: unzip 基本用法
date: 2019-12-22T01:12:28+00:00
categories:
  - Linux
tags:
  - UnZip
---

Linux 下 unzip 的使用说明。

<!--more-->

## 安装

### Ubuntu

```shell
# apt install unzip
```

### CentOS

```shell
# yum install unzip
```

### Arch Linux

```shell
# pacman -S unzip
```

## 用法

```shell
$ unzip file.zip
```

### 解压到指定目录

使用 `-d` 指定要解压到的目录：

```shell
$ unzip file.zip -d /path/to/dir
```

### 帮助

```shell
$ unzip -h
```
