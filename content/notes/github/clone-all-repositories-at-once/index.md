---
# type: docs
title: '一次性克隆 GitHub 组织和个人的全部仓库'
description: '当你维护数十个以上的仓库时，逐个克隆不免让人烦躁，本文将介绍如何一次性克隆 GitHub 组织或个人的全部仓库到本地。'
date: '2023-02-11T16:20:05Z'
draft: false
categories:
  - 开发
tags:
  - GitHub
  - Git
  - jq
  - xargs
  - printf
series:
  - 笔记
images: []
---

## API

首先确定对应的 GitHub 接口地址，并将其中的 `<org>` 和 `<user>` 分别替换为组织和个人的名称。

{{% bs/alert %}}
由于 GitHub API 最大支持每页 `100` 条结果，当仓库数量超过该值时，则需要翻页（`page`）进行多次克隆。
{{% /bs/alert %}}

### 组织仓库 API

{{< page-resource-content "data/api-org-repos" >}}

### 用户仓库 API

{{< page-resource-content "data/api-user-repos" >}}

## 克隆仓库

由于两个接口返回格式是类似的，填好接口地址后，接着使用以下命令进行克隆。

{{< page-resource-content "data/clone" >}}

1. `curl $URL` 调用接口。
2. `jq '.[] | .ssh_url'` 读取每个仓库的 `ssh_url`，当然你可以使用 `clone_url` 以 HTTPS 协议克隆。
3. `xargs printf 'git clone %s & '` 对多个克隆命令进行拼接，其中尾部的 `&` 表示后台运行，其不会等待其他命令返回结果。
4. `sh` 执行上述生成的多个克隆命令。

{{% bs/alert %}}
若需要克隆私有仓库，请参考[对 REST API 进行身份验证](https://docs.github.com/zh/rest/authentication/authenticating-to-the-rest-api?apiVersion=2022-11-28)。
{{% /bs/alert %}}
