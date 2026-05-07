# 0117. Populating Next Right Pointers in Each Node II

**Difficulty:** Medium
**Tags:** `Linked List` `Tree` `Depth-First Search` `Breadth-First Search` `Binary Tree`
**Date:** 2026-05-07
**Link:** [LeetCode](https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/)

---

## Problem Summary

> Given a binary tree

**Example 1:**
```
Input: root = [1,2,3,4,5,null,7]
Output: [1,#,2,3,#,4,5,7,#]
Explanation: Given the above binary tree (Figure A), your function should populate each next pointer to point to its next right node, just like in Figure B. The serialized output is in level order as connected by the next pointers, with '#' signifying the end of each level.
```

**Example 2:**
```
Input: root = []
Output: []
```

**Constraints:**
- The number of nodes in the tree is in the range [0, 6000].
- -100 <= Node.val <= 100

---

## Approach

**Strategy:** *BFS*

Algorithm:
1. If the `root` is `null`, return `null`.
2. Initialize a queue with the `root`.
3. While the queue is not empty:
   - Record the current level size.
   - For each node in the current level:
         - Dequeue the node.
         - If it's not the last node in the level, set its `next` pointer to the front of the queue.
         - Enqueue its `left` and `right` children if they exist.
4. Return the root.

---

## Complexity

| | |
|---|---|
| **Time** | O(n) |
| **Space** | O(logn) |

---

## Solution (Java)

```java
/*
// Definition for a Node.
class Node {
    public int val;
    public Node left;
    public Node right;
    public Node next;

    public Node() {}
    
    public Node(int _val) {
        val = _val;
    }

    public Node(int _val, Node _left, Node _right, Node _next) {
        val = _val;
        left = _left;
        right = _right;
        next = _next;
    }
};
*/

class Solution {
    public Node connect(Node root) {
        if (root == null) return null;

        Queue<Node> q = new LinkedList<>();
        q.add(root);

        while (!q.isEmpty()) {
            int levelSize = q.size();
            while (levelSize > 0) {
                Node node = q.poll();
                if (levelSize > 1) {
                    node.next = q.peek();
                }
                if (node.left != null) {
                    q.add(node.left);
                }
                if (node.right != null) {
                    q.add(node.right);
                }
                levelSize--;
            }
        }

        return root;
    
    }
}
```

