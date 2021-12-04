---
title: PHP pthreads 多线程扩展安装教程
date: 2019-08-01T05:36:15+00:00
categories:
  - Programing
tags:
  - PHP
  - pthreads
---

本文阐述如何在 Linux 下安装 PHP 的多线程扩展 - [pthreads][1]。

<!--more-->

## 要求

> 笔者安装的是 pthreads v3。

  * PHP 7.2 以上
  * ZTS：线程安全

由于笔者的操作系统自带的 PHP 是非 ZTS 的，所以按照 [PHP 编译安装详解][2] 编译安装 PHP ZTS 版。

## 安装

安装有两种方式：`pecl` 和 源码安装，不过笔者尝试过 `pecl` 安装失败，上面的 pthreads 包也是 2016 年的，所以笔者放弃 `pecl` 安装方式，  
本文将使用源码编译安装。

```shell
$ git clone https://github.com/krakjoe/pthreads.git
$ cd pthreads

$ /usr/local/php72/bin/phpize
$ ./configure --with-php-config=/usr/local/php72/bin/php-config

$ make

$ make install
Installing shared extensions: /usr/local/php72/lib/php/extensions/no-debug-zts-20170718/
```

  * `./configure --with-php-config`：`--with-php-config` 是可选的，但由于笔者是编译安装的，所以可能需要指定 PHP 的配置脚本路径，以避免意想不到的问题。

> 上述 `phpize`、`php-config` 等脚本请按照自己系统的配置自行修改。

### 配置

安装成功后，在配置文件加入一行 `extension=pthreads.so`，比如笔者的 `CLI` 配置为：`/usr/local/php72/lib/php-cli.ini`：

```shell
$ vi /usr/local/php72/lib/php-cli.ini
    
extension=pthreads.so
```

> 这里笔者特意分开命令行和其他模式的配置文件，因为 `pthreads` 仅限于 CLI 模式使用。

验证是否成功加载：

```shell
$ php72 -m | grep pthreads
pthreads
```

如果没有输出，则说明配置不对，请检查配置是否正确。可以通过 `php72 --ini` 查看所加载的配置文件是否分正确。

> `php72` 是笔者自行编译的 PHP ZTS 版脚本，请修改成你系统对应的脚本名称。

自此，`pthreads` 安装完成。

 [1]: http://php.net/manual/en/book.pthreads.php
 [2]: /posts/php/compilation
