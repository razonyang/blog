---
title: LeetCode 数据库面试题 – Big Countries
date: 2017-02-02T03:24:22+00:00
categories:
  - Programing
tags:
  - LeetCode
  - MySQL
---

若一个国家的面积大于300万平方公里，或者人口大于2500万，则可以称之为大国。

请编写一条 SQL 返回所有大国的 name、population、area。

<!--more-->

## 原题

There is a table **World**

| name            | continent  | area       | population   | gdp           |
|:---------------:|:----------:|:----------:|:------------:|:-------------:|
| Afghanistan     | Asia       | 652230     | 25500100     | 20343000      |
| Albania         | Europe     | 28748      | 2831741      | 12960000      |
| Algeria         | Africa     | 2381741    | 37100000     | 188681000     |
| Andorra         | Europe     | 468        | 78115        | 3712000       |
| Angola          | Africa     | 1246700    | 20609294     | 100990000     |

A country is big if it has an area of bigger than 3 million square km or a population of more than 25 million.

Write a SQL solution to output big countries' name, population and area.

For example, according to the above table, we should output:

| name         | population  | area         |
|:------------:|:-----------:|:------------:|
| Afghanistan  | 25500100    | 652230       |
| Algeria      | 37100000    | 2381741      |

## SQL

```sql
SELECT 
    name, population, area FROM World
WHERE 
    area > 3000000 OR population > 25000000
```
