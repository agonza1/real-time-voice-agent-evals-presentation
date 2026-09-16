import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const expectedPagesUrl =
  "https://agonza1.github.io/real-time-voice-agent-evals-presentation/";
const expectedLocalCommand = "python3 -m http.server 8080";

let readme;

test.before(async () => {
  readme = await readFile(new URL("../README.md", import.meta.url), "utf8");
});

test("README documents the canonical GitHub Pages URL", () => {
  assert.ok(readme.includes(`**${expectedPagesUrl}**`));
});

test("README documents the local static-server command", () => {
  assert.ok(readme.includes(`\`\`\`bash\n${expectedLocalCommand}\n\`\`\``));
  assert.match(readme, /Then open `http:\/\/localhost:8080`\./);
});

test("repository has a no-build, no-external-dependency contract", () => {
  assert.match(
    readme,
    /No framework, build tool, package install, or external font dependency/,
  );
});

test("test command needs no installed packages", async () => {
  const packageJson = JSON.parse(
    await readFile(new URL("../package.json", import.meta.url), "utf8"),
  );

  assert.equal(packageJson.scripts.test, "node --test");
  assert.equal(packageJson.private, true);
  assert.equal(packageJson.dependencies, undefined);
  assert.equal(packageJson.devDependencies, undefined);
});
