#!/usr/bin/env python3
"""
Usage:
    python new_note.py <leetcode-url>

Example:
    python new_note.py https://leetcode.com/problems/valid-parentheses/

Creates a new note file from the template and auto-fills everything
before the Approach section (title, difficulty, tags, date, problem
summary, examples, and constraints) using LeetCode's GraphQL API.
"""

import sys
import json
import re
from datetime import date
from urllib.request import urlopen, Request
from urllib.error import URLError

GRAPHQL_URL = "https://leetcode.com/graphql"
SOLUTIONS_DIR = "solutions"

QUERY = """
query getQuestion($titleSlug: String!) {
  question(titleSlug: $titleSlug) {
    questionFrontendId
    title
    difficulty
    topicTags { name }
    content
  }
}
"""


def fetch_problem(slug: str) -> dict:
    payload = json.dumps({"query": QUERY, "variables": {"titleSlug": slug}}).encode()
    req = Request(
        GRAPHQL_URL,
        data=payload,
        headers={
            "Content-Type": "application/json",
            "Referer": f"https://leetcode.com/problems/{slug}/",
            "User-Agent": "Mozilla/5.0",
        },
    )
    try:
        with urlopen(req, timeout=10) as resp:
            data = json.loads(resp.read())
    except URLError as e:
        sys.exit(f"Network error: {e}")

    question = data.get("data", {}).get("question")
    if not question:
        sys.exit("Problem not found. Check the URL.")
    return question


def decode_html_entities(text: str) -> str:
    return (
        text.replace("&nbsp;", " ")
            .replace("&lt;", "<")
            .replace("&gt;", ">")
            .replace("&quot;", '"')
            .replace("&#39;", "'")
            .replace("&amp;", "&")
            .replace("<sup>", "^")
            .replace("</sup>", "")
    )


def strip_tags(html: str) -> str:
    return re.sub(r"<[^>]+>", "", html)


def plain(html: str) -> str:
    return decode_html_entities(strip_tags(html)).strip()


def extract_parts(content: str):
    """
    Returns (summary, examples, constraints) parsed from the raw HTML.
    - summary: one-sentence description
    - examples: formatted string of up to 2 examples
    - constraints: list of constraint strings
    """
    # ── Summary ──────────────────────────────────────────────────────────────
    # The description is the text before the first <strong>Example</strong>
    summary_html = re.split(r"<strong[^>]*>\s*Example", content, maxsplit=1)[0]
    summary = " ".join(plain(summary_html).split())

    # ── Examples ─────────────────────────────────────────────────────────────
    # Try <pre> blocks first (handles both bare <pre> and <pre class="...">)
    pre_blocks = re.findall(r"<pre[^>]*>(.*?)</pre>", content, re.DOTALL)
    example_parts = []
    for block in pre_blocks[:2]:
        text = plain(block).strip()
        if "Input" in text or "Output" in text:
            example_parts.append(text)

    # Fallback: scrape Input/Output/Explanation lines from plain text
    if not example_parts:
        plain_content = plain(content)
        blocks = re.findall(
            r"((?:Input|Output|Explanation)\s*:.*?)(?=\n\s*(?:Input|Output|Explanation|Example|\Z))",
            plain_content,
            re.DOTALL,
        )
        if blocks:
            # Group into per-example chunks of (Input + Output [+ Explanation])
            chunk, chunks = [], []
            for b in blocks:
                b = b.strip()
                if b.startswith("Input") and chunk:
                    chunks.append("\n".join(chunk))
                    chunk = []
                chunk.append(b)
            if chunk:
                chunks.append("\n".join(chunk))
            example_parts = chunks[:2]

    examples = "\n\n".join(example_parts) if example_parts else "Input:\nOutput:"

    # ── Constraints ──────────────────────────────────────────────────────────
    constraints = []
    constraints_match = re.search(
        r"<strong[^>]*>\s*Constraints?:?\s*</strong>.*?<ul>(.*?)</ul>",
        content,
        re.DOTALL | re.IGNORECASE,
    )
    if constraints_match:
        items = re.findall(r"<li>(.*?)</li>", constraints_match.group(1), re.DOTALL)
        constraints = [plain(item) for item in items]

    return summary, examples, constraints


def slugify_title(title: str) -> str:
    return re.sub(r"[^a-zA-Z0-9]", "", title.replace(" ", ""))


def build_note(q: dict, slug: str) -> str:
    num = q["questionFrontendId"].zfill(4)
    title = q["title"]
    difficulty = q["difficulty"]
    tags = " ".join(f"`{t['name']}`" for t in q["topicTags"])
    today = date.today().isoformat()
    class_name = f"Solution_{num}_{slugify_title(title)}"
    link = f"https://leetcode.com/problems/{slug}/"

    summary, examples, constraints = extract_parts(q.get("content", ""))

    if constraints:
        constraints_block = "\n".join(f"- `{c}`" for c in constraints)
    else:
        constraints_block = "-"

    return f"""\
# {num}.{title}

**Difficulty:** {difficulty}
**Tags:** {tags}
**Date:** {today}
**Link:** [LeetCode]({link})

---

## Problem Summary

> {summary}

**Example:**
```
{examples}
```

**Constraints:**
{constraints_block}

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
public class {class_name} {{

    public static void solve() {{
        // TODO: implement
    }}

    // ── Quick local test ─────────────────────────────────────────────────────
    public static void main(String[] args) {{
        // Test case 1
        // Expected:

        // Test case 2 – edge case
        // Expected:
    }}
}}
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
"""


def main():
    if len(sys.argv) < 2:
        sys.exit("Usage: python new_note.py <leetcode-url>")

    url = sys.argv[1]
    match = re.search(r"leetcode\.com/problems/([^/]+)", url)
    if not match:
        sys.exit("Could not parse LeetCode URL.")

    slug = match.group(1)
    print(f"Fetching: {slug} ...")
    q = fetch_problem(slug)

    num = q["questionFrontendId"].zfill(4)
    title = q["title"]
    filename = f"{SOLUTIONS_DIR}/{num}_{title.replace(' ', '')}.md"

    note = build_note(q, slug)
    with open(filename, "w") as f:
        f.write(note)

    print(f"Created: {filename}")


if __name__ == "__main__":
    main()
