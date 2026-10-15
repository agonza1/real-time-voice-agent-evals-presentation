import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const source = new URL("../slides/dual-voice-options.js", import.meta.url);

async function loadOptions() {
  const scope = {};
  new Function("window", await readFile(source, "utf8"))(scope);
  return scope.VOICE_EVALS_DUAL_VOICE_OPTIONS;
}

test("architecture uses a generic speech model and lists GPT-Live with the other options", async () => {
  const { architecture, sequence } = await loadOptions();
  const diagram = architecture.html.match(/<svg\b[\s\S]*?<\/svg>/)?.[0];
  assert.ok(diagram, "architecture includes the speech model diagram");
  assert.match(diagram, />Speech-to-speech<\/text>/);
  assert.match(diagram, />model<\/text>/);
  assert.doesNotMatch(diagram, /GPT-Live/);
  assert.match(diagram, /With full-duplex support, the model listens while speaking/);
  const row = architecture.html.match(/<div class="voice-model-options"[^>]*>([\s\S]*?)<\/div>/)?.[1];
  assert.ok(row, "architecture includes a compact speech-options row");
  for (const name of ["GPT-Live", "Gemini Live", "Amazon Nova Sonic", "Ultravox + TTS"]) {
    assert.ok(row.includes(name), `missing speech option: ${name}`);
  }
  assert.equal([...row.matchAll(/<a\b/g)].length, 4);
  assert.match(row, /<span>Speech options<\/span>/);
  assert.doesNotMatch(sequence.html, /voice-model-options/);
  assert.match(sequence.html, /Reject stale results/);
});

test("speech options retain source links, TTS qualification, and the duplex caveat", async () => {
  const { architecture } = await loadOptions();
  for (const url of [
    "https://openai.com/index/continuous-voice-interaction-with-gpt-live/",
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

test("framework copy is vendor-neutral and the updated slide asset bypasses the old cache", async () => {
  const { architecture } = await loadOptions();
  const frameworks = architecture.html.match(/<div class="voice-frameworks"[\s\S]*?<div class="voice-model-options"/)?.[0];
  assert.ok(frameworks);
  assert.match(frameworks, /Speech model <span>\+ async delegation<\/span>/);
  assert.doesNotMatch(frameworks.replace(/<[^>]*>/g, ""), /GPT-Live/);
  assert.match(frameworks, /Example integration: LiveKit GPTLiveModel/);
  assert.match(frameworks, /Example integration: Pipecat OpenAILiveLLMService/);
  const shell = await readFile(new URL("../index.html", import.meta.url), "utf8");
  assert.match(shell, /slides\/dual-voice-options\.js\?v=generic-speech-model/);
});
