# 0094. Binary Tree Inorder Traversal

**Difficulty:** Easy
**Tags:** `Stack` `Tree` `Depth-First Search` `Binary Tree`
**Date:** 2026-04-29
**Link:** [LeetCode](https://leetcode.com/problems/binary-tree-inorder-traversal/)

---

## Problem Summary

> Given the root of a binary tree, return the inorder traversal of its nodes' values.

**Example:**
```
Input: root = [1,null,2,3]
Output: [1,3,2]

Input: root = [1,2,3,4,5,null,8,null,null,6,7,9]
Output: [4,2,6,5,7,1,3,9,8]
```

**Constraints:**
- The number of nodes in the tree is in the range [0, 100].
- -100 <= Node.val <= 100

---

## Approach

**Strategy:** *Recursive / Stack / Morris traversal*

Key observations:
- Recursive is easy to think, but watch out for expected output format and edge cases.
- New things to learn: Morris Traversal

---

## Complexity

| | |
|---|---|
| **Time** | O(n) |
| **Space** | O(h)~ O(1) |

---

## Solution (Java)

```java
/**
 * Using Recursion. Time O(n); Space O(h), O(log n) balanced, O(n) skewed.
 */
class Solution {
    public List<Integer> inorderTraversal(TreeNode root) {
        List<Integer> result = new ArrayList<>();
        inorder ( root, result );
        return result;
    }

    public void inorder( TreeNode node, List<Integer> result){
        if (node==null){return;}    // base case
        inorder(node.left, result);
        result.add(node.val);
        inorder(node.right, result);
    }
}
```


```java
/**
 *    Using stack. Time O(n); Space O(h) for the stack.
 */
class Solution {
    public List<Integer> inorderTraversal(TreeNode root) {
        List<Integer> result = new ArrayList<>();
        Deque<TreeNode> stack = new ArrayDeque<>();
        TreeNode curr = root;

        while (curr != null || !stack.isEmpty()) {
            // Go as far left as possible, pushing nodes
            while (curr != null) {
                stack.push(curr);
                curr = curr.left;
            }
            // Pop the leftmost unvisited node, visit it
            curr = stack.pop();
            result.add(curr.val);
            // Then explore its right subtree
            curr = curr.right;
        }
        return result;
    }
}
```


```java
/**
 *    Using Morris Traversal. Time O(n); Space O(1) auxiliary.
 */
class Solution {
    public List<Integer> inorderTraversal(TreeNode root) {
        List<Integer> result = new ArrayList<>();
        TreeNode curr = root;

        while (curr != null) {
            if (curr.left == null) {
                result.add(curr.val);
                curr = curr.right;
            } else {
                // Find inorder predecessor (rightmost node in left subtree)
                TreeNode pred = curr.left;
                while (pred.right != null && pred.right != curr) {
                    pred = pred.right;
                }

                if (pred.right == null) {
                    // First visit: create thread back to curr, then go left
                    pred.right = curr;
                    curr = curr.left;
                } else {
                    // Second visit: thread exists, so left subtree is done
                    pred.right = null;          // restore tree
                    result.add(curr.val);
                    curr = curr.right;
                }
            }
        }
        return result;
    }
}
```

---

## Notes

- `return` must align with the return type
- `List<Integer> res = new ArrayList<>();` - `List` is an interface, you cannot instantiate it. Need `new ArrayList<>()`.
- Type mismatch for `res.add(...)`, as it expects an `Integer`. Must use `res.addAll(...)`
- `if (root == null)` - do not miss the null base case, which is the standard recursion terminator for tree problems.

---

