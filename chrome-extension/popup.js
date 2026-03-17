// ── LeetCode GraphQL ──────────────────────────────────────────────────────

const LC_GRAPHQL = "https://leetcode.com/graphql/";

const QUESTION_QUERY = `
query questionData($titleSlug: String!) {
  question(titleSlug: $titleSlug) {
    questionFrontendId
    title
    titleSlug
    difficulty
    topicTags { name }
    content
    codeSnippets { lang langSlug code }
    exampleTestcaseList
  }
}`;

async function fetchProblem(slug) {
  const res = await fetch(LC_GRAPHQL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query: QUESTION_QUERY, variables: { titleSlug: slug } }),
  });
  if (!res.ok) throw new Error(`LeetCode API error: ${res.status}`);
  const json = await res.json();
  if (json.errors) throw new Error(json.errors[0].message);
  return json.data.question;
}

// ── HTML → plain text helpers ─────────────────────────────────────────────

function htmlToText(html) {
  return html
    .replace(/<pre[^>]*>([\s\S]*?)<\/pre>/gi, (_, inner) => "\n" + stripTags(inner).trim() + "\n")
    .replace(/<li[^>]*>([\s\S]*?)<\/li>/gi, (_, inner) => "- " + stripTags(inner).trim() + "\n")
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<p[^>]*>([\s\S]*?)<\/p>/gi, (_, inner) => stripTags(inner).trim() + "\n")
    .replace(/<[^>]+>/g, "")
    .replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&")
    .replace(/&nbsp;/g, " ").replace(/&#39;/g, "'").replace(/&quot;/g, '"')
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function stripTags(html) {
  return html
    .replace(/<[^>]+>/g, "")
    .replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&")
    .replace(/&nbsp;/g, " ").replace(/&#39;/g, "'").replace(/&quot;/g, '"')
    .trim();
}

/** Extract the first plain-text paragraph as the problem summary. */
function extractSummary(html) {
  const match = html.match(/<p>([\s\S]*?)<\/p>/i);
  return match ? stripTags(match[1]).replace(/\s+/g, " ").trim() : "";
}

/** Extract example blocks from the HTML content. */
function extractExamples(html) {
  const examples = [];
  const preRe = /<pre>([\s\S]*?)<\/pre>/gi;
  let m;
  while ((m = preRe.exec(html)) !== null) {
    const text = stripTags(m[1]).trim();
    if (text.toLowerCase().includes("input")) examples.push(text);
  }
  return examples;
}

/** Extract constraints bullet points. */
function extractConstraints(html) {
  const constraintsSection = html.match(
    /<strong[^>]*>[Cc]onstraints[^<]*<\/strong>([\s\S]*?)(?=<p>|<strong>|$)/i
  );
  if (!constraintsSection) return [];
  const lis = [...constraintsSection[1].matchAll(/<li>([\s\S]*?)<\/li>/gi)];
  return lis.map((li) => stripTags(li[1]).trim());
}

// ── Java skeleton builder ─────────────────────────────────────────────────

/**
 * Takes LeetCode's Java snippet and wraps it in a runnable class with a
 * main() method for VS Code's "Run Java" button.
 */
function buildJavaSkeleton(id, title, snippet) {
  const className = `Solution_${String(id).padStart(4, "0")}_${titleToClassName(title)}`;

  if (!snippet) {
    return `public class ${className} {\n\n    // TODO: paste your solution here\n\n    public static void main(String[] args) {\n        // add test cases\n    }\n}`;
  }

  // LeetCode snippets: "class Solution { ... }"
  // Rename to our class, keep the inner methods, add main()
  const body = snippet
    .replace(/^class Solution\s*\{/, "")   // remove opening
    .replace(/\}\s*$/, "")                  // remove closing brace
    .split("\n")
    .map((l) => "    " + l)                 // indent one level
    .join("\n")
    .trimEnd();

  return [
    `public class ${className} {`,
    "",
    body,
    "",
    "    // ── Quick local test ─────────────────────────────────────────────────────",
    "    public static void main(String[] args) {",
    "        Solution_" + String(id).padStart(4, "0") + "_" + titleToClassName(title) + " sol = new " +
      "Solution_" + String(id).padStart(4, "0") + "_" + titleToClassName(title) + "();",
    "        // Test case 1",
    "        // System.out.println(sol.methodName(...));",
    "        // Expected: ...",
    "    }",
    "}",
  ].join("\n");
}

function titleToClassName(title) {
  return title
    .split(/\s+/)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1).replace(/[^a-zA-Z0-9]/g, ""))
    .join("");
}

function titleToFilename(id, title) {
  const paddedId = String(id).padStart(4, "0");
  const safeName = titleToClassName(title);
  return `${paddedId}_${safeName}.md`;
}

// ── Markdown generator ────────────────────────────────────────────────────

function generateMarkdown(problem) {
  const { questionFrontendId: id, title, titleSlug, difficulty, topicTags, content, codeSnippets } = problem;

  const tags       = topicTags.map((t) => `\`${t.name}\``).join(" ");
  const date       = new Date().toISOString().slice(0, 10);
  const summary    = extractSummary(content);
  const examples   = extractExamples(content);
  const constraints = extractConstraints(content);
  const javaSnippet = (codeSnippets || []).find((s) => s.langSlug === "java")?.code || "";
  const javaSkeleton = buildJavaSkeleton(id, title, javaSnippet);

  const examplesBlock = examples.length
    ? examples.map((ex, i) => `**Example ${i + 1}:**\n\`\`\`\n${ex}\n\`\`\``).join("\n\n")
    : "**Example:**\n```\nInput:\nOutput:\n```";

  const constraintsBlock = constraints.length
    ? constraints.map((c) => `- ${c}`).join("\n")
    : "-";

  return [
    `# ${String(id).padStart(4, "0")}. ${title}`,
    "",
    `**Difficulty:** ${difficulty}`,
    `**Tags:** ${tags}`,
    `**Date:** ${date}`,
    `**Link:** [LeetCode](https://leetcode.com/problems/${titleSlug}/)`,
    "",
    "---",
    "",
    "## Problem Summary",
    "",
    `> ${summary}`,
    "",
    examplesBlock,
    "",
    "**Constraints:**",
    constraintsBlock,
    "",
    "---",
    "",
    "## Approach",
    "",
    "**Strategy:** *(e.g., Sliding Window / BFS / Dynamic Programming / Two Pointers)*",
    "",
    "Key observations:",
    "-",
    "-",
    "",
    "---",
    "",
    "## Complexity",
    "",
    "| | |",
    "|---|---|",
    "| **Time** | O(?) |",
    "| **Space** | O(?) |",
    "",
    "---",
    "",
    "## Solution (Java)",
    "",
    "```java",
    javaSkeleton,
    "```",
    "",
    "> **To run:** use the ▶ button above `main` in VS Code (requires [Extension Pack for Java](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-pack)).",
    "",
    "---",
    "",
    "## Edge Cases",
    "",
    "- [ ] Empty input / null",
    "- [ ] Single element",
    "- [ ] All duplicates",
    "- [ ] Negative numbers / overflow",
    "- [ ] Already sorted / reverse sorted",
    "",
    "---",
    "",
    "## Notes",
    "",
    "- *Why this approach over brute force / alternatives?*",
    "- *Common pitfall to remember:*",
    "- *Pattern this belongs to:*",
    "",
    "---",
    "",
    "## Second Pass *(optional – Python)*",
    "",
    "```python",
    "def solve(self) -> None:",
    "    pass",
    "```",
    "",
  ].join("\n");
}

// ── GitHub API ────────────────────────────────────────────────────────────

async function pushToGitHub({ token, owner, repo, branch, folder }, filename, content) {
  const path    = `${folder.replace(/\/$/, "")}/${filename}`;
  const apiUrl  = `https://api.github.com/repos/${owner}/${repo}/contents/${path}`;
  const encoded = btoa(unescape(encodeURIComponent(content)));

  // Check if file already exists (to get its sha for update)
  let sha;
  try {
    const check = await fetch(apiUrl, {
      headers: { Authorization: `Bearer ${token}`, Accept: "application/vnd.github+json" },
    });
    if (check.ok) {
      const existing = await check.json();
      sha = existing.sha;
    }
  } catch (_) { /* file doesn't exist yet */ }

  const body = {
    message: `Add note: ${filename.replace(".md", "").replace(/_/g, " ")}`,
    content: encoded,
    branch,
    ...(sha ? { sha } : {}),
  };

  const res = await fetch(apiUrl, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/vnd.github+json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.message || `GitHub API error: ${res.status}`);
  }

  const result = await res.json();
  return result.content?.html_url || `https://github.com/${owner}/${repo}/blob/${branch}/${path}`;
}

// ── UI helpers ────────────────────────────────────────────────────────────

const $ = (id) => document.getElementById(id);

function showStatus(msg, type = "info") {
  const el = $("status");
  el.textContent = msg;
  el.className = type;
  el.classList.remove("hidden");
}

function showCard(name) {
  ["card-problem", "card-idle", "card-setup"].forEach((id) => {
    $(id).classList.toggle("hidden", id !== `card-${name}`);
  });
}

// ── Entry point ───────────────────────────────────────────────────────────

(async () => {
  // Wire up settings button
  $("btn-settings").addEventListener("click", () => chrome.runtime.openOptionsPage());
  $("btn-go-settings")?.addEventListener("click", () => chrome.runtime.openOptionsPage());

  // Load saved settings
  const cfg = await chrome.storage.sync.get(["token", "owner", "repo", "branch", "folder"]);
  if (!cfg.token || !cfg.owner || !cfg.repo) {
    showCard("setup");
    return;
  }
  cfg.branch = cfg.branch || "main";
  cfg.folder = cfg.folder || "solutions";

  // Get current tab URL
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  const slugMatch = tab?.url?.match(/leetcode\.com\/problems\/([\w-]+)\//);

  if (!slugMatch) {
    showCard("idle");
    return;
  }

  const slug = slugMatch[1];
  showCard("problem");
  showStatus("Fetching problem…", "info");

  // Fetch problem data
  let problem;
  try {
    problem = await fetchProblem(slug);
  } catch (err) {
    showStatus(`Failed to fetch: ${err.message}`, "error");
    return;
  }

  // Populate UI
  $("problem-id").textContent       = `#${problem.questionFrontendId}`;
  $("problem-title").textContent    = problem.title;
  $("problem-difficulty").textContent = problem.difficulty;
  $("problem-difficulty").className = `badge ${problem.difficulty}`;
  $("problem-tags").innerHTML = problem.topicTags
    .map((t) => `<span class="tag">${t.name}</span>`)
    .join("");
  $("status").classList.add("hidden");
  $("btn-create").disabled = false;

  // Create note
  $("btn-create").addEventListener("click", async () => {
    $("btn-create").disabled = true;
    $("link-note").classList.add("hidden");

    showStatus("Generating markdown…", "info");
    const markdown = generateMarkdown(problem);
    const filename = titleToFilename(problem.questionFrontendId, problem.title);

    showStatus("Pushing to GitHub…", "info");
    try {
      const url = await pushToGitHub(cfg, filename, markdown);
      showStatus("✓ Note created!", "ok");
      $("link-note").href = url;
      $("link-note").classList.remove("hidden");
    } catch (err) {
      showStatus(`GitHub error: ${err.message}`, "error");
      $("btn-create").disabled = false;
    }
  });
})();
