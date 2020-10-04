---
title: Visual Studio Code 将其他后缀的文件当成 HTML 文件
date: 2019-12-18T13:59:04+00:00
categories:
  - Programing
tags:
  - Visual Studio Code
---

Visual Studio Code 将其他后缀的文件当成 HTML 文件教程。

<!--more-->

**File** -> **Preferences** -> **Settings** -> **Text Editor** -> **Files**

**settings.json** 添加以下配置即可：

```json
    "files.associations": {
        "*.extension": "html"
    }
```

> **extension** 是你要添加的后缀，比如：**tmpl**, **tpl** ...

同理，也可以将其他后缀的识别为你想要的格式。
