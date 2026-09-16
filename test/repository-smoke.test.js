import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const readRepositoryFile = (path) =>
  readFile(new URL(path, new URL('../', import.meta.url)), 'utf8');

const pagesUrl =
  'https://agonza1.github.io/real-time-voice-agent-evals-presentation/';
const localServeCommand = 'python3 -m http.server 8080';
const localUrl = 'http://localhost:8080';

test('repository metadata and documentation describe the deployment URL', async () => {
  const [readme, packageSource] = await Promise.all([
    readRepositoryFile('README.md'),
    readRepositoryFile('package.json'),
  ]);
  const packageMetadata = JSON.parse(packageSource);

  assert.equal(packageMetadata.homepage, pagesUrl);
  assert.ok(readme.includes(`**${pagesUrl}**`));
});

test('documentation provides the local static-server command', async () => {
  const readme = await readRepositoryFile('README.md');

  assert.ok(readme.includes(`\n${localServeCommand}\n`));
  assert.ok(readme.includes(`Then open \`${localUrl}\`.`));
});

test('smoke test preserves the no-build and no-external-dependency contract', async () => {
  const [readme, packageSource] = await Promise.all([
    readRepositoryFile('README.md'),
    readRepositoryFile('package.json'),
  ]);
  const packageMetadata = JSON.parse(packageSource);
  const dependencySections = [
    'dependencies',
    'devDependencies',
    'optionalDependencies',
    'peerDependencies',
  ];
  const lifecycleScripts = [
    'build',
    'preinstall',
    'install',
    'postinstall',
    'prepare',
  ];

  assert.match(
    readme,
    /No framework, build tool, package install, or external font dependency/,
  );
  assert.equal(packageMetadata.scripts?.test, 'node --test');
  assert.deepEqual(
    dependencySections.filter((section) => packageMetadata[section] != null),
    [],
    'package.json must not declare dependency sections',
  );
  assert.deepEqual(
    lifecycleScripts.filter((script) => packageMetadata.scripts?.[script] != null),
    [],
    'package.json must not declare build or install lifecycle scripts',
  );
});
