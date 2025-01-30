---
# type: docs
title: 'Podman 设置镜像源'
description: '本文记录如何设置 Podman 镜像源。'
date: '2025-01-30T08:23:26Z'
draft: false
categories: []
tags:
  - Podman
series: []
images: []
---

## 修改配置

修改 `/etc/containers/registries.conf` 以追加以下配置，并替换其中的 `location` 为对应的镜像源，因为镜像源经常变动，不担保可用，请自行搜索可用的镜像源。

```toml
[[registry]]
prefix = "docker.io"
location = "docker.m.daocloud.io"
```

保存后重新拉取镜像即可，一般无须重启 Podman 服务。
