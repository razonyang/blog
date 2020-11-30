---
title: CSS 文本超過一行顯示省略號
date: 2016-12-22T14:33:32+00:00
categories:
  - Programing
tags:
  - CSS
---

CSS 文本超過一行顯示省略號 ...

<!--more-->

```css
.text-nowrap {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
```

```html
<p class="text-nowrap" style="width: 120px;">
 A very loooooooooooooooooooooooooooooong text.
</p>
```

{{< jsfiddle "razonyang/wLrbh70u" >}}
