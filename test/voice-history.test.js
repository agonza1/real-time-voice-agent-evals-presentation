import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const read = (path) => readFile(new URL('../' + path, import.meta.url), 'utf8');
const getStory = async () => {
  const scope = {};
  for (const file of ['dual-voice-options', 'part-1']) {
    new Function('window', await read(`slides/${file}.js`))(scope);
  }
  return scope.VOICE_EVALS_SLIDES_PART_1[1];
};

const sources = [
  'https://bitsavers.trailing-edge.com/pdf/ibm/datacomm/GC30-2007-1_IBM_System360_Introduction_to_Teleprocessing_196807.pdf#page=11',
  'https://www.apple.com/newsroom/2011/10/04Apple-Launches-iPhone-4S-iOS-5-iCloud/',
  'https://www.amazon.science/blog/alexa-at-five-looking-back-looking-forward',
  'https://research.google/blog/google-duplex-an-ai-system-for-accomplishing-real-world-tasks-over-the-phone/',
  'https://openai.com/index/gpt-4-research/',
  'https://openai.com/index/introducing-the-realtime-api/',
];

test('slide 2 frames the personal story with five chronological industry milestones', async () => {
  const story = await getStory();
  assert.equal(story.id, 'story');
  assert.match(story.html, /The technology changed\.<br><span>So did the question\.<\/span>/);
  const timeline = story.html.match(/<ol class="story-timeline"[^>]*>([\s\S]*?)<\/ol>/)?.[1];
  assert.ok(timeline, 'history must be an ordered list');
  assert.deepEqual([...timeline.matchAll(/<p class="story-era">([^<]+)<\/p>/g)].map((m) => m[1]), ['1960s', '2011 · 2014', '2018', '2023', '2024']);
  assert.deepEqual([...timeline.matchAll(/<h3>([^<]+)<\/h3>/g)].map((m) => m[1]), ['Early IVR', 'Voice assistants', 'Google Duplex', 'LLM-based voice', 'Real-time speech']);
  assert.match(timeline, /Siri on iPhone/);
  assert.match(timeline, /Bounded tasks \+ human fallback/);
  assert.match(timeline, /STT → LLM → TTS/);
  assert.match(timeline, /Realtime API beta/);
  assert.match(story.html, /My prototype needed the exact phrases I anticipated/);
  assert.match(story.html, /OPEN-ENDED VOICE · WEBRTC/);
  assert.match(story.html, /Permissions and state still belonged to the application/);
  assert.match(story.html, /Build the controls/);
  assert.match(story.html, /Test that they hold as the system changes/);
});

test('history claims have primary sources in both the slide and speaker notes', async () => {
  const story = await getStory();
  const notes = await read('docs/speaker-notes.md');
  for (const url of sources) {
    assert.ok(story.html.includes(`href="${url}" target="_blank" rel="noopener noreferrer"`), `missing safe source link: ${url}`);
    assert.ok(notes.includes(url), `missing speaker source: ${url}`);
  }
  assert.match(notes, /not an unsupported exact first-invention date/);
  assert.match(notes, /exact-phrases limitation describes Alberto’s prototype/);
  assert.match(notes, /not a claim about a deployment on the launch date/);
  assert.match(notes, /public beta/);
});

test('history stays concise and rehearsal cues preserve the existing talk timing', async () => {
  const { html } = await getStory();
  const visibleText = html.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
  assert.ok(visibleText.split(' ').length <= 190, 'keep supporting history in the notes, not on the slide');
  const rehearsal = await read('docs/rehearsal-notes.md');
  const storyCue = rehearsal.split('\n').find((line) => line.startsWith('| **2 · Story**'));
  assert.ok(storyCue);
  assert.match(storyCue, /1:15 \| 2:00/);
  assert.match(storyCue, /five milestones/);
  assert.doesNotMatch(storyCue, /Point to the three questions/);
});

test('history assets share a cache version and support narrow and print layouts', async () => {
  const html = await read('index.html');
  assert.match(html, /styles\/story\.css\?v=voice-history/);
  assert.match(html, /slides\/part-1\.js\?v=voice-history/);
  const css = await read('styles/story.css');
  assert.match(css, /repeat\(5, minmax\(0, 1fr\)\)/);
  assert.match(css, /@media \(max-width: 820px\)/);
  assert.match(css, /@media \(max-width: 520px\)/);
  assert.match(css, /@media print/);
  assert.match(css, /object-fit: contain/);
});
