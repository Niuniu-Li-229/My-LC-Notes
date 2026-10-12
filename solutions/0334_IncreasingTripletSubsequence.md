# 0334. Increasing Triplet Subsequence

**Difficulty:** Medium
**Tags:** `Array` `Greedy` `Longest Increasing Subsequence`
**Date:** 2026-10-12
**Link:** [LeetCode](https://leetcode.com/problems/increasing-triplet-subsequence/)

---

## Problem Summary

> Given an integer array nums, return true if there exists a triple of indices (i, j, k) such that i < j < k and nums[i] < nums[j] < nums[k]. If no such indices exists, return false.

**Example:**
```
Input: nums = [1,2,3,4,5]
Output: true
Explanation: Any triplet where i < j < k is valid.

Input: nums = [5,4,3,2,1]
Output: false
Explanation: No triplet exists.

Input: nums = [2,1,5,0,4,6]
Output: true
Explanation: One of the valid triplet is (1, 4, 5), because nums[1] == 1 < nums[4] == 4 < nums[5] == 6.
```

**Constraints:**
- 1 <= nums.length <= 5 * 105
- -231 <= nums[i] <= 231 - 1

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
    def increasingTriplet(self, nums: list[int]) -> bool:
        if len(nums) < 3:
            return False
        
        first = float('inf')
        second = float('inf')

        for num in nums:
            if num > second:
                return True
            elif num > first:
                second = num
            else:
                first = num

        return False
```


