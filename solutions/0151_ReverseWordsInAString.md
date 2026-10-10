# 0151. Reverse Words in a String

**Difficulty:** Medium
**Tags:** `Two Pointers` `String`
**Date:** 2026-10-10
**Link:** [LeetCode](https://leetcode.com/problems/reverse-words-in-a-string/)

---

## Problem Summary

> Given an input string s, reverse the order of the words.

**Example:**
```
Input: s = "the sky is blue"
Output: "blue is sky the"

Input: s = "  hello world  "
Output: "world hello"
Explanation: Your reversed string should not contain leading or trailing spaces.

Input: s = "a good   example"
Output: "example good a"
Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.
```

**Constraints:**
- 1 <= s.length <= 104
- s contains English letters (upper-case and lower-case), digits, and spaces ' '.

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
    def reverseWords(self, s: str) -> str:
        s = s.split()
        i, j = 0, len(s)-1

        while i <= j:
            temp = s[i]
            s[i] = s[j]
            s[j] = temp
            i += 1
            j -= 1
        
        return " ".join(s)
        
```


