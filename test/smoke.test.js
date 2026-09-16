import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const readRepositoryFile = (path) =>
  readFile(new URL(`../${path}`, import.meta.url), "utf8");

test("README documents the public and local presentation URLs", async () => {
  const readme = await readRepositoryFile("README.md");

  assert.match(
    readme,
    /https:\/\/agonza1\.github\.io\/real-time-voice-agent-evals-presentation\//,
  );
  assert.match(readme, /python3 -m http\.server 8080/);
  assert.match(readme, /http:\/\/localhost:8080/);
});

test("the repository keeps its no-build, no-install contract", async () => {
  const [readme, packageJson] = await Promise.all([
    readRepositoryFile("README.md"),
    readRepositoryFile("package.json").then(JSON.parse),
  ]);

  assert.match(
    readme,
    /No framework, build tool, package install, or external font dependency/,
  );
  assert.equal(packageJson.scripts?.build, undefined);

  for (const dependencyType of [
    "dependencies",
    "devDependencies",
    "optionalDependencies",
    "peerDependencies",
  ]) {
    assert.equal(packageJson[dependencyType], undefined);
  }
});
