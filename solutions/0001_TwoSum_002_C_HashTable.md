# 0001. Two Sum

**Difficulty:** Easy
**Tags:** `Array` `Hash Table`
**Date:** 2026-07-30
**Link:** [LeetCode](https://leetcode.com/problems/two-sum/)

---

## Problem Summary

> You are given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

**Example:**
```
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Input: nums = [3,2,4], target = 6
Output: [1,2]

Input: nums = [3,3], target = 6
Output: [0,1]
```

**Constraints:**
- 2 <= nums.length <= 104
- -109 <= nums[i] <= 109
- -109 <= target <= 109

---

## Approach

**Strategy:** *Hash Table*

Key observations:
- Can use two-pass or one-pass hash table for this question
- Two passes (pseudocode):
```
// Pass 1
for (int i = 0; i < numsSize; i++) {
    insert(nums[i], i);
}
// Pass 2
for (int i = 0; i < numsSize; i++) {
    int complement = target - nums[i];
    if (exists(complement) && index_of(complement) != i) {
        return {i, index_of(complement)};
    }
}
```
- One pass (pseudocode):
```
for (int i = 0; i < numsSize; i++) {
    int complement = target - nums[i];
    if (exists(complement)) {              // check FIRST
        return {index_of(complement), i};
    }
    insert(nums[i], i);                    // insert AFTER checking
}
```

---

## Complexity

|  | **Time** | **Space** |
|---|---|---|
| **Brute Force** | O(n^2) | O(1) |
| **Two Pass Hash Table** | O(n) | O(n) |
| **One Pass Hash Table** | O(n) | O(n) |


---

## Solution (C)

```C
class Solution {
    public int[] twoSum(int[] nums, int target) {
        for (int i = 0; i < nums.length; i++){
            for (int j = i + 1; j < nums.length; j++){
                if (nums[j] == target - nums[i]){
                    return new int[] {i, j};
                }
            }
        }
        return new int[]{};
    }
}
```

## Solution (C) hash table

``` C
#define TABLE_SIZE 20001

typedef struct {
    int key;
    int index;
    int used;
} Entry;

int hashFunc(int key) {
    int h = key % TABLE_SIZE;
    if (h < 0) h += TABLE_SIZE;
    return h;
}

void insertEntry(Entry* table, int key, int index) {
    int idx = hashFunc(key);
    while (table[idx].used) {
        idx = (idx + 1) % TABLE_SIZE;
    }
    table[idx].key = key;
    table[idx].index = index;
    table[idx].used = 1;
}

int findEntry(Entry* table, int key) {
    int idx = hashFunc(key);
    while (table[idx].used) {
        if (table[idx].key == key) return table[idx].index;
        idx = (idx + 1) % TABLE_SIZE;
    }
    return -1;
}

int* twoSum(int* nums, int numsSize, int target, int* returnSize) {
    Entry* table = calloc(TABLE_SIZE, sizeof(Entry));
    *returnSize = 0;

    for (int i = 0; i < numsSize; i++) {
        int complement = target - nums[i];
        int j = findEntry(table, complement);
        if (j != -1) {
            int* res = malloc(sizeof(int) * 2);
            res[0] = j;
            res[1] = i;
            *returnSize = 2;
            free(table);
            return res;
        }
        insertEntry(table, nums[i], i);
    }

    free(table);
    return NULL;
}
```


