+++
title = "cURL 計算請求耗時"
date = 2022-11-27T17:13:36+08:00
# description = ""
featured = false
draft = false
comment = true
toc = true
reward = true
pinned = false
carousel = false
categories = []
tags = ["cURL"]
series = []
images = []
+++

某些情況下，你也許想知道 cURL 請求花費的時間，而這當然也是可能的。

<!--more-->

## 用法

```bash
$ curl -o /dev/null -s -w 'Total: %{time_total}\n' https://razonyang.com/
Total: 0.327053s
```

- `-o /dev/null`：將輸出重定向到 `/dev/null`。
- `-s`：靜默模式，不顯示進度條。
- `-w 'Total: %{time_total}\n'`：自定義輸出格式模板。你也可以將其保存為文件，如：`curl-format.txt`，然後 `-w "@curl-format.txt"`，註意記得添加前置的 `@` 符號。


### 格式

時間單位均為秒。

| Name | Syntax |
|---|---|
| time_namelookup | `%{time_namelookup}`
| time_connect | `%{time_connect}`
| time_appconnect | `%{time_appconnect}`
| time_pretransfer | `%{time_pretransfer}`
| time_redirect | `%{time_redirect}`
| time_starttransfer | `%{time_starttransfer}`
| time_total | `%{time_total}`
