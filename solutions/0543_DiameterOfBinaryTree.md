# 0543. Diameter of Binary Tree

**Difficulty:** Easy
**Tags:** `Tree` `Depth-First Search` `Binary Tree`
**Date:** 2026-05-02
**Link:** [LeetCode](https://leetcode.com/problems/diameter-of-binary-tree/)

---

## Problem Summary

> Given the root of a binary tree, return the length of the diameter of the tree.

**Example 1:**
```
Input: root = [1,2,3,4,5]
Output: 3
Explanation: 3 is the length of the path [4,2,1,3] or [5,2,1,3].
```

**Example 2:**
```
Input: root = [1,2]
Output: 1
```

**Constraints:**
- The number of nodes in the tree is in the range [1, 104].
- -100 <= Node.val <= 100

---

## Approach

**Strategy:** *(e.g., Sliding Window / BFS / Dynamic Programming / Two Pointers)*

Key observations:
-
-

---

## Complexity

| | |
|---|---|
| **Time** | O(?) |
| **Space** | O(?) |

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
    private int maxDiameter = 0;
    
    public int diameterOfBinaryTree(TreeNode root) {
        depth(root);
        return maxDiameter;
    }
    
    private int depth(TreeNode node) {
        if (node == null) return 0;
        
        int leftDepth  = depth(node.left);
        int rightDepth = depth(node.right);
        
        maxDiameter = Math.max(maxDiameter, leftDepth + rightDepth);
        
        return Math.max(leftDepth, rightDepth) + 1;
    }
}
```

> **To run:** use the ▶ button above `main` in VS Code (requires [Extension Pack for Java](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-pack)).

---

## Edge Cases

- [ ] Empty input / null
- [ ] Single element
- [ ] All duplicates
- [ ] Negative numbers / overflow
- [ ] Already sorted / reverse sorted

---

## Notes

- *Why this approach over brute force / alternatives?*
- *Common pitfall to remember:*
- *Pattern this belongs to:*

---

## Second Pass *(optional – Python)*

```python
def solve(self) -> None:
    pass
```
