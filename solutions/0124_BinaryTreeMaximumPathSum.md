# 0124. Binary Tree Maximum Path Sum

**Difficulty:** Hard
**Tags:** `Dynamic Programming` `Tree` `Depth-First Search` `Binary Tree`
**Date:** 2026-05-13
**Link:** [LeetCode](https://leetcode.com/problems/binary-tree-maximum-path-sum/)

---

## Problem Summary

> A path in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has an edge connecting them. A node can only appear in the sequence at most once. Note that the path does not need to pass through the root.

**Example 1:**
```
Input: root = [1,2,3]
Output: 6
Explanation: The optimal path is 2 -> 1 -> 3 with a path sum of 2 + 1 + 3 = 6.
```

**Example 2:**
```
Input: root = [-10,9,20,null,null,15,7]
Output: 42
Explanation: The optimal path is 15 -> 20 -> 7 with a path sum of 15 + 20 + 7 = 42.
```

**Constraints:**
- The number of nodes in the tree is in the range [1, 3 * 104].
- -1000 <= Node.val <= 1000

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
    private int res = Integer.MIN_VALUE;

    public int maxPathSum(TreeNode root) {
        maxGain(root);
        return res;
    }

    // Returns the max path sum starting at `node` and going down
    // through at most ONE child (so it can be extended by node's parent).
    // Side effect: updates `res` with the best path that bends at `node`.
    private int maxGain(TreeNode node) {
        if (node == null) return 0;

        // Clamp negative gains to 0 — we can choose not to include that side.
        int leftGain  = Math.max(0, maxGain(node.left));
        int rightGain = Math.max(0, maxGain(node.right));

        // Path that bends at this node (uses both children). Candidate for the answer.
        res = Math.max(res, node.val + leftGain + rightGain);

        // What we return upward must be a straight path through ONE child.
        return node.val + Math.max(leftGain, rightGain);
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
