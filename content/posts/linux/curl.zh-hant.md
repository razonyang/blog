---
title: cURL 基本用法
date: 2020-01-30T07:53:49+00:00
categories:
  - Linux
tags:
  - cURL
---

cURL 是一個數據傳輸的命令行腳本，筆者經常用於接口測試，本文簡單介紹下 cURL 的基本用法。

<!--more-->

## 用法

```shell
$ curl http://localhost
```

## 參數

  * `-v` Verbose 模式，可以看到請求和響應的頭部信息。
  * `-X` 指定請求方法，比如 POST： `-XPOST`
  * `-H` 指定請求頭，比如 JSON：`-HContent-Type: " application/json"`
  * `-d` 指定請求數據

## 例子

### Basic Auth

```shell
$ curl -u username:password http://localhost/auth
```

### 表單

```shell
$ curl -XPOST -d "username=foo&password=bar"  http://localhost/login
```

### Multipart 表單

```shell
$ curl -XPOST -F "username=foo" -F "password=bar" http://localhost/login
```

### JSON

```shell
$ curl -XPOST -H "Content-Type: application/json" -d '{"username":"foo", "password": "bar"}' http://localhost/login
```

### XML

```shell
$ curl -XPOST -H "Content-Type: application/xml" -d '<xml><username>foo</username><password>bar</password></xml>' http://localhost:1234/login
```
