---
title: unzip 基本用法
date: 2019-12-22T01:12:28+00:00
categories:
  - Linux
tags:
  - UnZip
---

Linux 下 unzip 的使用說明。

<!--more-->

## 安裝

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

### 解壓到指定目錄

使用 `-d` 指定要解壓到的目錄：

```shell
$ unzip file.zip -d /path/to/dir
```

### 幫助

```shell
$ unzip -h
```
