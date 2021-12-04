---
title: PHP 编译安装详解
date: 2019-02-22T05:23:30+00:00
categories:
  - Programing
tags:
  - PHP
---

前段时间，想尝试下 PHP 的多线程扩展 [pthreads][1]，由于其要求 PHP 启用 ZTS （Zend Thread Safety），  
但是笔者所使用的发行版所能安装的 PHP 包都是 non-zts 的，所以只能自行编译和安装 PHP 了。

<!--more-->

> 题外话，貌似基本大多数 Linux 发行版的 PHP 包都是 non-zts 的，比如 Ubuntu、CentOS、Arch Linux 等。  
> 不过据我所知，Arch Linux AUR 有 ZTS 版本的 PHP，传送门可在本文底部[相关链接][2]找到。  
> 另外 Gentoo 的话，PHP 默认是 ZTS 的。

话不多说，让我们开始正题。

## 下载

首先需要下载 PHP 的源码包 - [下载地址][3]。

> 本文以最新的 PHP 版本 - 7.2 为例，题外话：`pthreads(v3)` 只能在 PHP 7.2 使用。

```shell
$ wget -O php-7.2.12.tar.gz http://cn2.php.net/get/php-7.2.12.tar.gz/from/this/mirror
$ tar xvf php-7.2.12.tar.gz
$ cd php-7.2.12
```

  * `wget -O` 指定写入（下载）的文件名称

这里我们下载和解压 PHP 的源码，并进入解压后的 PHP 目录，下一步编译时，需要在此目录进行操作。

## 编译

接下来就是编译

### 编译参数

我们可以通过以下命令，查看目标版本支持的所有编译参数：

```shell
$ ./configure --help
```

这里就不详尽介绍所有的参数了，本文只对一些重要的信息进行说明：

  * `--prefix`：最终安装的 PHP 目录，比如 `/usr/local`，由于笔者一般会使用多个 PHP 版本，目录一般会带上主次版本号，比如本文所使用到的：`/usr/local/php72`
  * `--enable-maintainer-zts`：启用 ZTS - 线程安全，必要参数
  * `--enable-fpm`：启用 PHP-FPM
  * `--with-gd`：启用 GD 库
  * `--enable-pcntl`：PHP 多进程扩展，适用于 *nix 系统
  * `--with-pdo-mysql`：MySQL PDO 驱动

本文以以下配置进行 PHP 编译，请根据需要自行增删：

```shell
$ ./configure \
  --prefix=/usr/local/php72 \
  --enable-maintainer-zts \
  --enable-fpm \
  --with-gd --with-freetype \
  --enable-pcntl \
  --with-pdo-mysql --with-mysqli \
  --with-mcrypt \
  --enable-soap \
  --enable-sockets \
  --enable-pcntl \
  --enable-intl
```

> 配置期间，会检测系统的依赖，由于笔者 Linux 发行版已安装了自带的 PHP，所有依赖基本都自行解决了，所以无需额外安装其他依赖。  
> 由于依赖因配置、系统的不同（不同发行版有着其自己的包管理方式，比如 apt、yum、emerge、pacman etc...）而解决方法不同，所以如果遇到编译错误或者缺少依赖，请自行 Google 解决。

## 安装

紧接着，安装：

```shell
$ make && make install
```

在 `make install` 之前，你也可以进行测试 `make test`（可选）。

`make install` 可能需要 root 权限，鉴于要写入到之前编译配置的 `--prefix` 目录。

> 如果修改了编译配置，你可能需要 `make clean`，然后再安装。

### 验证安装

```shell
$ /usr/local/php72/bin/php -v
    
PHP 7.2.12 (cli) (built: Nov 29 2018 14:57:26) ( ZTS )
Copyright (c) 1997-2018 The PHP Group
Zend Engine v3.2.0, Copyright (c) 1998-2018 Zend Technologies
```

其中会有 `ZTS` 字眼，说明我们安装的是线程安全版。

### 配置文件

安装完成后，先复制一下配置文件，这里笔者将配置文件分开两个，一个专用于 `CLI` 模式。因为 `CLI` 和其他模式可能会有一丝差异，比如 `pthreads` 仅限于 `CLI` 模式使用。

```shell
$ cp ./php.ini-development /usr/local/php72/lib/php.ini
$ cp ./php.ini-development /usr/local/php72/lib/php-cli.ini
```

> 如果打算配置的是生产环境，将 `php.ini-development` 替换为 `php.ini-production` 即可。

测试命令行模式是否加载到正确的配置文件：

```shell
$ /usr/local/php72/bin/php --ini
    
Configuration File (php.ini) Path: /usr/local/php72/lib
Loaded Configuration File:         /usr/local/php72/lib/php-cli.ini
Scan for additional .ini files in: (none)
Additional .ini files parsed:      (none)
```

### 软连接

自此，我们已经完成 PHP 编译安装，最后为新安装的 PHP 脚本建立软连接，这样就不需要每次那么繁琐地输入脚本的完整路径了：

```shell
$ ln -s /usr/local/php72/bin/php /usr/local/bin/php72
```

接着验证是否有效：

```shell
$ php72 -v
```

## 相关链接

  * [Arch Linux AUR - PHP ZTS][4]

 [1]: http://php.net/manual/zh/book.pthreads.php
 [2]: #相关链接
 [3]: http://php.net/downloads.php
 [4]: https://aur.archlinux.org/pkgbase/php-zts/
