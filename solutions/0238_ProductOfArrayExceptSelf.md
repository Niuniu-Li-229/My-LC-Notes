# 0238. Product of Array Except Self

**Difficulty:** Medium
**Tags:** `Array` `Prefix Sum`
**Date:** 2026-10-12
**Link:** [LeetCode](https://leetcode.com/problems/product-of-array-except-self/)

---

## Problem Summary

> Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

**Example:**
```
Input: nums = [1,2,3,4]
Output: [24,12,8,6]

Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]
```

**Constraints:**
- 2 <= nums.length <= 105
- -30 <= nums[i] <= 30

---

## Approach

**Strategy:** *Array/Prefix Sum*

Key observations:
- It is tricky to think about fixing the prefix sum and use prefix and suffix to calculate the result
- Syntax for initialing array list in Python
  ```
  prefix, suffix = [1]*len(nums), [1]*len(nums)
  ```
- Syntax for looping backwards, range has +1 step as default, need -1 to go backwards
  ```
  for i in range(len(nums)-2, -1, -1)
  ```
- Syntax for array multiplication in Python
  ```
  res = [prefix[i] * suffix[i] for i in range(len(nums))]
  ```

---

## Complexity

|  | **Time** | **Space** | **Note** |
|---|---|---|---|
| **Approach 1** | O(N) | O(N) | Created two new size n array list |
| **Approach 2** | O(N) | O(1) | Treat res array as prefix and use single suffix number |

---

## Approach 1 (Python)

```python
class Solution:
    def productExceptSelf(self, nums: list[int]) -> list[int]:
        prefix, suffix = [1]*len(nums), [1]*len(nums)

        for i in range(1, len(nums)):
            prefix[i] = prefix[i-1]*nums[i-1]

        for i in range(len(nums)-2, -1, -1):
            suffix[i] = suffix[i+1]*nums[i+1]
        
        res = [prefix[i] * suffix[i] for i in range(len(nums))]

        return res
        
```

## Approach 2 (Python)

```python
class Solution:
    def productExceptSelf(self, nums: list[int]) -> list[int]:
        res, suffix = [1]*len(nums), 1

        for i in range(1, len(nums)):
            res[i] = res[i-1]*nums[i-1]

        for i in range(len(nums)-1, -1, -1):
            res[i] = res[i] * suffix
            suffix = suffix * nums[i]
        
        return res
```
