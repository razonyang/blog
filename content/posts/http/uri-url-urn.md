---
title: URI、URL 和 URN 之间的关系和区别
date: 2018-11-30T15:57:46+00:00
categories:
  - Programing
tags:
  - URI
  - URL
  - URN
---

之前经常看到 URI、URL 和 URN，但是都没去理清这三者的关系，于是今天就花了点时间搞清楚三者关系。

<!--more-->

## 含义

先了解一下三者的含义

### URI

URI - 统一资源标识符（Uniform Resource Identifier），是一个用于标识某一互联网资源名称的字符串。

### URL

URL - 统一资源定位符（或称统一资源定位器/定位地址、URL地址，英语：Uniform Resource Locator，常缩写为URL），有时也被俗称为网页地址（网址）。

### URN

URN - 统一资源名称（Uniform Resource Name），是统一资源标识（URI）的历史名字。

## 关系

> URI可被视为定位符（URL），名称（URN）或两者兼备。统一资源名（URN）如同一个人的名称，而统一资源定位符（URL）代表一个人的住址。  
> 换言之，URN定义某事物的身份，而URL提供查找该事物的方法。

**URL方案分类图**

![][1] 

> URL(定位符) 和 URN(名称) 方案属于 URI 的子类，URI 可以为 URL 或 URN 两者之一或同时是 URI 和 URN。技术上讲，URL 和 URN 属于资源ID；  
> 但是，人们往往无法将某种方案归类于两者中的某一个：所有的URI都可被作为名称看待，而某些方案同时体现了两者中的不同部分。

## 延伸阅读

  * [统一资源标志符][2]
  * [统一资源定位符][3]
  * [统一资源名称][4]
  * [What is the difference between a URI, a URL and a URN?][5]

 [1]: https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/URI_Euler_Diagram_no_lone_URIs.svg/180px-URI_Euler_Diagram_no_lone_URIs.svg.png
 [2]: https://zh.wikipedia.org/wiki/统一资源标志符
 [3]: https://zh.wikipedia.org/wiki/统一资源定位符
 [4]: https://zh.wikipedia.org/wiki/统一资源名称
 [5]: https://stackoverflow.com/questions/176264/what-is-the-difference-between-a-uri-a-url-and-a-urn
