# 0127. Word Ladder

**Difficulty:** Hard
**Tags:** `Hash Table` `String` `Breadth-First Search`
**Date:** 2026-05-20
**Link:** [LeetCode](https://leetcode.com/problems/word-ladder/)

---

## Problem Summary

> A transformation sequence from word beginWord to word endWord using a dictionary wordList is a sequence of words beginWord -> s1 -> s2 -> ... -> sk such that:

**Example:**
```
Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]
Output: 5
Explanation: One shortest transformation sequence is "hit" -> "hot" -> "dot" -> "dog" -> cog", which is 5 words long.

Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log"]
Output: 0
Explanation: The endWord "cog" is not in wordList, therefore there is no valid transformation sequence.
```

**Constraints:**
- 1 <= beginWord.length <= 10
- endWord.length == beginWord.length
- 1 <= wordList.length <= 5000
- wordList[i].length == beginWord.length
- beginWord, endWord, and wordList[i] consist of lowercase English letters.
- beginWord != endWord

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
    public int ladderLength(String beginWord, String endWord, List<String> wordList) {
        // Step 1: HashSet for O(1) lookups. Don't mutate the input list.
        Set<String> dict = new HashSet<>(wordList);
        if (!dict.contains(endWord)) {
            return 0;
        }

        // Step 2: Standard BFS scaffolding.
        Queue<String> queue = new ArrayDeque<>();
        queue.offer(beginWord);
        // Important: do NOT remove beginWord from dict if it's not there to begin with
        // but if it happens to be in the list, remove it so we don't revisit.
        dict.remove(beginWord);

        int level = 1; // beginWord counts as the first word in the sequence

        while (!queue.isEmpty()) {
            int size = queue.size();
            // Process the entire current level before incrementing
            for (int i = 0; i < size; i++) {
                String word = queue.poll();
                char[] chars = word.toCharArray();

                // Try mutating each position to each of 26 letters
                for (int pos = 0; pos < chars.length; pos++) {
                    char original = chars[pos]; // SAVE so we can restore
                    for (char c = 'a'; c <= 'z'; c++) {
                        if (c == original) continue; // skip same letter
                        chars[pos] = c;
                        String next = new String(chars);

                        if (next.equals(endWord)) {
                            return level + 1;
                        }
                        if (dict.contains(next)) {
                            queue.offer(next);
                            dict.remove(next); // mark visited
                        }
                    }
                    chars[pos] = original; // RESTORE — classic pitfall if you forget
                }
            }
            level++;
        }
        return 0;
    }
}
```


