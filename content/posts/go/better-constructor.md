---
title: Go 编写优雅的构造函数
date: 2020-03-12T18:37:46+00:00
categories:
  - Programing
tags:
  - Go
---

Go 编写优雅的构造函数。

<!--more-->

假设有一个名为 `ViewManager` 的结构体如下：

```go
 type ViewManager struct {
    fs http.FileSystem // 文件系统
    suffix string // 视图文件的后缀
    cache bool // 是否开启缓存
}

func New(fs http.FileSystem) *ViewManager {
    return &ViewManager{
        fs: fs,
        cache: true,
        suffix: ".tmpl",
    }
}
```

其所有成员都是不可写的，在我们需要创建不同 suffix、cache 的实例时，我们可以轻易地通过新增构造函数来实现，如 `NewSuffix(fs http.FileSystem, suffix string)`、`NewCache(fs http.FileSystem, cache bool)`，但是这样看起来繁琐不美观。其实我们可以通过一个构造函数来实现。

## 配置结构

第一种很简单，定义一个配置结构，然后传入到构造函数即可。

```go
type Config struct {
    Suffix string
    Cache bool
}

func New(fs http.FileSystem, cfg Config) *ViewManager {
    m := &ViewManager{
        fs: fs,
        cache: cfg.Cache,
        suffix: ".tmpl",
    }

    if cfg.Suffix != "" {
        m.suffix = suffix
    }

    return m
}
```

## 配置函数

配置函数和配置结构类似，只是利用函数的方式进行设置：

```go
type Option func(*ViewManager)

func Suffix(v string) Option {
    return func(m *ViewManager) {
        m.suffix = v
    }
}

func Cache(v bool) Option {
    return func(m *ViewManager) {
        m.cache = v
    }
}

func New(fs http.FileSystem, opts ... Option) *ViewManager {
    m := &ViewManager{
        fs: fs,
        cache: true,
        suffix: ".tmpl",
    }

    for _, f := range opts {
        f(m)
    }

    return m
}
```

## 区别

两种方式很常见，在标准库和第三方库都可以看到，不过笔者更喜欢后者，无需在构造函数进行过多的判断，编写单元测试也更容易。