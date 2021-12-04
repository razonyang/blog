---
title: 利用 Modd 提高 Go 开发效率
date: 2019-12-19T09:48:10+00:00
categories:
  - Programing
tags:
  - Go
  - modd
---

**Go** 开发不像 **PHP**（解释型语言） 那样可以修改代码实时生效，而需要重新编译，如果每次手动执行肯定会降低开发速度。本文将介绍一款开发工具 [**Modd**][1] 来解决这一问题，它可以监控文件修改并重启服务进程。

<!--more-->

## 项目结构

```
cmd/
  app/
    main.go
configs/
  app.toml
internal/
modd.conf
...
```

> 启动服务： `go run cmd/app/main.go -c configs/app.toml`

## 安装 Modd

```shell
$ env GO111MODULE=on go get github.com/cortesi/modd/cmd/modd
```

## 配置 Modd

在项目根目录创建 **modd.conf**，并添加以下内容：

> **modd.conf** 可以放在任何地方，只需要执行 modd 时通过 `-f` 参数指定即可。

    **/*.go {
        prep: go test @dirmods
    }
    
    # Exclude all test files of the form *_test.go
    **/*.go !**/*_test.go {
        daemon +sigterm: go run cmd/app/main.go -c configs/app.toml
    }

  * `prep: go test @dirmods` 在执行 modd 时会进行单元测试。
  * `daemon +sigterm: ...` 在监控单 go 文件修改时，会终止之前的服务进程，再重新启动服务进程，后面的启动参数请按需修改。

## 执行 Modd

```shell
$ cd /path/to/project
$ $GOPATH/bin/modd [-f /path/to/modd.conf]
```

  * `$GOPATH` 改成你本地的 Go 路径，也可以将 $GOPATH/bin 添加到环境变量，然后 `modd`。
  * `-f ...` 是可选的，它默认读取当前工作目录下的 `modd.conf`

## 更多

更多的用法可以在 [Modd 仓库][1] 了解，另外该工具也可以用于很多场景，本文只是介绍其在 Go 开发的一个例子。

 [1]: https://github.com/cortesi/modd
