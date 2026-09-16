const assert = require("node:assert/strict");
const { readFileSync } = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const repositoryRoot = path.resolve(__dirname, "..");
const readRepositoryFile = (fileName) =>
  readFileSync(path.join(repositoryRoot, fileName), "utf8");

const readme = readRepositoryFile("README.md");
const packageJson = JSON.parse(readRepositoryFile("package.json"));

test("documents the canonical GitHub Pages URL", () => {
  assert.match(
    readme,
    /\*\*https:\/\/agonza1\.github\.io\/real-time-voice-agent-evals-presentation\/\*\*/,
  );
});

test("documents the local static server command and URL", () => {
  assert.match(readme, /```bash\npython3 -m http\.server 8080\n```/);
  assert.match(readme, /`http:\/\/localhost:8080`/);
});

test("documents and preserves the no-build, dependency-free contract", () => {
  assert.match(
    readme,
    /The presentation has no build step and no external runtime dependencies\./,
  );
  assert.equal(packageJson.scripts?.build, undefined);
  assert.deepEqual(packageJson.dependencies ?? {}, {});
  assert.deepEqual(packageJson.devDependencies ?? {}, {});
});

test("exposes the smoke test through the standard Node test command", () => {
  assert.equal(packageJson.scripts?.test, "node --test");
  assert.match(readme, /```bash\nnpm test\n```/);
  assert.match(readme, /No package installation is required/);
});
