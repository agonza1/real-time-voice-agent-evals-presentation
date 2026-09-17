const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const root = path.resolve(__dirname, "..");
const readRootFile = (file) => fs.readFileSync(path.join(root, file), "utf8");
const readme = readRootFile("README.md");
const packageJson = JSON.parse(readRootFile("package.json"));

test("documents the canonical GitHub Pages URL", () => {
  assert.match(
    readme,
    /https:\/\/agonza1\.github\.io\/real-time-voice-agent-evals-presentation\//,
  );
});

test("documents the local static-server workflow", () => {
  assert.match(readme, /python3 -m http\.server 8080/);
  assert.match(readme, /http:\/\/localhost:8080/);
});

test("keeps the smoke test build-free and dependency-free", () => {
  assert.match(
    readme,
    /No package installation, build step, or network access is required\./,
  );
  assert.equal(packageJson.scripts.test, "node --test test/*.test.js");

  for (const dependencyGroup of ["dependencies", "devDependencies", "peerDependencies"]) {
    assert.deepEqual(packageJson[dependencyGroup] ?? {}, {});
  }

  for (const script of ["pretest", "posttest", "build", "prepare"]) {
    assert.equal(packageJson.scripts[script], undefined);
  }
});
