# 0222. Count Complete Tree Nodes

**Difficulty:** Easy
**Tags:** `Binary Search` `Bit Manipulation` `Tree` `Binary Tree`
**Date:** 2026-05-13
**Link:** [LeetCode](https://leetcode.com/problems/count-complete-tree-nodes/)

---

## Problem Summary

> Given the root of a complete binary tree, return the number of the nodes in the tree.

**Example:**
```
Input: root = [1,2,3,4,5,6]
Output: 6

Input: root = []
Output: 0

Input: root = [1]
Output: 1
```

**Constraints:**
- The number of nodes in the tree is in the range [0, 5 * 104].
- 0 <= Node.val <= 5 * 104

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
    public int countNodes(TreeNode root) {
        if (root == null) return 0;
        Deque<TreeNode> queue = new ArrayDeque<>();
        queue.offer(root);
        int count = 0;
        while (!queue.isEmpty()) {
            TreeNode node = queue.poll();
            count++;
            if (node.left  != null) queue.offer(node.left);
            if (node.right != null) queue.offer(node.right);
        }
        return count;
    }
}
```

> **To run:** right-click the file in VS Code → *Run Java*, or use the ▶ button above the `main` method (requires the [Extension Pack for Java](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-pack)).

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

