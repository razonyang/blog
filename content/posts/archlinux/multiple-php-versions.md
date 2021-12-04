---
title: Arch Linux 如何安装多个 PHP 版本
date: 2019-12-22T04:40:59+00:00
categories:
  - Linux
tags:
  - Arch Linux
  - PHP
---

PHP 项目开发难免会需要使用到多个 PHP 版本，本文将介绍如何在 Arch Linux 上安装多个 PHP 版本。

<!--more-->

首先我们需要先安装一个 [AUR 助手][1]，本文以 [YAY][2] 为例。

## 检索

假设我们要安装 PHP 7.2：

```shell
$ yay -Ss php72
```

则会列出所有关于 PHP 7.2 相关的软件包，按需安装即可。

## 安装

```shell
$ yay -S php72 php72-fpm php72-intl php72-gd
$ php72 -v
PHP 7.2.25 (cli) (built: Dec 22 2019 04:31:17) ( NTS )
Copyright (c) 1997-2018 The PHP Group
Zend Engine v3.2.0, Copyright (c) 1998-2018 Zend Technologies
```

## 配置

配置位于 **/etc/php72/**，按需修改即可。

## 其他版本

其他版本也一样，将 php72 改成相应的版本即可，如：php56、php70、php71。

## 题外话

对于新项目，笔者都是用最新版本的，现在[官方支持的 PHP 版本][3]最低为 7.2，使用旧版本，出问题需要升级 PHP 时，就可能出现比较多麻烦事，所以最新版应该是新项目的最佳选择。

 [1]: https://wiki.archlinux.org/index.php/AUR_helpers
 [2]: /posts/archlinux/yay
 [3]: https://www.php.net/supported-versions.php
