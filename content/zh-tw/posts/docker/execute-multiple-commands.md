---
title: Docker 運行多個命令
date: 2019-02-01T04:30:45+00:00
categories:
  - Programing
tags:
  - Docker
---

Docker 運行多個命令。

<!--more-->

## Docker run

```shell
$ docker run image:tag /bin/bash -c "cmd1 && cmd2"
```

## Docker compose

```yml
services:
  db:
    commands: /bin/bash -c "cmd1 && cmd2"
```
