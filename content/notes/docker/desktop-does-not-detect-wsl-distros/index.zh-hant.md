---
# type: docs
title: 'Docker Desktop 未檢測到 WSL 發行版'
description: 'Docker Desktop 未檢測到 WSL 發行版的可能原因和解決方法。'
date: '2024-06-29T14:00:33+08:00'
draft: false
categories: ["Linux", "Docker"]
tags: ["WSL", "WSL2", "Docker Desktop"]
series: ["開發"]
images: []
---

前段時間重新導入了 WSL 的備份，然而 Docker Desktop 檢測不到已經導入的 WSL，而這可能是因為 WSL 的版本問題。

![Docker Desktop WSL integration](setting-wsl.png#center)

## 檢測 WSL 版本

{{< page-resource-content "code/list" >}}

很顯然，其中 `Ubuntu` 的版本為 `1`，Docker Desktop 自然無法檢測到該 WSL 發行版。

## 設置 WSL 版本

解決方法很簡單，只需要將 WSL 版本轉換為 `2` 即可。

{{< page-resource-content "code/set-version" >}}

轉換完成後，重啟 Docker Desktop，就可以看到相應的 WSL 發行版了，勾選再次重啟 Docker Desktop 即可。

![Docker Desktop WSL integration](setting-wsl2.png#center)
