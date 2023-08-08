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
categories = ["HUGO"]
tags = ["HUGO_MODULE_PROXY", "MODULE", "GO_PROXY"]
series = []
images = []
+++

衆所周知 Go Module 服務器被牆了，因此需要指定代理服務器或者全局 VPN，而代理服務器比較簡單方便，如：[GOPROXYCN](https://goproxy.cn/) 和 [GOPROXYIO](https://goproxy.io/)。
而筆者之前很長一段時間利用 Hugo Module 來安裝和更新主題，速度十分緩慢，而且經常失敗，即使我設置了 `GO_PROXY` 環境變量。

<!--more-->

## 錯誤日誌

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

## 解決方法

後來搜索了下才知道，Hugo 遵循 `HUGO_MODULE_PROXY` 環境變量，而非 `GOPROXY`，除此之外還可以在配置文件中指定代理服務器：

{{< bs/config-toggle filename="config" >}}
[module]
  proxy = "https://goproxy.cn"
{{< /bs/config-toggle >}}

至於之前爲甚麼更新時而成功時而失敗，也許是因爲開了全局 VPN。
