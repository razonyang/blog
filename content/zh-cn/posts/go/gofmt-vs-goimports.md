---
title: Go 语言代码格式化工具 gofmt vs goimports
date: 2020-01-04T14:36:07+00:00
categories:
  - Programing
tags:
  - Go
  - gofmt
  - goimports
---

在格式化 Go 代码的时候，经常会用到 **gofmt** 和 **goimports** 两个工具，不过他们之间到底有何区别呢？

<!--more-->

> In addition to fixing imports, goimports also formats your code in the same style as gofmt so it can be used as a replacement for your editor's gofmt-on-save hook.

根据 **goimports** 文档的一段说明，**goimports** 除了修正 import 代码块外，和 **gofmt** 没其他区别。至于 import 代码块修正，举个栗子来说明下。

## 例子

```go
package main

import "stringsx"

import "fmt"

import "os"

func Title(s string)  {
    fmt.Println(strings.Title(s))
}

func main() {
    Title("hello world")
}
```

这里我特意将每个 import 顺序乱序，并相隔一行，其中 **stringsx** 是错误的包名，**os** 是没有使用到的包。

我们的期望应该是可以将 import 的包进行排序，去掉未使用的包，并且可以修正错误的包名。

## gofmt

首先看下 **gofmt** 的格式化结果：

```go
package main

import "stringsx"

import "fmt"

import "os"

func Title(s string) {
        fmt.Println(strings.Title(s))
}

func main() {
        Title("hello world")
}
```

## goimports

> 安装：`go get golang.org/x/tools/cmd/goimports`

接着对比 **goimports** 结果：

```go
package main

import (
        "fmt"
        "strings"
)

func Title(s string) {
        fmt.Println(strings.Title(s))
}

func main() {
        Title("hello world")
}
```

## 结论

相对 **gofmt**，**goimports** 可以对 import 的**包进行排序**，**去除未使用的包**，并**修正错误的包名**。简而言之，**goimports** 比 **gofmt** 更好用，对于强迫症必不可缺。

## 题外话

**goimports** 排序后，内置包和非内置包会有一空行相隔：

```go
import (
    "errors"
    ...

    "github.com/foo/bar"
    ...
)
```
