import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const repositoryRoot = new URL("../", import.meta.url);
const readRepositoryFile = (path) =>
  readFile(new URL(path, repositoryRoot), "utf8");

test("the standard test command uses only the Node.js test runner", async () => {
  const packageJson = JSON.parse(await readRepositoryFile("package.json"));

  assert.equal(packageJson.scripts?.test, "node --test");
  assert.equal(packageJson.private, true);

  for (const dependencyType of [
    "dependencies",
    "devDependencies",
    "optionalDependencies",
    "peerDependencies",
  ]) {
    assert.equal(
      packageJson[dependencyType],
      undefined,
      `package.json must not define ${dependencyType}`,
    );
  }
});

test("the README documents the canonical GitHub Pages URL", async () => {
  const readme = await readRepositoryFile("README.md");

  assert.match(
    readme,
    /\*\*https:\/\/agonza1\.github\.io\/real-time-voice-agent-evals-presentation\/\*\*/,
  );
});

test("the README documents a complete local serving command", async () => {
  const readme = await readRepositoryFile("README.md");

  assert.match(readme, /```bash\npython3 -m http\.server 8080\n```/);
  assert.match(readme, /`http:\/\/localhost:8080`/);
});

test("the README promises a no-build, dependency-free presentation", async () => {
  const readme = await readRepositoryFile("README.md");

  assert.match(
    readme,
    /No framework, build tool, package install, or external font dependency/,
  );
});
