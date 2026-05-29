# 0637. Average of Levels in Binary Tree

**Difficulty:** Easy
**Tags:** `Tree` `Depth-First Search` `Breadth-First Search` `Binary Tree`
**Date:** 2026-05-29
**Link:** [LeetCode](https://leetcode.com/problems/average-of-levels-in-binary-tree/)

---

## Problem Summary

> 

**Example:**
```
Input: root = [3,9,20,null,null,15,7]
Output: [3.00000,14.50000,11.00000]
Explanation: The average value of nodes on level 0 is 3, on level 1 is 14.5, and on level 2 is 11.
Hence return [3, 14.5, 11].

Input: root = [3,9,20,15,7]
Output: [3.00000,14.50000,11.00000]
```

**Constraints:**
- The number of nodes in the tree is in the range [1, 104].
- -231 <= Node.val <= 231 - 1

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
    public List<Double> averageOfLevels(TreeNode root) {
        List<Double> res = new ArrayList<>();

        if (root == null){
            return res;
        }

        Queue<TreeNode> queue = new ArrayDeque<>();
        queue.offer(root);

        while (!queue.isEmpty()){
            int size = queue.size();
            double levelSum = 0.0;
            for (int i = 0; i < size; i++){
                TreeNode node = queue.poll();
                levelSum += node.val;
                if (i == size - 1){
                    res.add(levelSum/size);
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


