# 0101. Symmetric Tree

**Difficulty:** Easy
**Tags:** `Tree` `Depth-First Search` `Breadth-First Search` `Binary Tree`
**Date:** 2026-05-05
**Link:** [LeetCode](https://leetcode.com/problems/symmetric-tree/)

---

## Problem Summary

> Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

**Example 1:**
```
Input: root = [1,2,2,3,4,4,3]
Output: true
```

**Example 2:**
```
Input: root = [1,2,2,null,3,null,3]
Output: false
```

**Constraints:**
- The number of nodes in the tree is in the range [1, 1000].
- -100 <= Node.val <= 100

---

## Approach

**Strategy:** *Recursive*

Key observations:
- A helper method is needed
- What we really want - check if two separate subtrees are mirrors of each other

---

## Complexity

| | |
|---|---|
| **Time** | O(n) |
| **Space** | O(n) |

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
    public boolean isSymmetric(TreeNode root) {
        if (root == null) return true;
        return isMirror(root.left, root.right);
    }

    private boolean isMirror(TreeNode left, TreeNode right) {
        // Base case 1: both null → symmetric here
        if (left == null && right == null) return true;

        // Base case 2: one null → not symmetric
        if (left == null || right == null) return false;

        // Base case 3: values differ → not symmetric
        if (left.val != right.val) return false;

        // Recursive: outer pair + inner pair must both mirror
        return isMirror(left.left, right.right)   // outer
            && isMirror(left.right, right.left);  // inner
    }
}
```
