# Binary Tree Study Map

A pattern-based roadmap covering the 22 tree problems from your list, plus a few high-value additions. Problems are grouped by **the pattern they teach**, not by difficulty — because pattern recognition is what carries you through unseen interview problems.

---

## How to use this map

For each pattern below:
1. Read the pattern description and template
2. Solve the **anchor problem** (the cleanest example of the pattern) until it feels mechanical
3. Solve the **practice problems** to reinforce — these are variations on the same template
4. Note the **what makes this hard** section before attempting

**Don't skip patterns.** Each one teaches a transferable skill. Skipping Pattern 3 (DFS with return values) means you'll struggle with 60% of medium tree problems.

**Time estimates:**
- Sprint (1-2 weeks): Patterns 1, 2, 3, 4, 6 — covers ~80% of interview questions
- Thorough (3-4 weeks): All patterns plus the bonus problems

---

## Pattern 1: Pure traversal

**The pattern:** Visit every node in a specific order, collect values into a list.

**Template (Flavor A — void helper + accumulator):**
```java
public List<Integer> traversal(TreeNode root) {
    List<Integer> result = new ArrayList<>();
    helper(root, result);
    return result;
}

private void helper(TreeNode node, List<Integer> result) {
    if (node == null) return;
    // result.add(node.val);    // preorder
    helper(node.left, result);
    // result.add(node.val);    // inorder
    helper(node.right, result);
    // result.add(node.val);    // postorder
}
```

**Anchor:** LC 94 (Inorder)

**Practice:**
- LC 144 — Preorder Traversal
- LC 145 — Postorder Traversal

**Tip to remember:** Three problems, one skeleton. Only the position of `add` moves.

**What makes this hard:** Nothing — these are warmups. If you struggle here, drill them until they're automatic before moving on.

---

## Pattern 2: Compare or combine two trees

**The pattern:** You're given two trees (or two subtrees of one tree) and need to compare them or combine them. The recursion runs on **both trees simultaneously**.

**Template:**
```java
public boolean compareOrCombine(TreeNode p, TreeNode q) {
    // Base case: handle nulls FIRST
    if (p == null && q == null) return true;       // both empty
    if (p == null || q == null) return false;      // one empty
    
    // Logic for current pair of nodes
    if (p.val != q.val) return false;
    
    // Recurse on both pairs
    return compareOrCombine(p.left, q.left)
        && compareOrCombine(p.right, q.right);
}
```

**Anchor:** LC 100 — Same Tree

**Practice:**
- LC 101 — Symmetric Tree (compare left subtree with mirrored right subtree — pass `(left.left, right.right)` and `(left.right, right.left)`)
- LC 572 — Subtree of Another Tree (combine "same tree" with traversal — at every node, check if subtreeFromHere == target)
- LC 617 — Merge Two Binary Trees (same template, but build a new tree instead of comparing)

**Tip to remember:** When comparing two trees, the base case has THREE outcomes — both null (true), one null (false), neither null (compare values).

**What makes this hard:** The null-handling cases. Forgetting `if (p == null || q == null) return false;` is the most common bug.

---

## Pattern 3: DFS that returns a value (postorder logic)

**This is the most important pattern in tree problems.** Maybe 60% of medium/hard tree interviews use this.

**The pattern:** Each subtree computes a value (depth, height, count, max sum, boolean) and returns it. The current node combines its children's return values to produce its own.

**Template (Flavor B — returning helper):**
```java
private int helper(TreeNode node) {
    if (node == null) return 0;             // base case returns a value
    int left = helper(node.left);           // recurse and capture
    int right = helper(node.right);         // recurse and capture
    return combine(left, right, node.val);  // combine and return
}
```

**Why "postorder logic"?** Because the work happens **after** both recursive calls return. You need information from both subtrees before you can compute this node's answer.

**Anchor:** LC 104 — Maximum Depth of Binary Tree
```java
private int maxDepth(TreeNode node) {
    if (node == null) return 0;
    return Math.max(maxDepth(node.left), maxDepth(node.right)) + 1;
}
```

**Practice (in order of difficulty):**
- LC 226 — Invert Binary Tree (recurse on both, swap left/right, return node)
- LC 110 — Balanced Binary Tree (return height; use -1 as a "not balanced" signal for early termination)
- LC 543 — Diameter of Binary Tree (helper returns depth, but tracks the max diameter via a class field)
- LC 1448 — Count Good Nodes (hybrid — pass `maxSoFar` down, return count up)

**The "two-value" trick (LC 543, 124):**
Sometimes the helper needs to compute *one value to return* and *one value to track globally*. Use an instance variable.

```java
private int diameter = 0;

public int diameterOfBinaryTree(TreeNode root) {
    depth(root);
    return diameter;
}

private int depth(TreeNode node) {
    if (node == null) return 0;
    int left = depth(node.left);
    int right = depth(node.right);
    diameter = Math.max(diameter, left + right);  // track globally
    return Math.max(left, right) + 1;             // return depth
}
```

**Tip to remember:** When you need both subtrees' answers to decide the current node's answer, return values from the helper. When you also need to track a "best so far" across the whole tree, use an instance variable.

**What makes this hard:**
- Knowing what to return vs. what to track globally
- Designing the right "combine" step
- Choosing meaningful sentinel values (e.g., -1 for "invalid" in LC 110)

---

## Pattern 4: BFS / level-order traversal

**The pattern:** Process nodes **level by level** instead of going deep first. Uses a queue, not recursion.

**Template:**
```java
public List<List<Integer>> levelOrder(TreeNode root) {
    List<List<Integer>> result = new ArrayList<>();
    if (root == null) return result;
    
    Queue<TreeNode> queue = new ArrayDeque<>();
    queue.offer(root);
    
    while (!queue.isEmpty()) {
        int size = queue.size();              // capture level size BEFORE the loop
        List<Integer> level = new ArrayList<>();
        for (int i = 0; i < size; i++) {
            TreeNode node = queue.poll();
            level.add(node.val);
            if (node.left != null) queue.offer(node.left);
            if (node.right != null) queue.offer(node.right);
        }
        result.add(level);
    }
    return result;
}
```

**Anchor:** LC 102 — Binary Tree Level Order Traversal

**Practice:**
- LC 199 — Binary Tree Right Side View (take the **last** node added at each level)
- LC 515 — Find Largest Value in Each Tree Row (track max per level instead of all values)
- LC 107 — Level Order Traversal II (same as 102, then `Collections.reverse(result)` at the end)
- LC 116 — Populating Next Right Pointers (connect nodes within each level)

**Tip to remember:** **Capture `queue.size()` before the inner loop** — the queue grows as you add children, so reading size mid-loop gives you the wrong count. This is the #1 bug in BFS.

**Use `ArrayDeque`, not `LinkedList`,** for queues. Faster and more idiomatic.

**What makes this hard:** Tracking what "level" you're on. The size-capture trick is the standard solution.

---

## Pattern 5: BST property exploitation

**The pattern:** A BST guarantees `left subtree < node < right subtree` for every node. Algorithms can use this to **prune half the tree** at each step → O(log n) for balanced BSTs.

### Sub-pattern 5a: Navigation (compare-and-descend)

**Template:**
```java
private TreeNode search(TreeNode node, int target) {
    if (node == null || node.val == target) return node;
    return target < node.val ? search(node.left, target) : search(node.right, target);
}
```

**Anchor:** LC 700 — Search in a BST (not on your list — add it; it's the cleanest example)

**Practice:**
- LC 235 — LCA of a BST (descend left if both p,q are smaller; descend right if both bigger; otherwise current node IS the LCA — this is the **split point**)
- LC 701 — Insert into a BST (descend until null, then attach)
- LC 450 — Delete Node in a BST (the trickiest BST problem — three cases: leaf, one child, two children)

### Sub-pattern 5b: Inorder gives sorted order

The inorder traversal of a BST yields values in **ascending order**. Many BST problems exploit this.

**Anchor:** LC 98 — Validate BST

The naive trap: comparing each node to only its immediate parent. **Wrong** — you need to track a `(min, max)` range that tightens as you descend, OR do an inorder traversal and check it's strictly increasing.

```java
// Range method
private boolean isValid(TreeNode node, long min, long max) {
    if (node == null) return true;
    if (node.val <= min || node.val >= max) return false;
    return isValid(node.left, min, node.val)
        && isValid(node.right, node.val, max);
}
```

**Practice:**
- LC 230 — Kth Smallest in BST (inorder traversal, count to k, return early)
- LC 530 — Minimum Absolute Difference in BST (track `prev` during inorder; min difference is between adjacent inorder values)
- LC 538 — Convert BST to Greater Tree (reverse inorder: R, Root, L gives descending order)

**Tip to remember:** Two BST tools — descend by comparison (O(log n) navigation), or inorder traversal (yields sorted sequence). Most BST problems use one or the other.

**What makes this hard:**
- LC 98: the naive parent-check is wrong; you need range-based or inorder-based validation
- LC 450: the three-case delete with the in-order successor trick

---

## Pattern 6: DFS with state passed down (preorder logic)

**The pattern:** Each node needs information from its **ancestors** to do its job. Pass that state as a parameter going down.

**Template:**
```java
private void helper(TreeNode node, /* state from ancestors */) {
    if (node == null) return;
    // Use the state to decide something about this node
    // Update state for children
    helper(node.left, updatedState);
    helper(node.right, updatedState);
}
```

**Anchor:** LC 1448 — Count Good Nodes In Binary Tree

```java
private int countGood(TreeNode node, int maxSoFar) {
    if (node == null) return 0;
    int count = node.val >= maxSoFar ? 1 : 0;
    int newMax = Math.max(maxSoFar, node.val);
    return count + countGood(node.left, newMax) + countGood(node.right, newMax);
}
```

**Practice:**
- LC 112 — Path Sum (subtract node.val from `targetSum` as you descend; check if leaf and remaining == 0)
- LC 257 — Binary Tree Paths (build path string as you go down)
- LC 113 — Path Sum II (collect all root-to-leaf paths summing to target — combines this pattern with backtracking)
- LC 437 — Path Sum III (advanced — uses prefix sum + HashMap, harder)

**The backtracking variant (for path-collection problems):**
```java
private void dfs(TreeNode node, List<Integer> path, List<List<Integer>> result, int remaining) {
    if (node == null) return;
    path.add(node.val);                                    // add on entry
    if (node.left == null && node.right == null && remaining == node.val) {
        result.add(new ArrayList<>(path));                 // copy! list is shared
    }
    dfs(node.left, path, result, remaining - node.val);
    dfs(node.right, path, result, remaining - node.val);
    path.remove(path.size() - 1);                          // remove on exit
}
```

**Tip to remember:** When collecting paths, **always copy the path with `new ArrayList<>(path)`** before adding to the result. The path list is shared across all calls and will be modified later.

**What makes this hard:**
- Forgetting to backtrack (`path.remove(path.size() - 1)`) — paths leak between branches
- Forgetting to copy when adding to results
- Confusing "path sum at leaf" (LC 112) vs. "path sum anywhere" (LC 437)

---

## Pattern 7: Tree construction

**The pattern:** Build a tree from a description (traversals, list of operations, etc.). Recursive — you build the root first, then delegate left and right subtrees to recursive calls.

**Anchor:** LC 105 — Construct Binary Tree from Preorder and Inorder Traversal

**The key insight:**
- **Preorder's first element is always the root**
- In **inorder**, everything left of the root is the left subtree; everything right is the right subtree
- Recurse on both halves

```java
private int preIdx = 0;
private Map<Integer, Integer> inorderMap;

public TreeNode buildTree(int[] preorder, int[] inorder) {
    inorderMap = new HashMap<>();
    for (int i = 0; i < inorder.length; i++) inorderMap.put(inorder[i], i);
    return build(preorder, 0, inorder.length - 1);
}

private TreeNode build(int[] preorder, int inLeft, int inRight) {
    if (inLeft > inRight) return null;
    int rootVal = preorder[preIdx++];
    TreeNode root = new TreeNode(rootVal);
    int mid = inorderMap.get(rootVal);
    root.left = build(preorder, inLeft, mid - 1);
    root.right = build(preorder, mid + 1, inRight);
    return root;
}
```

**Practice:**
- LC 106 — Construct Binary Tree from Inorder and Postorder (postorder's **last** element is root; build right subtree first since you're going backwards)
- LC 297 — Serialize and Deserialize Binary Tree (encode tree as string, then rebuild — extremely common interview question)
- LC 427 — Construct Quad Tree (on your list, less common — divide grid into 4 quadrants)

**Tip to remember:** Use a HashMap to look up inorder indices in O(1) — without it, the algorithm is O(n²).

**What makes this hard:**
- Off-by-one errors in the index ranges
- Tracking the global preorder/postorder index correctly
- LC 297 is genuinely hard — it tests whether you can design a format and parse it back

---

## Pattern 8: Tree DP (decisions at each node)

**The pattern:** Each node has multiple states (e.g., "rob this house" vs. "don't rob"), and the optimal answer depends on combining the right states from children.

**Anchor:** LC 337 — House Robber III

```java
private int[] rob(TreeNode node) {
    if (node == null) return new int[]{0, 0};
    int[] left = rob(node.left);
    int[] right = rob(node.right);
    // [0] = max if we DON'T rob this node
    // [1] = max if we DO rob this node
    int notRob = Math.max(left[0], left[1]) + Math.max(right[0], right[1]);
    int rob = node.val + left[0] + right[0];
    return new int[]{notRob, rob};
}

public int rob(TreeNode root) {
    int[] result = rob(root);
    return Math.max(result[0], result[1]);
}
```

**Practice:**
- LC 124 — Binary Tree Maximum Path Sum (HARD — return "max path ending at this node," but track "max path through this node" as the global answer; ignore negative subtree contributions by `Math.max(0, ...)`)
- LC 968 — Binary Tree Cameras (advanced; three states per node — has camera, watched, unwatched)

**Tip to remember:** Return a small array or custom class when you need to track multiple values per subtree. This is much cleaner than using multiple instance variables.

**What makes this hard:** Identifying the right set of states. LC 124's "max path ending here vs. max path through here" distinction is subtle and worth internalizing.

---

## Pattern 9: Tree modification

**The pattern:** Modify the tree in place — delete nodes, swap, rewire pointers. Uses postorder logic (decide what to do with the current node *after* recursing on children).

**Anchor:** LC 1325 — Delete Leaves With a Given Value

```java
public TreeNode removeLeafNodes(TreeNode root, int target) {
    if (root == null) return null;
    root.left = removeLeafNodes(root.left, target);
    root.right = removeLeafNodes(root.right, target);
    if (root.left == null && root.right == null && root.val == target) return null;
    return root;
}
```

**The pattern:** Reassign `root.left` and `root.right` to the result of the recursive call. This lets the recursion delete or rewire children naturally.

**Practice:**
- LC 226 — Invert Binary Tree (already in Pattern 3, but fits here too)
- LC 814 — Binary Tree Pruning (delete subtrees that contain only zeros)
- LC 450 — Delete Node in a BST (the hard tree-modification problem; on your list)

**Tip to remember:** Always assign `node.left = recurse(node.left)` (and same for right). This is how you let the recursion delete children — by returning `null` and having the parent attach the null.

**What makes this hard:** LC 450's three-case delete — the in-order successor logic for the "two children" case is the trickiest piece.

---

## Suggested study order (priority-ranked)

This is the order I'd actually recommend, prioritizing breadth and high-frequency patterns:

### Phase 1: Foundations (do these first, no exceptions)
1. LC 94, 144, 145 — Pure traversals
2. LC 104 — Max depth (your first DFS-with-return)
3. LC 100 — Same tree (intro to comparing trees)
4. LC 226 — Invert binary tree (postorder modification)
5. LC 543 — Diameter (the "two-value" trick)

### Phase 2: Core patterns (the meat of tree interviews)
6. LC 110 — Balanced binary tree (early termination with sentinels)
7. LC 101 — Symmetric tree (mirrored comparison)
8. LC 572 — Subtree of another tree (composition pattern)
9. LC 102 — Level order (intro to BFS)
10. LC 199 — Right side view (BFS variation)
11. LC 98 — Validate BST (range-based recursion)
12. LC 230 — Kth smallest in BST (inorder application)

### Phase 3: BST mechanics
13. LC 235 — LCA of BST (split-point detection)
14. LC 701 — Insert into BST
15. LC 450 — Delete node in BST (hard but classic)

### Phase 4: Advanced patterns
16. LC 1448 — Count good nodes (DFS with state)
17. LC 112, 113 — Path sum + Path sum II (preorder + backtracking)
18. LC 105 — Build from preorder+inorder (construction)
19. LC 337 — House Robber III (tree DP)
20. LC 124 — Max path sum (the boss-fight problem; expect this in senior interviews)
21. LC 297 — Serialize/Deserialize (extremely common at FAANG)

### Phase 5: Stretch problems (only if you have time)
22. LC 437 — Path Sum III (prefix sum + HashMap)
23. LC 1325 — Delete leaves with value
24. LC 968 — Binary Tree Cameras (multi-state tree DP)

---

## Problems from your list — pattern map

| Your list | Pattern | Phase |
|---|---|---|
| Inorder / Preorder / Postorder Traversal | 1: Pure traversal | 1 |
| Invert Binary Tree | 9 (also 3): Modification / Postorder | 1 |
| Maximum Depth | 3: DFS-return | 1 |
| Diameter of Binary Tree | 3: DFS-return + two-value | 1 |
| Balanced Binary Tree | 3: DFS-return + sentinel | 2 |
| Same Tree | 2: Two-tree comparison | 1 |
| Subtree of Another Tree | 2 + 1: Composition | 2 |
| LCA of BST | 5a: BST navigation | 3 |
| Insert into BST | 5a: BST navigation | 3 |
| Delete Node in BST | 5a: BST navigation (hard) | 3 |
| Level Order Traversal | 4: BFS | 2 |
| Right Side View | 4: BFS variation | 2 |
| Construct Quad Tree | 7: Construction (variant) | 4 |
| Count Good Nodes | 6: DFS with state | 4 |
| Validate BST | 5b: BST property | 2 |
| Kth Smallest in BST | 5b: Inorder application | 2 |
| Build Tree from Preorder + Inorder | 7: Construction | 4 |
| House Robber III | 8: Tree DP | 4 |
| Delete Leaves With Given Value | 9: Modification | 5 |
| Binary Tree Maximum Path Sum | 8: Tree DP (boss fight) | 4 |
| Serialize and Deserialize | 7: Construction | 4 |

---

## Problems I'd add to your list

These aren't on your screenshot but are high-value:

- **LC 100 — Same Tree** — foundation for two-tree comparison; you might already have this
- **LC 700 — Search in a BST** — the cleanest BST navigation example
- **LC 235 — LCA of a BST** — common interview question, tests BST understanding
- **LC 112 — Path Sum** — foundational preorder pattern
- **LC 113 — Path Sum II** — introduces backtracking on trees
- **LC 105 — Build Tree from Preorder + Inorder** — already on your list as "Construct from Preorder And Inorder"
- **LC 297 — Serialize and Deserialize Binary Tree** — already on your list
- **LC 199 — Right Side View** — already on your list

The list you have is solid coverage. The main thing missing is **LC 700** (clean BST search) and **LC 112/113** (path sum problems).

---

## How to know you've mastered tree recursion

You should be able to look at any tree problem and within 30 seconds answer:
1. Is this a traversal, comparison, return-value DFS, BFS, BST exploitation, state-passing, construction, DP, or modification problem?
2. What's my base case?
3. What does my helper return (or what does it accumulate)?
4. Do I need information from one subtree, both subtrees, or my ancestors?

If you can answer those four questions, you can solve the problem. The actual coding is just translating your answers into Java.
