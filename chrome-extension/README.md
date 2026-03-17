# LC Notes – Chrome Extension

One click to create a Markdown note from any LeetCode problem and push it to your GitHub repo.

## How it works

1. Open any LeetCode problem (e.g. `leetcode.com/problems/two-sum/`)
2. Click the **LC Notes** extension icon
3. The extension fetches the problem title, difficulty, tags, examples, and constraints from LeetCode's API
4. Click **Fetch & Create Note** — the note is generated using your template and pushed directly to GitHub
5. Click **View on GitHub** to open the new file

## Install (Developer Mode)

1. **Generate icons** — open `icons/generate_icons.html` in Chrome, right-click each canvas → *Save Image As*, and save them as `icon16.png`, `icon48.png`, `icon128.png` in the `icons/` folder.

2. Go to `chrome://extensions/`

3. Enable **Developer mode** (toggle, top-right)

4. Click **Load unpacked** → select this `chrome-extension/` folder

5. The **LC Notes** icon appears in your toolbar (pin it for easy access)

## First-time setup

Click the ⚙ icon (or right-click the extension → *Options*):

| Field | Example |
|---|---|
| Personal Access Token | `ghp_…` ([generate here](https://github.com/settings/tokens/new?scopes=repo&description=LC+Notes+Extension), needs `repo` scope) |
| GitHub Username | `wanjing` |
| Repository Name | `My-LC-Notes` |
| Branch | `main` |
| Solutions folder | `solutions` |

Click **Test Connection** to verify, then **Save Settings**.

## Output format

Each note follows the same template as `TEMPLATE.md`:

- Header: problem number, difficulty, tags, date, link (auto-filled)
- Problem summary + examples + constraints (auto-filled from LeetCode)
- Approach, Complexity, Solution (Java), Edge Cases, Notes (you fill in)
- Java skeleton includes a `main()` method — click ▶ in VS Code to run

## Files

```
chrome-extension/
├── manifest.json     MV3 manifest
├── popup.html/css/js Main extension UI
├── options.html/css/js Settings page
└── icons/
    ├── generate_icons.html  Open in browser to export PNGs
    ├── icon16.png   (generate first)
    ├── icon48.png
    └── icon128.png
```
