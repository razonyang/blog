---
title: 利用 Modd 提高 Go 開發效率
date: 2019-12-19T09:48:10+00:00
categories:
  - Programing
tags:
  - Go
  - modd
---

**Go** 開發不像 **PHP**（解釋型語言） 那樣可以修改代碼實時生效，而需要重新編譯，如果每次手動執行肯定會降低開發速度。本文將介紹一款開發工具 [**Modd**][1] 來解決這一問題，它可以監控文件修改並重啟服務進程。

<!--more-->

## 項目結構

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

> 啟動服務： `go run cmd/app/main.go -c configs/app.toml`

## 安裝 Modd

```shell
$ env GO111MODULE=on go get github.com/cortesi/modd/cmd/modd
```

## 配置 Modd

在項目根目錄創建 **modd.conf**，並添加以下內容：

> **modd.conf** 可以放在任何地方，只需要執行 modd 時通過 `-f` 參數指定即可。

    **/*.go {
        prep: go test @dirmods
    }
    
    # Exclude all test files of the form *_test.go
    **/*.go !**/*_test.go {
        daemon +sigterm: go run cmd/app/main.go -c configs/app.toml
    }

  * `prep: go test @dirmods` 在執行 modd 時會進行單元測試。
  * `daemon +sigterm: ...` 在監控單 go 文件修改時，會終止之前的服務進程，再重新啟動服務進程，後面的啟動參數請按需修改。

## 執行 Modd

```shell
$ cd /path/to/project
$ $GOPATH/bin/modd [-f /path/to/modd.conf]
```

  * `$GOPATH` 改成你本地的 Go 路徑，也可以將 $GOPATH/bin 添加到環境變量，然後 `modd`。
  * `-f ...` 是可選的，它默認讀取當前工作目錄下的 `modd.conf`

## 更多

更多的用法可以在 [Modd 倉庫][1] 瞭解，另外該工具也可以用於很多場景，本文只是介紹其在 Go 開發的一個例子。

 [1]: https://github.com/cortesi/modd
