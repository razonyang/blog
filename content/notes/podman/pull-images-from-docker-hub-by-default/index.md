---
# type: docs
title: '设置 Podman 默认从 Docker Hub 拉取镜像'
description: '默认地，若镜像名称不带有 docker.io 前缀，Podman 不会从 Docker Hub 拉取镜像。'
date: '2025-01-30T08:08:29Z'
draft: false
categories: []
tags:
  - Docker
  - Podman
  - Docker Hub
series: []
images: []
---

## 错误

当拉取不带有 `docker.io` 前缀的 Docker Hub 镜像时，会出现以下类似错误：

```log
Error: short-name "hugomods/hugo" did not resolve to an alias and no unqualified-search registries are defined in "/etc/containers/registries.conf"
[server] | Error: no container with name or ID "razonyang-blog_server_1" found: no such container
```

## 解决方法

为了默认从 Docker Hub 拉取镜像，需要编辑 `/etc/containers/registries.conf` 并将 `docker.io` 追加到 `unqualified-search-registries` 数组。

> ![NOTE]
> 记得删除注释符 `#`，以使配置生效。

```sh
sudo /etc/containers/registries.conf
```

```toml
unqualified-search-registries = ["docker.io"]
```

保存后重新拉取镜像即可，一般不需要重启 Podman 服务。
