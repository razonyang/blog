---
title: "Ubuntu 镜像源"
date: 2023-07-23T16:26:53+08:00
draft: false
description: 本文列出一些国内常用的 Ubuntu 镜像源，以及介绍如何使用它们。
noindex: false
featured: false
pinned: false
# comments: false
series:
 - Linux
categories:
 - Ubuntu
tags:
 - 镜像源
images:
---

## Ubuntu 镜像源列表

| 名称 | URL |
| --- | ---- |
| 阿里云 | `mirrors.aliyun.com` |
| 清华 | `mirrors.tuna.tsinghua.edu.cn` |
| 中科大 | `mirrors.ustc.edu.cn` |

## 更换 Ubuntu 镜像源

更换 Ubuntu 镜像源只需替换 `/etc/apt/sources.list` 文件中的 `archive.ubuntu.com` 为对应的镜像源地址即可。

### 通过 vim 更换 Ubuntu 镜像源

```sh
sudo vim /etc/apt/sources.list
```

然后输入以下命令以批量替换镜像源 URL，这里以阿里云（`mirrors.aliyun.com`）为例。

```vim
:%s/archive.ubuntu.com/mirrors.aliyun.com/g
```

然后 `:w` 保存即可。

### 通过 sed 更换 Ubuntu 镜像源

```sh
sudo sed -i 's@//.*archive.ubuntu.com@//mirrors.aliyun.com@g' /etc/apt/sources.list
```
