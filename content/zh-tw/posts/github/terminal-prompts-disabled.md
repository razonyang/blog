---
title: GitHub terminal prompts disabled 解決辦法
date: -001-11-30T00:00:00+00:00
excerpt: "fatal: could not read Username for 'https://github.com': terminal prompts disabled 解決辦法"
draft: true
categories:
  - Programing
tags:
  - Git
  - GitHub
  - Go
---

如果 `go get` 命令出現以下錯誤：

> fatal: could not read Username for '<https://github.com>': terminal prompts disabled

可以通過環境變量 `env GIT_TERMINAL_PROMPT=1` 開啟：

```shell
$ env GIT_TERMINAL_PROMPT=1 go get github.com/clevergo/clevergo
```
