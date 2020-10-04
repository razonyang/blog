---
title: PHP 多进程编程 – 入门
date: 2019-01-06T05:33:25+00:00
categories:
  - Programing
tags:
  - PHP
  - pcntl
---

本文将简述如何快速了解 PHP 的多进程编程，并提供实验脚本。

<!--more-->

## 函数

为快速入门，本文只使用多进程的两个函数：[pcntl_fork][1] 和 [pcntl_waitpid][2]

多进程开发最重要的函数 `pcntl_fork`，其在当前进程 fork 一个子进程，然后父子进程在 fork 处分别继续向下执行。  
这里需要注意，`pcntl_fork` 返回的值在父进程会得到子进程的 PID （进程 ID），而在子进程中，该值为 ``。

## 实例

接着开始实践，执行 [pcntl.php][3] 脚本：

```shell
$ php ./pcntl.php

Child process #7217 started
Child process #7218 started
Child process #7218 finished
Child process #7220 started
Child process #7221 started
Child process #7219 started
Child process #7221 finished
Child process #7217 finished
Child process #7220 finished
Child process #7219 finished
Child process #7217 exited with status: 0
Child process #7218 exited with status: 0
Child process #7219 exited with status: 0
Child process #7220 exited with status: 0
Child process #7221 exited with status: 0
```

### pcntl.php

```php
<?php

if (!extension_loaded('pcntl')) {
    die("Extension not loaded: pcntl\n");
}

$workers = [];
$workersCount = 5;

for ($i = 0; $i < $workersCount; $i++) {
    $pid = pcntl_fork();
    if ($pid < 0) {
        die("Could not fork\n");
    }
    if ($pid > 0) {
        // parent process
        $workers[] = $pid; // store child process ID.
        continue;
    }

    // child process
    $pid = posix_getpid();
    echo "Child process #{$pid} started\n";

    // task
    sleep(rand(0, 2));

    echo "Child process #{$pid} finished\n";

    // exit on child process has finished it's task.
    exit(0);
}

// parent process
foreach ($workers as $worker) {
    // wait child process to exit
    pcntl_waitpid($worker, $status);
    echo "Child process #{$worker} exited with status: {$status}\n";
}
```

 [1]: http://php.net/manual/zh/function.pcntl-fork.php
 [2]: http://php.net/manual/zh/function.pcntl-waitpid.php
 [3]: #pcntl.php
