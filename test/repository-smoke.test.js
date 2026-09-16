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

test("repository documents and enforces its dependency-free contract", async () => {
  const [readme, packageSource] = await Promise.all([
    readRepositoryFile("README.md"),
    readRepositoryFile("package.json"),
  ]);
  const packageJson = JSON.parse(packageSource);

  assert.match(
    readme,
    /No framework, build step, package installation, or external runtime dependency/,
  );
  assert.match(readme, /no-build,\s+no-external-dependency contract/);
  assert.deepEqual(packageJson.scripts, {
    test: "node --test test/*.test.js",
  });

  for (const dependencyField of [
    "dependencies",
    "devDependencies",
    "optionalDependencies",
    "peerDependencies",
    "bundleDependencies",
    "bundledDependencies",
  ]) {
    assert.equal(
      packageJson[dependencyField],
      undefined,
      `${dependencyField} must remain absent`,
    );
  }
});
