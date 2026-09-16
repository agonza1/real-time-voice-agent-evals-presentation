const assert = require("node:assert/strict");
const { readFileSync } = require("node:fs");
const { join } = require("node:path");
const test = require("node:test");

const repositoryRoot = join(__dirname, "..");
const readRepositoryFile = (path) =>
  readFileSync(join(repositoryRoot, path), "utf8");

const readme = readRepositoryFile("README.md");
const packageJson = JSON.parse(readRepositoryFile("package.json"));

test("documents the canonical GitHub Pages URL", () => {
  assert.match(
    readme,
    /https:\/\/agonza1\.github\.io\/real-time-voice-agent-evals-presentation\//,
  );
});

test("documents the local static-server command and URL", () => {
  assert.match(readme, /```bash\s+python3 -m http\.server 8080\s+```/);
  assert.match(readme, /http:\/\/localhost:8080/);
});

test("keeps testing free of build steps and installed dependencies", () => {
  assert.match(
    readme,
    /No build step, package installation, or external runtime dependencies are required\./,
  );
  assert.equal(packageJson.scripts.test, "node --test");
  assert.equal(Object.hasOwn(packageJson, "dependencies"), false);
  assert.equal(Object.hasOwn(packageJson, "devDependencies"), false);
  assert.equal(Object.hasOwn(packageJson.scripts, "build"), false);
  assert.equal(Object.hasOwn(packageJson.scripts, "pretest"), false);
  assert.equal(Object.hasOwn(packageJson.scripts, "posttest"), false);
});
