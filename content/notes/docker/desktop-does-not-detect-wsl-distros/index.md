---
# type: docs
title: 'Docker Desktop 未检测到 WSL 发行版'
description: 'Docker Desktop 未检测到 WSL 发行版的可能原因和解决方法。'
date: '2024-06-29T14:00:33+08:00'
draft: false
categories: ["Linux", "Docker"]
tags: ["WSL", "WSL2", "Docker Desktop"]
series: ["开发"]
images: []
---

前段时间重新导入了 WSL 的备份，然而 Docker Desktop 检测不到已经导入的 WSL，而这可能是因为 WSL 的版本问题。

![Docker Desktop WSL integration](setting-wsl.png#center)

## 检测 WSL 版本

{{< page-resource-content "code/list" >}}

很显然，其中 `Ubuntu` 的版本为 `1`，Docker Desktop 自然无法检测到该 WSL 发行版。

## 设置 WSL 版本

解决方法很简单，只需要将 WSL 版本转换为 `2` 即可。

{{< page-resource-content "code/set-version" >}}

转换完成后，重启 Docker Desktop，就可以看到相应的 WSL 发行版了，勾选再次重启 Docker Desktop 即可。

![Docker Desktop WSL integration](setting-wsl2.png#center)
