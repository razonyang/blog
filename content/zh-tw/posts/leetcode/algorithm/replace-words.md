---
title: LeetCode 算法題 – Replace Words
date: 2017-11-22T04:11:42+00:00
categories:
  - Programing
tags:
  - LeetCode
  - Go
---

首先介紹幾個概念 **root** 和 **successor**， **root** 後面拼接一個單詞可以形成一個長單詞，該長單詞被稱為 **successor**。舉個例子， **root** 為 **an**， 拼接單詞 **other** 形成 **another**， **another** 就是 **successor**。

現在給出一個包含多個 **root** 的字典數組和一個句子。請將句子中的 **successor** 替換成 **root**。 如果 **successor** 有多個 **root**， 則用最短的 **root** 替換。

<!--more-->

## 原題

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

如題所述，目的是將句子中的單詞（也就是 **successor**）用其 **root** 替換。

  1. 根據空格將句子分離為一個單詞數組
  2. 將單詞逐個尋找其 **root**，有則替換，無則忽略
  3. 將替換後的單詞數組，用空格拼接成新句子返回

另外需要注意的是，要找到最短的 **root** 進行替換。

## 實現

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
