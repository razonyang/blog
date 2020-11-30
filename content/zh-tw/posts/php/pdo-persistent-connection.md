---
title: PHP PDO 持久連接的一些思考和實踐
date: 2019-10-01T05:34:49+00:00
categories:
  - Programing
tags:
  - PDO
  - PHP
---

最近查閱 PHP 官方的 [PDO 文檔][1]，  
在 [連接與連接管理][2] 發現個有趣的配置：持久化連接。  
這一看，感覺像似連接池的東西，腦海中一下子就浮現好幾個問題：

  * 持久連接不是可以減少建立數據庫連接所產生的消耗，以到達複用連接，提高性能的目的嗎，為啥沒有默認設置呢？
  * 持久連接可以設置最大連接數嗎？
  * 是否存在事務和死鎖問題呢？若有應該如何避免呢？

<!--more-->

對於第一個問題，待討論完其餘問題後，答案自然浮現。

> 由於筆者知識面和深度有限，本文並不能系統且完整地闡述和解釋所有問題，亦難免會有不嚴謹或錯誤的地方，還望指出和討論。

## 環境

  * PHP：7.2 ZTS
  * PDO Driver：MySQL

本文腳本已上傳在 [Github][3]，有興趣的可以 clone 下來親自嘗試。

## 最大連接數

經常一番查找和搜索，並沒有最大連接數的配置，那麼 PHP 是怎麼維持持久連接的呢？首先想到的猜測是：每個進程/線程維持著一個持久連接，於是乎筆者寫了兩個腳本進行驗證。

### 進程

> 需要安裝 `pcntl` 擴展。

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

由上述輸出可看出：相同進程的連接 ID 是相同的，也就是說不同進程間是無法複用持久連接。

### 線程

> 需要安裝 `pthreads` 擴展。

```shell
$ php pdo/persistent-thread.php

Thread #140162891634432 connection ID: 105
Thread #140162891634432 connection ID: 105
Thread #140162891634432 connection ID: 105
Segmentation fault
```

在多線程中貌似使用持久連接會出現段錯誤。

### 總結

由上述兩個腳本的輸出，可以猜測出：每個進程/線程對於相同的憑證，會維持著同一個持久連接（筆者猜測！）。

## 事務與鎖

關於持久連接，筆者最關心的是事務和鎖，下面將逐一討論。

這裡可能需要分開兩種運行模式進行討論，一種是長期運行的模式（如：守護進程），另一種是傳統的 Web 模式（每次都新建腳本實例處理請求）。

### 事務

關於事務，最關心的是：上一個請求的事務如果沒有提交或者回滾，是否會影響下一個請求呢？

#### 傳統 Web 模式

在傳統 Web 模式，每次都是新的腳本處理請求，因為腳本結束時，如果 PDO 處於事務中，但沒有提交，PHP 會對其進行事務回滾，所以在這種情況下，並不會影響下一個請求。

#### 守護進程

如上述說明，PDO 連接如果在腳本結束時，會對未提交的事務進行回滾，但是在守護進程中，如果代碼實現不嚴謹，會導致數據修改沒有提交等問題。

### 鎖

如果在某個持久連接中，我們加了鎖後沒有在請求結束前，將鎖釋放，將會導致死鎖。

這是因為鎖不像事務，PDO 無法自動在腳本中進行解鎖（PDO 無法感知），而且因為是持久連接，該連接一直持有該鎖，除非**連接斷開（含蓄釋放鎖）**或者**主動釋放**。

試想下，如果加了互斥鎖，那除了加鎖的連接，其他連接就永遠無法獲取該鎖而阻塞，此時需要**人為干預**或者**數據庫層面**解決，這後果很恐怖。

```php
$conn = getConnection();
$conn->getPDO()->exec('LOCK TABLES user WRITE');

// do something

// forgot to release lock...
```

#### 避免死鎖

除了連接斷開會含蓄釋放鎖，我們可以用 `try` 和 `finally` 主動釋放鎖：

```php
try {
    // lock
} finally {
    // release lock
}
```

## 總結

經過上述猜想和實踐，可以粗略得出以下結論：

  * 因為持久連接和進程/線程數有關，大多場景下，無法在 PHP 層面控制最大的 PDO 連接數，也側面地說明持久連接和連接池是兩個東西。
  * 使用持久連接，需要開發者更加註意事務和鎖的使用，如果編碼不當很容易出現問題，比如：死鎖。
  * 如果服務器和數據庫都處於內網，似乎持久連接並不是那麼有必要。

使用持久連接能減少建立連接所需要的時間以提高性能是毋庸置疑的，但是是否有必要使用持久連接，還是需要根據自身情況進行權衡的。  
以筆者看來，如果業務瓶頸不在於連接，持久連接並沒有多大收益。如果是守護進程，我們完全可以使用單例模式。

總而言之，這個持久連接很雞肋，有點失望。

## 相關鏈接

  * [PHP PDO][1]
  * [Fully Understanding PDO ATTR_PERSISTENT][4]

 [1]: http://php.net/manual/zh/book.pdo.php
 [2]: http://php.net/manual/zh/pdo.connections.php
 [3]: https://github.com/razonyang/php-lab/tree/master/pdo
 [4]: https://stackoverflow.com/questions/23432948/fully-understanding-pdo-attr-persistent
