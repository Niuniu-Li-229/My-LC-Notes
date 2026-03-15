# My LC Notes

My notebook for LeetCode practices — one problem a day.

## How to Use

### Creating a new note (automated)

**Option A — VS Code task (no terminal needed)**

1. Press `Cmd+Shift+P` → **Tasks: Run Task** → **New LC Note**
2. Paste the LeetCode problem URL when prompted (e.g. `https://leetcode.com/problems/two-sum/`)
3. A new file is created in `solutions/` with the header, problem summary, examples, and constraints pre-filled
4. Fill in the **Approach**, **Complexity**, and **Solution** sections yourself after solving

**Option B — Terminal**

```bash
cd "your/LeetCode/My LC Notes"   # navigate to your folder path
python new_note.py https://leetcode.com/problems/two-sum/
```

The file is created in `solutions/` with the same auto-filled sections.

### Creating a note manually

1. Copy `TEMPLATE.md` → `solutions/NNNN_ProblemTitle.md`
2. Fill in all sections manually

### Running your Java solution

Right-click the file in VS Code → *Run Java*, or use the ▶ button above `main` (requires [Extension Pack for Java](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-pack)).

### Committing

Push daily to GitHub to keep the streak: `Cmd+Shift+G` → stage → commit → sync.

---

## Structure

```
My LC Notes/
├── README.md
├── TEMPLATE.md          ← base template for every new problem
├── new_note.py          ← automation script (called by VS Code task)
└── solutions/
    ├── 0001_TwoSum.md
    ├── 0020_ValidParentheses.md
    └── ...
```

---

## Note Template Sections

| Section | Auto-filled? | Description |
|---------|:---:|-------------|
| Title, Difficulty, Tags, Date, Link | ✅ | Pulled from LeetCode API |
| Problem Summary + Examples | ✅ | Pulled from LeetCode API |
| Constraints | ✅ | Pulled from LeetCode API |
| Approach | ✏️ | Your strategy and key observations |
| Complexity | ✏️ | Time and space analysis |
| Solution (Java) | ✏️ | Your implementation |
| Edge Cases | ✏️ | Checklist to verify |
| Notes | ✏️ | Reflections and patterns |
| Second Pass (Python) | ✏️ | Optional Python rewrite |

---

## Progress

| # | Title | Difficulty | Tags | Date |
|---|-------|------------|------|------|
| [0001](solutions/0001_TwoSum.md) | Two Sum | Easy | Array, Hash Map | 2026-03-14 |
| [0020](solutions/0020_ValidParentheses.md) | Valid Parentheses | Easy | String, Stack | 2026-03-15 |
| [0155](solutions/0155_MinStack.md) | Min Stack | Medium | Stack, Design | 2026-03-15 |
