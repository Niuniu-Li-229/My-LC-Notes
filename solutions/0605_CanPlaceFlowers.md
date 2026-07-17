# 0605. Can Place Flowers

**Difficulty:** Easy
**Tags:** `Array` `Greedy`
**Date:** 2026-07-17
**Link:** [LeetCode](https://leetcode.com/problems/can-place-flowers/)

---

## Problem Summary

> You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

**Example:**
```
Input: flowerbed = [1,0,0,0,1], n = 1
Output: true

Input: flowerbed = [1,0,0,0,1], n = 2
Output: false
```

**Constraints:**
- 1 <= flowerbed.length <= 2 * 104
- flowerbed[i] is 0 or 1.
- There are no two adjacent flowers in flowerbed.
- 0 <= n <= flowerbed.length

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
bool canPlaceFlowers(int* flowerbed, int flowerbedSize, int n) {
    int plant = 0;

    // need to check both left and right before being able to plant

    for (int i=0; i<flowerbedSize; i++){
        if (flowerbed[i] == 0){
            int left = (i==0) ? 0 : flowerbed[i-1];
            int right = (i == flowerbedSize-1) ? 0 : flowerbed[i+1];
            if (left == 0 && right == 0){
                flowerbed[i] = 1;
                plant ++;
                // if (plant >=n) return true;
            }
        }
    }
    return plant >=n;
}
```


