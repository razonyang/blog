---
title: 利用 gopkgs 自定义 Go 库的导入路径
date: -001-11-30T00:00:00+00:00
draft: true
categories:
  - Programing
tags:
  - Go
  - gopkgs
---

自定义 Go 模块的导入路径有一个主要的好处，当你打算更换代码的托管服务器，比如 GitHub 换到 GitLab、Gitee 时，你不需要更改项目源码的导入路径。而 [gopkgs][1] 正是这样一个命令行脚本和 HTTP 服务，可以让你自定义 Go 库的导入路径。

<!--more-->

## 先决条件

  * 一个域名
  * 一台服务器

本文以 `clevergo.tech` 作为例子，其代码托管在 GitHub，比如：

| Import Path            | Repository                             |
| ---------------------- | -------------------------------------- |
| clevergo.tech/clevergo | <https://github.com/clevergo/clevergo> |
| clevergo.tech/captchas | <https://github.com/clevergo/clevergo> |
| ...                    |                                        |

## 安装

 [1]: https://github.com/razonyang/gopkgs
