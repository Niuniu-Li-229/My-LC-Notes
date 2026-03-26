# 0021. Merge Two Sorted Lists

**Difficulty:** Easy
**Tags:** `Linked List` `Recursion`
**Date:** 2026-03-25
**Link:** [LeetCode](https://leetcode.com/problems/merge-two-sorted-lists/)

---

## Problem Summary

> You are given the heads of two sorted linked lists list1 and list2.

**Example 1:**
```
Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]
```

**Example 2:**
```
Input: list1 = [], list2 = []
Output: []
```

**Example 3:**
```
Input: list1 = [], list2 = [0]
Output: [0]
```

**Constraints:**
- The number of nodes in both lists is in the range [0, 50].
- -100 <= Node.val <= 100

---

## Approach

**Strategy:** *Recursion*

Key observations:
- First pick the smallest node; then recursively merge the rest of the lists; last attach the result to the chosen node.

---

## Complexity

| | |
|---|---|
| **Time** | O(m+n) |
| **Space** | O(m+n) |

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
    public ListNode mergeTwoLists(ListNode list1, ListNode list2) {
        if (list1 == null){
            return list2;
        }
        if (list2 == null){
            return list1;
        }
        if (list1.val <= list2.val){
            list1.next = mergeTwoLists(list1.next, list2);
            return list1;
        }
        else {
            list2.next = mergeTwoLists(list2.next, list1);
            return list2;
        }
        
    }
}
```


## Notes

- Remember to check the empty list


---
