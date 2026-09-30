window.VOICE_EVALS_SLIDES_PART_1 = [
  {
    id: "intro",
    className: "hero-slide",
    html: `
      <div class="hero-grid">
        <div class="hero-copy">
          <p class="eyebrow">VON EVOLUTION · ATLANTA · OCTOBER 15, 2026</p>
          <h1 id="intro-title">Evaluating Real-Time Voice Agents <span>Beyond AI Models</span></h1>
          <p class="hero-subtitle">Building and using an <strong>open-source evaluation workbench</strong> with ConversationAgentEvals and portable vCon evidence.</p>
          <div class="hero-meta">
            <span>Alberto Gonzalez</span>
            <span>CTO · WebRTC.ventures</span>
            <span>Open source · Evidence first</span>
          </div>
          <div class="hero-actions">
            <a class="primary-link" href="https://github.com/agonza1/ConversationAgentEvals" rel="noreferrer" target="_blank">Open ConversationAgentEvals ↗</a>
            <a class="quiet-link" href="#problem">Start the presentation →</a>
          </div>
        </div>
        <div aria-label="Audio evidence enters a vCon proof envelope" class="hero-visual">
          <div aria-hidden="true" class="audio-wave">${"<i></i>".repeat(12)}</div>
          <div class="vcon-envelope">
            <div class="vcon-title"><strong>vCon</strong><span>portable evidence envelope</span></div>
            <div class="vcon-tabs"><span>dialog</span><span>analysis</span><span>attachments</span></div>
            <div class="vcon-proof"><i class="proof-dot cyan"></i><span>capture</span><i class="proof-dot violet"></i><span>assert</span><i class="proof-dot green"></i><span>compare</span></div>
          </div>
          <div aria-hidden="true" class="evidence-line"><span>AUDIO</span><b></b><span>RUNTIME EVIDENCE</span><b></b><span>OUTCOME</span></div>
        </div>
      </div>
      <i aria-hidden="true" class="ambient ambient-cyan"></i><i aria-hidden="true" class="ambient ambient-violet"></i>
    `
  },
  {
    id: "problem",
    html: `
      <div class="section-heading">
        <p class="eyebrow">THE PROBLEM</p>
        <h2 id="problem-title">Without a runtime gate, <span>a fluent answer can be false.</span></h2>
        <p>Language quality alone cannot establish completion. Runtime controls must prevent unsupported claims before speech.</p>
      </div>
      <div class="truth-split">
        <article class="truth-card surface-card">
          <p class="card-kicker">CONVERSATION SURFACE</p>
          <blockquote>“Your subscription has been canceled.”</blockquote>
          <div class="quality-tags"><span>polite</span><span>relevant</span><span>confident</span></div>
          <div class="status-line pass"><span>LANGUAGE-ONLY CHECK</span><strong>PASS</strong></div>
        </article>
        <div aria-hidden="true" class="versus">≠</div>
        <article class="truth-card state-card">
          <p class="card-kicker">AUTHORITATIVE STATE</p>
          <div class="tool-row"><code>cancel_subscription</code><strong class="danger">→ TIMEOUT</strong></div>
          <div class="database-state"><span>subscription.status</span><strong>ACTIVE</strong></div>
          <div class="status-line fail"><span>BUSINESS OUTCOME</span><strong>FAIL</strong></div>
        </article>
      </div>
      <p class="takeaway"><strong>Prevent with runtime controls. Verify with evaluation.</strong></p>
    `
  },
  {
    id: "system",
    html: `
      <div class="section-heading">
        <p class="eyebrow">THE SYSTEM</p>
        <h2 id="system-title">A real-time voice agent is <span>a chain of systems</span></h2>
        <p>The caller experiences the complete loop—not an isolated model response.</p>
      </div>
      <ol class="system-flow" aria-label="Real-time voice agent pipeline">
        <li><span>01</span><b>Caller</b><small>speech</small></li>
        <li><span>02</span><b>Media</b><small>RTP / WebRTC</small></li>
        <li><span>03</span><b>Turn</b><small>VAD / EOT</small></li>
        <li><span>04</span><b>STT</b><small>partials / final</small></li>
        <li class="model-node"><span>05</span><b>Agent</b><small>model + flow</small></li>
        <li><span>06</span><b>Control</b><small>policy / tools</small></li>
        <li><span>07</span><b>TTS</b><small>speech out</small></li>
        <li><span>08</span><b>Backend</b><small>authoritative truth</small></li>
      </ol>
      <div class="failure-strip" aria-label="Representative failure modes"><span>packet loss</span><span>early endpoint</span><span>transcript churn</span><span>wrong action</span><span>tool timeout</span><span>late speech</span></div>
      <p class="takeaway">The model can improve while <strong>the system regresses.</strong></p>
    `
  },
  {
    id: "layers",
    html: `
      <div class="section-heading">
        <p class="eyebrow">EVALUATION MODEL</p>
        <h2 id="layers-title">ConversationAgentEvals scores <span>four connected layers</span></h2>
        <p>Keep experience, understanding, execution, and outcome separate.</p>
      </div>
      <div class="layer-grid">
        <article class="layer-card cyan-card"><span class="layer-number">01</span><h3>Conversation experience</h3><p>Speech onset/end detection, silence, interruption recovery, audio continuity, and end-to-end turn latency.</p></article>
        <article class="layer-card violet-card"><span class="layer-number">02</span><h3>Speech boundary</h3><p>Task-critical entity accuracy, partial-to-final stability, finalization delay, accents, noise, and disfluency.</p></article>
        <article class="layer-card amber-card"><span class="layer-number">03</span><h3>Agent execution</h3><p>Required and forbidden actions, policy and authorization checks, tool selection, fallback, and recovery.</p></article>
        <article class="layer-card green-card"><span class="layer-number">04</span><h3>Business outcome</h3><p>Authoritative state transition, durable completion, and agreement between spoken claims and backend truth.</p></article>
      </div>
      <div class="one-call"><span>ONE CALL</span><strong>FOUR LAYERS</strong><em>Do not collapse them into one “quality” number.</em></div>
    `
  },
  {
    id: "timeline",
    html: `
<div class="section-heading">
        <p class="eyebrow">SYNCHRONIZED EVIDENCE</p>
        <h2 id="timeline-title">Faster at which boundary?<br><span>And did we cut the caller off?</span></h2>
        <p>One request. Two endpointing policies. The same model and response path.</p>
      </div>
      <div class="eng-toolbar" role="group" aria-label="Endpointing policy">
        <button type="button" data-endpoint="patient" aria-pressed="true">Wait for the complete request</button>
        <button type="button" data-endpoint="eager" aria-pressed="false">Aggressive endpointing</button>
        <span class="eng-label">ILLUSTRATIVE TIMINGS · SHARED FIXTURE CLOCK</span>
      </div>
      <div class="eng-panel">
        <p class="eng-utterance">“Cancel my subscription <span class="eng-pause">… pause …</span> <mark>at the end of the billing period.</mark>”</p>
        <div id="endpointTrace" class="eng-trace" aria-label="Caller and agent event trace"></div>
        <div id="latencyReadings" class="eng-metrics" aria-live="polite"></div>
      </div>
      <p id="endpointInsight" class="takeaway" aria-live="polite"></p>
      <p class="micro-note">First token ≠ generated audio ≠ receiver audio ≠ physical speaker playout. In real runs, record the observer and clock mapping; do not add component p95s.</p>
      <p class="eng-sources"><a href="https://docs.livekit.io/agents/logic/turns/turn-detector/" target="_blank" rel="noopener noreferrer">Turn detection beyond VAD ↗</a></p>
    `
  },
  {
    id: "truth",
    html: `
<div class="section-heading">
        <p class="eyebrow">EVIDENCE &amp; TRUTH</p>
        <h2 id="truth-title">A correct transcript.<br><span>Of the wrong audio?</span></h2>
        <p>Preserve what was sent, what was received, and what the recognizer inferred.</p>
      </div>
      <div class="eng-columns">
        <article class="eng-panel">
          <p class="card-kicker">CONVERSATION EVIDENCE</p>
          <div class="eng-audio-row"><div><b>Source audio</b><p>“Do <mark>not</mark> cancel my subscription.”</p></div><button type="button" data-audio="source">Play source</button></div>
          <div class="eng-audio-row"><div><b>Simulated receiver audio</b><p>“Do <span class="eng-missing">[muted]</span> cancel my subscription.”</p></div><button type="button" data-audio="received">Play received</button></div>
          <p id="audioStatus" class="eng-label" role="status">LOCAL SYNTHETIC SPEECH · “NOT” MUTED IN THE SAME RECORDING</p>
          <details class="eng-details"><summary>Reveal the illustrative ASR interpretation</summary><p>“Do cancel my subscription.” <strong>The action-changing word is gone.</strong></p><p class="micro-note">Hypothetical ASR output, not a recognizer result. This controlled audio edit is not a packet-loss or codec simulation.</p></details>
          <details class="eng-details"><summary>What WebRTC telemetry would help explain it?</summary><p><code>packetsDiscarded</code>: received too late/early for playout. <code>concealedSamples</code>: synthesized to cover loss or lateness. <code>jitterBufferDelay</code>: cumulative time buffered; use interval deltas divided by emitted-count deltas.</p><p class="micro-note">No RTCStats are collected in this slide. Those metrics explain media behavior, not whether meaning survived.</p></details>
        </article>
        <article class="eng-panel">
          <p class="card-kicker">OPERATIONAL EVIDENCE</p>
          <h3>The transcript still cannot prove the operation.</h3>
          <ul class="clean-list"><li>Authorization and policy decision</li><li>Operation ID + tool request/response</li><li>State verified for that operation</li><li>Output gate decision before speech</li></ul>
          <p class="eng-callout">An output gate protects claims about execution. It does not recover caller intent lost upstream.</p>
        </article>
      </div>
      <p class="eng-sources"><a href="https://www.w3.org/TR/webrtc-stats/" target="_blank" rel="noopener noreferrer">WebRTC media statistics ↗</a><span>Source audio, receiver audio, ASR text, and human understanding are different observations.</span></p>
    `
  }
];
