---
title: WordPress 避免頁面出現過多 H1 標籤
date: 2019-12-30T21:33:38+00:00
categories:
  - Programing
tags:
  - WordPress
---

一些在線的 SEO 工具檢測結果表示主頁 H1 標籤過多，經過查看了主題的源碼，主頁的文章列表嵌套了文章頁的模板（content.php），因此只需要對 content.php 稍作修改即可。

<!--more-->

> 對於一個頁面多個 H1 標籤是否有礙 SEO 沒有定論，筆者也不瞭解這塊，本文純屬從技術角度來修改主題，避免頁面出現多個 H1 標籤。

## 解決

先看下 content.php 的代碼片段：

```php
<h1 class="entry-title"><?php the_title(); ?></h1>
```

首頁和文章詳情頁都共用這一內容模板，我們只需要稍作判斷即可，比如首頁時，將 H1 改為 H2：

```php
<?php if (is_front_page()): ?>
<h2 class="entry-title"><?php the_title(); ?></h2>
<?php else: ?>
<h1 class="entry-title"><?php the_title(); ?></h1>
<?php endif; ?>
```

如果頁面存在更加複雜的判斷，也可以改成：

```php
$titleTag = is_front_page() ? 'h2': 'h1';

<<?= $titleTag ?> class="entry-title"><?php the_title(); ?></<?= $titleTag ?>>
```
