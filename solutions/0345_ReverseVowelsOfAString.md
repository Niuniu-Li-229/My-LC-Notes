# 0345. Reverse Vowels of a String

**Difficulty:** Easy
**Tags:** `Two Pointers` `String`
**Date:** 2026-10-10
**Link:** [LeetCode](https://leetcode.com/problems/reverse-vowels-of-a-string/)

---

## Problem Summary

> Given a string s, reverse only all the vowels in the string and return it.

**Example:**
```
Input:
Output:
```

**Constraints:**
- 1 <= s.length <= 3 * 105

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
class Solution:
    def reverseVowels(self, s: str) -> str:
        i, j = 0, len(s)-1

        s = list(s)

        vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]

        while (i <= j):
            if (s[i] in vowels):
                if (s[j] in vowels):
                    temp = s[i]
                    s[i] = s[j]
                    s[j] = temp
                    j -= 1
                    i += 1
                else:
                    j -= 1
            else:
                i += 1
        
        return "".join(s)

```


