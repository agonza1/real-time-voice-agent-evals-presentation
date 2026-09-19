import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const repositoryRoot = new URL("../", import.meta.url);
const readRepositoryFile = (path) =>
  readFile(new URL(path, repositoryRoot), "utf8");

test("the standard test command uses only the Node.js test runner", async () => {
  const packageJson = JSON.parse(await readRepositoryFile("package.json"));

  assert.equal(packageJson.scripts?.test, "node --test");
  assert.equal(packageJson.private, true);

  for (const dependencyType of [
    "dependencies",
    "devDependencies",
    "optionalDependencies",
    "peerDependencies",
  ]) {
    assert.equal(
      packageJson[dependencyType],
      undefined,
      `package.json must not define ${dependencyType}`,
    );
  }
});

test("the README documents the canonical GitHub Pages URL", async () => {
  const readme = await readRepositoryFile("README.md");

  assert.match(
    readme,
    /\*\*https:\/\/agonza1\.github\.io\/real-time-voice-agent-evals-presentation\/\*\*/,
  );
});

test("the README documents a complete local serving command", async () => {
  const readme = await readRepositoryFile("README.md");

  assert.match(readme, /```bash\npython3 -m http\.server 8080\n```/);
  assert.match(readme, /`http:\/\/localhost:8080`/);
});

test("the README promises a no-build, dependency-free presentation", async () => {
  const readme = await readRepositoryFile("README.md");

  assert.match(
    readme,
    /No framework, build tool, package install, or external font dependency/,
  );
});

test("the deployable presentation entry point exists and is self-contained", async () => {
  const html = await readRepositoryFile("index.html");

  assert.match(html, /^<!doctype html>/i);
  assert.match(html, /<title>Evaluating Real-Time Voice Agents Beyond AI Models<\/title>/);
  assert.match(html, /<main\b/);
  assert.ok(
    (html.match(/<section\b/g) ?? []).length >= 5,
    "the entry point must contain a substantive slide sequence",
  );
  assert.match(html, /ConversationAgentEvals/);
  assert.match(html, /vCon/);
  assert.match(html, /<dialog id="keyboard-help"/);
  assert.match(html, /event\.key === "\?"/);
  assert.match(html, /event\.ctrlKey \|\| event\.metaKey \|\| event\.altKey/);
  assert.match(html, /closest\("button, a, input, select, textarea, summary/);
  assert.match(html, /section\.active \{ display:grid; overflow-y:auto; align-content:start; \}/);
  assert.match(html, /body\.presenting section, body\.presenting section\.active \{ display:grid; width:auto; height:auto; min-height:0; overflow:visible; align-content:start;/);
  assert.match(html, /id="fixture-status" class="status" role="status" aria-live="polite"/);
  assert.match(html, /slides\.forEach\(\(slide\) => slide\.setAttribute\("tabindex", "-1"\)\)/);
  assert.match(html, /if \(document\.body\.classList\.contains\("presenting"\)\) slides\[current\]\.focus\(\{ preventScroll:true \}\)/);
  assert.doesNotMatch(html, /<(?:script|link)[^>]+(?:src|href)=["']https?:\/\//i);
});
