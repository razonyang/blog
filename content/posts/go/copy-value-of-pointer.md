---
title: Go 语言复制指针的值
date: 2020-02-03T03:29:11+00:00
categories:
  - Programing
tags:
  - Go
  - Pointer
---

Go 语言复制指针的值可以通过 `*copy = *pointer` 完成。

<!--more-->

```go
package main

import "fmt"

type person struct {
    name string
    gender int
}

func main() {
    foo := &person{"foo", 1}
    bar := &person{}
    *bar = *foo
    fmt.Println(foo, bar)

    bar.name = "bar"
    fmt.Println(foo, bar)
}
```

```shell
$ go run main.go
&{foo 1} &{foo 1}
&{foo 1} &{bar 1}
```
