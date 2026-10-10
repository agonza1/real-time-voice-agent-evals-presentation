import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
const read = p => readFile(new URL('../' + p, import.meta.url), 'utf8');
const load = async p => { const scope = {}; new Function('window', await read('slides/dual-voice-options.js'))(scope); new Function('window', await read(p))(scope); return Object.values(scope).find(Array.isArray); };

test('slide 2 reuses the pinned ClueCon Echo Show photograph', async () => {
  const slides = await load('slides/part-1.js');
  const story = slides[1];
  assert.equal(story.id, 'story');
  assert.match(story.html, /<figure class="story-photo">/);
  assert.match(story.html, /src="https:\/\/raw\.githubusercontent\.com\/agonza1\/agentic-contact-center\/36f9cf3fb92843af516f8a8e09ea4cf0f4c52fc9\/assets\/cluecon\/alberto-echo-show-prototype\.jpg"/);
  assert.match(story.html, /alt="Alberto using his Echo Show voice assistant prototype"/);
  assert.match(await read('styles/story.css'), /object-fit: contain/);
});

test('shorter copy retains evidence limitations and runtime controls', async () => {
  const part1 = await read('slides/part-1.js');
  const part2 = await read('slides/part-2.js');
  const part3 = await read('slides/part-3.js');
  assert.match(part1, /observer and clock mapping/);
  assert.match(part1, /Receiver audio ≠ speaker playout/);
  assert.match(part2, /SCRIPTED FIXTURE · NOT LIVE SIP\/PSTN OR PRODUCTION MEDIA PROOF/);
  assert.match(part2, /id="runtimeGate" type="checkbox" checked/);
  assert.match(part3, /Synthetic counts—not production results or guarantees/);
  assert.match(part3, /PLANNED IN THE TOOL/);
});

// GitHub-hosted CI verifies the real photo; offline local tests remain usable.
test('the pinned photo serves the original ClueCon image bytes', { skip: !process.env.CI }, async () => {
  const { createHash } = await import('node:crypto');
  const url = 'https://raw.githubusercontent.com/agonza1/agentic-contact-center/36f9cf3fb92843af516f8a8e09ea4cf0f4c52fc9/assets/cluecon/alberto-echo-show-prototype.jpg';
  const response = await fetch(url, { signal: AbortSignal.timeout(30000) });
  assert.equal(response.status, 200);
  assert.match(response.headers.get('content-type') || '', /^image\/jpeg/);
  const image = Buffer.from(await response.arrayBuffer());
  const hash = createHash('sha1').update(`blob ${image.length}\0`).update(image).digest('hex');
  assert.equal(hash, '27a05bb3883bc89a6e7347f5d92af16435f8b549');
});
