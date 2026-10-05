window.VOICE_EVALS_SLIDES_PART_3 = [
  {
    id: "outcomes",
    html: `
      <div class="section-heading">
        <p class="eyebrow">OUTCOME TAXONOMY</p>
        <h2 id="outcomes-title">Evaluate outcomes.<br><span>Verify protections.</span></h2>
        <p>Timeout means uncertainty—not confirmed failure.</p>
      </div>
      <div class="outcome-grid">
        <article class="outcome-card success-outcome"><span>A</span><h3>Business success</h3><p>State changed. Confirmation matches the evidence.</p><b>PASS · COMPLETED + TRUTHFUL</b></article>
        <article class="outcome-card safe-outcome"><span>B</span><h3>Safe failure</h3><p>Failure verified. Agent stays truthful and offers recovery.</p><b>RECOVERED · INCOMPLETE + SAFE</b></article>
        <article class="outcome-card false-outcome"><span>C</span><h3>False success</h3><p>A missing or bypassed gate permits a false claim.</p><b>FAIL · RUNTIME CONTROL MISSING</b></article>
      </div>
      <p class="takeaway"><strong>Unknown is not failed.</strong> Evaluate business state and safe behavior separately.</p>
    `
  },
  {
    id: "comparison",
    html: `
<div class="section-heading">
        <p class="eyebrow">REGRESSION → RELEASE DECISION</p>
        <h2 id="comparison-title">Faster is not enough<br><span>to approve the release.</span></h2>
        <p>Evaluate the change against critical requirements.</p>
      </div>
      <div class="eng-toolbar" role="group" aria-label="Version under release review"><button type="button" data-release="baseline" aria-pressed="false">Baseline</button><button type="button" data-release="candidate" aria-pressed="true">Aggressive endpointing</button><span class="eng-label">SYNTHETIC COHORTS · 100 RUNS PER VERSION</span></div>
      <div class="comparison-wrap"><table class="comparison-table eng-release-table"><thead><tr><th>Measure</th><th>Baseline</th><th>Candidate</th><th>Example release gate</th></tr></thead><tbody>
        <tr><th>Response latency p95*</th><td>1,100 ms</td><td>780 ms</td><td>≤ 1,200 ms</td></tr>
        <tr><th>Premature responses</th><td>2 / 100</td><td>12 / 100</td><td>≤ 3 / 100</td></tr>
        <tr><th>Wrong cancellation timing</th><td>0 / 100</td><td>4 / 100</td><td>0 in this test cohort</td></tr>
        <tr><th>Required evidence complete</th><td>100 / 100</td><td>100 / 100</td><td>100 / 100</td></tr>
        <tr><th>Unanswered test turns</th><td>0 / 100</td><td>0 / 100</td><td>0 / 100</td></tr>
      </tbody></table></div>
      <div id="releaseDecision" class="eng-release-decision" aria-live="polite"></div>
      <p class="micro-note">*End-of-turn → receiver audio can reward early cutoffs. Matched scenarios, model, transport, load, and evidence. Synthetic counts—not production results or guarantees.</p>
    `
  },
  {
    id: "boundary",
    html: `
      <div class="section-heading">
        <p class="eyebrow">ENGINEERING BOUNDARY</p>
        <h2 id="boundary-title">What the evaluation tool supports—<span>and what comes next</span></h2>
        <p>Product capabilities ≠ teaching fixtures.</p>
      </div>
      <div class="boundary-grid">
        <article class="shipped-card">
          <div class="boundary-head"><span>EVALUATION TOOL TODAY</span><b>SUPPORTED</b></div>
          <ul class="clean-list"><li>Supported target execution or imported evidence</li><li>Normalize, report, compare, export</li><li>Goals, required/forbidden actions, state, rubrics</li><li>Transcript, vCon, media, trace, state, and artifact contracts</li><li>Local ASSERT-compatible evaluation; optional upstream judge</li></ul>
        </article>
        <article class="roadmap-card">
          <div class="boundary-head"><span>PLANNED IN THE TOOL</span><b>ROADMAP</b></div>
          <ul class="clean-list"><li>Claim rules and conversational SLOs</li><li>Tool, runtime, media, and ASR failure injection</li><li>SIP/SIPREC evidence adapters</li><li>Conserver enrichment, routing, and storage</li><li>Verified signing and redaction workflows</li></ul>
        </article>
      </div>
      <div class="honesty-boundary"><strong>NOT PROVEN BY THESE FIXTURES:</strong><span>generic SIP/PSTN proof</span><span>production network proof</span><span>browser-mic interoperability proof</span><span>production full-duplex barge-in</span></div>
    `
  },
  {
    id: "standards",
    html: `
      <div class="section-heading">
        <p class="eyebrow">STANDARDS + RESEARCH</p>
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
      <p class="eyebrow">THE PRODUCTION STANDARD</p>
      <h2 id="close-title" class="closing-statement">Production readiness is <span>a systems property.</span></h2>
      <p class="closing-proof">Conversation. Controls. Outcomes.<br><strong>Then re-test every change.</strong></p>
      <div class="closing-principles">
        <article><span>01</span><b>Measure the complete loop</b><p>Media, turns, actions, recovery, state.</p></article>
        <article><span>02</span><b>Verify the protections</b><p>Runtime controls enforce policy. Evaluation verifies.</p></article>
        <article><span>03</span><b>Make releases evidence-led</b><p>Keep vCon evidence. Check regressions before release.</p></article>
      </div>
      <div class="closing-cta"><strong>DEFINE THE CONTRACT. TEST THE FAILURE PATHS. KEEP THE EVIDENCE.</strong><div><a href="https://github.com/agonza1/ConversationAgentEvals" rel="noreferrer" target="_blank">Conversation Agent Evaluation (CAE) tool ↗</a><a href="https://github.com/agonza1/real-time-voice-agent-evals-presentation" rel="noreferrer" target="_blank">presentation source ↗</a></div></div>
    `
  }
];
