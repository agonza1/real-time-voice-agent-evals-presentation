import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const repositoryRoot = new URL("../", import.meta.url);
const readRepositoryFile = (path) => readFile(new URL(path, repositoryRoot), "utf8");

const localAssets = [
  "assets/favicon.svg",
  "styles/engineering.css",
  "styles/story.css",
  "styles/voice-options.css",
  "styles/projects.css",
  "assets/projects/ava-meeting.png",
  "assets/projects/surgical-dashboard.jpg",
  "assets/projects/ceta-screens.png",
  "assets/projects/livekit-call-flow.webp",
  "scripts/engineering-model.js",
  "scripts/engineering-ui.js",
  "styles/base.css",
  "styles/slides-a.css",
  "styles/slides-b.css",
  "styles/vcon-enrichment.css",
  "styles/modes.css",
  "slides/part-1.js",
  "slides/part-2.js",
  "slides/vcon-enrichment.js",
  "slides/part-3.js",
  "slides/dual-voice-options.js",
  "scripts/render-slides.js",
  "scripts/app.js",
];

 test("the project stays dependency-free and uses the Node test runner", async () => {
  const packageJson = JSON.parse(await readRepositoryFile("package.json"));
  assert.equal(packageJson.scripts?.test, "node --test");
  assert.equal(packageJson.private, true);
  for (const key of ["dependencies", "devDependencies", "optionalDependencies", "peerDependencies"]) {
    assert.equal(packageJson[key], undefined, `package.json must not define ${key}`);
  }
});

 test("the README documents the canonical site and local server", async () => {
  const readme = await readRepositoryFile("README.md");
  assert.match(readme, /\*\*https:\/\/agonza1\.github\.io\/real-time-voice-agent-evals-presentation\/\*\*/);
  assert.match(readme, /```bash\r?\npython3 -m http\.server 8080\r?\n```/);
  assert.match(readme, /No framework, build tool, package install, or external font dependency/);
});

 test("the Pages workflow validates before deployment", async () => {
  const workflow = await readRepositoryFile(".github/workflows/pages.yml");
  assert.match(workflow, /npm test/);
  assert.match(workflow, /pages: write/);
  assert.match(workflow, /id-token: write/);
  assert.match(workflow, /actions\/configure-pages@v5/);
  assert.match(workflow, /actions\/upload-pages-artifact@v3/);
  assert.match(workflow, /actions\/deploy-pages@v4/);
});

 test("the HTML shell loads only local presentation assets", async () => {
  const html = await readRepositoryFile("index.html");
  assert.match(html, /^<!doctype html>/i);
  assert.match(html, /<title>Evaluating Real-Time Voice Agents Beyond AI Models<\/title>/);
  assert.match(html, /<main id="deck"><\/main>/);
  assert.match(html, /id="presentButton"/);
  assert.match(html, /id="helpDialog"/);
  assert.match(html, /styles\/vcon-enrichment\.css/);
  assert.match(html, /slides\/vcon-enrichment\.js/);
  assert.match(html, /id="totalSlides">17<\/span>/);
  assert.match(html, /id="presentTotal">17<\/span>/);
  assert.match(html, /scripts\/render-slides\.js/);
  assert.match(html, /scripts\/app\.js/);
  assert.doesNotMatch(html, /<script[^>]+src=["']https?:\/\//i);
  assert.doesNotMatch(html, /<link[^>]+rel=["']stylesheet["'][^>]+href=["']https?:\/\//i);

  for (const path of localAssets) {
    await access(new URL(path, repositoryRoot));
  }
});

 test("the slide data defines 17 main slides and two appendices", async () => {
  const parts = await Promise.all([
    readRepositoryFile("slides/part-1.js"),
    readRepositoryFile("slides/part-2.js"),
    readRepositoryFile("slides/vcon-enrichment.js"),
    readRepositoryFile("slides/part-3.js"),
  ]);
  const ids = parts.flatMap((content) => [...content.matchAll(/\bid:\s*"([^"]+)"/g)].map((match) => match[1]));
  assert.equal(ids.length, 19);
  assert.equal(new Set(ids).size, 19);
  for (const required of ["intro", "story", "problem", "system", "dual-voice-architecture", "dual-voice", "layers", "timeline", "vcon", "vcon-enrichment", "workbench", "contract", "demo", "comparison", "boundary", "standards", "close"]) {
    assert.ok(ids.includes(required), `missing required slide: ${required}`);
  }
  const combined = parts.join("\n");
  assert.match(combined, /ConversationAgentEvals/);
  assert.match(combined, /portable evidence envelope/);
  assert.match(combined, /SCRIPTED FIXTURE · NOT LIVE SIP\/PSTN OR PRODUCTION MEDIA PROOF/);
  assert.match(combined, /EVALUATION TOOL TODAY/);
  assert.match(combined, /PLANNED IN THE TOOL/);
  assert.match(combined, /IETF vCon Core/);
  assert.match(combined, /Judging LLM-as-a-Judge/);
  assert.match(combined, /draft-ietf-vcon-vcon-core-04/i);
  assert.match(combined, /cae-execution-transcript-v1/);
  assert.match(combined, /cae-execution-evidence-v1/);
  assert.match(combined, /portable recording is a <code>dialog<\/code> item/i);
  assert.match(combined, /current tool execution export is unsigned/i);
});

 test("the vCon enrichment is concise pseudo JSON with an accessible magnifier", async () => {
  const enrichment = await readRepositoryFile("slides/vcon-enrichment.js");
  assert.doesNotThrow(() => new Function("window", enrichment)({}));
  assert.match(enrichment, /HIGH-LEVEL PSEUDO JSON · CURRENT TOOL SHAPE/);
  assert.match(enrichment, /class="vcon-json-code"/);
  assert.match(enrichment, /data-json-explorer/);
  assert.match(enrichment, /class="json-zoom-square"/);
  assert.match(enrichment, /… envelope fields omitted …/);
  assert.match(enrichment, /class="json-ellipsis"/);
  assert.doesNotMatch(enrichment, /"updated_at"/);
  assert.doesNotMatch(enrichment, /tts_source_text_with_peer_asr_receipts/);
  for (const key of ["core", "dialog", "transcript", "evaluation"]) {
    assert.match(enrichment, new RegExp(`data-json-focus-button="${key}"`));
    assert.match(enrichment, new RegExp(`data-json-zoom-view="${key}"`));
  }
  assert.match(enrichment, /<span class="json-key">"vcon"<\/span>/);
  assert.match(enrichment, /<span class="json-key">"dialog"<\/span>/);
  assert.match(enrichment, /<span class="json-key">"analysis"<\/span>/);
  assert.match(enrichment, /base64url SHA-512/);
  assert.match(enrichment, /<span class="json-key">"status"<\/span><span class="json-punctuation">:<\/span> <span class="json-string">"portable"<\/span>/);
});

 test("the rendered route introduces the workbench before evidence and ends before the appendix", async () => {
  const scope = {};
  for (const file of ["dual-voice-options", "part-1", "part-2", "part-3", "vcon-enrichment"]) {
    new Function("window", await readRepositoryFile(`slides/${file}.js`))(scope);
  }
  const renderer = await readRepositoryFile("scripts/render-slides.js");
  const deck = { innerHTML: "" };
  const document = { getElementById: () => deck, dispatchEvent: () => {} };
  new Function("window", "document", "location", "CustomEvent", renderer)(scope, document, { search: "" }, class {});
  const route = scope.VOICE_EVALS_SLIDES;
  assert.deepEqual(route.map((slide) => slide.id), ["intro", "story", "projects", "problem", "system", "dual-voice-architecture", "dual-voice", "layers", "timeline", "workbench", "contract", "vcon", "demo", "outcomes", "comparison", "boundary", "close", "vcon-enrichment", "standards"]);
  assert.equal(route.filter((slide) => !slide.appendix).length, 17);
  assert.deepEqual(route.filter((slide) => slide.appendix).map((slide) => slide.id), ["vcon-enrichment", "standards"]);
  assert.match(deck.innerHTML, /aria-label="Slide 17 of 17"/);
  assert.match(deck.innerHTML, /aria-label="Appendix A1 of 2"/);
  const elementIds = [...deck.innerHTML.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]);
  assert.equal(new Set(elementIds).size, elementIds.length, "diagrams must not duplicate heading or SVG marker IDs");
});

 test("presentation controls, the fixture, and vCon magnifier are wired accessibly", async () => {
  const app = await readRepositoryFile("scripts/app.js");
  assert.match(app, /new URLSearchParams\(location\.search\)\.get\("present"\) === "1"/);
  assert.match(app, /event\.key === "\?"/);
  assert.match(app, /event\.metaKey \|\| event\.ctrlKey \|\| event\.altKey/);
  assert.match(app, /spaceConsumer/);
  assert.match(app, /slide\.focus\(\{ preventScroll: true \}\)/);
  const model = await readRepositoryFile("scripts/engineering-model.js");
  assert.match(model, /VERIFIED SUCCESS/);
  assert.match(model, /SAFE FAILURE/);
  assert.match(model, /FALSE SUCCESS/);
  assert.match(app, /querySelector\("\[data-json-explorer\]"\)/);
  assert.match(app, /dataset\.jsonFocusButton/);
  assert.match(app, /dataset\.jsonZoomView/);
  assert.match(app, /addEventListener\("pointerenter"/);
  assert.match(app, /addEventListener\("focus"/);
  assert.match(app, /addEventListener\("click"/);
  assert.match(app, /setAttribute\("aria-hidden"/);
  assert.match(app, /setAttribute\("aria-pressed"/);
});


 test("refinements keep conference identity separate from the product roadmap", async () => {
  const p2 = await readRepositoryFile("slides/part-2.js");
  const p3 = await readRepositoryFile("slides/part-3.js");
  assert.match(p2, /Run → Evaluate → Compare/);
  assert.doesNotMatch(p2 + p3, /what VON extends|VON ROADMAP|VON \/ NEXT/);
  assert.match(p2, /Runtime output gate enabled/);
  assert.match(p2, /id="runtimeGate" type="checkbox" checked/);
  assert.match(p3, /SYNTHETIC COHORTS/);
});

 test("the personal story follows the title and connects runtime controls to evaluation", async () => {
  const scope = {};
  new Function("window", await readRepositoryFile("slides/dual-voice-options.js"))(scope);
  new Function("window", await readRepositoryFile("slides/part-1.js"))(scope);
  const slides = scope.VOICE_EVALS_SLIDES_PART_1;
  assert.deepEqual(slides.slice(0, 8).map((slide) => slide.id), ["intro", "story", "projects", "problem", "system", "dual-voice-architecture", "dual-voice", "layers"]);
  const story = slides[1].html;
  assert.match(story, /2017 · ECHO SHOW/);
  assert.match(story, /exact phrases/);
  assert.match(story, /OPEN-ENDED VOICE · WEBRTC/);
  assert.match(story, /RUNTIME CONTROL/);
  assert.match(story, /Test that they hold as the system changes/);
  assert.match(story, /Conversation Agent Evaluation \(CAE\) tool/);
  assert.match(slides[0].html, /href="#story">Start the presentation/);
  assert.match(await readRepositoryFile("index.html"), /href="#story">Story/);
  const notes = await readRepositoryFile("docs/speaker-notes.md");
  assert.doesNotMatch(story.replace(/(?:src|href)="[^"]*"/g, ""), /cluecon/i);
  assert.doesNotMatch(notes, /cluecon/i);
});

 test("the closing concerns production readiness rather than demo completion", async () => {
  const scope = {};
  new Function("window", await readRepositoryFile("slides/part-3.js"))(scope);
  const close = scope.VOICE_EVALS_SLIDES_PART_3.at(-1);
  assert.equal(close.id, "close");
  assert.doesNotMatch(close.html, /\bdemo\b/i);
  assert.match(close.html, /Production readiness is <span>a systems property/);
  assert.match(close.html, /Runtime controls enforce policy/);
  assert.match(close.html, /re-test every change/);
  assert.match(close.html, /vCon/);
  assert.match(close.html, /ConversationAgentEvals/);
});
