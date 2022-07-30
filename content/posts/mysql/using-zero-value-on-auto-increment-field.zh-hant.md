---
title: MySQL 在 AUTO INCREMENT 列存儲零值
date: 2019-04-01T04:45:03+00:00
categories:
  - Programing
tags:
  - MySQL
---

由於業務改動，打算在某表加上一個 `id` 為 0 的記錄，但是發現了個有趣的事情：`id` 自增了，而不是 ``。

<!--more-->

## 重現

首先新建一個測試表演示一下：

```sql
> CREATE TABLE `t_user`(`id` INTEGER PRIMARY KEY AUTO_INCREMENT, `name` VARCHAR(32) NOT NULL);
> INSERT INTO `t_user`(`id`, `name`) VALUES(0, 'foo');
> SELECT * FROM `t_user`;
```

| id | name 
|:---|:---
| 1 | foo

## 解決

可以看 `id` 不是所期望的 ``，經過一番搜索得知，MySQL **一般情況**下，自增列在值為 `null` 或 `` 時，其值會自增。  
既然是指一般情況下，也就是說可以修改這個默認行為，而這個配置就是 `NO_AUTO_VALUE_ON_ZERO`。  
按字面理解就是自增列值為 `` 時，不使用下一個序列號，我們不妨測試一下。

```sql
> SET SESSION sql_mode="NO_AUTO_VALUE_ON_ZERO";
> INSERT INTO `t_user`(`id`, `name`) VALUES(0, 'bar');
> SELECT * FROM `t_user`;
```

| id | name
|:---|:---
| 0 | bar
| 1 | foo

可以看到，`id` 終於_正常_了。

> **注意**：本文例子只是臨時設置了 `sql_mode`，如果需要永久有效，請修改配置文件並重啟。  
> 另外，不建議自增列存儲零值，如果要這麼做，請確保設置了 `NO_AUTO_VALUE_ON_ZERO`，否則會出現意想不到的問題。  
> 比如將本地 mysqldump 導出數據導入到未設置 `NO_AUTO_VALUE_ON_ZERO` 的服務端時，就會出現數據不一致的問題。

## 相關內容

  * [MySQL Server SQL Modes - NO_AUTO_VALUE_ON_ZERO][1]
  * [How to force MySQL to take 0 as a valid auto-increment value][2]

 [1]: https://dev.mysql.com/doc/refman/8.0/en/sql-mode.html#sqlmode_no_auto_value_on_zero
 [2]: https://stackoverflow.com/questions/1142472/how-to-force-mysql-to-take-0-as-a-valid-auto-increment-value
