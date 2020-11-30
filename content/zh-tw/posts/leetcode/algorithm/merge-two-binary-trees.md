---
title: LeetCode 算法題 – Merge Two Binary Trees
date: 2017-07-02T04:11:44+00:00
categories:
  - Programing
tags:
  - LeetCode
  - Go
---

合併兩個二叉樹，如果結點重疊，則該結點值為兩者對應結點之和。否則，將當前對應的非空結點作為當前結點。

<!--more-->

## 原題

Given two binary trees and imagine that when you put one of them to cover the other, some nodes of the two trees are overlapped while the others are not.

You need to merge them into a new binary tree. The merge rule is that if two nodes overlap, then sum node values up as the new value of the merged node. Otherwise, the NOT null node will be used as the node of new tree.

Example 1:

Input:

```
        Tree 1                     Tree 2                  
              1                         2                             
             / \                       / \                            
            3   2                     1   3                        
           /                           \   \                      
          5                             4   7                  
```

Output: 

```
            Merged tree:
             3
            / \
           4   5
          / \   \ 
    
         5   4   7
```

> Note: The merging process must start from the root nodes of both trees.

## 分析

可以使用遞歸實現：

  * 如果其中一棵樹為 null，則直接返回另外一棵樹
  * 如果都是非 null 的二叉樹，則將該結點的值更新為兩者值之和，並向下遞歸，合併兩者的左右結點

## 實現

```go
func mergeTrees(t1 *TreeNode, t2 *TreeNode) *TreeNode {
    if t1 == nil {
        return t2
    } else if t2 == nil {
        return t1
    }

    return &TreeNode{
        Val:   t1.Val + t2.Val,
        Left:  mergeTrees(t1.Left, t2.Left),
        Right: mergeTrees(t1.Right, t2.Right),
    }
}
```
