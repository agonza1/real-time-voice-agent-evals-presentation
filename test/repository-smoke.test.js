const assert = require("node:assert/strict");
const { readFile } = require("node:fs/promises");
const { resolve } = require("node:path");
const test = require("node:test");

const repositoryRoot = resolve(__dirname, "..");
const expectedPagesUrl =
  "https://agonza1.github.io/real-time-voice-agent-evals-presentation/";
const expectedServeCommand = "python3 -m http.server 8080";

async function readJson(path) {
  return JSON.parse(await readRepositoryFile(path));
}

async function readRepositoryFile(path) {
  return readFile(resolve(repositoryRoot, path), "utf8");
}

test("package exposes a dependency-free standard test command", async () => {
  const packageJson = await readJson("package.json");

  assert.equal(packageJson.scripts?.test, "node --test");
  for (const dependencyField of [
    "dependencies",
    "devDependencies",
    "optionalDependencies",
    "peerDependencies",
  ]) {
    assert.equal(
      packageJson[dependencyField],
      undefined,
      `package.json must not declare ${dependencyField}`,
    );
  }
});

test("README documents the canonical GitHub Pages URL", async () => {
  const readme = await readRepositoryFile("README.md");
  const pagesUrl = new URL(expectedPagesUrl);

  assert.equal(pagesUrl.protocol, "https:");
  assert.equal(pagesUrl.hostname, "agonza1.github.io");
  assert.equal(
    pagesUrl.pathname,
    "/real-time-voice-agent-evals-presentation/",
  );
  assert.ok(readme.includes(`**${expectedPagesUrl}**`));
});

test("README documents local serving and the no-install contract", async () => {
  const readme = await readRepositoryFile("README.md");

  assert.ok(readme.includes(`\`\`\`bash\n${expectedServeCommand}\n\`\`\``));
  assert.match(readme, /Then open `http:\/\/localhost:8080`\./);
  assert.match(readme, /The presentation has no build step or external runtime dependencies\./);
  assert.match(
    readme,
    /No framework, build tool, package install, or external font dependency/,
  );
  assert.match(readme, /No package installation is required/);
  assert.ok(readme.includes("```bash\nnpm test\n```"));
});
