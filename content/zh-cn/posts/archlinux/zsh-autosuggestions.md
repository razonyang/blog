---
title: Arch Linux ZSH 安装自动补全/命令提示插件
date: 2020-01-12T02:18:58+00:00
categories:
  - Linux
tags:
  - Arch Linux
  - ZSH
---

Arch Linux ZSH 安装自动补全/命令提示插件的安装和使用。

<!--more-->

## 安装

```shell
# pacman -S zsh-autosuggestions
```

## 配置

```shell
$ vim ~/.zshrc

source /usr/share/zsh/plugins/zsh-autosuggestions/zsh-autosuggestions.zsh
```
