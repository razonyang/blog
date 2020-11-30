---
title: WordPress 避免页面出现过多 H1 标签
date: 2019-12-30T21:33:38+00:00
categories:
  - Programing
tags:
  - WordPress
---

一些在线的 SEO 工具检测结果表示主页 H1 标签过多，经过查看了主题的源码，主页的文章列表嵌套了文章页的模板（content.php），因此只需要对 content.php 稍作修改即可。

<!--more-->

> 对于一个页面多个 H1 标签是否有碍 SEO 没有定论，笔者也不了解这块，本文纯属从技术角度来修改主题，避免页面出现多个 H1 标签。

## 解决

先看下 content.php 的代码片段：

```php
<h1 class="entry-title"><?php the_title(); ?></h1>
```

首页和文章详情页都共用这一内容模板，我们只需要稍作判断即可，比如首页时，将 H1 改为 H2：

```php
<?php if (is_front_page()): ?>
<h2 class="entry-title"><?php the_title(); ?></h2>
<?php else: ?>
<h1 class="entry-title"><?php the_title(); ?></h1>
<?php endif; ?>
```

如果页面存在更加复杂的判断，也可以改成：

```php
$titleTag = is_front_page() ? 'h2': 'h1';

<<?= $titleTag ?> class="entry-title"><?php the_title(); ?></<?= $titleTag ?>>
```
