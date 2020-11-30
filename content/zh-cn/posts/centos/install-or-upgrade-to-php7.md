---
title: CentOS 安装或升级到 PHP 7
date: 2018-12-01T03:25:15+00:00
categories:
  - Linux
tags:
  - CentOS
  - PHP
  - PHP7
---

CentOS 官方仓库的 PHP 版本是 5.4，但此版本已经不再被官方支持，考虑到安全问题和更好的性能，我们有必要安装或升级更高版本的 PHP，比如最新的 7.2。

<!--more-->

那么我们进入正文，首先我们需要安装 EPEL 和 Remi，至于这两个是什么，有兴趣的童鞋可以在相关链接进行查阅。

## 仓库

### 安装 EPEL

```shell
# yum install epel-release
```

### 安装 Remi

```shell
# yum install https://rpms.remirepo.net/enterprise/remi-release-7.rpm
```

### 启用 PHP 仓库

```shell
# yum-config-manager --enable remi-php72
```

你也可以选择其他版本，如：`remi-php56`，`remi-php70`，`remi-php71`。

> 如果 `yum-config-manager` 命令不存在，你需要安装 `yum-utils`：`yum -y install yum-utils`。

## 安装或升级

### 安装 PHP

```shell
# yum install php
```

### 升级 PHP

```shell
# yum update
```

## 相关链接

  * [Extra Packages for Enterprise Linux][1]
  * [What is Remi repository][2]
  * [Install PHP 7 on CentOS, RHEL or Fedora][3]

 [1]: https://fedoraproject.org/wiki/EPEL
 [2]: https://blog.remirepo.net/pages/English-FAQ#goal
 [3]: https://blog.remirepo.net/post/2016/02/14/Install-PHP-7-on-CentOS-RHEL-Fedora
