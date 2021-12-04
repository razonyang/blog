---
title: Arch Linux 如何安裝多個 PHP 版本
date: 2019-12-22T04:40:59+00:00
categories:
  - Linux
tags:
  - Arch Linux
  - PHP
---

PHP 項目開發難免會需要使用到多個 PHP 版本，本文將介紹如何在 Arch Linux 上安裝多個 PHP 版本。

<!--more-->

首先我們需要先安裝一個 [AUR 助手][1]，本文以 [YAY][2] 為例。

## 檢索

假設我們要安裝 PHP 7.2：

```shell
$ yay -Ss php72
```

則會列出所有關於 PHP 7.2 相關的軟件包，按需安裝即可。

## 安裝

```shell
$ yay -S php72 php72-fpm php72-intl php72-gd
$ php72 -v
PHP 7.2.25 (cli) (built: Dec 22 2019 04:31:17) ( NTS )
Copyright (c) 1997-2018 The PHP Group
Zend Engine v3.2.0, Copyright (c) 1998-2018 Zend Technologies
```

## 配置

配置位於 **/etc/php72/**，按需修改即可。

## 其他版本

其他版本也一樣，將 php72 改成相應的版本即可，如：php56、php70、php71。

## 題外話

對於新項目，筆者都是用最新版本的，現在[官方支持的 PHP 版本][3]最低為 7.2，使用舊版本，出問題需要升級 PHP 時，就可能出現比較多麻煩事，所以最新版應該是新項目的最佳選擇。

 [1]: https://wiki.archlinux.org/index.php/AUR_helpers
 [2]: /posts/archlinux/yay
 [3]: https://www.php.net/supported-versions.php
