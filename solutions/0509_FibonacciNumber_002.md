# 0509. Fibonacci Number

**Difficulty:** Easy
**Tags:** `Math` `Dynamic Programming` `Recursion` `Memoization`
**Date:** 2026-06-11
**Link:** [LeetCode](https://leetcode.com/problems/fibonacci-number/)

---

## Problem Summary

> The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

**Example:**
```
Input: n = 2
Output: 1
Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.

Input: n = 3
Output: 2
Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.

Input: n = 4
Output: 3
Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.
```

**Constraints:**
- 0 <= n <= 30

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
    // /** Recursion method. 好处是简单直接，但是time: O(2^n), space O(n)*/
    // public int fib(int n) {
    //     if (n == 0){
    //         return 0;
    //     }
    //     if (n == 1){
    //         return 1;
    //     }
    //     return fib(n-1) + fib(n-2);
    // }

    /** Memoization DP. Top-down recusion, 用memo去cache recursion的结果保证recursion不会重复计算。
    Time complexity降到O(n) 但是space是 O(n) stack + O(n) cache*/
    // public int fib(int n) {
    //     int[] memo = new int[Math.max(n + 1, 2)]; // guard against n=0,1
    //     Arrays.fill(memo, -1);
    //     return helper(n, memo);
    // }

    // private int helper(int n, int[] memo) {
    //     if (n == 0) return 0;
    //     if (n == 1) return 1;
    //     if (memo[n] != -1) return memo[n];        // cache hit
    //     memo[n] = helper(n - 1, memo) + helper(n - 2, memo);
    //     return memo[n];
    // }

    // /** Iterative DP. 用一个表来存数据，不用recursion，space降到O(n) */
    // public int fib(int n) {
    //     if (n == 0){
    //         return 0;
    //     }
    //     int[] res = new int[n+1];
    //     res[0] = 0;
    //     res[1] = 1;
    //     for (int i = 2; i <= n; i++){
    //         res[i] = res[i-1] + res[i-2];
    //     }
    //     return res[n];
    // }

    /** Space-optimized DP. 因为fib只依赖前两个数，所以只用两个数存可以让space降到O(1) */
    public int fib(int n) {
        if (n == 0) return 0;
        if (n == 1) return 1;
        int prev2 = 0, prev1 = 1;
        for (int i = 2; i <= n; i++) {
            int curr = prev1 + prev2;
            prev2 = prev1;
            prev1 = curr;
        }
        return prev1;
    }

}
```


