---
title: PHP 安全 – 不要暴露 phpinfo
date: 2020-01-05T15:57:50+00:00
categories:
  - Programing
tags:
  - PHP
  - phpinfo
---

有時候為了驗證和測試配置是否正常，可能會利用 **phpinfo** 打印配置信息，而測試完畢後千萬別忘記刪掉對應的文件，因為 **phpinfo** 包含了很多敏感的數據。  
舉個例子，如果你配置了 Redis 作為 Session Handler，那麼你的 Redis 連接信息就已經暴露出去了，這是十分危險的行為。

<!--more-->

## 建議

正因如此，我們應該儘量避免使用 **phpinfo**，特別是生產環境。我們完全可以利用其它函數進行相應的測試，如：**ini_get**、**extension_loaded** 等。

命令行可以直接用 `php -i` 查看。
