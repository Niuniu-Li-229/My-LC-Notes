const $ = (id) => document.getElementById(id);

const FIELDS = ["token", "owner", "repo", "branch", "folder"];

function showStatus(msg, type = "info") {
  const el = $("status");
  el.textContent = msg;
  el.className = type;
  el.classList.remove("hidden");
}

// ── Load saved values ─────────────────────────────────────────────────────

(async () => {
  const saved = await chrome.storage.sync.get(FIELDS);
  FIELDS.forEach((key) => {
    if (saved[key]) $(key).value = saved[key];
  });
})();

// ── Save ──────────────────────────────────────────────────────────────────

$("settings-form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const values = {};
  FIELDS.forEach((key) => {
    values[key] = $(key).value.trim() || (key === "branch" ? "main" : key === "folder" ? "solutions" : "");
  });

  if (!values.token || !values.owner || !values.repo) {
    showStatus("Token, username, and repo name are required.", "error");
    return;
  }

  await chrome.storage.sync.set(values);
  showStatus("✓ Settings saved.", "ok");
});

// ── Test connection ───────────────────────────────────────────────────────

$("btn-test").addEventListener("click", async () => {
  const token = $("token").value.trim();
  const owner = $("owner").value.trim();
  const repo  = $("repo").value.trim();

  if (!token || !owner || !repo) {
    showStatus("Fill in token, username, and repo first.", "error");
    return;
  }

  showStatus("Testing connection…", "info");

  try {
    const res = await fetch(`https://api.github.com/repos/${owner}/${repo}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/vnd.github+json",
      },
    });

    if (res.status === 200) {
      const data = await res.json();
      showStatus(`✓ Connected to "${data.full_name}" (${data.private ? "private" : "public"}).`, "ok");
    } else if (res.status === 401) {
      showStatus("Token is invalid or expired.", "error");
    } else if (res.status === 404) {
      showStatus("Repository not found. Check username and repo name.", "error");
    } else {
      showStatus(`Unexpected response: ${res.status}`, "error");
    }
  } catch (err) {
    showStatus(`Network error: ${err.message}`, "error");
  }
});
