const assert = require("node:assert/strict");
const { readFile } = require("node:fs/promises");
const path = require("node:path");
const test = require("node:test");

const repositoryRoot = path.resolve(__dirname, "..");

async function readRepositoryFile(relativePath) {
  return readFile(path.join(repositoryRoot, relativePath), "utf8");
}

test("documents the canonical GitHub Pages URL", async () => {
  const readme = await readRepositoryFile("README.md");

  assert.match(
    readme,
    /https:\/\/agonza1\.github\.io\/real-time-voice-agent-evals-presentation\//,
  );
});

test("documents a local static-server command and URL", async () => {
  const readme = await readRepositoryFile("README.md");

  assert.match(readme, /```bash\s+python3 -m http\.server 8080\s+```/);
  assert.match(readme, /http:\/\/localhost:8080/);
});

test("keeps the smoke test installation-free", async () => {
  const [readme, packageJsonSource] = await Promise.all([
    readRepositoryFile("README.md"),
    readRepositoryFile("package.json"),
  ]);
  const packageJson = JSON.parse(packageJsonSource);

  assert.equal(packageJson.scripts?.test, "node --test test/smoke.test.js");
  for (const dependencyField of [
    "dependencies",
    "devDependencies",
    "optionalDependencies",
    "peerDependencies",
    "bundledDependencies",
  ]) {
    assert.equal(
      Object.keys(packageJson[dependencyField] ?? {}).length,
      0,
      `${dependencyField} must remain empty`,
    );
  }
  assert.match(readme, /```bash\s+npm test\s+```/);
  assert.match(readme, /No package installation is required/);
  assert.match(
    readme,
    /No framework, build tool, package install, or external font dependency/,
  );
});
