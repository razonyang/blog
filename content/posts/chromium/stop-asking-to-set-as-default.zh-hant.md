---
title: Chromium Stop Asking to Set as Default
date: 2017-08-12T05:40:49+00:00
categories:
  - Programing
tags:
  - Chromium
---

今天安裝了 Chromium 瀏覽器，但是每次打開都會提示 `是否設置為默認瀏覽器`，卻沒有 `Don't Ask Again` 的按鈕。  
經過一番搜索，Chromium 支持命令行參數 `-no-default-browser-check` 可以停止檢查是否默認瀏覽器。  
不過一般桌面的快捷方式應該如何設置呢？

<!--more-->

> 筆者使用的是 Linux 桌面版

# 查找快捷方式

一般地，應用的快捷方式會放置在以下三個位置：

  * `/usr/share/applications`
  * `/usr/local/share/applications` 
  * `~/.local/share/applications`

不過這裡我們使用 `find` 命令去尋找 Chromium 的快捷方式：

```shell
$ find / -name chromium-browser.desktop
```

> `/` 是指在 `/` 目錄下尋找， `-name chromium-browser.desktop` 是指尋找名為 `chromium-browser.desktop` 的目錄和文件。

結果：

```shell
/usr/share/applications/chromium-browser.desktop
```

如果沒有找到，可以嘗試在上述的三個位置進行查找。

# 修改快捷方式

找到之後，我們只需要修改快捷方式的執行命令即可：

```shell
$ vi /usr/share/applications/chromium-browser.desktop
```

在其中的 `Exec=chromium-browser` 後面添加 `-no-default-browser-check` 參數，然後保存，重新打開瀏覽器則大功告成。
