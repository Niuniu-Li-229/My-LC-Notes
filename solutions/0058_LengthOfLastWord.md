# 0058. Length of Last Word

**Difficulty:** Easy
**Tags:** `String`
**Date:** 2026-08-26
**Link:** [LeetCode](https://leetcode.com/problems/length-of-last-word/)

---

## Problem Summary

> Given a string s consisting of words and spaces, return the length of the last word in the string.

**Example:**
```
Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.

Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.

Input: s = "luffy is still joyboy"
Output: 6
Explanation: The last word is "joyboy" with length 6.
```

**Constraints:**
- 1 <= s.length <= 104
- s consists of only English letters and spaces ' '.
- There will be at least one word in s.

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
class Solution {
    public int lengthOfLastWord(String s) {
        int res = 0;
        boolean word = false;
        for (int i = s.length()-1; i>=0; i--){
            if (s.charAt(i) != ' '){
                res++;
                word = true;
            }
            else if (word){
                return res;
            }
        }
        return res;
    }
}
```


