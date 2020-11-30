---
title: Chromium Stop Asking to Set as Default
date: 2017-08-12T05:40:49+00:00
categories:
  - Programing
tags:
  - Chromium
---

今天安装了 Chromium 浏览器，但是每次打开都会提示 `是否设置为默认浏览器`，却没有 `Don't Ask Again` 的按钮。  
经过一番搜索，Chromium 支持命令行参数 `-no-default-browser-check` 可以停止检查是否默认浏览器。  
不过一般桌面的快捷方式应该如何设置呢？

<!--more-->

> 笔者使用的是 Linux 桌面版

# 查找快捷方式

一般地，应用的快捷方式会放置在以下三个位置：

  * `/usr/share/applications`
  * `/usr/local/share/applications` 
  * `~/.local/share/applications`

不过这里我们使用 `find` 命令去寻找 Chromium 的快捷方式：

```shell
$ find / -name chromium-browser.desktop
```

> `/` 是指在 `/` 目录下寻找， `-name chromium-browser.desktop` 是指寻找名为 `chromium-browser.desktop` 的目录和文件。

结果：

```shell
/usr/share/applications/chromium-browser.desktop
```

如果没有找到，可以尝试在上述的三个位置进行查找。

# 修改快捷方式

找到之后，我们只需要修改快捷方式的执行命令即可：

```shell
$ vi /usr/share/applications/chromium-browser.desktop
```

在其中的 `Exec=chromium-browser` 后面添加 `-no-default-browser-check` 参数，然后保存，重新打开浏览器则大功告成。
