# 0167. Two Sum II - Input Array Is Sorted

**Difficulty:** Medium
**Tags:** `Array` `Two Pointers` `Binary Search`
**Date:** 2026-09-12
**Link:** [LeetCode](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/)

---

## Problem Summary

> Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.

**Example:**
```
Input: numbers = [2,7,11,15], target = 9
Output: [1,2]
Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].

Input: numbers = [2,3,4], target = 6
Output: [1,3]
Explanation: The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3. We return [1, 3].

Input: numbers = [-1,0], target = -1
Output: [1,2]
Explanation: The sum of -1 and 0 is -1. Therefore index1 = 1, index2 = 2. We return [1, 2].
```

**Constraints:**
- 2 <= numbers.length <= 3 * 104
- -1000 <= numbers[i] <= 1000

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
    public int[] twoSum(int[] numbers, int target) {
        int i = 0;
        int j = numbers.length - 1;

        while (i < j){
            if (numbers[i] + numbers[j] == target){
                return new int[]{i+1, j+1};
            }
            else if (numbers[i] + numbers[j] < target){
                i++;
            }
            else if (numbers[i] + numbers[j] > target){
                j--;
            }
        }

        return new int[]{};
    }
}
```


