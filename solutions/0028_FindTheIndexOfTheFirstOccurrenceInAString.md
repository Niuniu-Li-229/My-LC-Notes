# 0028. Find the Index of the First Occurrence in a String

**Difficulty:** Easy
**Tags:** `Two Pointers` `String` `String Matching`
**Date:** 2026-04-28
**Link:** [LeetCode](https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/)

---

## Problem Summary

> Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

**Example 1:**
```
Input: haystack = "sadbutsad", needle = "sad"
Output: 0
Explanation: "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0.
```

**Example 2:**
```
Input: haystack = "leetcode", needle = "leeto"
Output: -1
Explanation: "leeto" did not occur in "leetcode", so we return -1.
```

**Constraints:**
- 1 <= haystack.length, needle.length <= 104
- haystack and needle consist of only lowercase English characters.

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
public class Solution_0028_FindTheIndexOfTheFirstOccurrenceInAString {

    
        public int strStr(String haystack, String needle) {
            
        }

    // ── Quick local test ─────────────────────────────────────────────────────
    public static void main(String[] args) {
        Solution_0028_FindTheIndexOfTheFirstOccurrenceInAString sol = new Solution_0028_FindTheIndexOfTheFirstOccurrenceInAString();
        // Test case 1
        // System.out.println(sol.methodName(...));
        // Expected: ...
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
