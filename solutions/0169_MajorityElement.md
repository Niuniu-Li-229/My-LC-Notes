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

**Strategy:** *(e.g., Sliding Window / BFS / Dynamic Programming / Two Pointers)*

Key observations:
-
-

---

## Complexity

| | |
|---|---|
| **Time** | O(?) |
| **Space** | O(?) |

---

## Solution (Java)

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

> **To run:** use the ▶ button above `main` in VS Code (requires [Extension Pack for Java](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-pack)).

---

## Edge Cases

- [ ] Empty input / null
- [ ] Single element
- [ ] All duplicates
- [ ] Negative numbers / overflow
- [ ] Already sorted / reverse sorted

---

## Notes

- *Why this approach over brute force / alternatives?*
- *Common pitfall to remember:*
- *Pattern this belongs to:*

---

## Second Pass *(optional – Python)*

```python
def solve(self) -> None:
    pass
```
