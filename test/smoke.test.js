const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const repositoryRoot = path.resolve(__dirname, "..");
const readme = fs.readFileSync(path.join(repositoryRoot, "README.md"), "utf8");
const packageJson = JSON.parse(
  fs.readFileSync(path.join(repositoryRoot, "package.json"), "utf8"),
);

test("documents the canonical GitHub Pages URL", () => {
  assert.match(
    readme,
    /https:\/\/agonza1\.github\.io\/real-time-voice-agent-evals-presentation\//,
  );
});

test("documents the local static-server command and address", () => {
  assert.match(readme, /```bash\npython3 -m http\.server 8080\n```/);
  assert.match(readme, /http:\/\/localhost:8080/);
});

test("documents and enforces the no-build, no-install contract", () => {
  assert.match(
    readme,
    /No framework, build tool, package install, or external font dependency/,
  );
  assert.match(readme, /npm test/);
  assert.deepEqual(packageJson.dependencies, undefined);
  assert.deepEqual(packageJson.devDependencies, undefined);
  assert.equal(packageJson.scripts.test, "node --test test/smoke.test.js");
});
