import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const repositoryRoot = new URL("../", import.meta.url);
const readme = await readFile(new URL("README.md", repositoryRoot), "utf8");
const packageJson = JSON.parse(
  await readFile(new URL("package.json", repositoryRoot), "utf8"),
);

test("README documents the canonical GitHub Pages URL", () => {
  assert.match(
    readme,
    /https:\/\/agonza1\.github\.io\/real-time-voice-agent-evals-presentation\//,
  );
});

test("README documents the local static-server command and URL", () => {
  assert.match(readme, /```bash\s+python3 -m http\.server 8080\s+```/);
  assert.match(readme, /http:\/\/localhost:8080/);
});

test("repository test command requires no build or external packages", () => {
  assert.equal(packageJson.scripts?.test, "node --test test/*.test.mjs");

  for (const dependencyField of [
    "dependencies",
    "devDependencies",
    "optionalDependencies",
    "peerDependencies",
  ]) {
    assert.equal(packageJson[dependencyField], undefined);
  }

  for (const lifecycleScript of [
    "build",
    "preinstall",
    "install",
    "postinstall",
    "prepare",
  ]) {
    assert.equal(packageJson.scripts?.[lifecycleScript], undefined);
  }

  assert.match(
    readme,
    /No framework, build tool, package install, or external font dependency/,
  );
});
