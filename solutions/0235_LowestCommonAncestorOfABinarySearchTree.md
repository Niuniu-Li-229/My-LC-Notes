# 0235. Lowest Common Ancestor of a Binary Search Tree

**Difficulty:** Medium
**Tags:** `Tree` `Depth-First Search` `Binary Search Tree` `Binary Tree`
**Date:** 2026-06-05
**Link:** [LeetCode](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/)

---

## Problem Summary

> Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST.

**Example:**
```
Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
Output: 6
Explanation: The LCA of nodes 2 and 8 is 6.

Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4
Output: 2
Explanation: The LCA of nodes 2 and 4 is 2, since a node can be a descendant of itself according to the LCA definition.

Input: root = [2,1], p = 2, q = 1
Output: 2
```

**Constraints:**
- The number of nodes in the tree is in the range [2, 105].
- -109 <= Node.val <= 109

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
 *     TreeNode(int x) { val = x; }
 * }
 */

class Solution {
    public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
        if (root == null){
            return null;
        }
        if (root == p || root == q){
            return root;
        }
        TreeNode left = lowestCommonAncestor(root.left, p, q);
        TreeNode right = lowestCommonAncestor(root.right, p, q);

        if (left != null & right!= null){
            return root;
        }
        return left != null ? left : right;
    }
}
```


