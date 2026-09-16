const { readFile } = require("node:fs/promises");
const { join } = require("node:path");
const test = require("node:test");
const assert = require("node:assert/strict");

const repositoryRoot = join(__dirname, "..");

test("README documents the public and local presentation URLs", async () => {
  const readme = await readFile(join(repositoryRoot, "README.md"), "utf8");

  assert.match(
    readme,
    /https:\/\/agonza1\.github\.io\/real-time-voice-agent-evals-presentation\//,
    "README must include the canonical GitHub Pages URL",
  );
  assert.match(
    readme,
    /```bash\s+python3 -m http\.server 8080\s+```/,
    "README must include the local static-server command",
  );
  assert.match(
    readme,
    /http:\/\/localhost:8080/,
    "README must include the local presentation URL",
  );
});

test("repository keeps its no-build, no-external-dependency contract", async () => {
  const [readme, packageSource] = await Promise.all([
    readFile(join(repositoryRoot, "README.md"), "utf8"),
    readFile(join(repositoryRoot, "package.json"), "utf8"),
  ]);
  const packageJson = JSON.parse(packageSource);

  assert.match(
    readme,
    /The presentation has no build step or external runtime dependencies/,
    "README must document the no-build, dependency-free presentation contract",
  );
  assert.equal(packageJson.scripts?.test, "node --test");
  assert.deepEqual(packageJson.dependencies ?? {}, {});
  assert.deepEqual(packageJson.devDependencies ?? {}, {});
});
