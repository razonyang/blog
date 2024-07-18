---
title: '为什么我推荐使用 zh-hans、zh-hant 作为 Hugo 中文站点语言代码，而不是 zh-cn、zh-tw、zh-hk'
description: 'Hugo 带有本地化的功能，最常见的案例为日期，比如xx年xx月xx日，然而其对语言代码有限制，使用 zh-cn、zh-tw、zh-hk 无法匹配到对应的本地化设置，从而无法使用本地化功能。'
date: '2024-07-18T05:18:23Z'
categories: ["Hugo"]
tags: ["zh-hans", "zh-cn", "zh-hant", "zh-tw", "zh-hk"]
series: []
images: []
---

## 背景

很久之前，我发现 Hugo 对 `zh-cn`、`zh-tw`、`zh-hk` 等语言代码无法正常本地化，而提交了一个[特性请求](https://github.com/gohugoio/hugo/issues/9109)，不过几年过去了，并没有解决的意向。

当你需要本地化功能，笔者建议使用 `zh-hans` 和 `zh-hant` 作为语言代码。
