---
# type: docs
title: '設置 Podman 默認從 Docker Hub 拉取鏡像'
description: '默認地，若鏡像名稱不帶有 docker.io 前綴，Podman 不會從 Docker Hub 拉取鏡像。'
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

## 錯誤

當拉取不帶有 `docker.io` 前綴的 Docker Hub 鏡像時，會出現以下類似錯誤：

```log
Error: short-name "hugomods/hugo" did not resolve to an alias and no unqualified-search registries are defined in "/etc/containers/registries.conf"
[server] | Error: no container with name or ID "razonyang-blog_server_1" found: no such container
```

## 解決方法

為了默認從 Docker Hub 拉取鏡像，需要編輯 `/etc/containers/registries.conf` 並將 `docker.io` 追加到 `unqualified-search-registries` 數組。

> ![NOTE]
> 記得刪除註釋符 `#`，以使配置生效。

```sh
sudo /etc/containers/registries.conf
```

```toml
unqualified-search-registries = ["docker.io"]
```

保存後重新拉取鏡像即可，一般不需要重啟 Podman 服務。
