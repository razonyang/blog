---
title: Arch Linux 安裝 PHP
date: 2019-12-21T12:37:19+00:00
categories:
  - Linux
tags:
  - Arch Linux
  - PHP
---

Arch Linux 安裝 PHP 教程。

<!--more-->

## 安裝

```shell
# pacman -S php \
  php-fpm \
  composer \
  php-gd \
  php-intl
```

可以通過 `sudo pacman -Ss php-` 列出相關擴展。

## FPM 配置

```shell
# vim /etc/php/php-fpm.d/www.conf
```

### 開機自啟

```shell
# systemctl enable php-fpm
```
