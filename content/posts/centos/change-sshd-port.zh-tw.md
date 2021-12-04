---
title: CentOS 修改 sshd 端口
date: 2020-07-03T15:24:22+00:00
categories:
  - Linux
tags:
  - CentOS
  - SELinux
  - sshd
---

一般為了在一定程度上避免他人暴力破解密碼，我都會修改 sshd 的默認端口。

<!--more-->

> 當然更安全的做法是禁止密碼登錄，利用密鑰進行登錄。

## 修改配置

```shell
# vim /etc/ssh/sshd_config

Port 23333
```

## 重啟服務

```shell
# systemctl restart sshd
```

## SELinux

如果安裝了 SELinux，重啟服務可能會出現以下錯誤：

> SELinux is preventing /usr/sbin/sshd from name_bind access on the tcp_socket port 23333.

這是因為 SELinux 默認只允許 sshd 監聽 22 端口：

```shell
#  semanage port -l | grep ssh
ssh_port_t  tcp  22
```

為 sshd 添加相應的端口並重新啟動服務即可：

```shell
# semanage port -a -t ssh_port_t -p tcp 23333

#  semanage port -l | grep ssh
ssh_port_t  tcp  22, 23333

# systemctl restart sshd
```
