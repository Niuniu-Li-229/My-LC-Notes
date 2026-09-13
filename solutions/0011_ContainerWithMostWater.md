# 0011. Container With Most Water

**Difficulty:** Medium
**Tags:** `Array` `Two Pointers` `Greedy`
**Date:** 2026-09-13
**Link:** [LeetCode](https://leetcode.com/problems/container-with-most-water/)

---

## Problem Summary

> You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

**Example:**
```
Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

Input: height = [1,1]
Output: 1
```

**Constraints:**
- n == height.length
- 2 <= n <= 105
- 0 <= height[i] <= 104

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
    public int maxArea(int[] height) {
        int i = 0;
        int j = height.length - 1;
        int max = 0;

        // while (i < j){
        //     if (Math.min(height[i], height[j])*(j-i)>max){
        //         max = Math.min(height[i], height[j])*(j-i);
        //     }
        //     else {
        //         if (height[i]<=height[j]){
        //             i++;
        //         }
        //         else{
        //             j--;
        //         }
        //     }
        // }

        while (i<j){
            if (Math.min(height[i], height[j])*(j-i)>max){
                max = Math.min(height[i], height[j])*(j-i);
            }
            if (height[i] <= height[j]){
                i++;
            }
            else {
                j--;
            }
        }
        return max;
    }
}
```


