const assert = require("node:assert/strict");
const { readFileSync } = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const repositoryRoot = path.resolve(__dirname, "..");
const readText = (relativePath) =>
  readFileSync(path.join(repositoryRoot, relativePath), "utf8").replaceAll(
    "\r\n",
    "\n",
  );

test("README documents the canonical hosted and local URLs", () => {
  const readme = readText("README.md");

  assert.match(
    readme,
    /\*\*https:\/\/agonza1\.github\.io\/real-time-voice-agent-evals-presentation\/\*\*/,
    "README must document the canonical GitHub Pages URL",
  );
  assert.match(
    readme,
    /```bash\npython3 -m http\.server 8080\n```/,
    "README must document the local static-server command",
  );
  assert.match(
    readme,
    /Then open `http:\/\/localhost:8080`\./,
    "README must document the URL served by the local command",
  );
});

test("repository keeps its no-build and no-install contract", () => {
  const readme = readText("README.md");
  const packageJson = JSON.parse(readText("package.json"));

  assert.match(
    readme,
    /No framework, build tool, package install, or external font dependency/,
    "README must state the dependency-free presentation contract",
  );
  assert.deepEqual(packageJson.scripts, {
    test: "node --test test/smoke.test.js",
  });
  assert.equal("dependencies" in packageJson, false);
  assert.equal("devDependencies" in packageJson, false);
});
