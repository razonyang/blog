---
title: Go 語言代碼格式化工具 gofmt vs goimports
date: 2020-01-04T14:36:07+00:00
categories:
  - Programing
tags:
  - Go
  - gofmt
  - goimports
---

在格式化 Go 代碼的時候，經常會用到 **gofmt** 和 **goimports** 兩個工具，不過他們之間到底有何區別呢？

<!--more-->

> In addition to fixing imports, goimports also formats your code in the same style as gofmt so it can be used as a replacement for your editor's gofmt-on-save hook.

根據 **goimports** 文檔的一段說明，**goimports** 除了修正 import 代碼塊外，和 **gofmt** 沒其他區別。至於 import 代碼塊修正，舉個栗子來說明下。

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

這裡我特意將每個 import 順序亂序，並相隔一行，其中 **stringsx** 是錯誤的包名，**os** 是沒有使用到的包。

我們的期望應該是可以將 import 的包進行排序，去掉未使用的包，並且可以修正錯誤的包名。

## gofmt

首先看下 **gofmt** 的格式化結果：

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

> 安裝：`go get golang.org/x/tools/cmd/goimports`

接著對比 **goimports** 結果：

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

## 結論

相對 **gofmt**，**goimports** 可以對 import 的**包進行排序**，**去除未使用的包**，並**修正錯誤的包名**。簡而言之，**goimports** 比 **gofmt** 更好用，對於強迫症必不可缺。

## 題外話

**goimports** 排序後，內置包和非內置包會有一空行相隔：

```go
import (
    "errors"
    ...

    "github.com/foo/bar"
    ...
)
```
