+++
title = "Hugo Module 代理"
date = 2022-07-30T11:10:17+08:00
# description = ""
featured = false
draft = false
comment = true
toc = true
reward = true
pinned = false
carousel = false
categories = ["HUGO"]
tags = ["HUGO_MODULE_PROXY", "MODULE", "GO_PROXY"]
series = []
images = []
+++

众所周知 Go Module 服务器被墙了，因此需要指定代理服务器或者全局 VPN，而代理服务器比较简单方便，如：[GOPROXYCN](https://goproxy.cn/) 和 [GOPROXYIO](https://goproxy.io/)。
而笔者之前很长一段时间利用 Hugo Module 来安装和更新主题，速度十分缓慢，而且经常失败，即使我设置了 `GO_PROXY` 环境变量。

<!--more-->

## 错误日志

```text
hugo: downloading modules …
go: github.com/razonyang/hugo-theme-bootstrap@v1.0.0-alpha.1.0.20220708160018-560a68166b0a: invalid version: git fetch -f origin refs/heads/*:refs/heads/* refs/tags/*:refs/tags/* in /home/razonyang/Projects/razonyang/hugo-theme-bootstrap-site/vendor/modules/filecache/modules/pkg/mod/cache/vcs/348a35abd6584f23aeb4a9124871cf51b665ede955a2f430e06713f21b056184: exit status 128:
        fatal: the remote end hung up unexpectedly
        fatal: early EOF
        fatal: index-pack failed
hugo: collected modules in 1140149 ms
WARN 2022/07/09 16:43:05 failed to download modules: failed to execute 'go [mod download]': failed to execute binary "go" with args [mod download]: go: github.com/razonyang/hugo-theme-bootstrap@v1.0.0-alpha.1.0.20220708160018-560a68166b0a: invalid version: git fetch -f origin refs/heads/*:refs/heads/* refs/tags/*:refs/tags/* in /home/razonyang/Projects/razonyang/hugo-theme-bootstrap-site/vendor/modules/filecache/modules/pkg/mod/cache/vcs/348a35abd6584f23aeb4a9124871cf51b665ede955a2f430e06713f21b056184: exit status 128:
        fatal: the remote end hung up unexpectedly
        fatal: early EOF
        fatal: index-pack failed
 *errors.errorString
go: github.com/razonyang/hugo-theme-bootstrap@v1.0.0-alpha.1.0.20220708160018-560a68166b0a: invalid version: git fetch -f origin refs/heads/*:refs/heads/* refs/tags/*:refs/tags/* in /home/razonyang/Projects/razonyang/hugo-theme-bootstrap-site/vendor/modules/filecache/modules/pkg/mod/cache/vcs/348a35abd6584f23aeb4a9124871cf51b665ede955a2f430e06713f21b056184: exit status 128:
        fatal: unable to access 'https://github.com/razonyang/hugo-theme-bootstrap/': GnuTLS recv error (-110): The TLS connection was non-properly terminated.
Error: failed to get ["-d" "github.com/razonyang/hugo-theme-bootstrap@master"]: failed to execute 'go [get -d github.com/razonyang/hugo-theme-bootstrap@master]': failed to execute binary "go" with args [get -d github.com/razonyang/hugo-theme-bootstrap@master]: go: github.com/razonyang/hugo-theme-bootstrap@v1.0.0-alpha.1.0.20220708160018-560a68166b0a: invalid version: git fetch -f origin refs/heads/*:refs/heads/* refs/tags/*:refs/tags/* in /home/razonyang/Projects/razonyang/hugo-theme-bootstrap-site/vendor/modules/filecache/modules/pkg/mod/cache/vcs/348a35abd6584f23aeb4a9124871cf51b665ede955a2f430e06713f21b056184: exit status 128:
        fatal: unable to access 'https://github.com/razonyang/hugo-theme-bootstrap/': GnuTLS recv error (-110): The TLS connection was non-properly terminated.
 *errors.errorString
```

## 解决方法

后来搜索了下才知道，Hugo 遵循 `HUGO_MODULE_PROXY` 环境变量，而非 `GOPROXY`，除此之外还可以在配置文件中指定代理服务器：

{{< code-toggle filename="config" >}}
[module]
  proxy = "https://goproxy.cn"
{{< /code-toggle >}}

至于之前为什么更新时而成功时而失败，也许是因为开了全局 VPN。
