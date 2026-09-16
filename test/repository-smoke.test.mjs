import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const repositoryRoot = new URL("../", import.meta.url);
const readRepositoryFile = (path) =>
  readFile(new URL(path, repositoryRoot), "utf8");

test("README documents the canonical GitHub Pages URL", async () => {
  const readme = await readRepositoryFile("README.md");

  assert.match(
    readme,
    /https:\/\/agonza1\.github\.io\/real-time-voice-agent-evals-presentation\//,
  );
});

test("README documents the local static-server command and URL", async () => {
  const readme = await readRepositoryFile("README.md");

  assert.match(readme, /```bash\s+python3 -m http\.server 8080\s+```/);
  assert.match(readme, /http:\/\/localhost:8080/);
});

test("repository keeps its no-build and no-external-dependency contract", async () => {
  const [readme, packageJson] = await Promise.all([
    readRepositoryFile("README.md"),
    readRepositoryFile("package.json").then(JSON.parse),
  ]);

  assert.match(
    readme,
    /No framework, build tool, package install, or external font dependency/,
  );

  for (const dependencyField of [
    "dependencies",
    "devDependencies",
    "optionalDependencies",
    "peerDependencies",
  ]) {
    assert.equal(packageJson[dependencyField], undefined);
  }

  for (const lifecycleScript of [
    "preinstall",
    "install",
    "postinstall",
    "prebuild",
    "build",
    "postbuild",
  ]) {
    assert.equal(packageJson.scripts?.[lifecycleScript], undefined);
  }
});
