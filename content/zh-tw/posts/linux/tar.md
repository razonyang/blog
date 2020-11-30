---
title: tar 基本用法
date: 2019-12-22T07:04:00+00:00
categories:
  - Linux
tags:
  - tar
---

Linux 下 tar 的使用說明。

<!--more-->

## 解壓

```shell
$ tar -xvf archive.tar
```

  * **x** 表示解壓。
  * **f** 表示要解壓的文件。
  * **v** 可以忽略，其表示 Verbose 模式。

### 解壓到指定目錄

可以通過 **-C** 參數指定解壓到的目錄：

```shell
$ tar -xvf archive.tar -C /path/to/dir
```

## 壓縮

將 foo 和 bar 壓縮到 archive.tar：

```shell
$ tar -cf archive.tar foo bar
```

  * **c** 表示創建壓縮文件。
  * **f** 表示要壓縮到的文件。

### 壓縮目錄

```shell
$ tar -zvcf archive.tar /path/to/dir
```

  * **z** 使用 gzip 進行壓縮。

## 幫助

```shell
$ tar --help
```
