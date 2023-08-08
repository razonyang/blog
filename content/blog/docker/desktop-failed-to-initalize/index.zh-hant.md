+++
title = "Windows 下 Docker 無法初始化"
date = 2022-07-30T13:05:00+08:00
# description = ""
featured = false
draft = true
comment = true
toc = true
reward = true
pinned = false
categories = ["Docker"]
tags = ["Docker Desktop", "Windows"]
series = []
images = []
+++

最近更新系統後，發現 Docker 無法初始化。

<!--more-->

## 錯誤

```text
Docker failed to initialize.
Docker desktop is shutting down.
```

## 解決

按照 GitHub 別人提供的方法，刪除 `%appdata%\Docker` 文件夾即可，不過筆者建議重命名該文件夾，比如改爲 `%appdata%\Docker2`，即使不成功也不怕丟失原本數據。

> `%appdata%` 是環境變量，相當於 `C:\Users\USERNAME\AppData\Roaming`。
