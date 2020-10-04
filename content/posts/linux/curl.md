---
title: cURL 基本用法
date: 2020-01-30T07:53:49+00:00
categories:
  - Linux
tags:
  - cURL
---

cURL 是一个数据传输的命令行脚本，笔者经常用于接口测试，本文简单介绍下 cURL 的基本用法。

<!--more-->

## 用法

```shell
$ curl http://localhost
```

## 参数

  * `-v` Verbose 模式，可以看到请求和响应的头部信息。
  * `-X` 指定请求方法，比如 POST： `-XPOST`
  * `-H` 指定请求头，比如 JSON：`-HContent-Type: " application/json"`
  * `-d` 指定请求数据

## 例子

### Basic Auth

```shell
$ curl -u username:password http://localhost/auth
```

### 表单

```shell
$ curl -XPOST -d "username=foo&password=bar"  http://localhost/login
```

### Multipart 表单

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
