# 0114. Flatten Binary Tree to Linked List

**Difficulty:** Medium
**Tags:** `Linked List` `Stack` `Tree` `Depth-First Search` `Binary Tree`
**Date:** 2026-05-08
**Link:** [LeetCode](https://leetcode.com/problems/flatten-binary-tree-to-linked-list/)

---

## Problem Summary

> Given the root of a binary tree, flatten the tree into a "linked list":

**Example 1:**
```
Input: root = [1,2,5,3,4,null,6]
Output: [1,null,2,null,3,null,4,null,5,null,6]
```

**Example 2:**
```
Input: root = []
Output: []
```

**Example 3:**
```
Input: root = [0]
Output: [0]
```

**Constraints:**
- The number of nodes in the tree is in the range [0, 2000].
- -100 <= Node.val <= 100

---

## Approach

**Strategy:** *Recursive*

Algo:
- At each node, recursively flatten the left and right subtrees first.
- Then splice the flattened left subtree between the current root and the flattened right subtree.
- The right "tail" of the flattened left subtree connects to the original right subtree.

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
    public void flatten(TreeNode root) {
        if (root == null) return;

        flatten(root.left);
        flatten(root.right);

        // Save the original right subtree
        TreeNode originalRight = root.right;

        // Plug flattened left subtree into root.right
        root.right = root.left;
        root.left = null;           // ← CRITICAL: don't forget to null the left

        // Walk to the tail of the (now-right) left subtree
        TreeNode curr = root;
        while (curr.right != null) {
            curr = curr.right;
        }

        // Attach original right subtree
        curr.right = originalRight;
    }
}
```
