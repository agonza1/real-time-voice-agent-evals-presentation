import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const source = new URL("../slides/dual-voice-options.js", import.meta.url);

async function loadOptions() {
  const scope = {};
  new Function("window", await readFile(source, "utf8"))(scope);
  return scope.VOICE_EVALS_DUAL_VOICE_OPTIONS;
}

test("architecture names alternatives without replacing the GPT-Live example", async () => {
  const { architecture, sequence } = await loadOptions();
  assert.match(architecture.html, />GPT-Live<\/text>/);
  const row = architecture.html.match(/<div class="voice-model-options"[^>]*>([\s\S]*?)<\/div>/)?.[1];
  assert.ok(row, "architecture includes a compact alternatives row");
  for (const name of ["Gemini Live", "Amazon Nova Sonic", "Ultravox + TTS"]) {
    assert.ok(row.includes(name), `missing speech option: ${name}`);
  }
  assert.equal([...row.matchAll(/<a\b/g)].length, 3);
  assert.doesNotMatch(sequence.html, /voice-model-options/);
  assert.match(sequence.html, /Reject stale results/);
});

test("alternatives retain source links, TTS qualification, and the duplex caveat", async () => {
  const { architecture } = await loadOptions();
  for (const url of [
    "https://ai.google.dev/gemini-api/docs/live-api",
    "https://aws.amazon.com/nova/models/",
    "https://docs.ultravox.ai/voices/bring-your-own",
  ]) {
    assert.ok(architecture.html.includes(`href="${url}" target="_blank" rel="noopener noreferrer"`));
  }
  assert.match(architecture.html, /Ultravox understands audio directly and outputs text; TTS generates the spoken response/);
  assert.match(architecture.html, /Illustrative architecture · full duplex depends on the model/);
  assert.match(architecture.html, /https:\/\/openai\.com\/index\/continuous-voice-interaction-with-gpt-live\//);
});
