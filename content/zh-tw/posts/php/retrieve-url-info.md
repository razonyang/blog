---
title: PHP 獲取 URL 信息
date: 2018-12-21T05:38:02+00:00
categories:
  - Programing
tags:
  - PHP
---

本文將闡述如何用PHP以正確的姿勢獲取URL的信息，並將其封裝成類，方便複用。

<!--more-->

## URL

首先來了解一下URL的文法：

    scheme:[//[user[:password]@]host[:port]][/path][?query][#fragment]

> 中括號表示的是可選項。

| Name           | Explanation                            |
|:---------------|:---------------------------------------|
| scheme         | 傳輸協議                               |
| user, password | 訪問資源需要的憑證信息                 |
| host           | 服務器                                 |
| port           | 端口                                   |
| path           | 路徑                                   |
| query          | 查詢                                   |
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

## 函數

在瞭解URL的文法之後，我們很容易編寫函數去獲取URL的信息，但是本文並不打算編寫獨立的函數，  
因為PHP已經提供了內置的函數 `parse_url` 和 `parse_str` 來實現這一目的。

### parse_url

```php
mixed parse_url ( string $url [, int $component = -1 ] )
```

`parse_url` 解析一個URL，並返回一個包含URL各種組成部分的關聯數組（鍵名和URL文法中的一致，比如：`scheme`、`host`、`port`等）。

當指定了第二個參數 `component`，則會返回指定組成部分的值，此時返回的是字符串或者數值（`PHP_URL_PORT`）。

官方文檔：<https://secure.php.net/manual/zh/function.parse-url.php>

### parse_str

```php
void parse_str ( string $encoded_string [, array &$result ] )
```

`parse_str` 將字符串解析成多個變量，第二個參數 `$result` 用於存儲變量的鍵值。

這裡有點小疑惑，因為可以看到 `$result` 是可選的，且該函數沒有返回值，如果不設置 `$result`，那麼這函數的意義是什麼呢？

不過官方文檔也標註了：極度不建議不設置 `$result` 的情況下使用該函數，並且在 PHP 7.2 中將廢棄不設置參數的行為。

官方文檔：<https://secure.php.net/manual/zh/function.parse-str.php>

## 實現

通過上述的 `parse_url` 和 `parse_str` 函數，可以輕鬆的獲取URL的信息：

```php
// URL
$url = 'https://example.com/user?name=foo';

// 獲取URL組成部分
$components = parse_url($url);
print_r($components);

// 獲取查詢字符串
$query = isset($components['query']) ? $components['query'] : '';
print_r($query);

// 獲取查詢參數數組
parse_str($query, $params);
print_r($params);
```

輸出

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

最後，將此封裝成類，方便複用。

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
