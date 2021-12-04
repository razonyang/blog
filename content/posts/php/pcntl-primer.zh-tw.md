---
title: PHP 多進程編程 – 入門
date: 2019-01-06T05:33:25+00:00
categories:
  - Programing
tags:
  - PHP
  - pcntl
---

本文將簡述如何快速瞭解 PHP 的多進程編程，並提供實驗腳本。

<!--more-->

## 函數

為快速入門，本文只使用多進程的兩個函數：[pcntl_fork][1] 和 [pcntl_waitpid][2]

多進程開發最重要的函數 `pcntl_fork`，其在當前進程 fork 一個子進程，然後父子進程在 fork 處分別繼續向下執行。  
這裡需要注意，`pcntl_fork` 返回的值在父進程會得到子進程的 PID （進程 ID），而在子進程中，該值為 ``。

## 實例

接著開始實踐，執行 [pcntl.php][3] 腳本：

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
