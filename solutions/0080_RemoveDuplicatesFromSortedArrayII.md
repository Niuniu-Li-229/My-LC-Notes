# 0080. Remove Duplicates from Sorted Array II

**Difficulty:** Medium
**Tags:** `Array` `Two Pointers`
**Date:** 2026-08-19
**Link:** [LeetCode](https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/)

---

## Problem Summary

> Given an integer array nums sorted in non-decreasing order, remove some duplicates in-place such that each unique element appears at most twice. The relative order of the elements should be kept the same.

**Example:**
```
int[] nums = [...]; // Input array
int[] expectedNums = [...]; // The expected answer with correct length

int k = removeDuplicates(nums); // Calls your implementation

assert k == expectedNums.length;
for (int i = 0; i < k; i++) {
    assert nums[i] == expectedNums[i];
}

Input: nums = [1,1,1,2,2,3]
Output: 5, nums = [1,1,2,2,3,_]
Explanation: Your function should return k = 5, with the first five elements of nums being 1, 1, 2, 2 and 3 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).

Input: nums = [0,0,1,1,1,1,2,3,3]
Output: 7, nums = [0,0,1,1,2,3,3,_,_]
Explanation: Your function should return k = 7, with the first seven elements of nums being 0, 0, 1, 1, 2, 3 and 3 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
```

**Constraints:**
- 1 <= nums.length <= 3 * 104
- -104 <= nums[i] <= 104

---

## Approach

**Strategy:** *Two Pointers*

Key observations:
- Check the base case nums.length <= 2
- i (fast) read pointer should start at 2, mirroring k, so the write index is ahead of read index.
- Why `nums[k-2]` is the right comparison: it's the element two back in the compacted prefix.
- If the incoming value equals it, then combined with `nums[k-1]` (which sortedness forces to be the same value) you'd already have two copies, so a third is one too many.

---

## Complexity

|  | **Time** | **Space** |
|---|---|---|
| **Approach 1** | O(n) | O(1) |

---

## Solution (Java)

```java
class Solution {
    public int removeDuplicates(int[] nums) {
        if (nums.length <= 2){
            return nums.length;
        }
        int k = 2;
        for (int i=2; i<nums.length; i++){
            if (nums[i] != nums[k-2]){
                nums[k] = nums[i];
                k++;
            }
        }
        return k;
    }
}
```


