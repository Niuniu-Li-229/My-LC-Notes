# 0274. H-Index

**Difficulty:** Medium
**Tags:** `Array` `Sorting` `Counting Sort`
**Date:** 2026-08-24
**Link:** [LeetCode](https://leetcode.com/problems/h-index/)

---

## Problem Summary

> Given an array of integers citations where citations[i] is the number of citations a researcher received for their ith paper, return the researcher's h-index.

**Example:**
```
Input: citations = [3,0,6,1,5]
Output: 3
Explanation: [3,0,6,1,5] means the researcher has 5 papers in total and each of them had received 3, 0, 6, 1, 5 citations respectively.
Since the researcher has 3 papers with at least 3 citations each and the remaining two with no more than 3 citations each, their h-index is 3.

Input: citations = [1,3,1]
Output: 1
```

**Constraints:**
- n == citations.length
- 1 <= n <= 5000
- 0 <= citations[i] <= 1000

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
    public int hIndex(int[] citations) {
        Arrays.sort(citations);
        int n = citations.length;
        for (int i = 0; i < n; i++) {
            if (citations[i] >= n - i) return n - i;  // n-i shrinks, so first hit is the max
        }
        return 0;
    }
}
```


