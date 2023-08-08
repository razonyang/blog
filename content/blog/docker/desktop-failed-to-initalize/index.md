+++
title = "Windows 下 Docker 无法初始化"
date = 2022-07-30T13:05:00+08:00
# description = ""
featured = false
draft = false
comment = true
toc = true
reward = true
pinned = false
categories = ["Docker"]
tags = ["Docker Desktop", "Windows"]
series = []
images = []
+++

最近更新系统后，发现 Docker 无法初始化。

<!--more-->

## 错误

```text
Docker failed to initialize.
Docker desktop is shutting down.
```

## 解决

按照 GitHub 别人提供的方法，删除 `%appdata%\Docker` 文件夹即可，不过笔者建议重命名该文件夹，比如改为 `%appdata%\Docker2`，即使不成功也不怕丢失原本数据。

> `%appdata%` 是环境变量，相当于 `C:\Users\USERNAME\AppData\Roaming`。
