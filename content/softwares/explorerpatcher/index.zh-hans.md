---
title: "ExplorerPatcher"
description: "ExplorerPatcher 是一个免费开源的软件，其旨在增强和改善 Windows 上的工作环境，包括任务栏、开始菜单和文件资源管理器等设置。"
date: 2023-07-13T11:44:10+08:00
draft: true
featured: true
pinned: true
series:
  - 软件
categories:
  - Windows
  - Windows 11
tags:
  - ExplorerPatcher
  - 任务栏
  - 文件资源管理器
authors:
  - RazonYang
---

## 安装

下载最新版的 [ExplorerPatcher](https://github.com/valinet/ExplorerPatcher/releases/latest/download/ep_setup.exe) 并安装即可。如果下载缓慢或者无法下载，也可以通过 [GitHub Proxy](https://ghproxy.com/https://github.com/valinet/ExplorerPatcher/releases/latest/download/ep_setup.exe) 下载。

## 配置

安装后就可以通过于任务栏处**右键**，然后选择**属性**进入配置面板。

![ExplorerPatcher 面板入口](panel-entry.png#center)

### 不合并任务栏按钮

![Windows 11 合并任务栏按钮](taskbar-combine.png#center)

相信不少小伙伴升级到 Windows 11 后，会疑惑找不到任务栏按钮的合并选项，这是因为 Windows 11 根本没有提供这个选项，任务栏按钮总是合并的。在笔者看来，有点反人类设计，多任务切换总是需要多执行一次额外不必要的操作。

不过无须担心，我们可通过 ExplorerPatcher 改回 Windows 10 的任务栏样式：

1. 打开 ExplorerPatcher 配置面板。
1. 左侧栏选择 **Taskbar**。
1. 点击 **Taskbar style** 选择 **Windows  10**。
1. 点击 **Combine taskbar icons on primary taskbar** 选择 **Newver combine**（从不合并） 或 **Combine when taskbar is full**（任务栏已满时）。

![ExplorerPatcher 从不合并任务栏按钮](taskbar-never-combine.png#center)

### 禁用 Windows 上下文菜单

![Windows 11 上下文菜单](context-menu.png#center)

Windows 11 自带了一个全新的上下文菜单（右键菜单），其只包含了一些基本的选项，要显示所有选项，则需要点击**显示更多选项**。若你想用回原本的上下文菜单，则需要：

1. 打开 ExplorerPatcher 配置面板。
1. 左侧栏选择 **File Explorer**。
1. 勾选 **Disable the Windows 11 context menu**。
1. 点击 **Restart File Explorer** 以重启文件资源管理器。

![禁用 Windows 上下文菜单](file-explorer-disable-context-menu.png#center)

### 更多配置

更多配置和用法可以在面板和 [Wiki](https://github.com/valinet/ExplorerPatcher/wiki) 上找到，本文就不赘述了。
