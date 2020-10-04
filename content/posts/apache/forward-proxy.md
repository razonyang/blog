---
title: Apache 正向代理配置
date: 2020-03-12T17:48:34+00:00
categories:
  - Programing
tags:
  - Apache
  - Proxy
---

Apache 正向代理配置示例。

<!--more-->

假定代理的端口为 `4040`：

```ini
Listen 4040
<VirtualHost *:4040>
    ProxyRequests On
    ProxyVia On

    <Proxy "*">
        Deny from all
        Allow from 129.204.189.159
    </Proxy>
</VirtualHost>
```

`Deny from all` 和 `Allow from IP` 是为了防止他人滥用代理服务（限定某 IP 可用），你也可以设置其他规则，比如 Basic Auth。
