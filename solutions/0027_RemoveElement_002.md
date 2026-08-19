# 0027. Remove Element

**Difficulty:** Easy
**Tags:** `Array` `Two Pointers`
**Date:** 2026-08-19
**Link:** [LeetCode](https://leetcode.com/problems/remove-element/)

---

## Problem Summary

> Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

**Example:**
```
int[] nums = [...]; // Input array
int val = ...; // Value to remove
int[] expectedNums = [...]; // The expected answer with correct length.
                            // It is sorted with no values equaling val.

int k = removeElement(nums, val); // Calls your implementation

assert k == expectedNums.length;
sort(nums, 0, k); // Sort the first k elements of nums
for (int i = 0; i < actualLength; i++) {
    assert nums[i] == expectedNums[i];
}

Input: nums = [3,2,2,3], val = 3
Output: 2, nums = [2,2,_,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 2.
It does not matter what you leave beyond the returned k (hence they are underscores).

Input: nums = [0,1,2,2,3,0,4,2], val = 2
Output: 5, nums = [0,1,4,0,3,_,_,_]
Explanation: Your function should return k = 5, with the first five elements of nums containing 0, 0, 1, 3, and 4.
Note that the five elements can be returned in any order.
It does not matter what you leave beyond the returned k (hence they are underscores).
```

**Constraints:**
- 0 <= nums.length <= 100
- 0 <= nums[i] <= 50
- 0 <= val <= 100

---

## Approach

**Strategy:** *Two Pointers*

Key observations:
- My approach is have two pointers from both ends and swap if value is found.
- Claude's version is forward fast/slow pointers as i (fast) reads and k (slow) writes. Which keeps the relative order and is easier to verify.
- Time and space complexity are the same.

---

## Complexity

|  | **Time** | **Space** |
|---|---|---|
| **Approach 1** | O(n) | O(1) |
| **Approach 2** | O(n) | O(1) |

---

## Solution (Two pointers from each ends)

```java
class Solution {
    public int removeElement(int[] nums, int val) {
        int r = nums.length - 1; // one pointer start from end
        int l = 0; // another pointer start from left

        while (l<=r){
            if (nums[l] == val && nums[r] != val){
                nums[l] = nums[r];
                r--;
            }
            else if (nums[r] == val){
                r--;
            }
            else {
                l ++;
            }
        }
        return r+1;
    }
}
```

## Solution (Fast/Slow pointers)

```java
class Solution {
    public int removeElement(int[] nums, int val) {
        int k = 0;
        for (int num : nums) {
            if (num != val) {
                nums[k] = num;
                k++;
            }
        }
        return k;
    }
}
```
