---
title: Go 语言实现多个子命令的脚本应用
date: 2020-01-01T01:18:56+00:00
categories:
  - Programing
tags:
  - CLI
  - flag
  - Go
---

像 Git，Go，Docker 等等的命令行脚本都有很多子命令，那么我们用 Go 语言如何实现多个子命令的脚本应用呢？

<!--more-->

## 例子和源码

先来看一个不含子命令的 CLI 应用：

```go
package main

import "flag"
import "net/http"

var handler = http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
    w.Write([]byte("hello world"))
})

func main() {
    // 绑定监听地址参数
    addr := flag.String("addr", ":8080", "addr")
    // 解析参数
    flag.Parse()

    http.ListenAndServe(*addr, handler)
}
```

```shell
$ go run main.go --addr :23333
$ curl http://localhost:23333
hello world
```

现在我们来查看下 flag 包的源码，可以找到以下代码片段：

```go
var CommandLine = NewFlagSet(os.Args[0], ExitOnError)

func Parse() {
    CommandLine.Parse(os.Args[1:])
}
```

可以清晰地看到 flag 包中的 CommandLine 是一个顶层的 Flag Set，参数解析是从第二个参数开始。

## 分析

先从命令格式开始，多个子命令的格式一般为:

    script <command> [arguments]

  * 第二个参数是子命令名称
  * 第三个参数开始都是该子命令的参数，可选

在先前的例子，我们其实只需要为**每个子命令创建一个新的 Flag Set**，然后绑定参数并从**第三个参数**开始解析即可。

## 实现

将先前例子的 web 服务改成 **serve** 子命令，再新增一个 **migrate** 子命令用于数据迁移：

```go
package main

import "flag"
import "fmt"
import "net/http"
import "os"

var handler = http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
    w.Write([]byte("hello world"))
})

func main() {
    // serve command
    serveCmd := flag.NewFlagSet("serve", flag.ExitOnError)
    serveAddr := serveCmd.String("addr", ":8080", "addr")

    // migrate command
    migrateCmd := flag.NewFlagSet("migrate", flag.ExitOnError)
    migrateConfig := migrateCmd.String("config", "", "config")

    // 第二个参数为子命令名称
    var cmd string
    if len(os.Args) > 1 {
        cmd = os.Args[1]
    }

    switch cmd {
        case "serve":
            // 从第三个参数开始解析
            serveCmd.Parse(os.Args[2:])
            http.ListenAndServe(*serveAddr, handler)
        case "migrate":
            migrateCmd.Parse(os.Args[2:])
            fmt.Println("migrate config:" + *migrateConfig)
        default:
            fmt.Println("Usage: \n\tscript <command> [arguments]")
            os.Exit(1)
    }
}
```

```shell
$ go run main.go
Usage: 
        script <command> [arguments]
exit status 1

$ go run main.go serve --addr :23333
$ curl http://localhost:23333
hello world

$ go run main.go migrate --config config.yaml
migrate config:config.yaml
```
