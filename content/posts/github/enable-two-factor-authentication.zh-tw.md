---
title: Github 開啟短信雙重驗證
date: 2018-09-08T04:40:10+00:00
categories:
  - Programing
tags:
  - GitHub
  - HTML
---

前些天筆者想開啟 Github 的短信方式的雙重驗證(two factor authentication)，但是發現並沒有我們天朝的區號(86)，難道是 Github 不支持國內的短信雙重驗證嗎？其實不然。

<!--more-->

因為手機區號選擇是一個 **select** 列表，筆者想著可不可以自己加一個選項呢？  
實踐是檢驗真理的唯一標準，我用瀏覽器自帶的審查元素功能，然後編輯 **select** 列表，然後添加以下選項：

```html
<option value="+86">China +86</option>
```

接著選中，填寫號碼，結果居然成功設定了，這似乎是 Github 故意隱藏或者忽略了。
