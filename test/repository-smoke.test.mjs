import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { test } from "node:test";

const repositoryRoot = new URL("../", import.meta.url);
const readRepositoryFile = (path) =>
  readFile(new URL(path, repositoryRoot), "utf8");

const pagesUrl =
  "https://agonza1.github.io/real-time-voice-agent-evals-presentation/";
const localServeCommand = "python3 -m http.server 8080";
const localUrl = "http://localhost:8080";
const staticSiteContract =
  "The presentation is static: it requires no build step, package installation, or external runtime dependencies.";

test("README documents the canonical GitHub Pages URL", async () => {
  const readme = await readRepositoryFile("README.md");

  assert.match(readme, new RegExp(`\\*\\*${pagesUrl}\\*\\*`));
});

test("README documents the local static server command", async () => {
  const readme = await readRepositoryFile("README.md");

  assert.ok(
    readme.includes(`\`\`\`bash\n${localServeCommand}\n\`\`\``),
    `README must show the exact local command: ${localServeCommand}`,
  );
  assert.ok(
    readme.includes(`\`${localUrl}\``),
    `README must direct readers to ${localUrl}`,
  );
});

test("repository declares and preserves its dependency-free static-site contract", async () => {
  const [readme, packageJsonSource] = await Promise.all([
    readRepositoryFile("README.md"),
    readRepositoryFile("package.json"),
  ]);
  const packageJson = JSON.parse(packageJsonSource);

  assert.ok(
    readme.includes(staticSiteContract),
    "README must state the complete static-site contract",
  );
  assert.equal(packageJson.scripts?.test, "node --test test/*.test.mjs");
  assert.equal(packageJson.scripts?.build, undefined, "no build script is needed");
  assert.equal(packageJson.dependencies, undefined, "runtime dependencies are not allowed");
  assert.equal(
    packageJson.devDependencies,
    undefined,
    "development dependencies are not allowed",
  );
});
