# 0001. Two Sum

**Difficulty:** Easy
**Tags:** `Array` `Hash Map`
**Date:** 2026-03-14
**Link:** [LeetCode](https://leetcode.com/problems/two-sum/)

---

## Problem Summary

> Given an array of integers `nums` and a target integer, return the indices of the two numbers that add up to `target`. Exactly one solution always exists.

**Example:**
```
Input:  nums = [2, 7, 11, 15], target = 9
Output: [0, 1]
```

---

## Approach

**Strategy:** Hash Map (one pass)

Key observations:
- For each number `x`, the complement we need is `target - x`
- Store each number's index in a map as we go; if the complement already exists, we're done

---

## Complexity

| | |
|---|---|
| **Time** | O(n) |
| **Space** | O(n) |

---

## Solution (Java)

```java
import java.util.HashMap;
import java.util.Map;

public class Solution_0001_TwoSum {

    public static int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> seen = new HashMap<>();
        for (int i = 0; i < nums.length; i++) {
            int complement = target - nums[i];
            if (seen.containsKey(complement)) {
                return new int[]{seen.get(complement), i};
            }
            seen.put(nums[i], i);
        }
        return new int[]{};
    }

    // ── Quick local test ─────────────────────────────────────────────────────
    public static void main(String[] args) {
        // Test 1
        System.out.println(java.util.Arrays.toString(twoSum(new int[]{2, 7, 11, 15}, 9)));
        // Expected: [0, 1]

        // Test 2
        System.out.println(java.util.Arrays.toString(twoSum(new int[]{3, 2, 4}, 6)));
        // Expected: [1, 2]

        // Test 3 – duplicate values
        System.out.println(java.util.Arrays.toString(twoSum(new int[]{3, 3}, 6)));
        // Expected: [0, 1]
    }
}
```

---

## Edge Cases

- [x] Duplicate values in array (handled — we check map *before* inserting)
- [x] Target formed by two of the same value at different indices

---

## Notes

- Brute force O(n²) checks every pair; HashMap cuts it to O(n) with one pass
- Insert *after* checking to avoid using the same index twice
- Pattern: **complement lookup** — common in Two Sum variants
