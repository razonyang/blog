---
title: 雙系統更新 BIOS 後，GRUB 引導項消失的解決方法
date: 2020-01-10T03:09:29+00:00
categories:
  - Linux
tags:
  - Arch Linux
  - GRUB
  - BIOS
  - GRUB
---

筆者筆記本（ThinkPad X1 Extreme）是雙系統引導，昨天更新了下版本 1.25 的 BIOS ，然後發現我的 GRUB 引導不見了...無論如何都是引導 Windows，筆者嘗試了以下方法：

  * `chroot` 到 Linux，重建 GRUB：`grub-install` 和 `grub-mkconfig`
  * 關閉 Windows 快速啟動，`bcdedit /set "{bootmgr}" path "\EFI\Arch\grubx64.efi"`

無果，在 BIOS Boot 或 Boot Menu 中都沒有 GRUB 的蹤影。

<!--more-->

## 解決

有些資料說，替換掉 Windows 的 `/EFI/Microsoft/Boot/bootmgfw.efi` 為 GRUB 的即可，以 Arch Linux 為例：

```shell
# grub-install --target=x86_64-efi --efi-directory=/boot --bootloader-id=Arch

# ls /boot/EFI/Arch/
grubx64.efi
```

這裡安裝了 GRUB，在替換前需要備份`/EFI/Microsoft/Boot/bootmgfw.efi`：

```shell
# mv /boot/EFI/Microsoft/Boot/bootmgfw.efi /boot/EFI/Microsoft/Boot/bootmgfw.efi.ori

# cp /boot/EFI/Arch/grubx64.efi /boot/EFI/Microsoft/Boot/bootmgfw.efi
```

緊接著生成配置：

```shell
# grub-mkconfig -o /boot/grub/grub.cfg
Generating grub configuration file ...
Found linux image: /boot/vmlinuz-linux
Found initrd image: /boot/initramfs-linux.img
Found fallback initrd image(s) in /boot: initramfs-linux-fallback.img
Found Windows Boot Manager on /dev/nvme0n1p2@/EFI/Microsoft/Boot/bootmgfw.efi
done
```

這裡雖然檢測到了 Windows 引導項，但是因為上面我們替換了原本的 `bootmgfw.efi`，這裡的 Windows 引導並沒有真正起效，我們還需要編輯 Windows 的引導項，將其值改成 `bootmgfw.efi.ori`:

    # sed -i 's/bootmgfw.efi$/bootmgfw.efi.ori/g' /boot/grub/grub.cfg

至此，大公告成。雖然怪怪的，但是懶得去服務站，能用就好。

## 相關鏈接

  * [Dual boot with Windows][1]

 [1]: https://wiki.archlinux.org/index.php/Dual_boot_with_Windows
