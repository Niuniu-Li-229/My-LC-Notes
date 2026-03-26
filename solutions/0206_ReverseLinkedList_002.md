# 0206. Reverse Linked List

**Difficulty:** Easy
**Tags:** `Linked List` `Recursion`
**Date:** 2026-03-26
**Link:** [LeetCode](https://leetcode.com/problems/reverse-linked-list/)

---

## Problem Summary

> Given the head of a singly linked list, reverse the list, and return the reversed list.

**Example 1:**
```
Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]
```

**Example 2:**
```
Input: head = [1,2]
Output: [2,1]
```

**Example 3:**
```
Input: head = []
Output: []
```

**Constraints:**
- The number of nodes in the list is the range [0, 5000].
- -5000 <= Node.val <= 5000

---

## Approach

**Strategy:** *Iterative*

Key observations:
- The entire trick is three pointer variables — prev, curr, and a temporary next — marching through the list one node at a time. 

---

## Complexity

| | |
|---|---|
| **Time** | O(n) |
| **Space** | O(1) |

---

## Solution (Java)

```java
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode reverseList(ListNode head) {
    ListNode prev = null;
    ListNode curr = head;

    while (curr != null) {
        ListNode next = curr.next; // 1. save next before overwriting
        curr.next = prev;          // 2. reverse the pointer
        prev = curr;               // 3. advance prev
        curr = next;               // 4. advance curr
    }

    return prev; // prev is now the new head
    }
}
```

---

## Notes

- *Why this approach over recursion? *
- For a list of one million nodes, the recursive version will blow the JVM stack with a StackOverflowError.

- *Common pitfall to remember:*
- Forgetting to save next before overwriting curr.next
- Returning curr instead of prev at the end
- Initializing prev = head instead of prev = null

