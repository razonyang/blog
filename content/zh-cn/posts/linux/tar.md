---
title: tar 基本用法
date: 2019-12-22T07:04:00+00:00
categories:
  - Linux
tags:
  - tar
---

Linux 下 tar 的使用说明。

<!--more-->

## 解压

```shell
$ tar -xvf archive.tar
```

  * **x** 表示解压。
  * **f** 表示要解压的文件。
  * **v** 可以忽略，其表示 Verbose 模式。

### 解压到指定目录

可以通过 **-C** 参数指定解压到的目录：

```shell
$ tar -xvf archive.tar -C /path/to/dir
```

## 压缩

将 foo 和 bar 压缩到 archive.tar：

```shell
$ tar -cf archive.tar foo bar
```

  * **c** 表示创建压缩文件。
  * **f** 表示要压缩到的文件。

### 压缩目录

```shell
$ tar -zvcf archive.tar /path/to/dir
```

  * **z** 使用 gzip 进行压缩。

## 帮助

```shell
$ tar --help
```
