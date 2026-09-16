const assert = require("node:assert/strict");
const { readFileSync } = require("node:fs");
const { join } = require("node:path");
const test = require("node:test");

const repositoryRoot = join(__dirname, "..");
const readRepositoryFile = (path) =>
  readFileSync(join(repositoryRoot, path), "utf8");

test("README documents the canonical GitHub Pages URL", () => {
  const readme = readRepositoryFile("README.md");

  assert.match(
    readme,
    /https:\/\/agonza1\.github\.io\/real-time-voice-agent-evals-presentation\//,
  );
});

test("README documents the dependency-free local server command", () => {
  const readme = readRepositoryFile("README.md");

  assert.match(readme, /```bash\s+python3 -m http\.server 8080\s+```/);
  assert.match(readme, /http:\/\/localhost:8080/);
  assert.match(readme, /No build or package installation is required\./);
  assert.match(readme, /no external runtime dependencies\./i);
});

test("the Node smoke test needs no install or build step", () => {
  const manifest = JSON.parse(readRepositoryFile("package.json"));

  assert.equal(manifest.scripts.test, "node --test test/smoke.test.js");
  assert.equal(manifest.scripts.build, undefined);

  for (const dependencyField of [
    "dependencies",
    "devDependencies",
    "optionalDependencies",
    "peerDependencies",
  ]) {
    assert.equal(manifest[dependencyField], undefined);
  }
});
