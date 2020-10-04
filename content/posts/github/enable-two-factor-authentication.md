---
title: Github 开启短信双重验证
date: 2018-09-08T04:40:10+00:00
categories:
  - Programing
tags:
  - GitHub
  - HTML
---

前些天笔者想开启 Github 的短信方式的双重验证(two factor authentication)，但是发现并没有我们天朝的区号(86)，难道是 Github 不支持国内的短信双重验证吗？其实不然。

<!--more-->

因为手机区号选择是一个 **select** 列表，笔者想着可不可以自己加一个选项呢？  
实践是检验真理的唯一标准，我用浏览器自带的审查元素功能，然后编辑 **select** 列表，然后添加以下选项：

```html
<option value="+86">China +86</option>
```

接着选中，填写号码，结果居然成功设定了，这似乎是 Github 故意隐藏或者忽略了。
