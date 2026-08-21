# 0055. Jump Game

**Difficulty:** Medium
**Tags:** `Array` `Dynamic Programming` `Greedy`
**Date:** 2026-08-21
**Link:** [LeetCode](https://leetcode.com/problems/jump-game/)

---

## Problem Summary

> You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

**Example:**
```
Input: nums = [2,3,1,1,4]
Output: true
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.

Input: nums = [3,2,1,0,4]
Output: false
Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.
```

**Constraints:**
- 1 <= nums.length <= 104
- 0 <= nums[i] <= 105

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
    public boolean canJump(int[] nums) {
        int maxReach = 0;
        for (int i = 0; i < nums.length; i++) {
            if (i > maxReach) return false;  // no route got here → forced trap earlier
            maxReach = Math.max(maxReach, i + nums[i]);
        }
        return true;
    }
}
```


