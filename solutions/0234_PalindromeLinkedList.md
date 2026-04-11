# 0234. Palindrome Linked List

**Difficulty:** Easy
**Tags:** `Linked List` `Two Pointers` `Stack` `Recursion`
**Date:** 2026-04-11
**Link:** [LeetCode](https://leetcode.com/problems/palindrome-linked-list/)

---

## Problem Summary

> Given the head of a singly linked list, return true if it is a palindrome or false otherwise.

**Example 1:**
```
Input: head = [1,2,2,1]
Output: true
```

**Example 2:**
```
Input: head = [1,2]
Output: false
```

**Constraints:**
- The number of nodes in the list is in the range [1, 105].
- 0 <= Node.val <= 9

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
    public boolean isPalindrome(ListNode head) {
                if (head == null || head.next == null) return true;

        // Step 1: find middle
        ListNode slow = head, fast = head;
        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
        }
        // slow is now at the start of the second half

        // Step 2: reverse second half
        ListNode secondHalf = reverse(slow);
        ListNode copy = secondHalf; // save for restoration

        // Step 3: compare
        ListNode p1 = head;
        ListNode p2 = secondHalf;
        boolean result = true;
        while (p2 != null) {           // second half is the shorter or equal half
            if (p1.val != p2.val) {
                result = false;
                break;
            }
            p1 = p1.next;
            p2 = p2.next;
        }

        // Step 4: restore the list (reverse second half back)
        reverse(copy);

        return result;
    }

    private ListNode reverse(ListNode head) {
        ListNode prev = null, curr = head;
        while (curr != null) {
            ListNode next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        return prev;
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
