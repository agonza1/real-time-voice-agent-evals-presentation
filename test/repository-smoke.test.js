const assert = require("node:assert/strict");
const { readFile } = require("node:fs/promises");
const path = require("node:path");
const test = require("node:test");

const repositoryRoot = path.resolve(__dirname, "..");

async function readRepositoryFile(fileName) {
  return readFile(path.join(repositoryRoot, fileName), "utf8");
}

test("the standard test command has no install-time dependencies", async () => {
  const packageJson = JSON.parse(await readRepositoryFile("package.json"));

  assert.equal(packageJson.scripts.test, "node --test");
  assert.equal(packageJson.dependencies, undefined);
  assert.equal(packageJson.devDependencies, undefined);
  assert.equal(packageJson.optionalDependencies, undefined);
});

test("README documents the canonical GitHub Pages URL", async () => {
  const readme = await readRepositoryFile("README.md");

  assert.match(
    readme,
    /https:\/\/agonza1\.github\.io\/real-time-voice-agent-evals-presentation\//,
  );
});

test("README documents the local static-server command and URL", async () => {
  const readme = await readRepositoryFile("README.md");

  assert.match(readme, /```bash\npython3 -m http\.server 8080\n```/);
  assert.match(readme, /`http:\/\/localhost:8080`/);
});

test("README states the no-build and no-external-dependency contract", async () => {
  const readme = await readRepositoryFile("README.md");

  assert.match(
    readme,
    /The presentation has no build step and no external runtime dependencies\./,
  );
  assert.match(
    readme,
    /The smoke test uses only Node\.js built-ins and requires no package installation\./,
  );
});
