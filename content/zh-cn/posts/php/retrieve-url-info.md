---
title: PHP 获取 URL 信息
date: 2018-12-21T05:38:02+00:00
categories:
  - Programing
tags:
  - PHP
---

本文将阐述如何用PHP以正确的姿势获取URL的信息，并将其封装成类，方便复用。

<!--more-->

## URL

首先来了解一下URL的文法：

    scheme:[//[user[:password]@]host[:port]][/path][?query][#fragment]

> 中括号表示的是可选项。

| Name           | Explanation                            |
|:---------------|:---------------------------------------|
| scheme         | 传输协议                               |
| user, password | 访问资源需要的凭证信息                 |
| host           | 服务器                                 |
| port           | 端口                                   |
| path           | 路径                                   |
| query          | 查询                                   |
| fragment       | 片段                                   |

```
                        hierarchical part
            ┌───────────────────┴─────────────────────┐
                        authority               path
            ┌───────────────┴───────────────┐┌───┴────┐
      abc://username:password@example.com:123/path/data?key=value&key2=value2#fragid1
      └┬┘   └───────┬───────┘ └────┬────┘ └┬┘           └─────────┬─────────┘ └──┬──┘
    scheme  user information     host     port                  query         fragment
    
      urn:example:mammal:monotreme:echidna
      └┬┘ └──────────────┬───────────────┘
    scheme              path
```

## 函数

在了解URL的文法之后，我们很容易编写函数去获取URL的信息，但是本文并不打算编写独立的函数，  
因为PHP已经提供了内置的函数 `parse_url` 和 `parse_str` 来实现这一目的。

### parse_url

```php
mixed parse_url ( string $url [, int $component = -1 ] )
```

`parse_url` 解析一个URL，并返回一个包含URL各种组成部分的关联数组（键名和URL文法中的一致，比如：`scheme`、`host`、`port`等）。

当指定了第二个参数 `component`，则会返回指定组成部分的值，此时返回的是字符串或者数值（`PHP_URL_PORT`）。

官方文档：<https://secure.php.net/manual/zh/function.parse-url.php>

### parse_str

```php
void parse_str ( string $encoded_string [, array &$result ] )
```

`parse_str` 将字符串解析成多个变量，第二个参数 `$result` 用于存储变量的键值。

这里有点小疑惑，因为可以看到 `$result` 是可选的，且该函数没有返回值，如果不设置 `$result`，那么这函数的意义是什么呢？

不过官方文档也标注了：极度不建议不设置 `$result` 的情况下使用该函数，并且在 PHP 7.2 中将废弃不设置参数的行为。

官方文档：<https://secure.php.net/manual/zh/function.parse-str.php>

## 实现

通过上述的 `parse_url` 和 `parse_str` 函数，可以轻松的获取URL的信息：

```php
// URL
$url = 'https://example.com/user?name=foo';

// 获取URL组成部分
$components = parse_url($url);
print_r($components);

// 获取查询字符串
$query = isset($components['query']) ? $components['query'] : '';
print_r($query);

// 获取查询参数数组
parse_str($query, $params);
print_r($params);
```

输出

```
    Array
    (
        [scheme] => https
        [host] => example.com
        [path] => /user
        [query] => name=foo
    )
    
    name=foo
    
    Array
    (
        [name] => foo
    )
```

## Class

最后，将此封装成类，方便复用。

```php
/**
 * Class URL
 *
 * @property string|null scheme
 *
 * @property string|null user
 *
 * @property string|null pass
 *
 * @property string|null host
 *
 * @property integer|null port
 *
 * @property string|null path
 *
 * @property string|null query
 *
 * @property string|null fragment
 */
class URL
{
    private $data;

    private $queryParams;

    public function __construct($url)
    {
        $this->data = parse_url($url);
        if ($this->data === false) {
            throw new \InvalidArgumentException("invalid 
        }
    }

    public function __get($name)
    {
        return isset($this->data[$name]) ? $this->data[$name] : null;
    }

    public function getQueryParams()
    {
        if ($this->queryParams === null) {
            $query = $this->query;
            if (empty($query)) {
                $this->queryParams = [];
            } else {
                parse_str($query, $this->queryParams);
            }
        }

        return $this->queryParams;
    }
}
```
