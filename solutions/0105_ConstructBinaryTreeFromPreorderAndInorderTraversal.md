# 0105. Construct Binary Tree from Preorder and Inorder Traversal

**Difficulty:** Medium
**Tags:** `Array` `Hash Table` `Divide and Conquer` `Tree` `Binary Tree`
**Date:** 2026-05-06
**Link:** [LeetCode](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/)

---

## Problem Summary

> Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree and inorder is the inorder traversal of the same tree, construct and return the binary tree.

**Example 1:**
```
Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
Output: [3,9,20,null,null,15,7]
```

**Example 2:**
```
Input: preorder = [-1], inorder = [-1]
Output: [-1]
```

**Constraints:**
- 1 <= preorder.length <= 3000
- inorder.length == preorder.length
- -3000 <= preorder[i], inorder[i] <= 3000

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
    public TreeNode buildTree(int[] preorder, int[] inorder) {
        if (preorder.length==0 || inorder.length == 0){
            return null;
        }

        TreeNode root = new TreeNode(preorder[0]);
        int mid = -1;
        for (int i=0; i<inorder.length; i++){
            if (inorder[i] == preorder[0]){
                mid = i;
                break;
            }
        }

        int[] leftPreorder = Arrays.copyOfRange(preorder, 1, mid+1);
        int[] leftInorder = Arrays.copyOfRange(inorder, 0, mid);
        root.left = buildTree(leftPreorder, leftInorder);

        int[] rightPreorder = Arrays.copyOfRange(preorder, mid+1, preorder.length);
        int[] rightInorder = Arrays.copyOfRange(inorder, mid+1, inorder.length);
        root.right = buildTree(rightPreorder, rightInorder);

        return root;
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
