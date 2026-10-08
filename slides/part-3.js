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
      <svg class="judge-diagram judge-engineering" viewBox="0 0 1280 460" role="img" aria-labelledby="judge-diagram-title judge-diagram-desc">
        <title id="judge-diagram-title">Evidence, executable checks, bounded semantic judgment, and review policy</title>
        <desc id="judge-diagram-desc">Recorded turns, action trace, state, and scenario contract feed code checks and semantic classification. A deterministic verdict is required before the Decisions judge runs. Code checks required and forbidden events, terminal tool status, and state predicates. The judge classifies one rule per question into violation, no violation, or insufficient evidence. Answer names, distributions, and uncertainty thresholds are validated. Policy preserves deterministic failure and requires human confirmation before a proposal is applied.</desc>
        <defs><marker id="judge-flow-arrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8" fill="#39d2ee"/></marker></defs>
        <g class="judge-connectors">
          <path d="M162 225 H200 V95 H245"/><path d="M200 225 V347 H245"/>
          <path d="M820 95 H855 V225 H890"/><path class="judge-merge" d="M820 347 H855 V225"/>
          <path d="M1010 225 H1040 V125 H1065"/><path d="M1040 225 H1065"/><path d="M1040 225 V325 H1065"/>
          <path class="judge-prerequisite" d="M545 197 V258"/>
        </g>
        <g class="judge-source"><path d="M55 144 H108 L132 168 V250 H55 Z M108 144 V168 H132"/><path d="M69 190 H82 L88 178 L96 210 L107 190 H119 M69 227 H118"/></g>
        <text class="judge-node-title" x="94" y="290" text-anchor="middle">Run evidence</text>
        <text class="judge-node-note" x="94" y="319" text-anchor="middle">Turns · trace · state</text>
        <text class="judge-node-note" x="94" y="346" text-anchor="middle">Scenario contract</text>
        <g class="judge-code-node">
          <rect x="245" y="10" width="575" height="187" rx="18"/>
          <text class="judge-node-title" x="268" y="43">Check facts <tspan class="judge-node-note">· executable rules</tspan></text>
          <text class="judge-node-note" x="268" y="76">Required / forbidden events · terminal tool status</text>
          <text class="judge-node-note" x="268" y="105">State predicates · declared event sequence*</text>
          <path class="judge-internal-divider" d="M268 125 H796"/>
          <text class="judge-output" x="268" y="153">pass | fail | insufficient evidence</text>
          <text class="judge-node-note" x="268" y="180">+ event index / state path</text>
        </g>
        <text class="judge-prerequisite-label" x="563" y="234">deterministic verdict required</text>
        <g class="judge-model-node">
          <rect x="245" y="258" width="575" height="192" rx="18"/>
          <text class="judge-node-title" x="268" y="292">Judge behavior <tspan class="judge-node-note">· Decisions API</tspan></text>
          <text class="judge-node-note" x="268" y="323">Turns + rule + trace/state → one choice per rule</text>
          <text class="judge-output" x="268" y="351">violation | no violation | insufficient</text>
          <path class="judge-internal-divider" d="M268 368 H796"/>
          <text class="judge-node-note" x="268" y="395">Validate names/schema · confidence + P(choice)</text>
          <text class="judge-node-note" x="268" y="424">Refusal / low certainty → insufficient evidence</text>
        </g>
        <g class="judge-gate"><path d="M950 165 L1010 225 L950 285 L890 225 Z"/><path d="M926 210 H974 M926 240 H974 M939 200 V220 M963 230 V250"/></g>
        <text class="judge-node-title" x="950" y="318" text-anchor="middle">Review policy</text>
        <text class="judge-node-note" x="950" y="346" text-anchor="middle">In code</text>
        <g class="judge-result-pass"><circle cx="1095" cy="125" r="20"/><path d="M1085 125 L1093 133 L1106 117"/><text x="1127" y="134">Pass</text></g>
        <g class="judge-result-fail"><circle cx="1095" cy="225" r="20"/><path d="M1087 217 L1103 233 M1103 217 L1087 233"/><text x="1127" y="234">Fail</text></g>
        <g class="judge-result-review"><circle cx="1095" cy="325" r="20"/><text x="1095" y="334" text-anchor="middle">?</text><text x="1127" y="334">Review</text></g>
        <text class="judge-node-note" x="1145" y="378" text-anchor="middle">Proposed verdict</text>
      </svg>
      <p class="takeaway"><strong>Hard failure stays failed. Missing proof → review. Human confirmation before application.</strong></p>
      <p class="micro-note">*Order needs a trustworthy event sequence. Decisions integration: <a href="https://github.com/agonza1/ConversationAgentEvals/pull/157" target="_blank" rel="noopener noreferrer">CAE draft PR #157 ↗</a> · <a href="https://developers.openai.com/api/docs/guides/decisions" target="_blank" rel="noopener noreferrer">API ↗</a> · <a href="https://docs.typesafe.ai/introduction" target="_blank" rel="noopener noreferrer">Jev ↗</a></p>
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
      <div class="start-action"><strong>A small test set you can explain.</strong><a data-evaluator-link href="https://github.com/agonza1/ConversationAgentEvals" target="_blank" rel="noopener noreferrer"><svg viewBox="0 0 32 32" aria-hidden="true"><path d="m10 5 18 11-18 11Z"/></svg><span>Start the demo <span class="start-demo-detail">Open the conversation evaluator ↗</span></span></a></div>
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
