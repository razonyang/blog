---
title: MySQL 在 AUTO INCREMENT 列存储零值
date: 2019-04-01T04:45:03+00:00
categories:
  - Programing
tags:
  - MySQL
---

由于业务改动，打算在某表加上一个 `id` 为 0 的记录，但是发现了个有趣的事情：`id` 自增了，而不是 ``。

<!--more-->

## 重现

首先新建一个测试表演示一下：

```sql
> CREATE TABLE `t_user`(`id` INTEGER PRIMARY KEY AUTO_INCREMENT, `name` VARCHAR(32) NOT NULL);
> INSERT INTO `t_user`(`id`, `name`) VALUES(0, 'foo');
> SELECT * FROM `t_user`;
```

| id | name 
|:---|:---
| 1 | foo

## 解决

可以看 `id` 不是所期望的 ``，经过一番搜索得知，MySQL **一般情况**下，自增列在值为 `null` 或 `` 时，其值会自增。  
既然是指一般情况下，也就是说可以修改这个默认行为，而这个配置就是 `NO_AUTO_VALUE_ON_ZERO`。  
按字面理解就是自增列值为 `` 时，不使用下一个序列号，我们不妨测试一下。

```sql
> SET SESSION sql_mode="NO_AUTO_VALUE_ON_ZERO";
> INSERT INTO `t_user`(`id`, `name`) VALUES(0, 'bar');
> SELECT * FROM `t_user`;
```

| id | name
|:---|:---
| 0 | bar
| 1 | foo

可以看到，`id` 终于_正常_了。

> **注意**：本文例子只是临时设置了 `sql_mode`，如果需要永久有效，请修改配置文件并重启。  
> 另外，不建议自增列存储零值，如果要这么做，请确保设置了 `NO_AUTO_VALUE_ON_ZERO`，否则会出现意想不到的问题。  
> 比如将本地 mysqldump 导出数据导入到未设置 `NO_AUTO_VALUE_ON_ZERO` 的服务端时，就会出现数据不一致的问题。

## 相关内容

  * [MySQL Server SQL Modes - NO_AUTO_VALUE_ON_ZERO][1]
  * [How to force MySQL to take 0 as a valid auto-increment value][2]

 [1]: https://dev.mysql.com/doc/refman/8.0/en/sql-mode.html#sqlmode_no_auto_value_on_zero
 [2]: https://stackoverflow.com/questions/1142472/how-to-force-mysql-to-take-0-as-a-valid-auto-increment-value
