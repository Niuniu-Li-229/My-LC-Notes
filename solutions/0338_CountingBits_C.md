# 0338. Counting Bits

**Difficulty:** Easy
**Tags:** `Dynamic Programming` `Bit Manipulation`
**Date:** 2026-06-11
**Link:** [LeetCode](https://leetcode.com/problems/counting-bits/)

---

## Problem Summary

> Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of 1's in the binary representation of i.

**Example:**
```
Input: n = 2
Output: [0,1,1]
Explanation:
0 --> 0
1 --> 1
2 --> 10

Input: n = 5
Output: [0,1,1,2,1,2]
Explanation:
0 --> 0
1 --> 1
2 --> 10
3 --> 11
4 --> 100
5 --> 101
```

**Constraints:**
- 0 <= n <= 105

---

## Approach

**Strategy:** *Dynamic Programming*

Key observations:
- Find the pattern first and easier to code
-

---

## Complexity

|  | **Time** | **Space** |
|---|---|---|
| **Approach 1** | O(n) | O(n) |

---

## Solution (C)

```C
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* countBits(int n, int* returnSize) {
    int *res = malloc((n+1) * sizeof(int));
    *returnSize = n+1;
    
    res[0] = 0;
    if (n == 0){
        return res;
    }

    for (int i = 1; i < n + 1; i++){
        if (i % 2 == 0){
            res[i] = res[i/2];
        }
        else{
            res[i] = res[i/2] + 1;
        }
    }
    return res;
}
```


