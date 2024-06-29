---
# type: docs
title: '一次性克隆 GitHub 組織和個人的全部倉庫'
description: '當你維護數十個以上的倉庫時，逐個克隆不免讓人煩躁，本文將介紹如何一次性克隆 GitHub 組織或個人的全部倉庫到本地。'
date: '2023-02-11T16:20:05Z'
draft: false
categories:
  - 開發
tags:
  - GitHub
  - Git
  - jq
  - xargs
  - printf
series:
  - 筆記
images: ["/images/covers/github.jpg"]
---

## API

首先確定對應的 GitHub 接口地址，並將其中的 `<org>` 和 `<user>` 分別替換為組織和個人的名稱。

{{% bs/alert %}}
由於 GitHub API 最大支持每頁 `100` 條結果，當倉庫數量超過該值時，則需要翻頁（`page`）進行多次克隆。
{{% /bs/alert %}}

### 組織倉庫 API

{{< page-resource-content "data/api-org-repos" >}}

### 用戶倉庫 API

{{< page-resource-content "data/api-user-repos" >}}

## 克隆倉庫

由於兩個接口返回格式是類似的，填好接口地址後，接著使用以下命令進行克隆。

{{< page-resource-content "data/clone" >}}

1. `curl $URL` 調用接口。
2. `jq '.[] | .ssh_url'` 讀取每個倉庫的 `ssh_url`，當然你可以使用 `clone_url` 以 HTTPS 協議克隆。
3. `xargs printf 'git clone %s & '` 對多個克隆命令進行拼接，其中尾部的 `&` 表示後臺運行，其不會等待其他命令返回結果。
4. `sh` 執行上述生成的多個克隆命令。

{{% bs/alert %}}
若需要克隆私有倉庫，請參考[對 REST API 進行身份驗證](https://docs.github.com/zh/rest/authentication/authenticating-to-the-rest-api?apiVersion=2022-11-28)。
{{% /bs/alert %}}
