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

假定代理的端口為 `4040`：

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

`Deny from all` 和 `Allow from IP` 是為了防止他人濫用代理服務（限定某 IP 可用），你也可以設置其他規則，比如 Basic Auth。
