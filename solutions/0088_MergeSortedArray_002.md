# 0088. Merge Sorted Array

**Difficulty:** Easy
**Tags:** `Array` `Two Pointers` `Sorting`
**Date:** 2026-08-18
**Link:** [LeetCode](https://leetcode.com/problems/merge-sorted-array/)

---

## Problem Summary

> You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

**Example:**
```
Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.

Input: nums1 = [1], m = 1, nums2 = [], n = 0
Output: [1]
Explanation: The arrays we are merging are [1] and [].
The result of the merge is [1].

Input: nums1 = [0], m = 0, nums2 = [1], n = 1
Output: [1]
Explanation: The arrays we are merging are [] and [1].
The result of the merge is [1].
Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.
```

**Constraints:**
- nums1.length == m + n
- nums2.length == n
- 0 <= m, n <= 200
- 1 <= m + n <= 200
- -109 <= nums1[i], nums2[j] <= 109

---

## Approach

**Strategy:** *Bubble Sort / Two Pointers*

Key observations:
- My initial approach is to merge the list first and then sort them using bubble sort
- But Claude gave me hint that since the arrays are already sorted, we can fill from the back and no need to sort

---

## Complexity

|  | **Time** | **Space** |
|---|---|---|
| **Approach 1** | $O((m+n)^2)$ | $O(1)$ |
| **Approach 2** | $O(m+n)$ | $O(1)$ |

---

## Solution (Approach 1 - Bubble Sort)

```java
class Solution {
    public void merge(int[] nums1, int m, int[] nums2, int n) {
        if (n<=0){
            return;
        }

        // 1. Merge; 2. Sort
        // Merge two array
        for (int i=0; i<n; i++){
            nums1[i+m] = nums2[i];
        }
        // If less than two elements, no need to sort
        if (m+n <=1){
            return;
        }
        // Bubble Sort
        for (int i=0; i<m+n; i++){
            for (int j=0; j<m+n-i-1; j++){
                if (nums1[j+1]<=nums1[j]){
                    int temp = nums1[j+1];
                    nums1[j+1] = nums1[j];
                    nums1[j] = temp;
                }
            }
        }

    }
}
```

## Solution (Approach 2 - Two Pointers)

```java
class Solution {
    public void merge(int[] nums1, int m, int[] nums2, int n) {
        int i = m - 1;       // last real element of nums1
        int j = n - 1;       // last element of nums2
        int k = m + n - 1;   // last slot of nums1

        while (j >= 0) {
            if (i >= 0 && nums1[i] > nums2[j]) {
                nums1[k--] = nums1[i--];
                // or can be written as
                // nums1[k] = nums1[i];
                // k--;
                // i--;
            } else {
                nums1[k--] = nums2[j--];
            }
        }
    }
}
```



