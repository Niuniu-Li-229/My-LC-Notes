# 0530. Minimum Absolute Difference in BST

**Difficulty:** Easy
**Tags:** `Tree` `Depth-First Search` `Breadth-First Search` `Binary Search Tree` `Binary Tree`
**Date:** 2026-09-24
**Link:** [LeetCode](https://leetcode.com/problems/minimum-absolute-difference-in-bst/)

---

## Problem Summary

> Given the root of a Binary Search Tree (BST), return the minimum absolute difference between the values of any two different nodes in the tree.

**Example:**
```
Input: root = [4,2,6,1,3]
Output: 1

Input: root = [1,0,48,null,null,12,49]
Output: 1
```

**Constraints:**
- The number of nodes in the tree is in the range [2, 104].
- 0 <= Node.val <= 105

---

## Approach

**Strategy:** *(e.g., Sliding Window / BFS / Dynamic Programming / Two Pointers)*

Key observations:
-
-

---

## Complexity

|  | **Time** | **Space** |
|---|---|---|
| **Approach 1** | O(?) | O(?) |
| **Approach 2** | O(?) | O(?) |

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
    int minDifference = Integer.MAX_VALUE;
    // Initially, it will be null.
    TreeNode prevNode;

    void inorderTraversal(TreeNode node) {
        if (node == null) {
            return;
        }

        inorderTraversal(node.left);
        // Find the difference with the previous value if it is there.
        if (prevNode != null) {
            minDifference = Math.min(minDifference, node.val - prevNode.val);
        }
        prevNode = node;
        inorderTraversal(node.right);
    }

    int getMinimumDifference(TreeNode root) {
        inorderTraversal(root);
        return minDifference;
    }
};
```


