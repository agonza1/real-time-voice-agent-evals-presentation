const assert = require("node:assert/strict");
const { readFile } = require("node:fs/promises");
const { test } = require("node:test");
const path = require("node:path");

const repositoryRoot = path.resolve(__dirname, "..");

async function readRepositoryFile(file) {
  return readFile(path.join(repositoryRoot, file), "utf8");
}

test("README documents the canonical GitHub Pages URL", async () => {
  const readme = await readRepositoryFile("README.md");

  assert.match(
    readme,
    /https:\/\/agonza1\.github\.io\/real-time-voice-agent-evals-presentation\//,
  );
});

test("README documents the local static server command and URL", async () => {
  const readme = await readRepositoryFile("README.md");

  assert.match(readme, /```bash\s+python3 -m http\.server 8080\s+```/);
  assert.match(readme, /http:\/\/localhost:8080/);
});

test("repository documents and enforces its no-install contract", async () => {
  const [readme, packageSource] = await Promise.all([
    readRepositoryFile("README.md"),
    readRepositoryFile("package.json"),
  ]);
  const packageJson = JSON.parse(packageSource);

  assert.match(
    readme,
    /No framework, build tool, package install, or external font dependency/,
  );
  assert.equal(packageJson.scripts.test, "node --test test/*.test.js");

  for (const dependencyField of [
    "dependencies",
    "devDependencies",
    "optionalDependencies",
    "peerDependencies",
  ]) {
    assert.equal(
      packageJson[dependencyField],
      undefined,
      `${dependencyField} must remain absent`,
    );
  }
});
