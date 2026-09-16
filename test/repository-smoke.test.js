const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const root = path.resolve(__dirname, "..");
const readme = fs.readFileSync(path.join(root, "README.md"), "utf8");
const packageJson = JSON.parse(
  fs.readFileSync(path.join(root, "package.json"), "utf8"),
);

test("README documents the canonical GitHub Pages URL", () => {
  assert.match(
    readme,
    /^\*\*https:\/\/agonza1\.github\.io\/real-time-voice-agent-evals-presentation\/\*\*$/m,
  );
});

test("README documents the local static server command", () => {
  assert.match(readme, /^python3 -m http\.server 8080$/m);
  assert.match(readme, /Then open `http:\/\/localhost:8080`\./);
});

test("repository contract requires no build or external dependencies", () => {
  assert.match(
    readme,
    /The presentation is served directly from repository files: it has no build step and no external runtime dependencies\./,
  );
  assert.equal(Object.hasOwn(packageJson, "dependencies"), false);
  assert.equal(Object.hasOwn(packageJson, "devDependencies"), false);
  assert.equal(Object.hasOwn(packageJson.scripts, "build"), false);
});

test("standard test command uses only the Node.js built-in test runner", () => {
  assert.equal(
    packageJson.scripts.test,
    "node --test test/repository-smoke.test.js",
  );
});
