# 0169. Majority Element

**Difficulty:** Easy
**Tags:** `Array` `Hash Table` `Divide and Conquer` `Sorting` `Counting` `Boyer–Moore Majority Vote Algorithm`
**Date:** 2026-08-20
**Link:** [LeetCode](https://leetcode.com/problems/majority-element/)

---

## Problem Summary

> Given an array nums of size n, return the majority element.

**Example:**
```
Input: nums = [3,2,3]
Output: 3

Input: nums = [2,2,1,1,1,2,2]
Output: 2
```

**Constraints:**
- n == nums.length
- 1 <= n <= 5 * 104
- -109 <= nums[i] <= 109
- The input is generated such that a majority element will exist in the array.

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
    public int majorityElement(int[] nums) {
        Map<Integer, Integer> count = new HashMap<>();
        int res = 0, maxCount = 0;

        for (int n : nums) {
            count.put(n, 1 + count.getOrDefault(n, 0));
            res = count.get(n) > maxCount ? n : res;
            maxCount = Math.max(count.get(n), maxCount);
        }
        return res;
    }
}
```


