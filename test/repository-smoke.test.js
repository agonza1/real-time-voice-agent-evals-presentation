const assert = require("node:assert/strict");
const { readFile } = require("node:fs/promises");
const path = require("node:path");
const test = require("node:test");

const repositoryRoot = path.resolve(__dirname, "..");

async function readRepositoryFile(fileName) {
  return readFile(path.join(repositoryRoot, fileName), "utf8");
}

test("README documents the public GitHub Pages URL", async () => {
  const readme = await readRepositoryFile("README.md");

  assert.match(
    readme,
    /https:\/\/agonza1\.github\.io\/real-time-voice-agent-evals-presentation\//,
  );
});

test("README documents the dependency-free local server command", async () => {
  const readme = await readRepositoryFile("README.md");

  assert.match(readme, /```bash\s+python3 -m http\.server 8080\s+```/);
  assert.match(readme, /http:\/\/localhost:8080/);
});

test("repository declares its no-build and no-external-dependency contract", async () => {
  const [readme, packageJson] = await Promise.all([
    readRepositoryFile("README.md"),
    readRepositoryFile("package.json").then(JSON.parse),
  ]);

  assert.match(
    readme,
    /No framework, build tool, package install, or external font dependency/,
  );
  assert.equal(packageJson.scripts.test, "node --test");
  assert.equal(packageJson.dependencies, undefined);
  assert.equal(packageJson.devDependencies, undefined);
});
