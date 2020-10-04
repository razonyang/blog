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

一般为了在一定程度上避免他人暴力破解密码，我都会修改 sshd 的默认端口。

<!--more-->

> 当然更安全的做法是禁止密码登录，利用密钥进行登录。

## 修改配置

```shell
# vim /etc/ssh/sshd_config

Port 23333
```

## 重启服务

```shell
# systemctl restart sshd
```

## SELinux

如果安装了 SELinux，重启服务可能会出现以下错误：

> SELinux is preventing /usr/sbin/sshd from name_bind access on the tcp_socket port 23333.

这是因为 SELinux 默认只允许 sshd 监听 22 端口：

```shell
#  semanage port -l | grep ssh
ssh_port_t  tcp  22
```

为 sshd 添加相应的端口并重新启动服务即可：

```shell
# semanage port -a -t ssh_port_t -p tcp 23333

#  semanage port -l | grep ssh
ssh_port_t  tcp  22, 23333

# systemctl restart sshd
```
