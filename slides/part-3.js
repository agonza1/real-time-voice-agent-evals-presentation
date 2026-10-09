window.VOICE_EVALS_SLIDES_PART_3 = [
  {
    id: "outcomes",
    html: `
      <div class="section-heading">
        <p class="eyebrow">TWO SEPARATE VERDICTS</p>
        <h2 id="outcomes-title">Did the task finish?<br><span>Was the response safe?</span></h2>
        <p>Judge the business state and the agent's response separately.</p>
      </div>
      <div class="outcome-matrix-wrap"><table class="outcome-matrix"><thead><tr><th scope="col">Verified business state</th><th scope="col">Safe response</th><th scope="col">Unsafe response</th></tr></thead><tbody>
        <tr><th scope="row">Task completed</th><td class="matrix-safe"><strong>Verified success</strong><span>Confirmation has supporting evidence.</span></td><td class="matrix-unsafe"><strong>Unsupported confirmation</strong><span>The claim lacked proof at speech time.</span></td></tr>
        <tr><th scope="row">Task not completed</th><td class="matrix-recovery"><strong>Safe failure</strong><span>Truthful explanation and recovery.</span></td><td class="matrix-unsafe"><strong>False success</strong><span>The agent claims an action that did not happen.</span></td></tr>
      </tbody></table></div>
      <p class="takeaway"><strong>State unknown? Keep it unknown until reconciled.</strong></p>
      <p class="micro-note">A truthful expression of uncertainty can be safe even when the task actually committed.</p>
    `
  },
  {
    id: "judge-reliability",
    html: `
      <div class="section-heading">
        <p class="eyebrow">EVALUATE THE EVALUATOR</p>
        <h2 id="judge-reliability-title">Separate facts, judgments, <span>and release decisions.</span></h2>
      </div>
      <svg class="judge-diagram" viewBox="0 0 1280 370" role="group" aria-labelledby="judge-diagram-title judge-diagram-desc">
        <title id="judge-diagram-title">Evidence feeds fact checks and behavior judgment, then a review policy</title>
        <desc id="judge-diagram-desc">Open either component for details. Behavior judgment can use the existing LLM and ASSERT path or a decision model. Both contribute to a proposed verdict under code policy.</desc>
        <defs><marker id="judge-flow-arrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8" fill="#39d2ee"/></marker></defs>
        <g class="judge-connectors"><path d="M250 180 H330 V90 H425"/><path d="M330 180 V270 H425"/><path d="M775 90 H840 V180 H900"/><path class="judge-merge" d="M775 270 H840 V180"/><path d="M1020 180 H1060 V70 H1090"/><path d="M1060 180 H1090"/><path d="M1060 180 V290 H1090"/><path class="judge-prerequisite" d="M600 150 V210"/></g>
        <g class="judge-source"><path d="M116 105 H177 L202 130 V231 H116 Z M177 105 V130 H202"/><path d="M132 153 H147 L154 140 L164 177 L174 153 H187 M132 195 H184 M132 211 H171"/></g>
        <text class="judge-node-title" x="160" y="270" text-anchor="middle">Run evidence</text><text class="judge-node-note" x="160" y="300" text-anchor="middle">Turns · trace · state</text>
        <foreignObject x="425" y="30" width="350" height="120">
          <button xmlns="http://www.w3.org/1999/xhtml" class="judge-component-button" type="button" data-evaluation-dialog="fact-details" aria-controls="fact-details" aria-haspopup="dialog"><span class="judge-component-title">Check facts</span><span class="judge-component-subtitle">Rules + recorded state</span><span class="judge-component-action">View details ↗</span></button>
        </foreignObject>
        <foreignObject x="425" y="210" width="350" height="120">
          <button xmlns="http://www.w3.org/1999/xhtml" class="judge-component-button judge-behavior-button" type="button" data-evaluation-dialog="behavior-details" aria-controls="behavior-details" aria-haspopup="dialog"><span class="judge-component-title">Judge behavior</span><span class="judge-component-subtitle">LLM / ASSERT or decision model</span><span class="judge-component-action">Compare judge paths ↗</span></button>
        </foreignObject>
        <g class="judge-gate"><rect x="907" y="126" width="106" height="108" rx="16"/><path d="M927 180 H951 M951 151 V209 M951 151 H976 M951 180 H976 M951 209 H976"/><path class="policy-pass" d="M976 148 L980 152 L987 144"/><path class="policy-fail" d="M978 176 L986 184 M986 176 L978 184"/><circle class="policy-review" cx="982" cy="209" r="5"/></g>
        <text class="judge-node-title" x="960" y="273" text-anchor="middle">Review policy</text><text class="judge-node-note" x="960" y="302" text-anchor="middle">In code</text>
        <g class="judge-result-pass"><circle cx="1120" cy="70" r="22"/><path d="M1110 70 L1118 78 L1131 62"/><text x="1155" y="79">Pass</text></g><g class="judge-result-fail"><circle cx="1120" cy="180" r="22"/><path d="M1112 172 L1128 188 M1128 172 L1112 188"/><text x="1155" y="189">Fail</text></g><g class="judge-result-review"><circle cx="1120" cy="290" r="22"/><text x="1120" y="299" text-anchor="middle">?</text><text x="1155" y="299">Review</text></g>
      </svg>
      <p class="takeaway"><strong>Hard failure stays failed. Missing proof → review.</strong></p>
      <p class="micro-note">Post-run evaluation · human confirmation before applying a proposed verdict. Open either component for details.</p>
      <dialog id="fact-details" class="judge-dialog" aria-labelledby="fact-details-title">
        <button class="dialog-close" type="button" data-close-evaluation-dialog aria-label="Close fact-check details">×</button>
        <p class="eyebrow">CHECK FACTS · AUTOMATED RECOVERY</p><h2 id="fact-details-title">A timeout can hide a completed action.</h2>
        <div class="judge-example-quote"><svg viewBox="0 0 48 48" aria-hidden="true"><path d="M8 8h32v24H22L12 42V32H8Z"/><path d="M16 16h16M16 23h11"/></svg><span>Caller: “Cancel my subscription.”</span></div>
        <div class="fact-example-wrap"><svg class="fact-example-diagram fact-recovery-diagram" viewBox="0 0 1000 300" role="img" aria-labelledby="fact-example-title fact-example-desc">
          <title id="fact-example-title">Automated recovery after a lost tool acknowledgment</title><desc id="fact-example-desc">The backend commits once at 180 milliseconds. The agent times out at 240 milliseconds, retries the original request at 450, and the backend deduplicates. Readback at 600 milliseconds matches the original request; confirmation is permitted at 750. Code checks the backend effect count, request correlation, and evidence available before speech.</desc>
          <defs><marker id="fact-example-arrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8" fill="#39d2ee"/></marker></defs>
          <text class="recovery-lane-title" x="8" y="18">VOICE RUNTIME</text><text class="recovery-lane-title" x="8" y="177">BACKEND EVIDENCE</text>
          <g class="example-arrows"><path d="M228 90 H263"/><path d="M478 90 H513"/><path d="M728 90 H763"/><path class="recovery-lost-ack" d="M118 196 V144"/><path d="M368 138 V189"/><path d="M618 196 V144"/></g>
          <g class="example-node"><rect x="8" y="38" width="220" height="100" rx="14"/><rect x="258" y="38" width="220" height="100" rx="14"/><rect x="508" y="38" width="220" height="100" rx="14"/><rect x="758" y="38" width="234" height="100" rx="14"/></g>
          <g class="example-icon"><circle cx="45" cy="75" r="16"/><path d="M45 64v12l8 5 M280 82a17 17 0 1 1 24 9 M280 82v-11 M280 82h11 M530 62h23v28h-23Z M534 75l6 6 9-12 M780 61h31v23h-14l-9 9V84h-8Z"/></g>
          <g class="recovery-runtime-label"><text x="140" y="76">Timeout</text><text x="390" y="76">Retry</text><text x="640" y="76">Read back</text><text x="899" y="76">Confirm</text></g>
          <g class="recovery-runtime-note"><text x="118" y="118">240 ms · outcome unknown</text><text x="368" y="118">450 ms · same request</text><text x="618" y="118">600 ms · matched result</text><text x="875" y="118">750 ms · TTS allowed</text></g>
          <g class="recovery-state-node"><rect x="8" y="196" width="220" height="92" rx="14"/><rect x="258" y="196" width="220" height="92" rx="14"/><rect x="508" y="196" width="220" height="92" rx="14"/></g>
          <g class="recovery-state-label"><text x="118" y="230">Committed once</text><text x="368" y="230">Deduplicated</text><text x="618" y="230">Canceled</text></g>
          <g class="recovery-state-note"><text x="118" y="263">180 ms · ACK lost</text><text x="368" y="263">No additional effect</text><text x="618" y="263">Original request verified</text></g>
          <g class="recovery-knowledge"><path d="M791 217h25v37h-25Z M798 234l5 5 9-11"/><text x="834" y="231">Proof reaches</text><text x="834" y="256">the agent</text></g>
        </svg></div>
        <div class="fact-check-cards fact-recovery-checks">
          <section><svg viewBox="0 0 48 48" aria-hidden="true"><ellipse cx="22" cy="10" rx="15" ry="6"/><path d="M7 10v24c0 8 30 8 30 0V10 M7 22c0 8 30 8 30 0 M30 34l5 5 9-12"/></svg><div><span>EFFECT COUNT</span><strong>One recorded commit</strong><code>2 requests · 1 effect ✓</code></div></section>
          <section><svg viewBox="0 0 48 48" aria-hidden="true"><path d="M19 29l10-10 M17 32l-3 3a8 8 0 0 1-11-11l8-8a8 8 0 0 1 11 0 M31 16l3-3a8 8 0 0 1 11 11l-8 8a8 8 0 0 1-11 0"/></svg><div><span>REQUEST CORRELATION</span><strong>Result belongs to this action</strong><code>readback ↔ original request ✓</code></div></section>
          <section><svg viewBox="0 0 48 48" aria-hidden="true"><circle cx="24" cy="24" r="18"/><path d="M24 12v13h10 M29 36l5 5 10-13"/></svg><div><span>CONFIRMATION TIMING</span><strong>Proof before TTS</strong><code>600 ms &lt; 750 ms ✓</code></div></section>
        </div>
        <div class="judge-visual-verdict"><svg viewBox="0 0 32 32" aria-hidden="true"><circle cx="16" cy="16" r="13"/><path d="m9 16 5 5 9-11"/></svg><strong>Check effects and evidence timing—not just tool status.</strong></div>
        <p class="judge-detail-note">Tested teaching fixture · backend deduplication and trustworthy event ordering assumed · example assertions, not universal CAE checks. <a href="https://github.com/agonza1/real-time-voice-agent-evals-presentation/blob/feat/concise-copy-echo-photo/scripts/engineering-model.js" target="_blank" rel="noopener noreferrer">Fixture ↗</a></p>
      </dialog>
      <dialog id="behavior-details" class="judge-dialog" aria-labelledby="behavior-details-title">
        <button class="dialog-close" type="button" data-close-evaluation-dialog aria-label="Close behavior-judge details">×</button>
        <p class="eyebrow">JUDGE BEHAVIOR · TWO OPTIONAL PATHS</p><h2 id="behavior-details-title">Same evidence. Different output contracts.</h2>
        <div class="judge-shared-input"><svg viewBox="0 0 48 48" aria-hidden="true"><path d="M10 5h20l9 9v29H10Z M30 5v10h9 M17 23h15M17 30h15M17 37h9"/></svg><div><strong>Saved turns + rule + trace / state</strong><span>Rule: did the agent claim completion without supporting evidence?</span></div></div>
        <div class="judge-options judge-visual-options">
          <section><span class="judge-option-status">EXISTING CAE PATH</span><h3>LLM / ASSERT</h3>
            <div class="judge-path-step"><svg viewBox="0 0 56 56" aria-hidden="true"><path d="M27 9c-10-8-22 4-16 13-10 7-5 22 5 21 0 8 11 9 11 1V9Z M29 9c10-8 22 4 16 13 10 7 5 22-5 21 0 8-11 9-11 1V9Z M17 18l10 5M15 34l12-5M39 18l-10 5M41 34l-12-5"/></svg><div><strong>Assess against rubric</strong><span>Behavior + conversational quality</span></div></div>
            <div class="judge-path-arrow" aria-hidden="true">↓</div>
            <div class="judge-assessment"><svg viewBox="0 0 48 48" aria-hidden="true"><path d="M8 6h32v36H8Z M15 16h18M15 24h18M15 32h11"/></svg><div><strong>Scores + findings</strong><span>Generated assessment</span></div></div>
            <div class="judge-path-arrow" aria-hidden="true">↓</div>
            <div class="judge-validation"><svg viewBox="0 0 48 48" aria-hidden="true"><path d="M24 5 40 12v13c0 10-16 18-16 18S8 35 8 25V12Z M16 24l6 6 11-13"/></svg><div><strong>Validate score contract</strong><span>Schema ≠ factual correctness</span></div></div>
            <p class="judge-provider-links"><a href="https://github.com/responsibleai/ASSERT" target="_blank" rel="noopener noreferrer">ASSERT ↗</a></p>
          </section>
          <section><span class="judge-option-status">OPENAI DECISIONS · DRAFT CAE PR</span><h3>Decision model</h3>
            <div class="judge-path-step"><svg viewBox="0 0 56 56" aria-hidden="true"><path d="M8 28h14M22 13v30M22 13h18M22 28h18M22 43h18"/><circle cx="44" cy="13" r="4"/><circle cx="44" cy="28" r="4"/><circle cx="44" cy="43" r="4"/></svg><div><strong>One named question per rule</strong><span>Bounded semantic choice</span></div></div>
            <div class="judge-path-arrow" aria-hidden="true">↓</div>
            <div class="judge-choice-set"><span class="choice-fail">Violation</span><span class="choice-pass">No violation</span><span class="choice-review">Insufficient evidence</span></div>
            <div class="judge-path-arrow" aria-hidden="true">↓</div>
            <div class="judge-validation"><svg viewBox="0 0 48 48" aria-hidden="true"><path d="M24 5 40 12v13c0 10-16 18-16 18S8 35 8 25V12Z M16 24l6 6 11-13"/></svg><div><strong>Validate + apply thresholds</strong><span>Schema · distributions · confidence · P(choice)</span></div></div>
            <p class="judge-provider-links"><a href="https://github.com/agonza1/ConversationAgentEvals/pull/157" target="_blank" rel="noopener noreferrer">Draft PR ↗</a> · <a href="https://developers.openai.com/api/docs/guides/decisions" target="_blank" rel="noopener noreferrer">API ↗</a> · <a href="https://docs.typesafe.ai/introduction" target="_blank" rel="noopener noreferrer">Jev: alternative candidate ↗</a></p>
          </section>
        </div>
        <div class="judge-review-strip"><svg viewBox="0 0 48 48" aria-hidden="true"><circle cx="24" cy="13" r="8"/><path d="M9 40v-9a15 15 0 0 1 30 0v9 M18 32l5 5 9-11"/></svg><strong>Proposed verdict → human review</strong><span>Preserve hard failures · uncertainty → review</span></div>
        <p class="judge-detail-note">OpenAI draft: refusal / low certainty → insufficient evidence. Calibrate on human-labeled calls. A semantic judge does not prove execution.</p>
      </dialog>
    `
  },
  {
    id: "comparison",
    html: `
<div class="section-heading">
        <p class="eyebrow">REGRESSION → RELEASE DECISION</p>
        <h2 id="comparison-title">Faster is not enough<br><span>to approve the release.</span></h2>
        <p>Proposed change: answer sooner after a pause. Test the same calls on both versions.</p>
      </div>
      <p class="release-example-label">ILLUSTRATIVE NUMBERS · 100 TEST CALLS FOR EACH VERSION</p>
      <div class="comparison-wrap"><table class="comparison-table eng-release-table"><thead><tr><th scope="col">Measure</th><th scope="col">Current version<small>Waits longer before answering</small></th><th scope="col">Proposed change<small>Shorter wait before answering</small></th><th scope="col">Requirement to approve<small>Example thresholds</small></th></tr></thead><tbody>
        <tr><th scope="row">Response time · 95th percentile*</th><td>1,100 ms</td><td class="release-better">780 ms</td><td>≤ 1,200 ms</td></tr>
        <tr><th scope="row">Replies before the caller finishes</th><td>2 / 100</td><td class="release-regression">12 / 100</td><td>At most 3 / 100</td></tr>
        <tr><th scope="row">Cancels at the wrong time</th><td>0 / 100</td><td class="release-regression">4 / 100</td><td>0 in these test calls</td></tr>
      </tbody></table></div>
      <div id="releaseDecision" class="eng-release-decision" aria-live="polite"></div>
      <p class="micro-note">*End-of-turn decision → received audio. Early cutoffs can make this look faster. Synthetic counts—not production results or guarantees.</p>
    `
  },
  {
    id: "start",
    html: `
      <div class="section-heading">
        <p class="eyebrow">YOUR FIRST EVALUATION</p>
        <h2 id="start-title">Start with one <span>important workflow.</span></h2>
      </div>
      <ol class="start-steps">
        <li><span>01</span><svg class="start-icon" viewBox="0 0 96 96" aria-hidden="true"><circle cx="48" cy="48" r="32"/><circle cx="48" cy="48" r="18"/><circle cx="48" cy="48" r="4" class="start-icon-fill"/><path d="M48 8v12M48 76v12M8 48h12M76 48h12"/></svg><h3>Choose a workflow</h3><p>One costly failure.</p></li>
        <li><span>02</span><svg class="start-icon" viewBox="0 0 96 96" aria-hidden="true"><rect x="22" y="18" width="52" height="66" rx="7"/><rect x="35" y="10" width="26" height="16" rx="4" class="start-icon-solid"/><path d="m33 42 5 5 9-10M54 43h10m-31 20 5 5 9-10M54 64h10"/></svg><h3>Define success</h3><p>Must happen. Must never happen.<br>Proof of the final state.</p></li>
        <li><span>03</span><svg class="start-icon" viewBox="0 0 96 96" aria-hidden="true"><path d="M8 48h9l7-19 9 38 9-54 9 68 9-46 8 13h20"/><path class="start-icon-accent" d="M14 82 82 14"/></svg><h3>Test failures</h3><p>Pause. Correct. Break a tool.</p></li>
        <li><span>04</span><svg class="start-icon" viewBox="0 0 96 96" aria-hidden="true"><circle cx="42" cy="40" r="22"/><path d="m58 57 22 23m-49-40 8 8 14-16"/><path class="start-icon-accent" d="M14 62a35 35 0 0 0 39 19m-39-19v13m0-13h13"/></svg><h3>Inspect &amp; repeat</h3><p>Check evidence. Fix. Re-run.</p></li>
      </ol>
      <div class="start-action"><strong>A small test set you can explain.</strong><a data-evaluator-link href="https://github.com/agonza1/ConversationAgentEvals" target="_blank" rel="noopener noreferrer"><svg viewBox="0 0 32 32" aria-hidden="true"><path d="m10 5 18 11-18 11Z"/></svg><span>Live conversation evaluator demo</span></a></div>
      <p class="micro-note">Controlled test targets or imported evidence.</p>
    `
  },
  {
    id: "boundary",
    html: `
      <div class="section-heading">
        <p class="eyebrow">APPENDIX · CAPABILITIES + ROADMAP</p>
        <h2 id="boundary-title">What the evaluation tool supports—<span>and what comes next</span></h2>
        <p>Product capabilities ≠ teaching fixtures.</p>
      </div>
      <div class="boundary-grid">
        <article class="shipped-card">
          <div class="boundary-head"><span>EVALUATION TOOL TODAY</span><b>SUPPORTED</b></div>
          <ul class="clean-list"><li>Supported target execution or imported evidence</li><li>Normalize, report, compare, export</li><li>Configured scenarios: goals, required/forbidden actions, state, rubrics</li><li>Transcript, vCon, media, trace, state, and artifact contracts</li><li>Local ASSERT-compatible evaluation; optional upstream judge</li></ul>
        </article>
        <article class="roadmap-card">
          <div class="boundary-head"><span>PLANNED IN THE TOOL</span><b>ROADMAP</b></div>
          <ul class="clean-list"><li>Claim rules and conversational SLOs</li><li>Tool, runtime, media, and ASR failure injection</li><li>SIP/SIPREC evidence adapters</li><li>Conserver enrichment, routing, and storage</li><li>Verified signing and redaction workflows</li></ul>
        </article>
      </div>
      <div class="honesty-boundary"><strong>NOT PROVEN BY THESE FIXTURES:</strong><span>generic SIP/PSTN proof</span><span>production network proof</span><span>browser-mic interoperability proof</span><span>production full-duplex barge-in</span></div>
      <p class="micro-note">The simple scenario form does not extract forbidden actions from prose. Evaluation designs are authored separately.</p>
    `
  },
  {
    id: "standards",
    html: `
      <div class="section-heading">
        <p class="eyebrow">APPENDIX · STANDARDS + RESEARCH</p>
        <h2 id="standards-title">Standards and research<br><span>behind the workbench</span></h2>
        <p>Capture and evaluation foundations—not universal latency targets.</p>
      </div>
      <div class="sources-grid">
        <article>
          <h3>Standards and specifications</h3>
          <a href="https://datatracker.ietf.org/doc/draft-ietf-vcon-vcon-core/" rel="noreferrer" target="_blank"><b>IETF vCon Core</b><span>portable conversation container · Internet-Draft</span></a>
          <a href="https://www.rfc-editor.org/rfc/rfc3550" rel="noreferrer" target="_blank"><b>RTP/RTCP · RFC 3550</b><span>media transport + feedback</span></a>
          <a href="https://www.rfc-editor.org/rfc/rfc7866" rel="noreferrer" target="_blank"><b>SIPREC · RFC 7866</b><span>session recording protocol</span></a>
          <a href="https://www.rfc-editor.org/rfc/rfc7865" rel="noreferrer" target="_blank"><b>SIPREC metadata · RFC 7865</b><span>recording metadata</span></a>
          <a href="https://www.w3.org/TR/webrtc-stats/" rel="noreferrer" target="_blank"><b>WebRTC Statistics API</b><span>browser media telemetry</span></a>
          <a href="https://www.itu.int/rec/T-REC-P.805/en" rel="noreferrer" target="_blank"><b>ITU-T P.805</b><span>conversational quality</span></a>
          <a href="https://www.itu.int/rec/T-REC-P.851/en" rel="noreferrer" target="_blank"><b>ITU-T P.851</b><span>spoken-dialogue quality</span></a>
        </article>
        <article>
          <h3>Evaluation research</h3>
          <a href="https://aclanthology.org/P97-1035/" rel="noreferrer" target="_blank"><b>PARADISE</b><span>task success plus interaction cost</span></a>
          <a href="https://arxiv.org/abs/2406.12045" rel="noreferrer" target="_blank"><b>τ-bench</b><span>tools + final database state</span></a>
          <a href="https://arxiv.org/abs/2410.17196" rel="noreferrer" target="_blank"><b>VoiceBench</b><span>speech robustness</span></a>
          <a href="https://arxiv.org/abs/2603.13686" rel="noreferrer" target="_blank"><b>τ-Voice</b><span>task-oriented voice-agent evaluation</span></a>
          <a href="https://arxiv.org/abs/2605.13841" rel="noreferrer" target="_blank"><b>EVA-Bench</b><span>real-time spoken-agent evaluation</span></a>
          <a href="https://arxiv.org/abs/2604.04847" rel="noreferrer" target="_blank"><b>Full-Duplex-Bench-v3</b><span>latency, turn-taking, and interruption</span></a>
          <a href="https://arxiv.org/abs/2306.05685" rel="noreferrer" target="_blank"><b>Judging LLM-as-a-Judge</b><span>judge bias + calibration</span></a>
        </article>
      </div>
    `
  },
  {
    id: "close",
    className: "closing-slide",
    shellClass: "closing-shell",
    html: `
      <div class="closing-main">
      <div class="closing-takeaway">
      <p class="eyebrow">THE PRODUCTION STANDARD</p>
      <h2 id="close-title" class="closing-statement">Production readiness is <span>a systems property.</span></h2>
      <p class="closing-proof">Conversation. Controls. Outcomes.<br><strong>Then re-test every change.</strong></p>
      <div class="closing-principles">
        <article><span>01</span><b>Measure the complete loop</b><p>Media, turns, actions, recovery, state.</p></article>
        <article><span>02</span><b>Verify the protections</b><p>Runtime controls enforce policy. Evaluation verifies.</p></article>
        <article><span>03</span><b>Make releases evidence-led</b><p>Keep vCon evidence. Check regressions before release.</p></article>
      </div>
      </div>
      <aside class="closing-connect" aria-labelledby="connect-title">
        <p class="eyebrow">Q&A · KEEP THE CONVERSATION GOING</p>
        <h3 id="connect-title">Let’s connect.</h3>
        <p>Discuss voice AI, explore these topics,<br>or get help building your next system.</p>
        <a class="closing-linkedin" href="https://www.linkedin.com/in/albertogonzaleztrastoy" rel="noreferrer" target="_blank">
          <img src="./assets/linkedin-qr.png" width="656" height="656" alt="Scan to open Alberto González’s LinkedIn profile">
          <strong>Alberto González</strong>
          <span>Scan to connect on LinkedIn ↗</span>
        </a>
      </aside>
      </div>
      <div class="closing-cta"><strong>DEFINE THE CONTRACT. TEST THE FAILURE PATHS. KEEP THE EVIDENCE.</strong><div><a href="https://github.com/agonza1/ConversationAgentEvals" rel="noreferrer" target="_blank">Conversation Agent Evaluation (CAE) tool ↗</a><a href="https://github.com/agonza1/real-time-voice-agent-evals-presentation" rel="noreferrer" target="_blank">presentation source ↗</a><a href="#vcon-enrichment">Revisit vCon JSON →</a><a href="#standards">Appendix: sources →</a><a href="#demo">Appendix: lost acknowledgment →</a><a href="#boundary">Appendix: capabilities →</a></div></div>
    `
  }
];
