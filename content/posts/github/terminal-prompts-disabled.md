---
title: GitHub terminal prompts disabled 解决办法
date: 2019-11-30T00:00:00+00:00
excerpt: "fatal: could not read Username for 'https://github.com': terminal prompts disabled 解决办法"
draft: true
categories:
  - Programing
tags:
  - Git
  - GitHub
  - Go
---

如果 `go get` 命令出现以下错误：

> fatal: could not read Username for '<https://github.com>': terminal prompts disabled

可以通过环境变量 `env GIT_TERMINAL_PROMPT=1` 开启：

```shell
$ env GIT_TERMINAL_PROMPT=1 go get github.com/clevergo/clevergo
```
