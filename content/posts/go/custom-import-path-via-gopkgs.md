---
title: 利用 gopkgs 自定义 Go 库的导入路径
date: 2020-10-05T14:54:12+08:00
featured: true
categories:
  - Programing
tags:
  - Go
  - gopkgs
---

自定义 Go 模块的导入路径有一个主要的好处，当你打算更换代码的托管服务器，比如 GitHub 换到 GitLab、Gitee 时，你不需要更改包的导入路径。而 [gopkgs.net][1] 正是这样一个 HTTP 服务，可以让你自定义 Go 库的导入路径。

<!--more-->

> `gopkgs.net` 是笔者为了自身业务搭建的，大家可以免费试用。

## 先决条件

- 域名

## 步骤

本文以 `clevergo.tech` 作为例子，其代码托管在 GitHub，比如：

| Import Path            | Repository                             |
| ---------------------- | -------------------------------------- |
| clevergo.tech/clevergo | <https://github.com/clevergo/clevergo> |
| clevergo.tech/captchas | <https://github.com/clevergo/clevergo> |
| ...                    |                                        |

1. 注册账号并登录后台。
1. 然后在后台添加域名，并添加相应的 CNAME 记录到 `gopkgs.net`，然后验证域名所有权。
1. 接着添加 Go 包，填写相应的信息即可。

## 验证

验证时，我们需要使用 `go get -u -v`，比如：

```shell
$ go get -u -v clevergo.tech/clevergo
get "clevergo.tech/clevergo": found meta tag get.metaImport{Prefix:"clevergo.tech/clevergo", VCS:"git", RepoRoot:"https://github.com/clevergo/clevergo"} at //clevergo.tech/clevergo?go-get=1
clevergo.tech/clevergo (download)
get "clevergo.tech/log": found meta tag get.metaImport{Prefix:"clevergo.tech/log", VCS:"git", RepoRoot:"https://github.com/clevergo/log"} at //clevergo.tech/log?go-get=1
clevergo.tech/log (download)
clevergo.tech/log
clevergo.tech/clevergo
```

如上所示，解析的 META 标签正确，即表示成功。
