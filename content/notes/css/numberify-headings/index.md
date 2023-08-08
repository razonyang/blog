+++
type = "docs"
title = "利用 CSS 对标题进行自动编号"
linkTitle = "对标题自动编号"
date = 2022-04-15T23:58:02+08:00
# description = "" # Used by description meta tag, summary will be used instead if not set or empty.
featured = true
draft = false
comment = true
toc = true
reward = true
pinned = false
categories = ["CSS", "SCSS"]
tags = ["counter", "counter-reset", "counter-increment"]
series = ["Web"]
images = []
+++

当文章篇幅过长，对标题进行编号，可以给读者带来更好的阅读体验。本文将讲述如何利用 CSS 对标题进行自动编号。

<!--more-->

## 实现

得益于 CSS 的计数器，我们可以很轻松地对标题进行计数。

> 介于文章篇幅和原理说明，只对 `h2`-`h3` 进行编号。你可以稍作修改，即可对 `h2`-`h6` 进行编号。

```scss
h1 {
  // 重置 h2 计数器
  counter-reset: h2Counter;
}

@for $i from 2 through 3 {
  h#{$i} {
    // 增加当前标题的计数器
    counter-increment: h#{$i}Counter;
    // 重置下个级别的计数器
    counter-reset: h#{$i + 1}Counter;

    // 于标题前显示编号
    &::before {
      display: inline;
      @if $i == 2 {
        content: counter(h2Counter) ".\0000a0";
      } @else if $i == 3 {
        content: counter(h2Counter) "." counter(h3Counter) ".\0000a0";
      }
    }
  }
}
```

1. `counter` 获得计数器得值。
1. `counter-reset` 重置计数器。
1. `counter-increment` 增加计数器。

## 例子

{{< codepen GRywWzq >}}

