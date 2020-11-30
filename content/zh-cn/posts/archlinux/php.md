---
title: Arch Linux 安装 PHP
date: 2019-12-21T12:37:19+00:00
categories:
  - Linux
tags:
  - Arch Linux
  - PHP
---

Arch Linux 安装 PHP 教程。

<!--more-->

## 安装

```shell
# pacman -S php \
  php-fpm \
  composer \
  php-gd \
  php-intl
```

可以通过 `sudo pacman -Ss php-` 列出相关扩展。

## FPM 配置

```shell
# vim /etc/php/php-fpm.d/www.conf
```

### 开机自启

```shell
# systemctl enable php-fpm
```
