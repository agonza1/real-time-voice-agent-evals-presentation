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
        <h2 id="problem-title">The agent said the right thing. <span>The system did the wrong thing.</span></h2>
        <p>Transcript quality can hide an operational failure.</p>
      </div>
      <div class="truth-split">
        <article class="truth-card surface-card">
          <p class="card-kicker">CONVERSATION SURFACE</p>
          <blockquote>“Your subscription has been canceled.”</blockquote>
          <div class="quality-tags"><span>polite</span><span>relevant</span><span>confident</span></div>
          <div class="status-line pass"><span>TRANSCRIPT EVAL</span><strong>PASS</strong></div>
        </article>
        <div aria-hidden="true" class="versus">≠</div>
        <article class="truth-card state-card">
          <p class="card-kicker">AUTHORITATIVE STATE</p>
          <div class="tool-row"><code>cancel_subscription</code><strong class="danger">→ TIMEOUT</strong></div>
          <div class="database-state"><span>subscription.status</span><strong>ACTIVE</strong></div>
          <div class="status-line fail"><span>BUSINESS OUTCOME</span><strong>FAIL</strong></div>
        </article>
      </div>
      <p class="takeaway">If we evaluate only the transcript, <strong>we reward a false claim.</strong></p>
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
        <p class="eyebrow">EVIDENCE</p>
        <h2 id="timeline-title">The unit of evaluation is <span>a synchronized event timeline</span></h2>
        <p>Every claim should be traceable to evidence across the complete turn.</p>
      </div>
      <div class="timeline" aria-label="Synchronized voice agent event timeline">
        <div class="timeline-axis"></div>
        <div class="timeline-event" style="--x:3%;color:var(--cyan)"><b>Caller stops</b><i class="cyan-bg"></i><span>AUDIO</span></div>
        <div class="timeline-event" style="--x:17%;color:var(--cyan)"><b>End of turn</b><i class="cyan-bg"></i><span>VAD</span></div>
        <div class="timeline-event" style="--x:31%;color:var(--violet)"><b>Final transcript</b><i class="violet-bg"></i><span>STT</span></div>
        <div class="timeline-event" style="--x:45%;color:var(--violet)"><b>First model token</b><i class="violet-bg"></i><span>MODEL</span></div>
        <div class="timeline-event" style="--x:59%;color:var(--amber)"><b>Tool request</b><i class="amber-bg"></i><span>AGENT</span></div>
        <div class="timeline-event" style="--x:73%;color:var(--amber)"><b>Tool response</b><i class="amber-bg"></i><span>CONTROL</span></div>
        <div class="timeline-event" style="--x:86%;color:var(--green)"><b>TTS starts</b><i class="green-bg"></i><span>SPEECH</span></div>
        <div class="timeline-event" style="--x:98%;color:var(--green)"><b>State verified</b><i class="green-bg"></i><span>BACKEND</span></div>
      </div>
      <div class="timing-bands"><article><span>speech → final transcript</span><b>speech-boundary latency</b></article><article><span>decision → TTS start</span><b>response generation latency</b></article><article><span>complete turn → verified state</span><b>business completion latency</b></article></div>
    `
  },
  {
    id: "truth",
    html: `
      <div class="section-heading">
        <p class="eyebrow">EVIDENCE</p>
        <h2 id="truth-title">A transcript observes the data plane—<span>not the control plane</span></h2>
        <p>Both are needed to determine whether an interaction was allowed, true, and complete.</p>
      </div>
      <div class="plane-grid">
        <article class="plane-card">
          <p class="card-kicker">DATA PLANE</p><h3>What the conversation looked and sounded like</h3>
          <ul class="clean-list"><li>Audio and turn events</li><li>Interim and final transcript</li><li>Spoken response</li><li>Perceptual and timing evidence</li></ul>
        </article>
        <article class="plane-card control-plane">
          <p class="card-kicker">CONTROL PLANE</p><h3>Why the system acted—and whether it was authorized</h3>
          <ul class="clean-list"><li>Session and policy state</li><li>Tool request and response</li><li>Authorization decision</li><li>Authoritative final state</li></ul>
        </article>
      </div>
      <div class="proof-rule"><span>Semantic judges</span><i>+</i><span>deterministic assertions</span><i>+</i><span>authoritative evidence</span></div>
      <p class="micro-note">“Data plane / control plane” is an engineering model here—not a formal protocol boundary.</p>
    `
  }
];
