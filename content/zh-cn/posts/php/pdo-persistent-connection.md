---
title: PHP PDO 持久连接的一些思考和实践
date: 2019-10-01T05:34:49+00:00
categories:
  - Programing
tags:
  - PDO
  - PHP
---

最近查阅 PHP 官方的 [PDO 文档][1]，  
在 [连接与连接管理][2] 发现个有趣的配置：持久化连接。  
这一看，感觉像似连接池的东西，脑海中一下子就浮现好几个问题：

  * 持久连接不是可以减少建立数据库连接所产生的消耗，以到达复用连接，提高性能的目的吗，为啥没有默认设置呢？
  * 持久连接可以设置最大连接数吗？
  * 是否存在事务和死锁问题呢？若有应该如何避免呢？

<!--more-->

对于第一个问题，待讨论完其余问题后，答案自然浮现。

> 由于笔者知识面和深度有限，本文并不能系统且完整地阐述和解释所有问题，亦难免会有不严谨或错误的地方，还望指出和讨论。

## 环境

  * PHP：7.2 ZTS
  * PDO Driver：MySQL

本文脚本已上传在 [Github][3]，有兴趣的可以 clone 下来亲自尝试。

## 最大连接数

经常一番查找和搜索，并没有最大连接数的配置，那么 PHP 是怎么维持持久连接的呢？首先想到的猜测是：每个进程/线程维持着一个持久连接，于是乎笔者写了两个脚本进行验证。

### 进程

> 需要安装 `pcntl` 扩展。

```shell
$ php pdo/persistent-process.php

Process #12516 connection ID: 107
Process #12516 connection ID: 107
Process #12516 connection ID: 107
Process #12517 connection ID: 108
Process #12517 connection ID: 108
Process #12517 connection ID: 108
Child process #12516 exited with status: 0
Child process #12517 exited with status: 0
```

由上述输出可看出：相同进程的连接 ID 是相同的，也就是说不同进程间是无法复用持久连接。

### 线程

> 需要安装 `pthreads` 扩展。

```shell
$ php pdo/persistent-thread.php

Thread #140162891634432 connection ID: 105
Thread #140162891634432 connection ID: 105
Thread #140162891634432 connection ID: 105
Segmentation fault
```

在多线程中貌似使用持久连接会出现段错误。

### 总结

由上述两个脚本的输出，可以猜测出：每个进程/线程对于相同的凭证，会维持着同一个持久连接（笔者猜测！）。

## 事务与锁

关于持久连接，笔者最关心的是事务和锁，下面将逐一讨论。

这里可能需要分开两种运行模式进行讨论，一种是长期运行的模式（如：守护进程），另一种是传统的 Web 模式（每次都新建脚本实例处理请求）。

### 事务

关于事务，最关心的是：上一个请求的事务如果没有提交或者回滚，是否会影响下一个请求呢？

#### 传统 Web 模式

在传统 Web 模式，每次都是新的脚本处理请求，因为脚本结束时，如果 PDO 处于事务中，但没有提交，PHP 会对其进行事务回滚，所以在这种情况下，并不会影响下一个请求。

#### 守护进程

如上述说明，PDO 连接如果在脚本结束时，会对未提交的事务进行回滚，但是在守护进程中，如果代码实现不严谨，会导致数据修改没有提交等问题。

### 锁

如果在某个持久连接中，我们加了锁后没有在请求结束前，将锁释放，将会导致死锁。

这是因为锁不像事务，PDO 无法自动在脚本中进行解锁（PDO 无法感知），而且因为是持久连接，该连接一直持有该锁，除非**连接断开（含蓄释放锁）**或者**主动释放**。

试想下，如果加了互斥锁，那除了加锁的连接，其他连接就永远无法获取该锁而阻塞，此时需要**人为干预**或者**数据库层面**解决，这后果很恐怖。

```php
$conn = getConnection();
$conn->getPDO()->exec('LOCK TABLES user WRITE');

// do something

// forgot to release lock...
```

#### 避免死锁

除了连接断开会含蓄释放锁，我们可以用 `try` 和 `finally` 主动释放锁：

```php
try {
    // lock
} finally {
    // release lock
}
```

## 总结

经过上述猜想和实践，可以粗略得出以下结论：

  * 因为持久连接和进程/线程数有关，大多场景下，无法在 PHP 层面控制最大的 PDO 连接数，也侧面地说明持久连接和连接池是两个东西。
  * 使用持久连接，需要开发者更加注意事务和锁的使用，如果编码不当很容易出现问题，比如：死锁。
  * 如果服务器和数据库都处于内网，似乎持久连接并不是那么有必要。

使用持久连接能减少建立连接所需要的时间以提高性能是毋庸置疑的，但是是否有必要使用持久连接，还是需要根据自身情况进行权衡的。  
以笔者看来，如果业务瓶颈不在于连接，持久连接并没有多大收益。如果是守护进程，我们完全可以使用单例模式。

总而言之，这个持久连接很鸡肋，有点失望。

## 相关链接

  * [PHP PDO][1]
  * [Fully Understanding PDO ATTR_PERSISTENT][4]

 [1]: http://php.net/manual/zh/book.pdo.php
 [2]: http://php.net/manual/zh/pdo.connections.php
 [3]: https://github.com/razonyang/php-lab/tree/master/pdo
 [4]: https://stackoverflow.com/questions/23432948/fully-understanding-pdo-attr-persistent
