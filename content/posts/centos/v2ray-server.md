---
title: CentOS 安装 V2ray 服务端
date: 2020-01-02T05:19:24+00:00
draft: true
categories:
  - Linux
tags:
  - CentOS
  - V2ray
---

CentOS 安装 V2ray 服务端教程。

<!--more-->

## 安装

```shell
# bash <(curl -L -s https://install.direct/go.sh)
```

## 配置

```shell
# vi /etc/v2ray/config.json
```

配置在安装时已经生成默认的，其中需要注意的是服务器端口 `port` 和用户的信息 `clients`，客户端连接时用到。

另外，强烈建议加上日志配置：

```json
  "log": {
    "access": "/var/log/v2ray/access.log",
    "error": "/var/log/v2ray/error.log",
    "loglevel": "warning"
  }
```

如果日志目录不存在，建议手动创建：

```shell
# mkdir -p /var/log/v2ray/
```

## 服务

### 启动

```shell
# systemctl start v2ray
```

### 停止

```shell
# systemctl stop v2ray
```

### 开机自启

```shell
# systemctl enable v2ray
```

## 图形客户端

请参看 [V2ray 各平台客户端][1]。

## 问题排查

如果连接成功，但是无法正常科学上网，可以通过日志文件查看原因，常见原因：

  * **服务器地址**错误。
  * **端口**错误。
  * **用户 ID** 错误。
  * **系统（本地）时间**不准确。

 [1]: /posts/v2ray/gui-clients/
