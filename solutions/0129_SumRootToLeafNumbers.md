# 0129. Sum Root to Leaf Numbers

**Difficulty:** Medium
**Tags:** `Tree` `Depth-First Search` `Binary Tree`
**Date:** 2026-05-13
**Link:** [LeetCode](https://leetcode.com/problems/sum-root-to-leaf-numbers/)

---

## Problem Summary

> You are given the root of a binary tree containing digits from 0 to 9 only.

**Example 1:**
```
Input: root = [1,2,3]
Output: 25
Explanation:
The root-to-leaf path 1->2 represents the number 12.
The root-to-leaf path 1->3 represents the number 13.
Therefore, sum = 12 + 13 = 25.
```

**Example 2:**
```
Input: root = [4,9,0,5,1]
Output: 1026
Explanation:
The root-to-leaf path 4->9->5 represents the number 495.
The root-to-leaf path 4->9->1 represents the number 491.
The root-to-leaf path 4->0 represents the number 40.
Therefore, sum = 495 + 491 + 40 = 1026.
```

**Constraints:**
- The number of nodes in the tree is in the range [1, 1000].
- 0 <= Node.val <= 9
- The depth of the tree will not exceed 10.

---

## Approach

**Strategy:** *Recursion*

Key observations:
- A helper method is needed.
- DFS Recursion:
  - Define a recursive `dfs` function that takes the current node and the accumulated number so far.
  - Base 1: if current node is null, return 0;
  - Update the accumulated number `num = 10*num + node.val`
  - Base 2: if current node is a leaf (no children), return the accumulated number
  - Otherwise, recursively process both children and return the sum of their results.
  - start the `dfs` from the root with an initial number of `0`

---

## Complexity

| | |
|---|---|
| **Time** | O(n) |
| **Space** | O(h) |

---

## Solution (Java)

```java
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public int sumNumbers(TreeNode root) {
        return dfs(root, 0);
    }

    private int dfs(TreeNode node, int num){
        if (node==null){
            return 0;
        }
        num = num * 10 + node.val;
        if (node.left == null && node.right == null){
            return num;
        }
        return dfs(node.left, num) + dfs(node.right, num);
    }
}
```
