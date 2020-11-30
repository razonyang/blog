---
title: LeetCode 算法题 – Replace Words
date: 2017-11-22T04:11:42+00:00
categories:
  - Programing
tags:
  - LeetCode
  - Go
---

首先介绍几个概念 **root** 和 **successor**， **root** 后面拼接一个单词可以形成一个长单词，该长单词被称为 **successor**。举个例子， **root** 为 **an**， 拼接单词 **other** 形成 **another**， **another** 就是 **successor**。

现在给出一个包含多个 **root** 的字典数组和一个句子。请将句子中的 **successor** 替换成 **root**。 如果 **successor** 有多个 **root**， 则用最短的 **root** 替换。

<!--more-->

## 原题

In English, we have a concept called **root**, which can be followed by some other words to form another longer word - let's call this word **successor**. For example, the root **an**, followed by **other**, which can form another word **another**.

Now, given a dictionary consisting of many roots and a sentence. You need to replace all the **successor** in the sentence with the **root** forming it. If a **successor** has many **roots** can form it, replace it with the root with the shortest length.

You need to output the sentence after the replacement.

Example 1:

    Input: dict = ["cat", "bat", "rat"]
    sentence = "the cattle was rattled by the battery"
    Output: "the cat was rat by the bat"

**Note:**

  * The input will only have lower-case letters
  * 1 <= dict words number <= 1000
  * 1 <= sentence words number <= 1000
  * 1 <= root length <= 100
  * 1 <= sentence words length <= 1000

## 分析

如题所述，目的是将句子中的单词（也就是 **successor**）用其 **root** 替换。

  1. 根据空格将句子分离为一个单词数组
  2. 将单词逐个寻找其 **root**，有则替换，无则忽略
  3. 将替换后的单词数组，用空格拼接成新句子返回

另外需要注意的是，要找到最短的 **root** 进行替换。

## 实现

```go
func replaceWords(dict []string, sentence string) string {
    words := strings.Split(sentence, " ")

    for i := 0; i < len(words); i++ {
        for _, v := range dict {
            if len(words[i]) >= len(v) && words[i][:len(v)] == v {
                // in order to find the shortest root, doesn't break on here
                words[i] = v
            }
        }
    }

    return strings.Join(words, " ")
}
```
