# 0027. Remove Element

**Difficulty:** Easy
**Tags:** `Array` `Two Pointers`
**Date:** 2026-05-28
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
void swap(int *a, int *b) {
  int temp = *a;
  *a = *b;
  *b = temp;
}

int removeElement(int* nums, int numsSize, int val) {
    if (numsSize == 0){
        return 0;
    }

    for (int i=0; i<numsSize; i++){
        int swapped = 0;

        for (int j=0; j<numsSize-i-1; j++){
            if (nums[j]==val){
            swap (&nums[j], &nums[j+1]);
            swapped = 1;
            }
        }
        if (!swapped){
            break;
        }
    }
    
    int k = 0;
    for (int m = 0; m < numsSize; m++){
        if (nums[m] != val){
            k++;
        }
    }
    return k;

}
```


