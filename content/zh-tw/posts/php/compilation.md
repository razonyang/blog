---
title: PHP 編譯安裝詳解
date: 2019-02-22T05:23:30+00:00
categories:
  - Programing
tags:
  - PHP
---

前段時間，想嘗試下 PHP 的多線程擴展 [pthreads][1]，由於其要求 PHP 啟用 ZTS （Zend Thread Safety），  
但是筆者所使用的發行版所能安裝的 PHP 包都是 non-zts 的，所以只能自行編譯和安裝 PHP 了。

<!--more-->

> 題外話，貌似基本大多數 Linux 發行版的 PHP 包都是 non-zts 的，比如 Ubuntu、CentOS、Arch Linux 等。  
> 不過據我所知，Arch Linux AUR 有 ZTS 版本的 PHP，傳送門可在本文底部[相關鏈接][2]找到。  
> 另外 Gentoo 的話，PHP 默認是 ZTS 的。

話不多說，讓我們開始正題。

## 下載

首先需要下載 PHP 的源碼包 - [下載地址][3]。

> 本文以最新的 PHP 版本 - 7.2 為例，題外話：`pthreads(v3)` 只能在 PHP 7.2 使用。

```shell
$ wget -O php-7.2.12.tar.gz http://cn2.php.net/get/php-7.2.12.tar.gz/from/this/mirror
$ tar xvf php-7.2.12.tar.gz
$ cd php-7.2.12
```

  * `wget -O` 指定寫入（下載）的文件名稱

這裡我們下載和解壓 PHP 的源碼，並進入解壓後的 PHP 目錄，下一步編譯時，需要在此目錄進行操作。

## 編譯

接下來就是編譯

### 編譯參數

我們可以通過以下命令，查看目標版本支持的所有編譯參數：

```shell
$ ./configure --help
```

這裡就不詳盡介紹所有的參數了，本文只對一些重要的信息進行說明：

  * `--prefix`：最終安裝的 PHP 目錄，比如 `/usr/local`，由於筆者一般會使用多個 PHP 版本，目錄一般會帶上主次版本號，比如本文所使用到的：`/usr/local/php72`
  * `--enable-maintainer-zts`：啟用 ZTS - 線程安全，必要參數
  * `--enable-fpm`：啟用 PHP-FPM
  * `--with-gd`：啟用 GD 庫
  * `--enable-pcntl`：PHP 多進程擴展，適用於 *nix 系統
  * `--with-pdo-mysql`：MySQL PDO 驅動

本文以以下配置進行 PHP 編譯，請根據需要自行增刪：

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

> 配置期間，會檢測系統的依賴，由於筆者 Linux 發行版已安裝了自帶的 PHP，所有依賴基本都自行解決了，所以無需額外安裝其他依賴。  
> 由於依賴因配置、系統的不同（不同發行版有著其自己的包管理方式，比如 apt、yum、emerge、pacman etc...）而解決方法不同，所以如果遇到編譯錯誤或者缺少依賴，請自行 Google 解決。

## 安裝

緊接著，安裝：

```shell
$ make && make install
```

在 `make install` 之前，你也可以進行測試 `make test`（可選）。

`make install` 可能需要 root 權限，鑑於要寫入到之前編譯配置的 `--prefix` 目錄。

> 如果修改了編譯配置，你可能需要 `make clean`，然後再安裝。

### 驗證安裝

```shell
$ /usr/local/php72/bin/php -v
    
PHP 7.2.12 (cli) (built: Nov 29 2018 14:57:26) ( ZTS )
Copyright (c) 1997-2018 The PHP Group
Zend Engine v3.2.0, Copyright (c) 1998-2018 Zend Technologies
```

其中會有 `ZTS` 字眼，說明我們安裝的是線程安全版。

### 配置文件

安裝完成後，先複製一下配置文件，這裡筆者將配置文件分開兩個，一個專用於 `CLI` 模式。因為 `CLI` 和其他模式可能會有一絲差異，比如 `pthreads` 僅限於 `CLI` 模式使用。

```shell
$ cp ./php.ini-development /usr/local/php72/lib/php.ini
$ cp ./php.ini-development /usr/local/php72/lib/php-cli.ini
```

> 如果打算配置的是生產環境，將 `php.ini-development` 替換為 `php.ini-production` 即可。

測試命令行模式是否加載到正確的配置文件：

```shell
$ /usr/local/php72/bin/php --ini
    
Configuration File (php.ini) Path: /usr/local/php72/lib
Loaded Configuration File:         /usr/local/php72/lib/php-cli.ini
Scan for additional .ini files in: (none)
Additional .ini files parsed:      (none)
```

### 軟連接

自此，我們已經完成 PHP 編譯安裝，最後為新安裝的 PHP 腳本建立軟連接，這樣就不需要每次那麼繁瑣地輸入腳本的完整路徑了：

```shell
$ ln -s /usr/local/php72/bin/php /usr/local/bin/php72
```

接著驗證是否有效：

```shell
$ php72 -v
```

## 相關鏈接

  * [Arch Linux AUR - PHP ZTS][4]

 [1]: http://php.net/manual/zh/book.pthreads.php
 [2]: #相關鏈接
 [3]: http://php.net/downloads.php
 [4]: https://aur.archlinux.org/pkgbase/php-zts/
