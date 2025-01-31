---
# type: docs
title: 'K3s 設置 TLS 證書的主題別名'
description: '本文介紹兩種設置 K3s TLS 證書主題別名的方法。'
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

相對 IP 地址而言，域名的好處就是易記和靈活性高，即便服務器 IP 改動，只需要改動對應 DNS 解析記錄即可。

然而默認地，當連接 K3s 集群域名地址時，你會遇到以下類似錯誤（以 `example.org` 為例）：

```log
E0131 12:38:27.974601   45714 memcache.go:265] "Unhandled Error" err="couldn't get current server API group list: Get \"https://example.org:6443/api?timeout=32s\": tls: failed to verify certificate: x509: certificate is valid for archlinux, kubernetes, kubernetes.default, kubernetes.default.svc, kubernetes.default.svc.cluster.local, localhost, not example.org"
Unable to connect to the server: tls: failed to verify certificate: x509: certificate is valid for archlinux, kubernetes, kubernetes.default, kubernetes.default.svc, kubernetes.default.svc.cluster.local, localhost, not example.org
```

## 解決方案

解決的方法很簡單，就是將域名添加為額外的 TLS 證書主題別名。

### 於創建集群時，指定 `--tls-san` 參數

```sh
curl -sfL https://get.k3s.io | sh -s -- --tls-san="example.org"
```

### 添加 `--tls-san` 到現有的集群

編輯 `/etc/systemd/system/k3s.service`，並將 `--tls-san` 追加到 `ExecStart` 命令：

```sh
sudo vim /etc/systemd/system/k3s.service
```

```ini
ExecStart=/usr/local/bin/k3s \
    server \
      '--tls-san=example.org' \
```

接著重啟 K3s 即可。

```sh
sudo systemctl daemon-reload

sudo systemctl restart k3s
```
