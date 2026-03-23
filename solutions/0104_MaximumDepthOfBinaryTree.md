# 0104. Maximum Depth of Binary Tree

**Difficulty:** Easy
**Tags:** `Tree` `Depth-First Search` `Breadth-First Search` `Binary Tree`
**Date:** 2026-03-23
**Link:** [LeetCode](https://leetcode.com/problems/maximum-depth-of-binary-tree/)

---

## Problem Summary

> Given the root of a binary tree, return its maximum depth.

**Example 1:**
```
Input: root = [3,9,20,null,null,15,7]
Output: 3
```

**Example 2:**
```
Input: root = [1,null,2]
Output: 2
```

**Constraints:**
- The number of nodes in the tree is in the range [0, 104].
- -100 <= Node.val <= 100

---

## Approach

**Strategy:** *Recursive DFS*

Key observations:
- Base case: if a node is null, its depth is 0
- Recursive case: depth of a tree = 1 + the depth of it's right branch or the depth of it's left branch, whichever is longer.
-

---

## Complexity

| | |
|---|---|
| **Time** | O(n) |
| **Space** | O(h) : h is the height of the tree, with balanced tree, O(log(n)); with degenerate tree, O(n) |

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
    public int maxDepth(TreeNode root) {
        if (root == null){
            return 0;
        }
        else {
            return 1 + Math.max(maxDepth(root.left),maxDepth(root.right));
        }
    }
}

```

---

## Edge Cases

- [ ] Empty input / null
- [ ] Single element
- [ ] All duplicates
- [ ] Negative numbers / overflow
- [ ] Already sorted / reverse sorted

---

## Notes

- * For recursive steps: 1. think about base case; 2. think about what to do in the recursive step*
- *Common pitfall to remember:*
- *Pattern this belongs to: DFS*

---

