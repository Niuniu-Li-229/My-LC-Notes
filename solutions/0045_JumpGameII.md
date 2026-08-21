# 0045. Jump Game II

**Difficulty:** Medium
**Tags:** `Array` `Dynamic Programming` `Greedy`
**Date:** 2026-08-21
**Link:** [LeetCode](https://leetcode.com/problems/jump-game-ii/)

---

## Problem Summary

> You are given a 0-indexed array of integers nums of length n. You are initially positioned at index 0.

**Example:**
```
Input: nums = [2,3,1,1,4]
Output: 2
Explanation: The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index.

Input: nums = [2,3,0,1,4]
Output: 2
```

**Constraints:**
- 1 <= nums.length <= 10^4
- 0 <= nums[i] <= 1000
- It's guaranteed that you can reach nums[n - 1].

---

## Approach

**Strategy:** *Greedy*

Key observations:
- Need two variables compared to JumpGame I
- Condition for when to jump

---

## Complexity

|  | **Time** | **Space** |
|---|---|---|
| **Approach 1** | O(n) | O(1) |

---

## Solution (Java)

```java
class Solution {
    public int jump(int[] nums) {
        int jumps = 0, farthest = 0, currentEnd = 0;
        for (int i = 0; i < nums.length - 1; i++) {   // stop before last index
            farthest = Math.max(farthest, i + nums[i]);
            if (i == currentEnd) {                    // committed jump exhausted
                jumps++;
                currentEnd = farthest;
            }
        }
        return jumps;
    }
}
```


