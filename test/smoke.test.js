const assert = require("node:assert/strict");
const { readFileSync } = require("node:fs");
const { join } = require("node:path");
const test = require("node:test");

const repositoryRoot = join(__dirname, "..");
const readRepositoryFile = (fileName) =>
  readFileSync(join(repositoryRoot, fileName), "utf8");

test("README documents the canonical GitHub Pages URL", () => {
  const readme = readRepositoryFile("README.md");

  assert.match(
    readme,
    /https:\/\/agonza1\.github\.io\/real-time-voice-agent-evals-presentation\//,
  );
});

test("README documents the local static server command and URL", () => {
  const readme = readRepositoryFile("README.md");

  assert.match(readme, /```bash\s+python3 -m http\.server 8080\s+```/);
  assert.match(readme, /http:\/\/localhost:8080/);
});

test("repository documents and enforces its installation-free contract", () => {
  const readme = readRepositoryFile("README.md");
  const packageJson = JSON.parse(readRepositoryFile("package.json"));

  assert.match(
    readme,
    /The presentation requires no build step, package installation, or external runtime dependencies\./,
  );
  assert.match(
    readme,
    /The smoke test uses only Node\.js built-in modules; run it directly after checkout without `npm install`\./,
  );

  for (const dependencyField of [
    "dependencies",
    "devDependencies",
    "optionalDependencies",
    "peerDependencies",
  ]) {
    assert.equal(packageJson[dependencyField], undefined);
  }
  assert.equal(packageJson.scripts.test, "node --test test/smoke.test.js");
});
