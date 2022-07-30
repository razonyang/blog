---
title: LeetCode 數據庫面試題 – 重新格式化部門表
date: 2019-10-22T13:21:15+00:00
categories:
  - Programing
tags:
  - LeetCode
  - MySQL
---

編寫一個 SQL 查詢來重新格式化表，使得新的表中有一個部門 id 列和一些對應每個月的收入（revenue）列。

<!--more-->

部門表 Department：

| Column Name | Type    |
| ----------- | ------- |
| id          | int     |
| revenue     | int     |
| month       | varchar |

(id, month) 是表的聯合主鍵。  
這個表格有關於每個部門每月收入的信息。  
月份（month）可以取下列值 ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]。

查詢結果格式如下面的示例所示：

Department 表：

| id | revenue | month |
| -- | ------- | ----- |
| 1  | 8000    | Jan   |
| 2  | 9000    | Jan   |
| 3  | 10000   | Feb   |
| 1  | 7000    | Feb   |
| 1  | 6000    | Mar   |

查詢得到的結果表：

| id | Jan_Revenue | Feb_Revenue | Mar_Revenue | ... | Dec_Revenue |
| -- | ----------- | ----------- | ----------- | --- | ----------- |
| 1  | 8000        | 7000        | 6000        | ... | null        |
| 2  | 9000        | null        | null        | ... | null        |
| 3  | null        | 10000       | null        | ... | null        |

注意，結果表有 13 列 (1個部門 id 列 + 12個月份的收入列)。

## 解答

```sql
SELECT
    id,
    SUM(IF(month="Jan", revenue, null)) as Jan_Revenue,
    SUM(IF(month="Feb", revenue, null)) as Feb_Revenue,
    SUM(IF(month="Mar", revenue, null)) as Mar_Revenue,
    SUM(IF(month="Apr", revenue, null)) as Apr_Revenue,
    SUM(IF(month="May", revenue, null)) as May_Revenue,
    SUM(IF(month="Jun", revenue, null)) as Jun_Revenue,
    SUM(IF(month="Jul", revenue, null)) as Jul_Revenue,
    SUM(IF(month="Aug", revenue, null)) as Aug_Revenue,
    SUM(IF(month="Sep", revenue, null)) as Sep_Revenue,
    SUM(IF(month="Oct", revenue, null)) as Oct_Revenue,
    SUM(IF(month="Nov", revenue, null)) as Nov_Revenue,
    SUM(IF(month="Dec", revenue, null)) as Dec_Revenue
FROM Department
GROUP BY id
```

> 也可以用 CASE WHEN THEN。

## 原題

來源：力扣（LeetCode）  
鏈接：<https://leetcode-cn.com/problems/reformat-department-table>
