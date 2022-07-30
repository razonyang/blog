---
title: Go 編寫優雅的構造函數
date: 2020-03-12T18:37:46+00:00
categories:
  - Programing
tags:
  - Go
---

Go 編寫優雅的構造函數。

<!--more-->

假設有一個名為 `ViewManager` 的結構體如下：

```go
 type ViewManager struct {
    fs http.FileSystem // 文件系統
    suffix string // 視圖文件的後綴
    cache bool // 是否開啟緩存
}

func New(fs http.FileSystem) *ViewManager {
    return &ViewManager{
        fs: fs,
        cache: true,
        suffix: ".tmpl",
    }
}
```

其所有成員都是不可寫的，在我們需要創建不同 suffix、cache 的實例時，我們可以輕易地通過新增構造函數來實現，如 `NewSuffix(fs http.FileSystem, suffix string)`、`NewCache(fs http.FileSystem, cache bool)`，但是這樣看起來繁瑣不美觀。其實我們可以通過一個構造函數來實現。

## 配置結構

第一種很簡單，定義一個配置結構，然後傳入到構造函數即可。

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

## 配置函數

配置函數和配置結構類似，只是利用函數的方式進行設置：

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

## 區別

兩種方式很常見，在標準庫和第三方庫都可以看到，不過筆者更喜歡後者，無需在構造函數進行過多的判斷，編寫單元測試也更容易。