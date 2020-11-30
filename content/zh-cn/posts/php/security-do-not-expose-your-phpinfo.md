---
title: PHP 安全 – 不要暴露 phpinfo
date: 2020-01-05T15:57:50+00:00
categories:
  - Programing
tags:
  - PHP
  - phpinfo
---

有时候为了验证和测试配置是否正常，可能会利用 **phpinfo** 打印配置信息，而测试完毕后千万别忘记删掉对应的文件，因为 **phpinfo** 包含了很多敏感的数据。  
举个例子，如果你配置了 Redis 作为 Session Handler，那么你的 Redis 连接信息就已经暴露出去了，这是十分危险的行为。

<!--more-->

## 建议

正因如此，我们应该尽量避免使用 **phpinfo**，特别是生产环境。我们完全可以利用其它函数进行相应的测试，如：**ini_get**、**extension_loaded** 等。

命令行可以直接用 `php -i` 查看。
