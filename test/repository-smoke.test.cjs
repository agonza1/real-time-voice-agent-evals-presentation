const assert = require("node:assert/strict");
const { readFile } = require("node:fs/promises");
const path = require("node:path");
const test = require("node:test");

const repositoryRoot = path.resolve(__dirname, "..");

async function readRepositoryFile(fileName) {
  return readFile(path.join(repositoryRoot, fileName), "utf8");
}

test("README documents the canonical GitHub Pages URL", async () => {
  const readme = await readRepositoryFile("README.md");

  assert.match(
    readme,
    /https:\/\/agonza1\.github\.io\/real-time-voice-agent-evals-presentation\//,
  );
});

test("README documents the local static-server command and URL", async () => {
  const readme = await readRepositoryFile("README.md");

  assert.match(readme, /```bash\s+python3 -m http\.server 8080\s+```/);
  assert.match(readme, /http:\/\/localhost:8080/);
});

test("README documents the no-build and no-install contract", async () => {
  const readme = await readRepositoryFile("README.md");

  assert.match(
    readme,
    /No framework, build tool, package install, or external font dependency/,
  );
  assert.match(readme, /does not require `npm install`/);
});

test("test command uses only Node and declares no package dependencies", async () => {
  const packageJson = JSON.parse(await readRepositoryFile("package.json"));

  assert.equal(
    packageJson.scripts.test,
    "node --test test/repository-smoke.test.cjs",
  );

  for (const dependencyType of [
    "dependencies",
    "devDependencies",
    "optionalDependencies",
    "peerDependencies",
  ]) {
    assert.equal(packageJson[dependencyType], undefined);
  }
});
