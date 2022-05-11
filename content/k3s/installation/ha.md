+++
type = "docs"
title = "安装高可用的 K3s 集群"
date = 2022-05-11T17:23:20+08:00
# description = ""
featured = false
draft = false
comment = true
toc = true
reward = true
pinned = false
carousel = false
categories = []
tags = []
series = []
images = []
+++

本文描述如何安装一个带有外部数据库的高可用的 K3s 集群。

<!--more-->

## 安装集群

```bash
$ curl -sfL https://get.k3s.io | sh -s - server \
  --datastore-endpoint='mysql://username:password@tcp(hostname:3306)/k3s'
```

笔者用的是 MySQL 数据库，其他数据库的格式请参阅 [Cluster Datastore Options](https://rancher.com/docs/k3s/latest/en/installation/datastore/).

国内服务器安装可能会比较慢，可以利用国内镜像来安装：

```bash
$ curl -sfL https://rancher-mirror.rancher.cn/k3s/k3s-install.sh | INSTALL_K3S_MIRROR=cn sh -s - server \
  --datastore-endpoint='mysql://username:password@tcp(hostname:3306)/k3s'
```

### 验证集群

```bash
# sudo k3s kubectl get nodes
NAME            STATUS   ROLES                  AGE   VERSION
vm-0-3-ubuntu   Ready    control-plane,master   16s   v1.23.6+k3s1
```

## 添加节点

### 获取 TOKEN

添加节点之前，我们需要在之前安装的节点上获取 **TOKEN**：

```bash
$ sudo cat /var/lib/rancher/k3s/server/token
K3S_SERVER_TOKEN
```

### 注册节点

添加节点和安装命令区别不大，只需要额外指定 **TOKEN**：

```bash
$ curl -sfL https://get.k3s.io | sh -s - server \
  --token=K3S_SERVER_TOKEN \
  --datastore-endpoint='mysql://username:password@tcp(hostname:3306)/k3s'
```

镜像版命令：

```bash
$ curl -sfL https://rancher-mirror.rancher.cn/k3s/k3s-install.sh | INSTALL_K3S_MIRROR=cn sh -s - server \
  --token=K3S_SERVER_TOKEN \
  --datastore-endpoint='mysql://username:password@tcp(hostname:3306)/k3s'
```

### 验证节点

```bash
$ sudo k3s kubectl get nodes
NAME              STATUS   ROLES                  AGE   VERSION
vm-0-3-ubuntu     Ready    control-plane,master   20m   v1.23.6+k3s1
vm-0-15-ubuntu    Ready    control-plane,master   50s   v1.23.6+k3s1
vm-16-17-ubuntu   Ready    control-plane,master   22s   v1.23.6+k3s1
```

至此，我们已经安装好了一个三节点的高可用 K3s 集群。
