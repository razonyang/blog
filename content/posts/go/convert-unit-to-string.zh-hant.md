---
title: Go 語言將 unit 類型轉成 string
date: 2019-12-31T22:05:56+00:00
categories:
  - Programing
tags:
  - Go
  - uint
  - string
---

Go 語言將 unit 類型轉成 string 的幾種方法和比較。

<!--more-->

## fmt.Sprint

```go
func sprint(u uint) string {
    return fmt.Sprint(u)
}
```

## strconv.FormatUint

```go
func formatUint(u uint) string {
    return strconv.FormatUint(uint64(u), 10)
}
```

## 性能

```go
func BenchmarkSprint(b *testing.B) {
    for n := 0; n < b.N; n++ {
        sprint(uint(n))
    }
}

func BenchmarkFormatUint(b *testing.B) {
    for n := 0; n < b.N; n++ {
        formatUint(uint(n))
    }
}
```

```shell
$ go test -bench=.
BenchmarkSprint-12              13384656                81.6 ns/op
BenchmarkFormatUint-12          44932880                29.5 ns/op
```

後者明顯性能更好。
