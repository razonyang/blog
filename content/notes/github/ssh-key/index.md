+++
type = "docs"
title = "添加 SSH 秘钥到 GitHub"
linkTitle = "添加 SSH 秘钥"
date = 2022-04-17T03:07:17+08:00
# description = "" # Used by description meta tag, summary will be used instead if not set or empty.
featured = true
draft = false
comment = true
toc = true
reward = true
pinned = false
carousel = false
categories = ["GitHub", "SSH"]
tags = ["ssh-agent", "ssh-keygen"]
series = ["Development"]
images = []
+++

SSH 秘钥提供了另一种身份验证的方法，其最大的好处是可以避免重复输入账号和密码。特别地，当你开启双重认证（2FA）时，你还需要额外生成访问令牌（access token）以替代密码，而且访问令牌难以记忆和存放不安全，这是十分头疼的。所以本文将介绍如何添加 SSH 秘钥到 GitHub，让开发更舒适。

> 本文不仅适用于 GitHub，同样可用于其他 Git 平台，如：GitLab、Gitee 等。

<!--more-->

## 生成新的 SSH 秘钥

```shell
$ ssh-keygen -t ed25519 -C "your_email@example.com"
```

> 建议设置密码！

## 添加 SSH 秘钥到 ssh-agent

### ssh-agent 自启动

添加以下命令至 `~/.bashrc`，或者其他启动脚本，如：`~/.zshrc`，每次打开新会话时，都会检测 `ssh-agent` 是否运行，否则后台启动之。

```shell
[ -z "$SSH_AUTH_SOCK" ] && eval "$(ssh-agent -s)" >/dev/null
```

### SSH 配置

添加以下配置到 `~/.ssh/config`。

```ssh
Host *
  AddKeysToAgent yes
```

## 添加 SSH 秘钥到 GitHub

打开 [Add new SSH keys](https://github.com/settings/ssh/new)，并填写标题和秘钥即可。

其中秘钥的内容可以通过以下命令获得：

```shell
$ cat ~/.ssh/id_ed25519.pub
```

> `~/.ssh/id_ed25519.pub` 对应于 `~/.ssh/id_ed25519`，可根据情况自行修改。

## 测试

```shell
$ ssh -T git@github.com
Enter passphrase for key '/home/razonyang/.ssh/id_ed25519': 
Hi razonyang! You've successfully authenticated, but GitHub does not provide shell access.

$ ssh -T git@github.com
Hi razonyang! You've successfully authenticated, but GitHub does not provide shell access.
```

如上所示，每次启动新会话都需要你输入一次密码，后续操作则不需要重复输入密码。
