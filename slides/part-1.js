window.VOICE_EVALS_SLIDES_PART_1 = [
  {
    id: "intro",
    className: "hero-slide",
    html: `
      <div class="hero-grid">
        <div class="hero-copy">
          <p class="eyebrow">FALL '26 · VOICE AND CONVERSATIONS ON THE NET</p>
          <p class="hero-event">ATLANTA · OCTOBER 15, 2026</p>
          <h1 id="intro-title">Evaluating Real-Time Voice Agents <span>Beyond AI Models</span></h1>
          <p class="hero-subtitle">An <strong>open-source workbench</strong> for testing the complete voice-agent system.</p>
          <div class="hero-meta">
            <span>Alberto Gonzalez</span>
            <span>CTO · WebRTC.ventures</span>
            <span>Open source · Evidence first</span>
          </div>
          <div class="hero-actions">
            <a class="primary-link" href="https://github.com/agonza1/ConversationAgentEvals" rel="noreferrer" target="_blank">Open the conversation evaluator ↗</a>
            <a class="quiet-link" href="#story">Start the presentation →</a>
          </div>
        </div>
        <div aria-label="Evaluate a voice agent through audio, actions, and outcomes" class="hero-visual">
          <div aria-hidden="true" class="audio-wave">${"<i></i>".repeat(12)}</div>
          <div class="vcon-envelope">
            <div class="vcon-title"><strong>Voice agent</strong><span>evaluate the complete system</span></div>
            <div class="vcon-tabs"><span>audio</span><span>actions</span><span>outcomes</span></div>
            <div class="vcon-proof"><i class="proof-dot cyan"></i><span>capture</span><i class="proof-dot violet"></i><span>evaluate</span><i class="proof-dot green"></i><span>compare</span></div>
          </div>
          <div aria-hidden="true" class="evidence-line"><span>AUDIO</span><b></b><span>RUNTIME EVIDENCE</span><b></b><span>OUTCOME</span></div>
        </div>
      </div>
      <i aria-hidden="true" class="ambient ambient-cyan"></i><i aria-hidden="true" class="ambient ambient-violet"></i>
    `
  },
  {
    id: "story",
    className: "story-slide",
    html: `
      <div class="section-heading story-heading">
        <p class="eyebrow">MY FIRST VOICE AGENT → THE NEXT QUESTION</p>
        <h2 id="story-title">The technology changed.<br><span>So did the question.</span></h2>
      </div>
      <div class="story-layout">
        <figure class="story-photo">
          <img src="https://raw.githubusercontent.com/agonza1/agentic-contact-center/36f9cf3fb92843af516f8a8e09ea4cf0f4c52fc9/assets/cluecon/alberto-echo-show-prototype.jpg" alt="Alberto using his Echo Show voice assistant prototype" loading="eager" decoding="async" referrerpolicy="no-referrer">
          <figcaption>2017 · My Echo Show prototype <a href="https://github.com/agonza1/agentic-contact-center/blob/36f9cf3fb92843af516f8a8e09ea4cf0f4c52fc9/assets/cluecon/alberto-echo-show-prototype.jpg" target="_blank" rel="noopener noreferrer">Original prototype photo ↗</a></figcaption>
        </figure>
        <ol class="story-arc" aria-label="From voice commands to production evaluation">
          <li><p class="story-era"><span>01</span> 2017 · ECHO SHOW</p><h3>“Can it understand me?”</h3><p>It worked—with the exact phrases I anticipated.</p></li>
          <li><p class="story-era"><span>02</span> OPEN-ENDED VOICE · WEBRTC</p><h3>“Can we control it?”</h3><p>Natural conversation. Bounded tools and state.</p></li>
          <li class="story-now"><p class="story-era"><span>03</span> PRODUCTION · EVALUATION</p><h3>“Does it still work?”</h3><p>Models change. Callers interrupt. Tools time out.</p></li>
        </ol>
      </div>
      <div class="story-bridge"><p><span>RUNTIME CONTROL</span><strong>Build the controls.</strong></p><span class="story-arrow" aria-hidden="true">→</span><p><span>EVALUATION · ConversationAgentEvals</span><strong>Test that they hold as the system changes.</strong></p></div>
    `
  },
  {
    id: "problem",
    html: `
      <div class="section-heading">
        <p class="eyebrow">THE PROBLEM</p>
        <h2 id="problem-title">Without a runtime gate, <span>a fluent answer can be false.</span></h2>
        <p>Fluent speech is not proof of completion.</p>
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
        <p>The caller experiences the whole loop.</p>
      </div>
      <ol class="system-flow" aria-label="Caller input through media, turn detection, speech recognition, agent, control, and speech generation">
        <li><span>01</span><b>Caller</b><small>speech</small></li>
        <li><span>02</span><b>Media</b><small>SIP / RTP / WebRTC</small></li>
        <li><span>03</span><b>Turn</b><small>VAD / EOT</small></li>
        <li><span>04</span><b>STT</b><small>partials / final</small></li>
        <li class="model-node"><span>05</span><b>Agent</b><small>model + flow</small></li>
        <li><span>06</span><b>Control</b><small>policy / tools</small></li>
        <li><span>07</span><b>TTS</b><small>speech out</small></li>
      </ol>
      <div class="system-branches">
        <div class="system-return" aria-label="Return audio: TTS sends speech through Media back to the Caller">
          <span class="system-path-label">RETURN AUDIO</span>
          <p><b>Caller</b><span aria-hidden="true">←</span><b>Media</b><span aria-hidden="true">←</span><b>TTS</b></p>
          <small>Generated speech travels back over the media connection.</small>
        </div>
        <div class="system-backend" aria-label="Control exchanges tool requests and results with the Backend">
          <span class="system-path-label">08 · TOOL REQUESTS / RESULTS</span>
          <p><b>Control</b><span aria-hidden="true">↔</span><b>Backend</b></p>
          <small>Authoritative state and operation evidence.</small>
        </div>
      </div>
      <div class="failure-strip" aria-label="Representative failure modes"><span>packet loss</span><span>early endpoint</span><span>transcript churn</span><span>wrong action</span><span>tool timeout</span><span>late speech</span></div>
      <p class="takeaway">The model can improve while <strong>the system regresses.</strong></p>
    `
  },
  {
    id: "dual-voice",
    html: `
      <div class="section-heading">
        <p class="eyebrow">HOW VOICE SYSTEMS ARE CHANGING</p>
        <h2 id="dual-voice-title">Keep speech flowing. <span>Delegate deeper work.</span></h2>
        <p>A talker–reasoner architecture: one conversation, two paths.</p>
      </div>
      <div class="dual-voice-layout">
        <article class="voice-live-path">
          <p class="card-kicker">LIVE VOICE PATH · LOW LATENCY</p>
          <div class="voice-media-loop" aria-label="Caller sends and receives audio through Media to a native speech-to-speech model"><b>Caller</b><span aria-hidden="true">↔</span><b>Media</b><span aria-hidden="true">↔</span><b>Speech ↔ speech</b></div>
          <p>Audio + multimodal context → immediate conversation.</p>
          <p class="voice-duplex"><strong>Full duplex:</strong> listen while speaking; handle overlap and backchannels.</p>
        </article>
        <div class="voice-delegation" aria-label="The voice model sends scoped work to a background reasoner and receives results"><span>scoped request →</span><strong>ASYNCHRONOUS<br>DELEGATION</strong><span>← verified result</span></div>
        <article class="voice-work-path">
          <p class="card-kicker">BACKGROUND PATH · DEEPER REASONING + ACTIONS</p>
          <div class="voice-work-flow"><b>Text context</b><span aria-hidden="true">→</span><b>Reasoning LLM</b><span aria-hidden="true">↔</span><b>Tools + state</b></div>
          <p>Research, planning, and slower operations return to the voice model.</p>
          <p class="voice-cascade"><strong>Cascade alternative:</strong> STT → LLM → TTS for transcript access and scripted speech. Coordinate who speaks.</p>
        </article>
      </div>
      <p class="takeaway">Evaluate <strong>overlap, stale results, and claims before actions are verified.</strong></p>
      <p class="eng-sources voice-sources"><a href="https://openai.com/index/continuous-voice-interaction-with-gpt-live/" target="_blank" rel="noopener noreferrer">OpenAI · GPT-Live ↗</a><a href="https://docs.livekit.io/agents/logic/patterns/subagent-delegation/" target="_blank" rel="noopener noreferrer">LiveKit · talker–reasoner ↗</a><a href="https://docs.pipecat.ai/api-reference/server/services/s2s/openai-live" target="_blank" rel="noopener noreferrer">Pipecat · delegated backend ↗</a><span>Full duplex depends on the model. Architecture synthesis · October 2026.</span></p>
    `
  },
  {
    id: "layers",
    html: `
      <div class="section-heading">
        <p class="eyebrow">EVALUATION MODEL</p>
        <h2 id="layers-title">Evaluate <span>four connected layers</span></h2>
        <p>Four dimensions. Separate scores.</p>
      </div>
      <div class="layer-grid">
        <article class="layer-card cyan-card"><span class="layer-number">01</span><h3>Conversation experience</h3><p>Turn timing, interruptions, silence, audio continuity, and latency.</p></article>
        <article class="layer-card violet-card"><span class="layer-number">02</span><h3>Speech boundary</h3><p>Entity accuracy, partial stability, finalization delay, accents, noise, and disfluency.</p></article>
        <article class="layer-card amber-card"><span class="layer-number">03</span><h3>Agent execution</h3><p>Required and forbidden actions, policy checks, tool choice, fallback, and recovery.</p></article>
        <article class="layer-card green-card"><span class="layer-number">04</span><h3>Business outcome</h3><p>State transition, durable completion, and agreement between speech and backend truth.</p></article>
      </div>
      <div class="one-call"><span>ONE CALL</span><strong>FOUR LAYERS</strong><em>Not one average score.</em></div>
    `
  },
  {
    id: "timeline",
    html: `
<div class="section-heading">
        <p class="eyebrow">SYNCHRONIZED EVIDENCE</p>
        <h2 id="timeline-title">Faster at which boundary?<br><span>And did we cut the caller off?</span></h2>
        <p>Same request and model. Different endpointing.</p>
      </div>
      <div class="eng-toolbar" role="group" aria-label="Endpointing policy">
        <button type="button" data-endpoint="patient" aria-pressed="true">Wait for the full request</button>
        <button type="button" data-endpoint="eager" aria-pressed="false">Aggressive endpointing</button>
        <span class="eng-label">ILLUSTRATIVE TIMINGS · SHARED FIXTURE CLOCK</span>
      </div>
      <div class="eng-panel">
        <p class="eng-utterance">“Cancel my subscription <span class="eng-pause">… pause …</span> <mark>at the end of the billing period.</mark>”</p>
        <div id="endpointTrace" class="eng-trace" aria-label="Caller and agent event trace"></div>
        <div id="latencyReadings" class="eng-metrics" aria-live="polite"></div>
      </div>
      <p id="endpointInsight" class="takeaway" aria-live="polite"></p>
      <p class="micro-note">Fixture clock. Real runs need observer and clock mapping. Receiver audio ≠ speaker playout. Never add component p95s.</p>
      <p class="eng-sources"><a href="https://docs.livekit.io/agents/logic/turns/turn-detector/" target="_blank" rel="noopener noreferrer">Turn detection beyond VAD ↗</a></p>
    `
  }
];
