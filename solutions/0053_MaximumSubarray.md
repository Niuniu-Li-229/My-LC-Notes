# 0053. Maximum Subarray

**Difficulty:** Medium
**Tags:** `Array` `Divide and Conquer` `Dynamic Programming`
**Date:** 2026-07-17
**Link:** [LeetCode](https://leetcode.com/problems/maximum-subarray/)

---

## Problem Summary

> Given an integer array nums, find the subarray with the largest sum, and return its sum.

**Example:**
```
Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: The subarray [4,-1,2,1] has the largest sum 6.

Input: nums = [1]
Output: 1
Explanation: The subarray [1] has the largest sum 1.

Input: nums = [5,4,-1,7,8]
Output: 23
Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.
```

**Constraints:**
- 1 <= nums.length <= 105
- -104 <= nums[i] <= 104

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
int maxSubArray(int* nums, int numsSize) {
    int sum = nums[0];
    int currSum = nums[0];

    for (int i=1; i<numsSize; i++){
        if (currSum + nums[i] > nums[i]){
            currSum += nums[i];
        }
        else {
            currSum = nums[i];
        }
        if (currSum > sum){
            sum = currSum;
        }
    }
    return sum;
}
```


