window.VOICE_EVALS_SLIDES_PART_3 = [
  {
    id: "outcomes",
    html: `
      <div class="section-heading">
        <p class="eyebrow">OUTCOME TAXONOMY</p>
        <h2 id="outcomes-title">Three outcomes can sound <span>equally fluent</span></h2>
        <p>A transcript-only score often collapses the last two.</p>
      </div>
      <div class="outcome-grid">
        <article class="outcome-card success-outcome"><span>A</span><h3>Business success</h3><p>Tool succeeds, authoritative state changes, and the agent confirms the verified result.</p><b>PASS · COMPLETED + TRUTHFUL</b></article>
        <article class="outcome-card safe-outcome"><span>B</span><h3>Safe failure</h3><p>Tool fails, the agent communicates uncertainty, makes no false claim, and offers recovery or handoff.</p><b>RECOVERED · INCOMPLETE + SAFE</b></article>
        <article class="outcome-card false-outcome"><span>C</span><h3>False success</h3><p>Tool fails, state remains unchanged, and the agent confidently claims completion.</p><b>FAIL · INCOMPLETE + DANGEROUS</b></article>
      </div>
      <p class="takeaway">Language quality may be identical in A and C. <strong>Backend truth is not.</strong></p>
    `
  },
  {
    id: "comparison",
    html: `
      <div class="section-heading">
        <p class="eyebrow">REGRESSION</p>
        <h2 id="comparison-title">Use one evidence contract across <span>agents, models, and versions</span></h2>
        <p>vCon makes evidence portable; CAE makes the comparison meaningful.</p>
      </div>
      <div class="comparison-wrap">
        <table class="comparison-table">
          <thead><tr><th>Target</th><th>Experience</th><th>Speech</th><th>Execution</th><th>Outcome</th><th>Overall</th></tr></thead>
          <tbody>
            <tr><th>Agent v1 · Model A</th><td><span class="status-pass">PASS</span></td><td><span class="status-pass">PASS</span></td><td><span class="status-warn">WARN</span></td><td><span class="status-fail">FAIL</span></td><td><span class="status-fail">FAIL</span></td></tr>
            <tr><th>Agent v2 · Model A</th><td><span class="status-pass">PASS</span></td><td><span class="status-pass">PASS</span></td><td><span class="status-pass">PASS</span></td><td><span class="status-pass">PASS</span></td><td><span class="status-pass">PASS</span></td></tr>
            <tr><th>Agent v2 · Model B</th><td><span class="status-warn">WARN</span></td><td><span class="status-pass">PASS</span></td><td><span class="status-pass">PASS</span></td><td><span class="status-pass">PASS</span></td><td><span class="status-warn">WARN</span></td></tr>
            <tr><th>Vendor X · API</th><td><span class="status-pass">PASS</span></td><td><span class="status-warn">WARN</span></td><td><span class="status-fail">FAIL</span></td><td><span class="status-fail">FAIL</span></td><td><span class="status-fail">FAIL</span></td></tr>
            <tr><th>Vendor Y · SIP</th><td><span class="status-warn">WARN</span></td><td><span class="status-pass">PASS</span></td><td><span class="status-pass">PASS</span></td><td><span class="status-pass">PASS</span></td><td><span class="status-pass">PASS</span></td></tr>
          </tbody>
        </table>
        <p class="micro-note">Illustrative regression view · same scenarios · same evidence contract · different implementations</p>
      </div>
      <p class="takeaway">A faster model is not an upgrade if <strong>tool integrity or business outcomes regress.</strong></p>
    `
  },
  {
    id: "boundary",
    html: `
      <div class="section-heading">
        <p class="eyebrow">ENGINEERING BOUNDARY</p>
        <h2 id="boundary-title">What exists today—<span>and what VON extends</span></h2>
        <p>Keep the open-source claim strong by keeping the implementation boundary explicit.</p>
      </div>
      <div class="boundary-grid">
        <article class="shipped-card">
          <div class="boundary-head"><span>CONVERSATIONAGENTEVALS TODAY</span><b>SUPPORTED</b></div>
          <ul class="clean-list"><li>Supported target execution or imported evidence</li><li>Normalization, durable artifacts, reports, comparisons, and exports</li><li>Goals, required/forbidden actions, expected final state, and rubrics</li><li>Transcript/conversation, vCon, media, action trace, final-state, manifest, and report contracts</li><li>Local ASSERT-compatible boundary with optional upstream semantic judging</li></ul>
        </article>
        <article class="roadmap-card">
          <div class="boundary-head"><span>VON / NEXT IN CAE</span><b>ROADMAP</b></div>
          <ul class="clean-list"><li>Generalized allowed-claim and conversational-SLO contracts</li><li>Generalized tool, runtime, transport, and ASR failure injection</li><li>SIP/SIPREC production evidence adapters</li><li>Conserver enrichment, routing, and storage pipeline</li><li>Automatically generated, verified signed or redacted bundles</li></ul>
        </article>
      </div>
      <div class="honesty-boundary"><strong>DO NOT CLAIM YET:</strong><span>generic SIP/PSTN proof</span><span>production network proof</span><span>browser-mic interoperability proof</span><span>production full-duplex barge-in</span></div>
    `
  },
  {
    id: "standards",
    html: `
      <div class="section-heading">
        <p class="eyebrow">STANDARDS + RESEARCH</p>
        <h2 id="standards-title">Ground the workbench in <span>related engineering work</span></h2>
        <p>These sources inform evidence capture and evaluation; none prescribes one universal voice-agent latency SLO.</p>
      </div>
      <div class="sources-grid">
        <article>
          <h3>Standards and specifications</h3>
          <a href="https://datatracker.ietf.org/doc/draft-ietf-vcon-vcon-core/" rel="noreferrer" target="_blank"><b>IETF vCon Core</b><span>portable conversation container · Internet-Draft</span></a>
          <a href="https://www.rfc-editor.org/rfc/rfc3550" rel="noreferrer" target="_blank"><b>RTP/RTCP · RFC 3550</b><span>media transport and feedback foundations</span></a>
          <a href="https://www.rfc-editor.org/rfc/rfc7866" rel="noreferrer" target="_blank"><b>SIPREC · RFC 7866</b><span>session recording protocol</span></a>
          <a href="https://www.rfc-editor.org/rfc/rfc7865" rel="noreferrer" target="_blank"><b>SIPREC metadata · RFC 7865</b><span>recording-session metadata model</span></a>
          <a href="https://www.w3.org/TR/webrtc-stats/" rel="noreferrer" target="_blank"><b>WebRTC Statistics API</b><span>browser media telemetry</span></a>
          <a href="https://www.itu.int/rec/T-REC-P.805/en" rel="noreferrer" target="_blank"><b>ITU-T P.805</b><span>subjective conversational quality</span></a>
          <a href="https://www.itu.int/rec/T-REC-P.851/en" rel="noreferrer" target="_blank"><b>ITU-T P.851</b><span>spoken-dialogue service quality</span></a>
        </article>
        <article>
          <h3>Evaluation research</h3>
          <a href="https://aclanthology.org/P97-1035/" rel="noreferrer" target="_blank"><b>PARADISE</b><span>task success plus interaction cost</span></a>
          <a href="https://arxiv.org/abs/2406.12045" rel="noreferrer" target="_blank"><b>τ-bench</b><span>tool agents checked against final database state</span></a>
          <a href="https://arxiv.org/abs/2410.17196" rel="noreferrer" target="_blank"><b>VoiceBench</b><span>speech robustness and instruction following</span></a>
          <a href="https://arxiv.org/abs/2603.13686" rel="noreferrer" target="_blank"><b>τ-Voice</b><span>task-oriented voice-agent evaluation</span></a>
          <a href="https://arxiv.org/abs/2605.13841" rel="noreferrer" target="_blank"><b>EVA-Bench</b><span>real-time spoken-agent evaluation</span></a>
          <a href="https://arxiv.org/abs/2604.04847" rel="noreferrer" target="_blank"><b>Full-Duplex-Bench-v3</b><span>latency, turn-taking, and interruption</span></a>
          <a href="https://arxiv.org/abs/2306.05685" rel="noreferrer" target="_blank"><b>Judging LLM-as-a-Judge</b><span>evaluator bias and calibration risks</span></a>
        </article>
      </div>
    `
  },
  {
    id: "close",
    className: "closing-slide",
    shellClass: "closing-shell",
    html: `
      <p class="eyebrow">WHAT TO REMEMBER</p>
      <h2 id="close-title" class="closing-statement">The demo is not complete <span>when the agent speaks.</span></h2>
      <p class="closing-proof">It is complete when the evidence proves <strong>what happened, why, and with what outcome.</strong></p>
      <div class="closing-principles">
        <article><span>01</span><b>Evaluate the loop</b><p>Media, speech, decisions, tools, recovery, and final state.</p></article>
        <article><span>02</span><b>Separate language from truth</b><p>Use judges for open-ended language; use authoritative evidence for facts.</p></article>
        <article><span>03</span><b>Make evidence portable</b><p>Use vCon as the envelope for reproducible evaluation and regression.</p></article>
      </div>
      <div class="closing-cta"><strong>BUILD THE TEST HARNESS ONCE. PLUG IN ANY VOICE AGENT.</strong><div><a href="https://github.com/agonza1/ConversationAgentEvals" rel="noreferrer" target="_blank">github.com/agonza1/ConversationAgentEvals ↗</a><a href="https://github.com/agonza1/real-time-voice-agent-evals-presentation" rel="noreferrer" target="_blank">presentation source ↗</a></div></div>
    `
  }
];
