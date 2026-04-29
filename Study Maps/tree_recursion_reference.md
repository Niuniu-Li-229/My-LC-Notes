# Tree Recursion Reference

A study guide for binary tree recursion patterns and traversal orders.

---

## Part 1: The universal recursion template

```java
public List<Integer> traversal(TreeNode root) {
    List<Integer> result = new ArrayList<>();
    helper(root, result);
    return result;
}

private void helper(TreeNode node, List<Integer> result) {
    if (node == null) return;
    
    // result.add(node.val);   // ← preorder: here (Root, Left, Right)
    helper(node.left, result);
    // result.add(node.val);   // ← inorder: here (Left, Root, Right)
    helper(node.right, result);
    // result.add(node.val);   // ← postorder: here (Left, Right, Root)
}
```

**Three orders, one skeleton — only the position of `result.add(node.val)` changes.**

---

## Part 2: The three required parts of any tree recursion

### 1. Base case (递归出口)

```java
if (node == null) return;
```

- Always use `null` as the base case, **not** "leaf node"
- Leaves still have values to process — the null check handles their null children automatically
- This is almost always the right base case for tree problems

### 2. Recursive case (递归过程)

Three things happen at every node:
1. Process the left subtree
2. Process the current node's value
3. Process the right subtree

The **order** determines the traversal type. Recursive calls themselves never change order — left always before right.

### 3. Wrapper method (外层包装)

The helper takes a shared accumulator (the result list) as a parameter so every recursive call appends to the same list — total work is O(n). Without the helper, you'd merge lists from each call, which is O(n²) due to copying.

---

## Part 3: Tips to memorize

### English version

1. **Base case first, always.** The very first line of any tree recursion is `if (node == null) return;`. Write it before anything else, every single time.

2. **Use `null` as the base case, not "leaf."** Leaves still have values to process. Treating null as "do nothing" makes the rest of the code cleaner.

3. **Three lines, one moving piece.** Preorder, inorder, postorder all have the same skeleton. Only the position of `node.val` moves. If you can write one, you can write all three.

4. **Always use a helper with an accumulator.** Don't try to merge lists from recursive calls — that's O(n²). Pass one shared list down, append to it.

5. **Don't manually check children for null before recursing.** Just call `recurse(node.left, ...)` even if left is null — the base case handles it. Pre-checking adds clutter and bugs.

6. **The helper is `private void`.** Private because it's an internal implementation detail. Void because it mutates the shared list — no need to return anything.

7. **Trust the recursion.** When writing the recursive call, assume it works correctly on the subtree. Don't try to trace deep into it. Just ask: "If left works and right works, do I get the right answer?"

8. **The recursive structure doesn't change between traversals — only `add` moves.** Memorize the skeleton once.

### 中文版本

1. **永远先写出口。** 任何树递归的第一行都是 `if (node == null) return;`。每次都先写这一行,再写别的。

2. **用 `null` 作为出口,不是"叶子节点"。** 叶子也有值要处理。把 null 当作"啥都不做"会让后面的代码干净很多。

3. **三行代码,只有一行在动。** 前序、中序、后序的骨架完全一样。只有 `node.val` 的位置在变。会写一个就会写三个。

4. **永远用 helper + 累加器。** 不要让每次递归调用返回列表然后合并 — 那是 O(n²)。把一个共享的列表传下去,往里面加。

5. **不要在递归前手动检查孩子是不是 null。** 直接调 `recurse(node.left, ...)`,即使左孩子是 null — 出口会处理。手动检查只会让代码乱、容易出 bug。

6. **helper 是 `private void`。** private 因为它是内部实现细节。void 因为它修改共享列表 — 不用返回任何东西。

7. **相信递归。** 写递归调用的时候,假设它对子树是正确的。不要在脑子里钻进去深追。只问:"如果左边对、右边对,我能得到正确答案吗?"

8. **不同遍历之间,递归结构不变 — 只有 `add` 在动。** 骨架背一次就够了。

---

## Part 4: Two flavors of tree recursion

The traversal template above uses a **void helper with an accumulator**. But many tree problems use a different flavor: **a helper that returns a value**. Recognizing which flavor a problem needs is half the battle.

### Flavor A: Void helper + accumulator (collect things)

Use when you're **gathering** results into a list or counter.

```java
private void helper(TreeNode node, List<Integer> result) {
    if (node == null) return;
    helper(node.left, result);
    result.add(node.val);
    helper(node.right, result);
}
```

**Examples:** all three traversals, collecting paths, gathering leaf values.

### Flavor B: Returning helper (compute something)

Use when each subtree should **compute and return** a value (a number, a boolean, a node).

```java
private int helper(TreeNode node) {
    if (node == null) return 0;            // base case returns a value
    int left = helper(node.left);          // recurse and capture
    int right = helper(node.right);        // recurse and capture
    return Math.max(left, right) + 1;      // combine and return
}
```

**Examples:** max depth, diameter, validating BST, lowest common ancestor.

**The traversal "order" still applies to Flavor B** — but it's about *when you do work relative to the recursive calls*, not when you `add` to a list:
- **Preorder logic:** do work *before* recursing
- **Inorder logic:** do work *between* the two recursive calls (used in BST problems where you want sorted order)
- **Postorder logic:** do work *after* both recursive calls return — this is by far the most common pattern, because you usually need information from both subtrees before deciding the answer for the current node

---

## Part 5: Related LeetCode problems

### Pure traversal problems (Flavor A, void + accumulator)

| LC # | Problem | Order | Notes |
|---|---|---|---|
| 94 | Binary Tree Inorder Traversal | Inorder | The canonical example |
| 144 | Binary Tree Preorder Traversal | Preorder | Move `add` to the top |
| 145 | Binary Tree Postorder Traversal | Postorder | Move `add` to the bottom |

### Postorder logic problems (most common pattern)

These problems need information from *both subtrees* before computing the answer for the current node, so the work happens after both recursive calls.

| LC # | Problem | What postorder gives you |
|---|---|---|
| 104 | Maximum Depth of Binary Tree | Need left depth and right depth before computing this node's depth |
| 110 | Balanced Binary Tree | Need both subtree heights to check balance |
| 111 | Minimum Depth of Binary Tree | Need both subtree depths before deciding the min |
| 226 | Invert Binary Tree | Need both subtrees inverted before swapping |
| 543 | Diameter of Binary Tree | Need left and right depths to compute diameter through this node |
| 124 | Binary Tree Maximum Path Sum | Need max path from each subtree before extending through this node |
| 236 | Lowest Common Ancestor (general tree) | Need to know if p/q are in left and right subtrees before deciding |
| 100 | Same Tree | Need both subtrees to match (left == left, right == right) |
| 101 | Symmetric Tree | Need to compare left subtree with right subtree |
| 572 | Subtree of Another Tree | Combines "same tree" check with traversal |
| 617 | Merge Two Binary Trees | Build merged subtrees first, then attach |
| 222 | Count Complete Tree Nodes | Need counts from both subtrees |

### Inorder logic problems (BST-specific)

The inorder traversal of a **BST** gives values in sorted order. Problems exploit this property.

| LC # | Problem | How inorder helps |
|---|---|---|
| 98 | Validate Binary Search Tree | Inorder must be strictly increasing |
| 230 | Kth Smallest Element in a BST | The kth value in inorder = kth smallest |
| 501 | Find Mode in BST | Equal values cluster together in inorder |
| 530 | Minimum Absolute Difference in BST | Min difference is between adjacent inorder values |
| 538 | Convert BST to Greater Tree | Reverse inorder (R, Root, L) gives descending order |
| 99 | Recover Binary Search Tree | Two swapped nodes break the inorder ordering |

### Preorder logic problems

Process the current node *before* recursing — useful when each child needs information about its ancestors.

| LC # | Problem | Why preorder |
|---|---|---|
| 257 | Binary Tree Paths | Build up the path string as you descend |
| 112 | Path Sum | Subtract node value from target as you descend |
| 113 | Path Sum II | Same as 112, but collect paths that hit zero |
| 437 | Path Sum III | Pass running prefix sum down the tree |
| 105 | Construct Tree from Preorder + Inorder | Preorder's first element is the root |
| 1448 | Count Good Nodes | Pass max-so-far down to compare with current |

### Tree problems where ordering doesn't matter

Some problems work with any order because every node is processed identically with no cross-subtree dependency.

| LC # | Problem | Notes |
|---|---|---|
| 617 | Merge Two Binary Trees | Build then attach; any order works |
| 700 | Search in a BST | Just navigate; no real "order" |
| 701 | Insert into a BST | Same |

### Not recursion (use BFS / queue instead)

These need a queue-based traversal, not DFS recursion. Worth knowing the contrast.

| LC # | Problem | Pattern |
|---|---|---|
| 102 | Binary Tree Level Order Traversal | BFS with queue |
| 107 | Level Order Traversal II (bottom-up) | BFS, then reverse |
| 199 | Binary Tree Right Side View | BFS, take last node per level |
| 116 | Populating Next Right Pointers | BFS |
| 515 | Find Largest Value in Each Tree Row | BFS, track max per level |

---

## Part 6: Quick decision guide

When you see a tree problem, ask in order:

1. **Do I need to visit every node in a specific order?** → Pick the traversal order based on what you need (preorder for top-down info, inorder for BST-sorted, postorder for combining children).

2. **Do I need information from both subtrees before deciding the current node?** → Postorder logic with a returning helper. This is the most common case.

3. **Do I need to pass information down from ancestors to descendants?** → Preorder logic, often with extra parameters (prefix sum, max-so-far, current path).

4. **Is this a BST and the problem involves ordering or sorted properties?** → Inorder logic.

5. **Do I need to process level by level?** → BFS with a queue, not recursion.

---

## Part 7: Common pitfalls to watch for

- **Forgetting the null base case** → NullPointerException
- **Returning lists from recursive calls and merging with `addAll`** → O(n²) instead of O(n)
- **Confusing "leaf" with "null" as base case** → forces extra null checks, messier code
- **Forgetting that BST inorder property only applies to BSTs** → don't assume sorted output for general binary trees
- **Mutating the tree without restoring it** → the original tree should be unchanged after most operations (unless the problem explicitly asks to modify it)
- **Using `public` for the helper** → expose only the wrapper; helper should be `private`
- **Trying to trace recursion deeply in your head** → trust the recursive contract; assume the call works on subtrees

---

## Suggested study order

1. ✅ LC 94, 144, 145 — pure traversals (you've done 94 and 144)
2. LC 104 — max depth (your first postorder-logic problem)
3. LC 100, 101 — same tree, symmetric tree (compare two subtrees)
4. LC 226 — invert binary tree (postorder)
5. LC 543 — diameter (classic postorder pattern)
6. LC 110 — balanced tree (postorder with early termination)
7. LC 98 — validate BST (inorder logic)
8. LC 230 — kth smallest in BST (inorder)
9. LC 102 — level order (intro to BFS)
10. LC 124 — max path sum (advanced postorder; common interview question)

Cover steps 1–6 first to lock in the postorder pattern, since it shows up most often. Then BST-specific (7, 8), then BFS (9), then the harder synthesis problems.
