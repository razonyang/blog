---
title: 双系统更新 BIOS 后，GRUB 引导项消失的解决方法
date: 2020-01-10T03:09:29+00:00
categories:
  - Linux
tags:
  - Arch Linux
  - GRUB
  - BIOS
  - GRUB
---

笔者笔记本（ThinkPad X1 Extreme）是双系统引导，昨天更新了下版本 1.25 的 BIOS ，然后发现我的 GRUB 引导不见了...无论如何都是引导 Windows，笔者尝试了以下方法：

  * `chroot` 到 Linux，重建 GRUB：`grub-install` 和 `grub-mkconfig`
  * 关闭 Windows 快速启动，`bcdedit /set "{bootmgr}" path "\EFI\Arch\grubx64.efi"`

无果，在 BIOS Boot 或 Boot Menu 中都没有 GRUB 的踪影。

<!--more-->

## 解决

有些资料说，替换掉 Windows 的 `/EFI/Microsoft/Boot/bootmgfw.efi` 为 GRUB 的即可，以 Arch Linux 为例：

```shell
# grub-install --target=x86_64-efi --efi-directory=/boot --bootloader-id=Arch

# ls /boot/EFI/Arch/
grubx64.efi
```

这里安装了 GRUB，在替换前需要备份`/EFI/Microsoft/Boot/bootmgfw.efi`：

```shell
# mv /boot/EFI/Microsoft/Boot/bootmgfw.efi /boot/EFI/Microsoft/Boot/bootmgfw.efi.ori

# cp /boot/EFI/Arch/grubx64.efi /boot/EFI/Microsoft/Boot/bootmgfw.efi
```

紧接着生成配置：

```shell
# grub-mkconfig -o /boot/grub/grub.cfg
Generating grub configuration file ...
Found linux image: /boot/vmlinuz-linux
Found initrd image: /boot/initramfs-linux.img
Found fallback initrd image(s) in /boot: initramfs-linux-fallback.img
Found Windows Boot Manager on /dev/nvme0n1p2@/EFI/Microsoft/Boot/bootmgfw.efi
done
```

这里虽然检测到了 Windows 引导项，但是因为上面我们替换了原本的 `bootmgfw.efi`，这里的 Windows 引导并没有真正起效，我们还需要编辑 Windows 的引导项，将其值改成 `bootmgfw.efi.ori`:

    # sed -i 's/bootmgfw.efi$/bootmgfw.efi.ori/g' /boot/grub/grub.cfg

至此，大公告成。虽然怪怪的，但是懒得去服务站，能用就好。

## 相关链接

  * [Dual boot with Windows][1]

 [1]: https://wiki.archlinux.org/index.php/Dual_boot_with_Windows
