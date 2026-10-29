# 0042. Trapping Rain Water

**Difficulty:** Hard
**Tags:** `Array` `Two Pointers` `Dynamic Programming` `Stack` `Monotonic Stack`
**Date:** 2026-10-29
**Link:** [LeetCode](https://leetcode.com/problems/trapping-rain-water/)

---

## Problem Summary

> Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

**Example:**
```
Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.

Input: height = [4,2,0,3,2,5]
Output: 9
```

**Constraints:**
- n == height.length
- 1 <= n <= 2 * 104
- 0 <= height[i] <= 105

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
    def trap(self, height: list[int]) -> int:
        # the amount of water that can be trapped is depend on two things: 1. the highest left/right block we have seen so far, so there are shorter blocks in between; 2. when we see a smaller left/right appear, we need to make sure on the other side right/left is higher than the maximum height we seen so far to make sure the water can be trapped.
        # two pointers start from right and left, loop through the list and update the largest right/left height we have seen while check the another side to make sure it is higher. The amount of water be trapped is the height difference of the max and current

        # while l < r:
        #   if right is higher: check highest left and current left to calculate the trapped water, move left by one
        #   if left is higher: check highest right and current right to calculate the trapped water, move right by one

        l, r = 0, len(height)-1
        l_max, r_max = 0, 0
        water = 0

        while l < r:
            if height[l] < height[r]:
                l_max = max(l_max, height[l])
                water += l_max - height[l]
                l += 1
            else:
                r_max = max(r_max, height[r])
                water += r_max - height[r]
                r -= 1
        
        return water
```


