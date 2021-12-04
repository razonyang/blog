---
title: KDE Plasma 删除主题（Global Theme）
date: 2019-12-30T20:50:34+00:00
categories:
  - Linux
tags:
  - KDE
  - PLASMA
---

最近发现 KDE Plasma 的主题（Global Theme）界面没有删除按钮，Google 了良久，也没有找到对应的目录，可能 KDE 在不同 Linux 发行版中的配置不一样吧。

<!--more-->

按道理说，我们只需要删除对应的主题目录，关键就在于如何找到主题的目录了。既然我们知道了要删除的主题的名字，用 find 命令查找即可，另外在安装主题的时候，并不需要任何权限，主题的安装位置很可能就在用户的主目录，所以命令如下：

```shell
$ find ~/ -name theme
/home/razon/.local/share/plasma/look-and-feel/theme
```

  * `～/` 指定搜索的目录为用户的主目录
  * `theme` 是要删除的主题名

找到相应主题后，删除即可：

```shell
$ rm -r /home/razon/.local/share/plasma/look-and-feel/theme
```

重新打开主题设置，应该就可以看到相应主题已经被删除了。
