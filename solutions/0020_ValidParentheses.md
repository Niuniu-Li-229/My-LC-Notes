# 0020.Valid Parentheses

**Difficulty:** Easy
**Tags:** `String` `Stack`
**Date:** 2026-03-15
**Link:** [LeetCode](https://leetcode.com/problems/valid-parentheses/)

---

## Problem Summary

> Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid. An input string is valid if: Open brackets must be closed by the same type of brackets. Open brackets must be closed in the correct order. Every close bracket has a corresponding open bracket of the same type.

**Example:**
```
Input: s = "()"
Output: true

Input: s = "()[]{}"
Output: true
```

**Constraints:**
- `1 <= s.length <= 104`
- `s consists of parentheses only '()[]{}'.`

---

## Approach

**Strategy:** *Stack*

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
public class Solution_0020_ValidParentheses {

class Solution {
    public boolean isValid(String s) {
        Stack<Character> stack = new Stack<>();

        for (char c : s.toCharArray()) {
            // Push the expected closing bracket
            if (c == '(') stack.push(')');
            else if (c == '{') stack.push('}');
            else if (c == '[') stack.push(']');
            else {
                // c is a closing bracket
                if (stack.isEmpty() || stack.pop() != c) {
                    return false;
                }
            }
        }

        return stack.isEmpty(); // valid only if nothing left unmatched
    }
}

    // ── Quick local test ─────────────────────────────────────────────────────
    public static void main(String[] args) {
        // Test case 1
        // Expected:

        // Test case 2 – edge case
        // Expected:
    }
}
```

---

## Edge Cases

- [ ] Empty input / null
- [ ] Single element
- [ ] All duplicates
- [ ] Negative numbers / overflow

---

## Notes

- *Why this approach over brute force / alternatives?*
- *Common pitfall to remember:*
- *Pattern this belongs to:*

---

## Second Pass *(optional – Python)*

```python
def solve():
    pass
```
