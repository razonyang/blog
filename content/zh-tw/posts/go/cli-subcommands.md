---
title: Go 語言實現多個子命令的腳本應用
date: 2020-01-01T01:18:56+00:00
categories:
  - Programing
tags:
  - CLI
  - flag
  - Go
---

像 Git，Go，Docker 等等的命令行腳本都有很多子命令，那麼我們用 Go 語言如何實現多個子命令的腳本應用呢？

<!--more-->

## 例子和源碼

先來看一個不含子命令的 CLI 應用：

```go
package main

import "flag"
import "net/http"

var handler = http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
    w.Write([]byte("hello world"))
})

func main() {
    // 綁定監聽地址參數
    addr := flag.String("addr", ":8080", "addr")
    // 解析參數
    flag.Parse()

    http.ListenAndServe(*addr, handler)
}
```

```shell
$ go run main.go --addr :23333
$ curl http://localhost:23333
hello world
```

現在我們來查看下 flag 包的源碼，可以找到以下代碼片段：

```go
var CommandLine = NewFlagSet(os.Args[0], ExitOnError)

func Parse() {
    CommandLine.Parse(os.Args[1:])
}
```

可以清晰地看到 flag 包中的 CommandLine 是一個頂層的 Flag Set，參數解析是從第二個參數開始。

## 分析

先從命令格式開始，多個子命令的格式一般為:

    script <command> [arguments]

  * 第二個參數是子命令名稱
  * 第三個參數開始都是該子命令的參數，可選

在先前的例子，我們其實只需要為**每個子命令創建一個新的 Flag Set**，然後綁定參數並從**第三個參數**開始解析即可。

## 實現

將先前例子的 web 服務改成 **serve** 子命令，再新增一個 **migrate** 子命令用於數據遷移：

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

    // 第二個參數為子命令名稱
    var cmd string
    if len(os.Args) > 1 {
        cmd = os.Args[1]
    }

    switch cmd {
        case "serve":
            // 從第三個參數開始解析
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
