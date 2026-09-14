# 0392. Is Subsequence

**Difficulty:** Easy
**Tags:** `Two Pointers` `String` `Dynamic Programming`
**Date:** 2026-09-09
**Link:** [LeetCode](https://leetcode.com/problems/is-subsequence/)

--- 

## Problem Summary

> Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

**Example:**
```
Input: s = "abc", t = "ahbgdc"
Output: true

Input: s = "axc", t = "ahbgdc"
Output: false
```

**Constraints:**
- 0 <= s.length <= 100
- 0 <= t.length <= 104
- s and t consist only of lowercase English letters.

---

## Approach

**Strategy:** *Two Pointers*

Key observations:
- move both pointers or just the right pointer and help shrink the boundary

---

## Complexity

|  | **Time** | **Space** |
|---|---|---|
| **Approach 1** | O(n) | O(1) |

---

## Solution (Java)

```java
class Solution {

    public boolean isSubsequence(String s, String t) {
        Integer leftBound = s.length(), rightBound = t.length();
        Integer pLeft = 0, pRight = 0;

        while (pLeft < leftBound && pRight < rightBound) {
            // move both pointers or just the right pointer
            if (s.charAt(pLeft) == t.charAt(pRight)) {
                pLeft += 1;
            }
            pRight += 1;
        }
        return pLeft == leftBound;
    }
}
```


