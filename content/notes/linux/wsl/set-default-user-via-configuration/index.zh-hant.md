---
# type: docs
title: '配置 WSL 默認用戶'
description: '通過配置 /etc/wsl.conf 為 WSL 設置默認用戶。'
date: '2024-06-29T13:46:02+08:00'
draft: false
categories: ["Linux"]
tags: ["WSL", "WSL2"]
series: ["開發"]
images: ["/images/covers/tux.jpg"]
---

前段時間導入了 WSL 備份，可能期間出了些許問題，導致 WSL 的默認登錄用戶為 `root`，本文將記錄如何通過修改 `/etc/wsl.conf` 配置來設置默認用戶。

## 配置

編輯 `/etc/wsl.conf`，追加以下配置，修改其中的 `username` 並保存，然後重啟 WSL 即可。

{{< page-resource-content "code/conf" >}}

{{< page-resource-content "code/restart" >}}
