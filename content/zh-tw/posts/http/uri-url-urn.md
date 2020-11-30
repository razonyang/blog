---
title: URI、URL 和 URN 之間的關係和區別
date: 2018-11-30T15:57:46+00:00
categories:
  - Programing
tags:
  - URI
  - URL
  - URN
---

之前經常看到 URI、URL 和 URN，但是都沒去理清這三者的關係，於是今天就花了點時間搞清楚三者關係。

<!--more-->

## 含義

先了解一下三者的含義

### URI

URI - 統一資源標識符（Uniform Resource Identifier），是一個用於標識某一互聯網資源名稱的字符串。

### URL

URL - 統一資源定位符（或稱統一資源定位器/定位地址、URL地址，英語：Uniform Resource Locator，常縮寫為URL），有時也被俗稱為網頁地址（網址）。

### URN

URN - 統一資源名稱（Uniform Resource Name），是統一資源標識（URI）的歷史名字。

## 關係

> URI可被視為定位符（URL），名稱（URN）或兩者兼備。統一資源名（URN）如同一個人的名稱，而統一資源定位符（URL）代表一個人的住址。  
> 換言之，URN定義某事物的身份，而URL提供查找該事物的方法。

**URL方案分類圖**

![][1] 

> URL(定位符) 和 URN(名稱) 方案屬於 URI 的子類，URI 可以為 URL 或 URN 兩者之一或同時是 URI 和 URN。技術上講，URL 和 URN 屬於資源ID；  
> 但是，人們往往無法將某種方案歸類於兩者中的某一個：所有的URI都可被作為名稱看待，而某些方案同時體現了兩者中的不同部分。

## 延伸閱讀

  * [統一資源標誌符][2]
  * [統一資源定位符][3]
  * [統一資源名稱][4]
  * [What is the difference between a URI, a URL and a URN?][5]

 [1]: https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/URI_Euler_Diagram_no_lone_URIs.svg/180px-URI_Euler_Diagram_no_lone_URIs.svg.png
 [2]: https://zh.wikipedia.org/wiki/統一資源標誌符
 [3]: https://zh.wikipedia.org/wiki/統一資源定位符
 [4]: https://zh.wikipedia.org/wiki/統一資源名稱
 [5]: https://stackoverflow.com/questions/176264/what-is-the-difference-between-a-uri-a-url-and-a-urn
