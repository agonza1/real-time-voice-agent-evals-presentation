const assert = require("node:assert/strict");
const { readFile } = require("node:fs/promises");
const path = require("node:path");
const test = require("node:test");

const repositoryRoot = path.join(__dirname, "..");

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

test("README documents the local static server", async () => {
  const readme = await readRepositoryFile("README.md");

  assert.match(readme, /```bash\npython3 -m http\.server 8080\n```/);
  assert.match(readme, /http:\/\/localhost:8080/);
});

test("repository documents and enforces its no-install, no-build contract", async () => {
  const [readme, packageSource] = await Promise.all([
    readRepositoryFile("README.md"),
    readRepositoryFile("package.json"),
  ]);
  const packageJson = JSON.parse(packageSource);

  assert.match(
    readme,
    /No build step, package installation, or external runtime dependency is required\./,
  );
  assert.equal(packageJson.scripts.test, "node --test");
  assert.equal(packageJson.scripts.build, undefined);
  assert.equal(packageJson.dependencies, undefined);
  assert.equal(packageJson.devDependencies, undefined);
});
