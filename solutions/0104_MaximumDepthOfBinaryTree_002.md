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

**Strategy:** *Iterative DFS*

Key observations:
- Mimics recursive DFS without risk of StackOverflowError. Uses a stack of (node, currentDepth) pairs.

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
    public int maxDepth(TreeNode root) {

    if (root == null) return 0;

    // Stack stores pairs: [node, depthAtThisNode]
    Deque<int[]> stack = new ArrayDeque<>(); // can't store mixed types easily
    // Better: use a custom pair or Object[]
    Deque<Object[]> dfsStack = new ArrayDeque<>();
    dfsStack.push(new Object[]{root, 1});

    int maxDepth = 0;

    while (!dfsStack.isEmpty()) {
        Object[] entry  = dfsStack.pop();
        TreeNode node   = (TreeNode) entry[0];
        int      depth  = (int)      entry[1];

        maxDepth = Math.max(maxDepth, depth);

        if (node.left  != null) dfsStack.push(new Object[]{node.left,  depth + 1});
        if (node.right != null) dfsStack.push(new Object[]{node.right, depth + 1});
    }

    return maxDepth;
    }
}
```

---

## Notes

- *This approach is better because using recursion may have StackOverFlow problem*
- *In most interviews, BFS wins on clarity. The level-counting pattern maps directly to the problem statement and is immediately readable by any engineer.*

---
