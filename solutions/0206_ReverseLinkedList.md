# 0206. Reverse Linked List

**Difficulty:** Easy
**Tags:** `Linked List` `Recursion`
**Date:** 2026-03-23
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

**Strategy:** *Recursion*

Key observations:
- If the list is empty, return null.
- Recursively call the function on head.next to reverse the rest of the list.
- After the recursive call returns:
- Make head.next.next = head so the next node points back to the current node.
- Set head.next = null to avoid cycles.
- Return the new head returned by the deepest recursive call.
-

---

## Complexity

| | |
|---|---|
| **Time** | O(n) |
| **Space** | O(n) |

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
        if (head == null) {
            return null;
        }

        ListNode newHead = head;
        if (head.next != null) {
            newHead = reverseList(head.next);
            head.next.next = head;
        }
        head.next = null;

        return newHead;
    }
}
```
---

## Notes

- *Common pitfall to remember:*
- Not handling the empty list; Not initialzing an empty list to start; not making head.next.next = head, aka not changing the 3rd pointer to last head; not making head.next = null, aka not avoiding cycles 

---

