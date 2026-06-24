# 0026. Remove Duplicates from Sorted Array

**Difficulty:** Easy
**Tags:** `Array` `Two Pointers`
**Date:** 2026-06-24
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
    public int removeDuplicates(int[] nums) {
        int slow = 1; //slow start from the second element, since first element will always be the same; 处理好的list是[0, slow-1)
        
        //traverse through the list, also start from the second element
        for (int fast = 1; fast<nums.length; fast++){
            // if we see a number that is not equal to value；发现没有处理好的数
            if (nums[fast] != nums [slow-1]){
                // we will update the value in slow and move the slow pointer position
                nums[slow] = nums[fast];
                // this can also help count the duplicates
                slow ++;
            }
        }
        return slow;
    }
}
```


