---
title: KDE Plasma 刪除主題（Global Theme）
date: 2019-12-30T20:50:34+00:00
categories:
  - Linux
tags:
  - KDE
  - PLASMA
---

最近發現 KDE Plasma 的主題（Global Theme）界面沒有刪除按鈕，Google 了良久，也沒有找到對應的目錄，可能 KDE 在不同 Linux 發行版中的配置不一樣吧。

<!--more-->

按道理說，我們只需要刪除對應的主題目錄，關鍵就在於如何找到主題的目錄了。既然我們知道了要刪除的主題的名字，用 find 命令查找即可，另外在安裝主題的時候，並不需要任何權限，主題的安裝位置很可能就在用戶的主目錄，所以命令如下：

```shell
$ find ~/ -name theme
/home/razon/.local/share/plasma/look-and-feel/theme
```

  * `～/` 指定搜索的目錄為用戶的主目錄
  * `theme` 是要刪除的主題名

找到相應主題後，刪除即可：

```shell
$ rm -r /home/razon/.local/share/plasma/look-and-feel/theme
```

重新打開主題設置，應該就可以看到相應主題已經被刪除了。
