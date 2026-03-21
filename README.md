# 📓 My LC Notes

My notebook for LeetCode practices — one problem a day.

---

## 🚀 Quick Start — Chrome Extension *(recommended)*

> One click to fetch a problem, capture your accepted solution, and push a formatted note to this repo — all without leaving the browser.

### Install

1. **Generate icons** — open [`chrome-extension/icons/generate_icons.html`](chrome-extension/icons/generate_icons.html) in Chrome, right-click each canvas → *Save Image As*, and save as `icon16.png`, `icon48.png`, `icon128.png` inside `chrome-extension/icons/`

2. Go to `chrome://extensions/` → enable **Developer mode** (top-right toggle)

3. Click **Load unpacked** → select the [`chrome-extension/`](chrome-extension/) folder

4. Pin the **LC Notes** icon to your toolbar

### First-time setup

Click the ⚙ icon (or right-click → *Options*) and fill in:

| Field | Example |
|---|---|
| Personal Access Token | `ghp_…` — [generate here](https://github.com/settings/tokens/new?scopes=repo&description=LC+Notes+Extension) (needs `repo` scope, use **classic** token) |
| GitHub Username | `your-username` |
| Repository Name | `My-LC-Notes` |
| Branch | `main` |
| Solutions folder | `solutions` |

Click **Test Connection**, then **Save Settings**.

### Usage

1. Open any LeetCode problem page
2. Click the **LC Notes** icon
3. Click **Fetch & Create Note** — problem info + your latest accepted solution are pulled automatically
4. Click **View on GitHub** to open the new file

> **Re-attempting a problem?** The extension creates a new file automatically — `0146_LRUCache.md` → `0146_LRUCache_002.md` → `0146_LRUCache_003.md` — so previous notes are never overwritten.

---

## 🛠️ Alternate Ways to Create a Note

<details>
<summary><b>Option A — VS Code task (no terminal needed)</b></summary>

1. Press `Cmd+Shift+P` → **Tasks: Run Task** → **New LC Note**
2. Paste the LeetCode problem URL when prompted (e.g. `https://leetcode.com/problems/two-sum/`)
3. A new file is created in `solutions/` with the header, problem summary, examples, and constraints pre-filled
4. Fill in the **Approach**, **Complexity**, and **Solution** sections yourself after solving

</details>

<details>
<summary><b>Option B — Terminal</b></summary>

```bash
cd "your/LeetCode/My LC Notes"
python new_note.py https://leetcode.com/problems/two-sum/
```

</details>

<details>
<summary><b>Option C — Manual</b></summary>

Copy `TEMPLATE.md` → `solutions/NNNN_ProblemTitle.md` and fill in all sections.

</details>

### Running your Java solution

Click the ▶ button above `main` in VS Code (requires [Extension Pack for Java](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-pack)), or right-click the file → *Run Java*.

### Committing

Push daily to keep the streak: `Cmd+Shift+G` → stage → commit → sync.

---

## 📁 Structure

```
My LC Notes/
├── README.md
├── TEMPLATE.md               ← base template for every new problem
├── new_note.py               ← automation script (called by VS Code task)
├── chrome-extension/         ← Chrome extension source
│   ├── manifest.json
│   ├── popup.html/css/js
│   ├── options.html/css/js
│   └── icons/
└── solutions/
    ├── 0001_TwoSum.md
    ├── 0020_ValidParentheses.md
    └── ...
```

---

## 📋 Note Template Sections

| Section | Auto-filled? | Description |
|---------|:---:|-------------|
| Title, Difficulty, Tags, Date, Link | ✅ | Pulled from LeetCode API |
| Problem Summary + Examples | ✅ | Pulled from LeetCode API |
| Constraints | ✅ | Pulled from LeetCode API |
| Solution (Java) | ✅ | Your latest accepted submission |
| Approach | ✏️ | Your strategy and key observations |
| Complexity | ✏️ | Time and space analysis |
| Edge Cases | ✏️ | Checklist to verify |
| Notes | ✏️ | Reflections and patterns |
| Second Pass (Python) | ✏️ | Optional Python rewrite |

---

## 📈 Progress

| # | Title | Difficulty | Tags | Date |
|---|-------|------------|------|------|
| [0001](solutions/0001_TwoSum.md) | Two Sum | Easy | Array, Hash Map | 2026-03-14 |
| [0020](solutions/0020_ValidParentheses.md) | Valid Parentheses | Easy | String, Stack | 2026-03-15 |
| [0155](solutions/0155_MinStack.md) | Min Stack | Medium | Stack, Design | 2026-03-15 |
