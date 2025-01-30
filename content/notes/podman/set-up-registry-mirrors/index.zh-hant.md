---
# type: docs
title: 'Podman 設置鏡像源'
description: '本文記錄如何設置 Podman 鏡像源。'
date: '2025-01-30T08:23:26Z'
draft: false
categories: []
tags:
  - Podman
series: []
images: []
---

## 修改配置

修改 `/etc/containers/registries.conf` 以追加以下配置，並替換其中的 `location` 為對應的鏡像源，因為鏡像源經常變動，不擔保可用，請自行搜索可用的鏡像源。

```toml
[[registry]]
prefix = "docker.io"
location = "docker.m.daocloud.io"
```

保存後重新拉取鏡像即可，一般無須重啟 Podman 服務。
