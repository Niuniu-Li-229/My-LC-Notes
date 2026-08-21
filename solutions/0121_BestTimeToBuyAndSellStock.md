# 0121. Best Time to Buy and Sell Stock

**Difficulty:** Easy
**Tags:** `Array` `Dynamic Programming`
**Date:** 2026-08-21
**Link:** [LeetCode](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/)

---

## Problem Summary

> You are given an array prices where prices[i] is the price of a given stock on the ith day.

**Example:**
```
Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.
```

**Constraints:**
- 1 <= prices.length <= 105
- 0 <= prices[i] <= 104

---

## Approach

**Strategy:** *Two Pointers*

Key observations:
- Java does not have exponent operator `^`, so 10^5 = 1010 ^ 0101 = 1111 = 15
- when setting up for minPrice, should use price = 100000 or `Integer.MAX_VALUE` instead

---

## Complexity

|  | **Time** | **Space** |
|---|---|---|
| **Approach 1** | O(n) | O(1) |

---

## Solution (Java)

```java
class Solution {
    public int maxProfit(int[] prices) {
        int minPrice = Integer.MAX_VALUE;
        int profit = 0;

        for (int price : prices){
            if (price < minPrice){
                minPrice = price;
            }
            profit = Math.max(profit, price - minPrice);
        }

        return profit;
    }
}
```
