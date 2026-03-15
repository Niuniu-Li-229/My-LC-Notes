# 0155.Min Stack

**Difficulty:** Medium
**Tags:** `Stack` `Design`
**Date:** 2026-03-15
**Link:** [LeetCode](https://leetcode.com/problems/min-stack/)

---

## Problem Summary

> Design a stack that supports push, pop, top, and retrieving the minimum element in constant time. Implement the MinStack class: MinStack() initializes the stack object. void push(int val) pushes the element val onto the stack. void pop() removes the element on the top of the stack. int top() gets the top element of the stack. int getMin() retrieves the minimum element in the stack. You must implement a solution with O(1) time complexity for each function.

**Example:**
```
Input
["MinStack","push","push","push","getMin","pop","top","getMin"]
[[],[-2],[0],[-3],[],[],[],[]]

Output
[null,null,null,null,-3,null,0,-2]

Explanation
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin(); // return -3
minStack.pop();
minStack.top();    // return 0
minStack.getMin(); // return -2
```

**Constraints:**
- `-231 <= val <= 231 - 1`
- `Methods pop, top and getMin operations will always be called on non-empty stacks.`
- `At most 3 * 104 calls will be made to push, pop, top, and getMin.`

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
public class Solution_0155_MinStack {

    public static void solve() {
        // TODO: implement
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

> **To run:** right-click the file in VS Code → *Run Java*, or use the ▶ button above the `main` method (requires the [Extension Pack for Java](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-pack)).

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
