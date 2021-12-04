---
title: LeetCode 算法题 – Merge Two Binary Trees
date: 2017-07-02T04:11:44+00:00
categories:
  - Programing
tags:
  - LeetCode
  - Go
---

合并两个二叉树，如果结点重叠，则该结点值为两者对应结点之和。否则，将当前对应的非空结点作为当前结点。

<!--more-->

## 原题

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

可以使用递归实现：

  * 如果其中一棵树为 null，则直接返回另外一棵树
  * 如果都是非 null 的二叉树，则将该结点的值更新为两者值之和，并向下递归，合并两者的左右结点

## 实现

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
