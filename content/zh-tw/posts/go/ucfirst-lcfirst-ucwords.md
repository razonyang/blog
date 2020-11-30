---
title: Go 語言的 ucfirst、lcfirst 和 ucwords
date: 2020-02-05T02:33:30+00:00
categories:
  - Programing
tags:
  - Go
  - PHP
  - lcfirst
  - ucfirst
  - ucwords
---

PHP 中 `ucfirst`、`lcfirst` 和 `ucwords` 在 Go 語言中可以通過 `strings` 和 `clevergo.tech/strutil` 實現。

<!--more-->

```go
package main

import (
    "fmt"

    "clevergo.tech/strutil"
)

func main() {
    // lcfirst
    fmt.Println(strutil.InitialToLower("HELLO"))
    fmt.Println(strutil.InitialToLower("你好"))

    // ucfirst
    fmt.Println(strutil.InitialToUpper("world"))
    fmt.Println(strutil.InitialToUpper("世界"))

    // ucwords
    fmt.Println(strings.Title("hello world"))
    fmt.Println(strings.Title("你好世界"))
}
```

```shell
$ go run main.go
hELLO
你好
World
世界
Hello World
你好世界
```
