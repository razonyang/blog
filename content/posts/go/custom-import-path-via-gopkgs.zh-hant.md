---
title: 利用 gopkgs 自定義 Go 庫的導入路徑
date: 2020-10-05T14:54:12+08:00
featured: true
categories:
  - Programing
tags:
  - Go
  - gopkgs
---

自定義 Go 模塊的導入路徑有一個主要的好處，當你打算更換代碼的託管服務器，比如 GitHub 換到 GitLab、Gitee 時，你不需要更改包的導入路徑。而 [gopkgs][1] 正是這樣一個 HTTP 服務，可以讓你自定義 Go 庫的導入路徑。

<!--more-->

> `gopkgs.net` 是筆者為了自身業務搭建的，大家可以免費試用。

## 先決條件

- 域名

## 步驟

本文以 `clevergo.tech` 作為例子，其代碼託管在 GitHub，比如：

| Import Path            | Repository                             |
| ---------------------- | -------------------------------------- |
| clevergo.tech/clevergo | <https://github.com/clevergo/clevergo> |
| clevergo.tech/captchas | <https://github.com/clevergo/captchas> |
| ...                    |                                        |

1. 註冊賬號並登錄後臺。
1. 然後在後臺添加域名，並添加相應的 CNAME 記錄到 `gopkgs.net`，然後驗證域名所有權。
1. 接著添加 Go 包，填寫相應的信息即可。

## 驗證

驗證時，我們需要使用 `go get -u -v`，比如：

```shell
$ go get -u -v clevergo.tech/clevergo
get "clevergo.tech/clevergo": found meta tag get.metaImport{Prefix:"clevergo.tech/clevergo", VCS:"git", RepoRoot:"https://github.com/clevergo/clevergo"} at //clevergo.tech/clevergo?go-get=1
clevergo.tech/clevergo (download)
get "clevergo.tech/log": found meta tag get.metaImport{Prefix:"clevergo.tech/log", VCS:"git", RepoRoot:"https://github.com/clevergo/log"} at //clevergo.tech/log?go-get=1
clevergo.tech/log (download)
clevergo.tech/log
clevergo.tech/clevergo
```

如上所示，解析的 META 標籤正確，即表示成功。

[1]: https://gopkgs.net
