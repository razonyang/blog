---
title: CentOS 安装免费 Let’s Encrypt SSL 证书
date: 2020-01-08T07:08:15+00:00
categories:
  - Linux
tags:
  - CentOS
  - Let's Encrypt
  - Nginx
  - SSL
---

CentOS 安装免费 Let’s Encrypt SSL 证书教程。

<!--more-->

## 安装

CentOS 8

```shell
# curl -O https://dl.eff.org/certbot-auto
# mv certbot-auto /usr/local/bin/certbot-auto
# chmod 0755 /usr/local/bin/certbot-auto
```

CentOS 7

```shell
# yum install certbot-nginx
```

## 生成证书

CentOS 8

```shell
# /usr/local/bin/certbot-auto --nginx -d errlogs.com -d www.errlogs.com
```

CentOS 7

```shell
# certbot --nginx -d errlogs.com -d www.errlogs.com
```

  * **-d** 指定域名

## 自动更新

证书有效期为三个月，我们需要添加定时任务自动更新证书。

```shell
# crontab -e
# CentOS 8
2 0 * * * /usr/local/bin/certbot-auto renew --dry-run

# CentOS 7
2 0 * * * /usr/bin/certbot renew --quiet

# systemctl reload crond
```
