import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const readRepositoryFile = (path) =>
  readFile(new URL(`../${path}`, import.meta.url), "utf8");

test("README documents the published GitHub Pages URL", async () => {
  const readme = await readRepositoryFile("README.md");

  assert.match(
    readme,
    /https:\/\/agonza1\.github\.io\/real-time-voice-agent-evals-presentation\//,
  );
});

test("README documents the local serving command and URL", async () => {
  const readme = await readRepositoryFile("README.md");

  assert.match(readme, /```bash\s+python3 -m http\.server 8080\s+```/);
  assert.match(readme, /http:\/\/localhost:8080/);
});

test("README documents the no-build and no-external-dependency contract", async () => {
  const readme = await readRepositoryFile("README.md");

  assert.match(
    readme,
    /No build step or external runtime dependencies are required\./,
  );
  assert.match(readme, /No framework, build tool, package install, or external font dependency/);
});

test("the test command itself has no install-time dependencies", async () => {
  const packageJson = JSON.parse(await readRepositoryFile("package.json"));

  assert.equal(packageJson.scripts?.test, "node --test test/repository-smoke.test.mjs");
  for (const dependencyType of [
    "dependencies",
    "devDependencies",
    "optionalDependencies",
    "peerDependencies",
  ]) {
    assert.deepEqual(packageJson[dependencyType] ?? {}, {});
  }
});
