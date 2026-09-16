const assert = require("node:assert/strict");
const { readFileSync } = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const repositoryRoot = path.resolve(__dirname, "..");

function readRepositoryFile(relativePath) {
  return readFileSync(path.join(repositoryRoot, relativePath), "utf8").replaceAll(
    "\r\n",
    "\n",
  );
}

test("README documents the hosted presentation and local server", () => {
  const readme = readRepositoryFile("README.md");

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
    "README must document the local presentation URL",
  );
});

test("repository documents and preserves its dependency-free contract", () => {
  const readme = readRepositoryFile("README.md");
  const packageJson = JSON.parse(readRepositoryFile("package.json"));

  assert.match(
    readme,
    /No framework, build tool, package install, external font, or other external runtime dependency/,
    "README must state the presentation's no-build/no-external-dependency contract",
  );
  assert.match(
    readme,
    /clean checkout without\n`npm install`, a build step, or access to external services/,
    "README must state how the smoke test runs on a clean checkout",
  );
  assert.deepEqual(packageJson.scripts, {
    test: "node --test test/smoke.test.js",
  });

  for (const field of [
    "dependencies",
    "devDependencies",
    "optionalDependencies",
    "peerDependencies",
    "bundledDependencies",
    "bundleDependencies",
  ]) {
    assert.equal(field in packageJson, false, `${field} must remain absent`);
  }
});
