# 0106. Construct Binary Tree from Inorder and Postorder Traversal

**Difficulty:** Medium
**Tags:** `Array` `Hash Table` `Divide and Conquer` `Tree` `Binary Tree`
**Date:** 2026-05-06
**Link:** [LeetCode](https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/)

---

## Problem Summary

> Given two integer arrays inorder and postorder where inorder is the inorder traversal of a binary tree and postorder is the postorder traversal of the same tree, construct and return the binary tree.

**Example 1:**
```
Input: inorder = [9,3,15,20,7], postorder = [9,15,7,20,3]
Output: [3,9,20,null,null,15,7]
```

**Example 2:**
```
Input: inorder = [-1], postorder = [-1]
Output: [-1]
```

**Constraints:**
- 1 <= inorder.length <= 3000
- postorder.length == inorder.length
- -3000 <= inorder[i], postorder[i] <= 3000

---

## Approach

**Strategy:** *DFS + Recursion*

Key observations:
- Similar to LC 105 - Construct Binary Tree from Preorder and Inorder Traversal
- Becareful about the array index

---

## Complexity

| | |
|---|---|
| **Time** | O(n^2) |
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
    public TreeNode buildTree(int[] inorder, int[] postorder) {
        if (inorder.length==0 || postorder.length == 0){
            return null;
        }

        TreeNode root = new TreeNode(postorder[postorder.length-1]);
        int mid = -1;
        for (int i=0; i<inorder.length; i++){
            if (inorder[i] == postorder[postorder.length-1]){
                mid = i;
                break;
            }
        }

        int[] leftInorder = Arrays.copyOfRange(inorder, 0, mid);
        int[] leftPostorder = Arrays.copyOfRange(postorder, 0, mid);
        root.left = buildTree(leftInorder, leftPostorder);

        int[] rightInorder = Arrays.copyOfRange(inorder, mid+1, inorder.length);
        int[] rightPostorder = Arrays.copyOfRange(postorder, mid, postorder.length-1);
        root.right = buildTree(rightInorder, rightPostorder);

        return root;
    }

}
```
