# 0169. Majority Element

**Difficulty:** Easy
**Tags:** `Array` `Hash Table` `Divide and Conquer` `Sorting` `Counting`
**Date:** 2026-05-11
**Link:** [LeetCode](https://leetcode.com/problems/majority-element/)

---

## Problem Summary

> Given an array nums of size n, return the majority element.

**Example 1:**
```
Input: nums = [3,2,3]
Output: 3
```

**Example 2:**
```
Input: nums = [2,2,1,1,1,2,2]
Output: 2
```

**Constraints:**
- n == nums.length
- 1 <= n <= 5 * 104
- -109 <= nums[i] <= 109
- The input is generated such that a majority element will exist in the array.

---

## Approach

**Strategy:** *Array/Boyer-Moore Voting*

Key observations:
- My initial solution can handle in O(n)
- If we want O(n) time, O(1) space, we will need Boyer-Moore Voting:
  - *Intuition*: if a majority element exists (appears > n/2 times),
  - then if you pair up every occurence of the majority element with one non-majority element and cancel them out,
  - the majority element will still have at least one left at the end.

---

## Complexity

HashMap:
|  | **Time** | **Space** |
|---|---|---|
| **HashMap** | O(n) | O(n) |
| **Boyer-Moore Voting** | O(n) | O(1) |

---

## Solution (Java - HashMap)

```java
class Solution {
    public int majorityElement(int[] nums) {

        if (nums==null||nums.length==0){
            return 0;
        }

        Map<Integer, Integer> counts = new HashMap<>();

        for (int i : nums ){
            counts.put(i, counts.getOrDefault(i, 0)+1);
        }

        int majorityElement = nums[0];
        int maxCount = 0;

        for (Map.Entry<Integer, Integer> entry : counts.entrySet()) {
            if (entry.getValue() > maxCount) {
                maxCount = entry.getValue();
                majorityElement = entry.getKey();
            }
        }

        return majorityElement;    
    }
}
```

---
## Solution (Java - Boyer-Moore Voting)


```Java
public int majorityElement(int[] nums) {
    int candidate = nums[0];
    int count = 0;

    for (int num : nums) {
        if (count == 0) {
            candidate = num;
        }
        count += (num == candidate) ? 1 : -1;
    }

    return candidate;
}
```
