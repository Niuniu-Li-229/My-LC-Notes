# 0103. Binary Tree Zigzag Level Order Traversal

**Difficulty:** Medium
**Tags:** `Tree` `Breadth-First Search` `Binary Tree`
**Date:** 2026-05-29
**Link:** [LeetCode](https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/)

---

## Problem Summary

> Given the root of a binary tree, return the zigzag level order traversal of its nodes' values. (i.e., from left to right, then right to left for the next level and alternate between).

**Example:**
```
Input: root = [3,9,20,null,null,15,7]
Output: [[3],[20,9],[15,7]]

Input: root = [1]
Output: [[1]]

Input: root = []
Output: []
```

**Constraints:**
- The number of nodes in the tree is in the range [0, 2000].
- -100 <= Node.val <= 100

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
    public List<List<Integer>> zigzagLevelOrder(TreeNode root) {
        List<List<Integer>> res = new ArrayList<>();
        int level = 1;
        
        if (root == null){
            return res;
        }
        
        Queue<TreeNode> queue = new ArrayDeque<>();
        queue.offer(root);

        while (! queue.isEmpty()){
            List<Integer> levelRes = new ArrayList<>();
            int size = queue.size();

            for (int i=0; i<size; i++){
                TreeNode node = queue.poll();
                if (level % 2 == 1){
                    levelRes.add(node.val);
                }
                else {
                    levelRes.add(0, node.val);
                }

                if (i == size - 1){
                    res.add(levelRes);
                    level ++;
                }
                if (node.left != null){
                    queue.offer(node.left);
                }
                if (node.right != null){
                    queue.offer(node.right);
                }          
            }
        }
        return res;
    }
}
```


