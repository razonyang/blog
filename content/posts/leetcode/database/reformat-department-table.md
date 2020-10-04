---
title: LeetCode 数据库面试题 – 重新格式化部门表
date: 2019-10-22T13:21:15+00:00
categories:
  - Programing
tags:
  - LeetCode
  - MySQL
---

编写一个 SQL 查询来重新格式化表，使得新的表中有一个部门 id 列和一些对应每个月的收入（revenue）列。

<!--more-->

部门表 Department：

| Column Name | Type    |
| ----------- | ------- |
| id          | int     |
| revenue     | int     |
| month       | varchar |

(id, month) 是表的联合主键。  
这个表格有关于每个部门每月收入的信息。  
月份（month）可以取下列值 ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]。

查询结果格式如下面的示例所示：

Department 表：

| id | revenue | month |
| -- | ------- | ----- |
| 1  | 8000    | Jan   |
| 2  | 9000    | Jan   |
| 3  | 10000   | Feb   |
| 1  | 7000    | Feb   |
| 1  | 6000    | Mar   |

查询得到的结果表：

| id | Jan_Revenue | Feb_Revenue | Mar_Revenue | ... | Dec_Revenue |
| -- | ----------- | ----------- | ----------- | --- | ----------- |
| 1  | 8000        | 7000        | 6000        | ... | null        |
| 2  | 9000        | null        | null        | ... | null        |
| 3  | null        | 10000       | null        | ... | null        |

注意，结果表有 13 列 (1个部门 id 列 + 12个月份的收入列)。

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

## 原题

来源：力扣（LeetCode）  
链接：<https://leetcode-cn.com/problems/reformat-department-table>
