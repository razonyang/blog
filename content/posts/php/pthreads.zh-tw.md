---
title: PHP pthreads 多線程擴展安裝教程
date: 2019-08-01T05:36:15+00:00
categories:
  - Programing
tags:
  - PHP
  - pthreads
---

本文闡述如何在 Linux 下安裝 PHP 的多線程擴展 - [pthreads][1]。

<!--more-->

## 要求

> 筆者安裝的是 pthreads v3。

  * PHP 7.2 以上
  * ZTS：線程安全

由於筆者的操作系統自帶的 PHP 是非 ZTS 的，所以按照 [PHP 編譯安裝詳解][2] 編譯安裝 PHP ZTS 版。

## 安裝

安裝有兩種方式：`pecl` 和 源碼安裝，不過筆者嘗試過 `pecl` 安裝失敗，上面的 pthreads 包也是 2016 年的，所以筆者放棄 `pecl` 安裝方式，  
本文將使用源碼編譯安裝。

```shell
$ git clone https://github.com/krakjoe/pthreads.git
$ cd pthreads

$ /usr/local/php72/bin/phpize
$ ./configure --with-php-config=/usr/local/php72/bin/php-config

$ make

$ make install
Installing shared extensions: /usr/local/php72/lib/php/extensions/no-debug-zts-20170718/
```

  * `./configure --with-php-config`：`--with-php-config` 是可選的，但由於筆者是編譯安裝的，所以可能需要指定 PHP 的配置腳本路徑，以避免意想不到的問題。

> 上述 `phpize`、`php-config` 等腳本請按照自己系統的配置自行修改。

### 配置

安裝成功後，在配置文件加入一行 `extension=pthreads.so`，比如筆者的 `CLI` 配置為：`/usr/local/php72/lib/php-cli.ini`：

```shell
$ vi /usr/local/php72/lib/php-cli.ini
    
extension=pthreads.so
```

> 這裡筆者特意分開命令行和其他模式的配置文件，因為 `pthreads` 僅限於 CLI 模式使用。

驗證是否成功加載：

```shell
$ php72 -m | grep pthreads
pthreads
```

如果沒有輸出，則說明配置不對，請檢查配置是否正確。可以通過 `php72 --ini` 查看所加載的配置文件是否分正確。

> `php72` 是筆者自行編譯的 PHP ZTS 版腳本，請修改成你係統對應的腳本名稱。

自此，`pthreads` 安裝完成。

 [1]: http://php.net/manual/en/book.pthreads.php
 [2]: /posts/php/compilation
