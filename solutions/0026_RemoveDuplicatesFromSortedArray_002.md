# 0026. Remove Duplicates from Sorted Array

**Difficulty:** Easy
**Tags:** `Array` `Two Pointers`
**Date:** 2026-08-19
**Link:** [LeetCode](https://leetcode.com/problems/remove-duplicates-from-sorted-array/)

---

## Problem Summary

> Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.

**Example:**
```
int[] nums = [...]; // Input array
int[] expectedNums = [...]; // The expected answer with correct length

int k = removeDuplicates(nums); // Calls your implementation

assert k == expectedNums.length;
for (int i = 0; i < k; i++) {
    assert nums[i] == expectedNums[i];
}

Input: nums = [1,1,2]
Output: 2, nums = [1,2,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).

Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
```

**Constraints:**
- 1 <= nums.length <= 3 * 104
- -100 <= nums[i] <= 100

---

## Approach

**Strategy:** *Two Pointers*

Key observations:
- Similar to LC 27, use a fast and slow pointers.
- Claude reviewed my approach and simplify as removing the unnecessary nums.length = 0 and the val variable

---

## Complexity

|  | **Time** | **Space** |
|---|---|---|
| **Approach 1** | O(n) | O(1) |
| **Approach 2** | O(n) | O(1) |

---

## Solution (Two Pointer)

```java
class Solution {
    public int removeDuplicates(int[] nums) {

        if (nums.length <= 1){
            return nums.length;
        }

        int val = nums[0];
        int k = 1;
        
        for (int i=1; i<nums.length; i++){
            if (nums[i] != val){
                nums[k] = nums[i];
                val = nums[k];
                k++;
            }
        }
        return k;
    }
}
```

## Solution (Two Pointer - Simplified)

```java
class Solution {
    public int removeDuplicates(int[] nums) {
        int k = 1;                              // write index; nums[0] always kept

        for (int i = 1; i < nums.length; i++) { // i = read index
            if (nums[i] != nums[k-1]) {         // nums[k-1] = last kept (your `val`)
                nums[k] = nums[i];
                k++;                            // no `val` update needed
            }
        }

        return k;                               // nums[0..k-1] = distinct values
    }
}
```

