+++
title = "cURL 计算请求耗时"
date = 2022-11-27T17:13:36+08:00
# description = ""
featured = false
draft = false
comment = true
toc = true
reward = true
pinned = false
categories = []
tags = ["cURL"]
series = []
images = []
+++

某些情况下，你也许想知道 cURL 请求花费的时间，而这当然也是可能的。

<!--more-->

## 用法

```bash
$ curl -o /dev/null -s -w 'Total: %{time_total}\n' https://razonyang.com/
Total: 0.327053s
```

- `-o /dev/null`：将输出重定向到 `/dev/null`。
- `-s`：静默模式，不显示进度条。
- `-w 'Total: %{time_total}\n'`：自定义输出格式模板。你也可以将其保存为文件，如：`curl-format.txt`，然后 `-w "@curl-format.txt"`，注意记得添加前置的 `@` 符号。


### 格式

时间单位均为秒。

| Name | Syntax |
|---|---|
| time_namelookup | `%{time_namelookup}`
| time_connect | `%{time_connect}`
| time_appconnect | `%{time_appconnect}`
| time_pretransfer | `%{time_pretransfer}`
| time_redirect | `%{time_redirect}`
| time_starttransfer | `%{time_starttransfer}`
| time_total | `%{time_total}`
