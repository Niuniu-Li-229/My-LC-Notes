# 0238. Product of Array Except Self

**Difficulty:** Medium
**Tags:** `Array` `Prefix Sum`
**Date:** 2026-10-12
**Link:** [LeetCode](https://leetcode.com/problems/product-of-array-except-self/)

---

## Problem Summary

> Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

**Example:**
```
Input: nums = [1,2,3,4]
Output: [24,12,8,6]

Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]
```

**Constraints:**
- 2 <= nums.length <= 105
- -30 <= nums[i] <= 30

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
    def productExceptSelf(self, nums: list[int]) -> list[int]:
        prefix, suffix = [1]*len(nums), [1]*len(nums)

        for i in range(1, len(nums)):
            prefix[i] = prefix[i-1]*nums[i-1]

        for i in range(len(nums)-2, -1, -1):
            suffix[i] = suffix[i+1]*nums[i+1]
        
        res = [prefix[i] * suffix[i] for i in range(len(nums))]

        return res
        
```


