---
title: CentOS 安裝或升級到 PHP 7
date: 2018-12-01T03:25:15+00:00
categories:
  - Linux
tags:
  - CentOS
  - PHP
  - PHP7
---

CentOS 官方倉庫的 PHP 版本是 5.4，但此版本已經不再被官方支持，考慮到安全問題和更好的性能，我們有必要安裝或升級更高版本的 PHP，比如最新的 7.2。

<!--more-->

那麼我們進入正文，首先我們需要安裝 EPEL 和 Remi，至於這兩個是什麼，有興趣的童鞋可以在相關鏈接進行查閱。

## 倉庫

### 安裝 EPEL

```shell
# yum install epel-release
```

### 安裝 Remi

```shell
# yum install https://rpms.remirepo.net/enterprise/remi-release-7.rpm
```

### 啟用 PHP 倉庫

```shell
# yum-config-manager --enable remi-php72
```

你也可以選擇其他版本，如：`remi-php56`，`remi-php70`，`remi-php71`。

> 如果 `yum-config-manager` 命令不存在，你需要安裝 `yum-utils`：`yum -y install yum-utils`。

## 安裝或升級

### 安裝 PHP

```shell
# yum install php
```

### 升級 PHP

```shell
# yum update
```

## 相關鏈接

  * [Extra Packages for Enterprise Linux][1]
  * [What is Remi repository][2]
  * [Install PHP 7 on CentOS, RHEL or Fedora][3]

 [1]: https://fedoraproject.org/wiki/EPEL
 [2]: https://blog.remirepo.net/pages/English-FAQ#goal
 [3]: https://blog.remirepo.net/post/2016/02/14/Install-PHP-7-on-CentOS-RHEL-Fedora
