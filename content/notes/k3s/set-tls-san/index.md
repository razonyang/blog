---
# type: docs
title: 'K3s 设置 TLS 证书的主题别名'
description: '本文介绍两种设置 K3s TLS 证书主题别名的方法。'
date: '2025-01-30T14:28:28Z'
draft: false
categories: []
tags:
  - TLS
  - SAN
series:
  - K3s
  - K8s
  - Kubernetes
images: []
---

## 目的

相对 IP 地址而言，域名的好处就是易记和灵活性高，即便服务器 IP 改动，只需要改动对应 DNS 解析记录即可。

然而默认地，当连接 K3s 集群域名地址时，你会遇到以下类似错误（以 `example.org` 为例）：

```log
E0131 12:38:27.974601   45714 memcache.go:265] "Unhandled Error" err="couldn't get current server API group list: Get \"https://example.org:6443/api?timeout=32s\": tls: failed to verify certificate: x509: certificate is valid for archlinux, kubernetes, kubernetes.default, kubernetes.default.svc, kubernetes.default.svc.cluster.local, localhost, not example.org"
Unable to connect to the server: tls: failed to verify certificate: x509: certificate is valid for archlinux, kubernetes, kubernetes.default, kubernetes.default.svc, kubernetes.default.svc.cluster.local, localhost, not example.org
```

## 解决方案

解决的方法很简单，就是将域名添加为额外的 TLS 证书主题别名。

### 于创建集群时，指定 `--tls-san` 参数

```sh
curl -sfL https://get.k3s.io | sh -s -- --tls-san="example.org"
```

### 添加 `--tls-san` 到现有的集群

编辑 `/etc/systemd/system/k3s.service`，并将 `--tls-san` 追加到 `ExecStart` 命令：

```sh
sudo vim /etc/systemd/system/k3s.service
```

```ini
ExecStart=/usr/local/bin/k3s \
    server \
      '--tls-san=example.org' \
```

接着重启 K3s 即可。

```sh
sudo systemctl daemon-reload

sudo systemctl restart k3s
```
