# 0083. Remove Duplicates from Sorted List

**Difficulty:** Easy
**Tags:** `Linked List`
**Date:** 2026-07-09
**Link:** [LeetCode](https://leetcode.com/problems/remove-duplicates-from-sorted-list/)

---

## Problem Summary

> Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

**Example:**
```
Input: head = [1,1,2]
Output: [1,2]

Input: head = [1,1,2,3,3]
Output: [1,2,3]
```

**Constraints:**
- The number of nodes in the list is in the range [0, 300].
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
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */
struct ListNode* deleteDuplicates(struct ListNode* head) {
    if (head == NULL || head->next == NULL){
        return head;
    }
    struct ListNode* curr = head;
    while ( curr->next != NULL){
        if (curr->val == curr->next->val){
            curr->next = curr->next->next; // duplicate case
        }
        else{
            curr = curr->next; // no-duplicate case
        }
    }
    return head;
}
```


