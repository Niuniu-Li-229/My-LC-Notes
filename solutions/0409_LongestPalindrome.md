# 0409. Longest Palindrome

**Difficulty:** Easy
**Tags:** `Hash Table` `String` `Greedy`
**Date:** 2026-07-17
**Link:** [LeetCode](https://leetcode.com/problems/longest-palindrome/)

---

## Problem Summary

> Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

**Example:**
```
Input: s = "abccccdd"
Output: 7
Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.

Input: s = "a"
Output: 1
Explanation: The longest palindrome that can be built is "a", whose length is 1.
```

**Constraints:**
- 1 <= s.length <= 2000

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
int longestPalindrome(char* s) {
    int count[128] = {0};   // covers all ASCII characters, initialized to 0
    int totalCount = 0;
    int hasOdd = 0;

    // Step 1: count frequency of each character
    for (int i = 0; s[i] != '\0'; i++) {
        count[s[i]]++;
    }

    // Step 2: use pairs from each character's count
    for (int i = 0; i < 128; i++) {
        totalCount += (count[i] / 2) * 2;   // add the even part
        if (count[i] % 2 == 1) {
            hasOdd = 1;                     // remember we saw an odd count
        }
    }

    // Step 3: if any character had an odd count, we can add one to the middle
    if (hasOdd) {
        totalCount += 1;
    }

    return totalCount;
}
```


