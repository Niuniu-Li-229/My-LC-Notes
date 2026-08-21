# 0122. Best Time to Buy and Sell Stock II

**Difficulty:** Medium
**Tags:** `Array` `Dynamic Programming` `Greedy`
**Date:** 2026-08-21
**Link:** [LeetCode](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/)

---

## Problem Summary

> You are given an integer array prices where prices[i] is the price of a given stock on the ith day.

**Example:**
```
Input: prices = [7,1,5,3,6,4]
Output: 7
Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
Total profit is 4 + 3 = 7.

Input: prices = [1,2,3,4,5]
Output: 4
Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
Total profit is 4.

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: There is no way to make a positive profit, so we never buy the stock to achieve the maximum profit of 0.
```

**Constraints:**
- 1 <= prices.length <= 3 * 104
- 0 <= prices[i] <= 104

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
    public int maxProfit(int[] prices) {
        int total = 0, minPrice = prices[0];
        for (int price : prices) {
            if (price < minPrice) minPrice = price;      // cheaper buy point
            else { total += price - minPrice; minPrice = price; }  // sell, rebuy same day
        }
        return total;
    }
}
```


