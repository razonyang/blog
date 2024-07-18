---
title: '為什麼我推薦使用 zh-hans、zh-hant 作為 Hugo 中文站點語言代碼，而不是 zh-cn、zh-tw、zh-hk'
description: 'Hugo 帶有本地化的功能，最常見的案例為日期，比如xx年xx月xx日，然而其對語言代碼有限制，使用 zh-cn、zh-tw、zh-hk 無法匹配到對應的本地化設置，從而無法使用本地化功能。'
date: '2024-07-18T05:18:23Z'
categories: ["Hugo"]
tags: ["zh-hans", "zh-cn", "zh-hant", "zh-tw", "zh-hk"]
series: []
images: []
aliases:
  - /zh-hant/notes/hugo/why-do-i-recommend-using-zh-hans-instead-of-zh-cn/
---

## 背景

很久之前，我發現 Hugo 對 `zh-cn`、`zh-tw`、`zh-hk` 等語言代碼無法正常本地化，而提交了一個[特性請求](https://github.com/gohugoio/hugo/issues/9109)，不過幾年過去了，並沒有解決的意向。

當你需要本地化功能，筆者建議使用 `zh-hans` 和 `zh-hant` 作為語言代碼。
