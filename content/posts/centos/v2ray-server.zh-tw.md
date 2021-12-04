---
title: CentOS 安裝 V2ray 服務端
date: 2020-01-02T05:19:24+00:00
draft: true
categories:
  - Linux
tags:
  - CentOS
  - V2ray
---

CentOS 安裝 V2ray 服務端教程。

<!--more-->

## 安裝

```shell
# bash <(curl -L -s https://install.direct/go.sh)
```

## 配置

```shell
# vi /etc/v2ray/config.json
```

配置在安裝時已經生成默認的，其中需要注意的是服務器端口 `port` 和用戶的信息 `clients`，客戶端連接時用到。

另外，強烈建議加上日誌配置：

```json
  "log": {
    "access": "/var/log/v2ray/access.log",
    "error": "/var/log/v2ray/error.log",
    "loglevel": "warning"
  }
```

如果日誌目錄不存在，建議手動創建：

```shell
# mkdir -p /var/log/v2ray/
```

## 服務

### 啟動

```shell
# systemctl start v2ray
```

### 停止

```shell
# systemctl stop v2ray
```

### 開機自啟

```shell
# systemctl enable v2ray
```

## 圖形客戶端

請參看 [V2ray 各平臺客戶端][1]。

## 問題排查

如果連接成功，但是無法正常科學上網，可以通過日誌文件查看原因，常見原因：

  * **服務器地址**錯誤。
  * **端口**錯誤。
  * **用戶 ID** 錯誤。
  * **系統（本地）時間**不準確。

 [1]: /posts/v2ray/gui-clients/
