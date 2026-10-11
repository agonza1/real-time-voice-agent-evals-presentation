// Small line icons share the deck's existing visual language.
const voiceMetricIcon = (name) => {
  const paths = {
    wave: '<path d="M2 12h3l2-7 4 14 3-10 2 3h6"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    arrows: '<path d="M3 7h17l-4-4M21 17H4l4 4"/>',
    packets: '<rect x="3" y="4" width="6" height="6" rx="1"/><rect x="15" y="4" width="6" height="6" rx="1"/><rect x="3" y="15" width="6" height="6" rx="1"/><path d="m15 15 6 6m0-6-6 6"/>',
    speaker: '<path d="M3 9h4l5-4v14l-5-4H3ZM16 9a5 5 0 0 1 0 6m3-9a9 9 0 0 1 0 12"/>',
    text: '<path d="M4 5h16M12 5v14M8 19h8"/>',
    pin: '<path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z"/><circle cx="12" cy="10" r="2"/>',
    target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
    reset: '<path d="M3 11a9 9 0 1 1 3 8M3 4v7h7"/>',
    shield: '<path d="m12 3 8 3v6c0 5-8 9-8 9s-8-4-8-9V6Z"/><path d="m8 12 3 3 5-6"/>',
    code: '<path d="m7 6-5 6 5 6m10-12 5 6-5 6M14 4l-4 16"/>',
    list: '<path d="m3 6 1 1 2-3M9 6h12m-18 7 1 1 2-3M9 13h12M3 20h3m3 0h12"/>',
    check: '<circle cx="12" cy="12" r="9"/><path d="m7 12 3 3 7-7"/>',
    database: '<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 4 16 4 16 0V5M4 12c0 4 16 4 16 0"/>',
    handoff: '<path d="M3 12h18m-6-6 6 6-6 6M3 5v14"/>',
    bars: '<path d="M4 20V10m8 10V4m8 16v-7"/>'
  };
  return `<svg class="layer-metric-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">${paths[name]}</svg>`;
};

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
            <a class="primary-link" data-evaluator-link href="https://github.com/agonza1/ConversationAgentEvals" rel="noreferrer" target="_blank">Open the conversation evaluator ↗</a>
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
      <div class="story-bridge"><p><span>RUNTIME CONTROL</span><strong>Build the controls.</strong></p><span class="story-arrow" aria-hidden="true">→</span><p><span>Conversation Agent Evaluation (CAE) tool</span><strong>Test that they hold as the system changes.</strong></p></div>
    `
  },
  {
    id: "projects",
    className: "projects-slide",
    html: `
      <div class="section-heading">
        <p class="eyebrow">WHAT WE BUILD · WEBRTC.VENTURES</p>
        <h2 id="projects-title">We build <span>real-time voice systems.</span></h2>
      </div>
      <div class="projects-grid">
        <figure class="project-example">
          <img class="project-image" src="./assets/projects/ava-meeting.png" alt="Published AVA Intellect UI for configuring an AI agent, its knowledge bases, and tools" loading="eager" decoding="async">
          <figcaption><p class="project-capability">Voice agents + meeting integration</p><h3>Meeting collaborators</h3><p>AVA Intellect: voice agents join meetings and use shared knowledge.</p><a href="https://webrtc.ventures/successes/ai-voice-agents-that-collaborate-and-contribute/" target="_blank" rel="noopener noreferrer">AVA success story ↗</a></figcaption>
        </figure>
        <figure class="project-example">
          <img class="project-image surgical-image" src="./assets/projects/surgical-dashboard.jpg" alt="Published surgical-audio project visual showing transcript, sentiment, and checklist panels" loading="eager" decoding="async">
          <figcaption><p class="project-capability">Real-time audio capture</p><h3>Surgical audio</h3><p>Capture operating-room conversations for transcription and review.</p><a href="https://webrtc.ventures/successes/audio-listening-device-to-improve-surgical-outcomes/" target="_blank" rel="noopener noreferrer">Audio success story ↗</a></figcaption>
        </figure>
        <figure class="project-example">
          <img class="project-image" src="./assets/projects/ceta-screens.png" alt="CETA Global's published EBT-Sim visual showing an avatar roleplay session and simulation evaluation" loading="eager" decoding="async">
          <figcaption><p class="project-capability">WebRTC + AI orchestration</p><h3>Avatar roleplay</h3><p>CETA Global: practice clinical conversations with live AI coaching.</p><a href="https://webrtc.ventures/successes/ai-roleplay-training-simulator-case-study/" target="_blank" rel="noopener noreferrer">CETA success story ↗</a></figcaption>
        </figure>
        <figure class="project-example">
          <img class="project-image livekit-image" src="./assets/projects/livekit-warm-transfer-illustration.png" alt="Generated illustration of a SIP caller connected to a LiveKit voice agent, with a context handoff and continuing call to a human" width="1774" height="887" loading="eager" decoding="async">
          <figcaption><p class="project-capability">SIP + warm transfers</p><h3>Agentic call center</h3><p>LiveKit voice agents handle SIP calls and warm transfers to humans.</p><a href="https://webrtc.ventures/wp-content/uploads/2026/07/Migrating-from-Kurento-to-LiveKit-in-Production.html#16" target="_blank" rel="noopener noreferrer">Production migration ↗</a></figcaption>
        </figure>
      </div>
      <p class="takeaway">WebRTC media · SIP integration · Voice agents · AI avatars<br><strong>We build the whole interaction.</strong></p>
      <p class="projects-provenance">Project visuals: WebRTC.ventures + CETA Global · Call-center illustration generated.</p>
    `
  },
  {
    id: "problem",
    html: `
      <div class="section-heading">
        <p class="eyebrow">THE PROBLEM</p>
        <h2 id="problem-title">A fluent answer can hide <span>the wrong outcome.</span></h2>
        <p>Building these systems taught us: a fluent answer is only part of a successful call.</p>
      </div>
      <div class="truth-split">
        <article class="truth-card surface-card">
          <p class="card-kicker">CALLER REQUEST · CANCEL AT PERIOD END</p>
          <blockquote>“Your subscription has been canceled.”</blockquote>
          <div class="quality-tags"><span>polite</span><span>relevant</span><span>confident</span></div>
          <div class="status-line pass"><span>LANGUAGE-ONLY CHECK</span><strong>PASS</strong></div>
        </article>
        <div aria-hidden="true" class="versus">≠</div>
        <article class="truth-card state-card">
          <p class="card-kicker">AUTHORITATIVE STATE</p>
          <div class="tool-row"><code>cancel_subscription</code><strong class="danger">→ TIMEOUT</strong></div>
          <div class="database-state"><span>Matched readback: cancellation_scheduled</span><strong>FALSE</strong></div>
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
        <p class="eyebrow">THE SYSTEM · REAL-TIME VOICE ENGINEERING</p>
        <h2 id="system-title">A conventional voice agent is <span>a chain of systems</span></h2>
        <p>Connect callers. Manage interruptions. Verify actions before confirming.</p>
      </div>
      <ol class="system-flow" aria-label="Caller input through connection, turn detection, speech recognition, agent, control, and speech generation">
        <li><span>01</span><b>Caller</b><small>speech</small></li>
        <li><span>02</span><b>Connection</b><small>SIP signaling · RTP / WebRTC audio</small></li>
        <li><span>03</span><b>Turn</b><small>VAD / EOT</small></li>
        <li><span>04</span><b>STT</b><small>partials / final</small></li>
        <li class="model-node"><span>05</span><b>Agent</b><small>model + flow</small></li>
        <li><span>06</span><b>Control</b><small>policy / tools</small></li>
        <li><span>07</span><b>TTS</b><small>speech out</small></li>
      </ol>
      <div class="system-branches">
        <div class="system-return" aria-label="Return audio: TTS sends speech through the audio connection back to the Caller">
          <span class="system-path-label">RETURN AUDIO</span>
          <p><b>Caller</b><span aria-hidden="true">←</span><b>Audio connection</b><span aria-hidden="true">←</span><b>TTS</b></p>
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
    id: "dual-voice-architecture",
    ...window.VOICE_EVALS_DUAL_VOICE_OPTIONS.architecture
  },
  {
    id: "dual-voice",
    ...window.VOICE_EVALS_DUAL_VOICE_OPTIONS.sequence
  },
  {
    id: "layers",
    html: `
      <div class="section-heading">
        <p class="eyebrow">EVALUATION MODEL</p>
        <h2 id="layers-title">One call. <span>Four Cs.</span></h2>
      </div>
      <div class="layer-grid">
        <article class="layer-card cyan-card"><button class="layer-card-open" type="button" data-evaluation-dialog="layer-conversation-details" aria-controls="layer-conversation-details" aria-haspopup="dialog" aria-label="Conversation engineering details"><span aria-hidden="true">↗</span></button><span class="layer-number">01</span><svg class="layer-symbol" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M14 14H7l-4 3V5a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v5a4 4 0 0 1-4 4Z"/><path d="M8 17v1a2 2 0 0 0 2 2h7l4 3V11a2 2 0 0 0-2-2"/></svg><h3>Conversation</h3><p>Did the conversation flow naturally?</p></article>
        <article class="layer-card violet-card"><button class="layer-card-open" type="button" data-evaluation-dialog="layer-comprehension-details" aria-controls="layer-comprehension-details" aria-haspopup="dialog" aria-label="Comprehension engineering details"><span aria-hidden="true">↗</span></button><span class="layer-number">02</span><svg class="layer-symbol" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M6 8.5a7 7 0 0 1 14 0c0 4-2 5-4 7-1 1-1 2-2 4a4 4 0 0 1-7-1M10 8.5a3 3 0 0 1 6 0c0 2-2 2.5-3 3.5v2"/></svg><h3>Comprehension</h3><p>Did it understand the caller correctly?</p></article>
        <article class="layer-card amber-card"><button class="layer-card-open" type="button" data-evaluation-dialog="layer-conduct-details" aria-controls="layer-conduct-details" aria-haspopup="dialog" aria-label="Conduct engineering details"><span aria-hidden="true">↗</span></button><span class="layer-number">03</span><svg class="layer-symbol" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="m9 3 .5-1h5l.5 3 2 1 2.8-1 2.5 4.3-2.3 2v2.4l2.3 2-2.5 4.3-2.8-1-2 1-.5 3h-5l-.5-3-2-1-2.8 1-2.5-4.3 2.3-2v-2.4l-2.3-2L3.7 4l2.8 1 2-1Z"/><circle cx="12" cy="12" r="3.5"/></svg><h3>Conduct</h3><p>Did it take the right actions and follow the rules?</p></article>
        <article class="layer-card green-card"><button class="layer-card-open" type="button" data-evaluation-dialog="layer-completion-details" aria-controls="layer-completion-details" aria-haspopup="dialog" aria-label="Completion engineering details"><span aria-hidden="true">↗</span></button><span class="layer-number">04</span><svg class="layer-symbol" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="9"/><path d="m7.5 12 3 3 6-6"/></svg><h3>Completion</h3><p>Was the caller’s goal achieved?</p></article>
      </div>
      <div class="one-call"><strong>Evaluate conversation quality, understanding, actions, and outcomes separately.</strong><em>Select a dimension for engineering details ↗</em></div>
      <dialog id="layer-conversation-details" class="judge-dialog layer-detail-dialog" aria-labelledby="layer-conversation-title" style="--detail-accent: var(--cyan)">
        <button class="dialog-close" type="button" data-close-evaluation-dialog aria-label="Close Conversation engineering details">×</button>
        <p class="eyebrow">01 · CONVERSATION · MEDIA + TURN TIMING</p>
        <h2 id="layer-conversation-title">Clear audio. Natural turns.</h2>
        <dl class="layer-media-stats" aria-label="WebRTC audio quality statistics reference">
          <div><dt>${voiceMetricIcon('wave')}Jitter</dt><dd>Arrival variation · ms</dd></div>
          <div><dt>${voiceMetricIcon('arrows')}RTT</dt><dd>ICE round trip · ms</dd></div>
          <div><dt>${voiceMetricIcon('bars')}Bitrate</dt><dd>RTP payload · kb/s</dd></div>
          <div><dt>${voiceMetricIcon('packets')}Packet loss</dt><dd>Missing packets · %</dd></div>
          <div><dt>${voiceMetricIcon('packets')}Discards</dt><dd>Outside playout window</dd></div>
          <div><dt>${voiceMetricIcon('speaker')}Concealment</dt><dd>Synthesized gap-fill</dd></div>
          <div><dt>${voiceMetricIcon('clock')}Buffer delay</dt><dd>Playout buffering · ms</dd></div>
          <div><dt>${voiceMetricIcon('wave')}Audio level</dt><dd>Signal · 0–1 linear</dd></div>
        </dl>
        <div class="layer-media-bottom">
          <section class="layer-media-timing" aria-label="Illustrative conversation timing calculations">
            <p class="layer-detail-label">TURN-TAKING · ILLUSTRATIVE</p>
            <div class="layer-timing-pair"><div>${voiceMetricIcon('clock')}<strong>700 <small>ms</small></strong><span>Caller end → agent audio</span></div><div>${voiceMetricIcon('speaker')}<strong>220 <small>ms</small></strong><span>Interruption → agent stops</span></div></div>
          </section>
          <section class="layer-media-capture" aria-label="Capture and interpretation guidance">
            <p class="layer-detail-label">CAPTURE → CORRELATE</p>
            <pre><code>const stats = await pc.getStats();
// interval deltas ↔ audio timeline</code></pre>
            <p>Keep direction, codec, stream ID + time.</p>
          </section>
        </div>
        <p class="layer-detail-note">Reference metrics · no live capture · RTT ≠ one-way delay. <a href="https://www.w3.org/TR/webrtc-stats/" target="_blank" rel="noopener noreferrer">WebRTC definitions ↗</a></p>
      </dialog>
      <dialog id="layer-comprehension-details" class="judge-dialog layer-detail-dialog" aria-labelledby="layer-comprehension-title" style="--detail-accent: var(--violet)">
        <button class="dialog-close" type="button" data-close-evaluation-dialog aria-label="Close Comprehension engineering details">×</button>
        <p class="eyebrow">02 · COMPREHENSION · INTENT + ENTITIES</p>
        <h2 id="layer-comprehension-title">Right words. Right meaning.</h2>
        <dl class="layer-media-stats layer-metric-six" aria-label="Speech recognition and comprehension metrics">
          <div><dt>${voiceMetricIcon('text')}WER</dt><dd>Word errors<code>100 × (S + D + I) / words</code></dd></div>
          <div><dt>${voiceMetricIcon('text')}CER</dt><dd>Character errors<code>100 × edits / characters</code></dd></div>
          <div><dt>${voiceMetricIcon('pin')}Entities</dt><dd>Address · amount · date</dd></div>
          <div><dt>${voiceMetricIcon('target')}Intent</dt><dd>Request ↔ response</dd></div>
          <div><dt>${voiceMetricIcon('reset')}Corrections</dt><dd>Latest instruction retained</dd></div>
          <div><dt>${voiceMetricIcon('clock')}Streaming ASR</dt><dd>Revisions + finalization · ms</dd></div>
        </dl>
        <div class="layer-media-bottom">
          <section class="layer-media-timing" aria-label="Illustrative word error rate and critical entity example">
            <p class="layer-detail-label">EXCERPT · 20-WORD TEACHING CASE</p>
            <pre><code>reference: “… forty Pine Street …”
ASR:       “… fourteen Pine Street …”
1 substitution / 20 words → WER = 5%</code></pre>
          </section>
          <section aria-label="Comprehension scoring inputs">
            <p class="layer-detail-label">COMPARE WORDS → CHECK RESPONSE</p>
            <div class="layer-evidence-sequence"><span>${voiceMetricIcon('speaker')}Human reference</span><b aria-hidden="true">↔</b><span>${voiceMetricIcon('text')}ASR output</span><b aria-hidden="true">→</b><span>${voiceMetricIcon('target')}Agent response</span></div>
            <p class="layer-metric-insight">Low WER can hide a critical error.</p>
          </section>
        </div>
        <p class="layer-detail-note">Illustrative ASR · WER / CER require a reference transcript. No ASR? Check audio + responses. <a href="https://github.com/usnistgov/SCTK/blob/master/doc/sclite.htm" target="_blank" rel="noopener noreferrer">Scoring definitions ↗</a></p>
      </dialog>
      <dialog id="layer-conduct-details" class="judge-dialog layer-detail-dialog" aria-labelledby="layer-conduct-title" style="--detail-accent: var(--amber)">
        <button class="dialog-close" type="button" data-close-evaluation-dialog aria-label="Close Conduct engineering details">×</button>
        <p class="eyebrow">03 · CONDUCT · REQUIREMENTS + POLICY</p>
        <h2 id="layer-conduct-title">Right action. Right arguments.</h2>
        <dl class="layer-media-stats layer-metric-six" aria-label="Agent execution checks">
          <div><dt>${voiceMetricIcon('list')}Required steps</dt><dd>Rule → verdict + evidence</dd></div>
          <div><dt>${voiceMetricIcon('shield')}Policy</dt><dd>Violations by rule + severity</dd></div>
          <div><dt>${voiceMetricIcon('code')}Tool contract</dt><dd>Tool · schema · arguments</dd></div>
          <div><dt>${voiceMetricIcon('arrows')}Action order</dt><dd>Precondition → side effect</dd></div>
          <div><dt>${voiceMetricIcon('reset')}Recovery</dt><dd>Retry · reconcile · escalate</dd></div>
          <div><dt>${voiceMetricIcon('speaker')}Claims</dt><dd>Evidence before speech</dd></div>
        </dl>
        <section class="layer-contract-trace" aria-label="Illustrative confirmed-address guard before tool execution">
          <p class="layer-detail-label">ILLUSTRATIVE · BEFORE EXECUTION</p>
          <ol class="layer-trace-steps layer-conduct-sequence">
            <li>${voiceMetricIcon('pin')}<span>NEW ADDRESS</span><strong>“40 Pine St”</strong></li>
            <li>${voiceMetricIcon('speaker')}<span>AGENT READBACK</span><strong>“40 Pine St?”</strong></li>
            <li>${voiceMetricIcon('check')}<span>CALLER CONFIRMS</span><strong class="layer-check-pass">“Yes” ✓</strong></li>
            <li>${voiceMetricIcon('code')}<span>PROPOSED REQUEST</span><pre><code>update_address({
  address: "14 Pine St"
})</code></pre></li>
            <li>${voiceMetricIcon('shield')}<span>ARGUMENT GUARD</span><strong class="layer-check-pass">Valid format ✓</strong><strong class="layer-check-fail">Wrong address ✕</strong></li>
          </ol>
        </section>
        <p class="layer-metric-insight layer-conduct-rule"><code>request.address === confirmedNewAddress</code><strong>Mismatch → block before execution.</strong></p>
        <p class="layer-detail-note">Store the new address after readback + caller confirmation. Compare the tool value with it before execution: 40 ≠ 14.</p>
      </dialog>
      <dialog id="layer-completion-details" class="judge-dialog layer-detail-dialog" aria-labelledby="layer-completion-title" style="--detail-accent: var(--green)">
        <button class="dialog-close" type="button" data-close-evaluation-dialog aria-label="Close Completion engineering details">×</button>
        <p class="eyebrow">04 · COMPLETION · CALLER GOAL</p>
        <h2 id="layer-completion-title">Did we finish the job?</h2>
        <dl class="layer-media-stats layer-metric-six" aria-label="Workflow completion measures">
          <div><dt>${voiceMetricIcon('target')}Goal</dt><dd>Pass · fail · unresolved</dd></div>
          <div><dt>${voiceMetricIcon('clock')}Resolution time</dt><dd>Start → goal met</dd></div>
          <div><dt>${voiceMetricIcon('database')}Final state</dt><dd>Expected ↔ observed</dd></div>
          <div><dt>${voiceMetricIcon('speaker')}Claim vs result</dt><dd>Spoken ↔ confirmed</dd></div>
          <div><dt>${voiceMetricIcon('handoff')}Handoff</dt><dd>Offered ≠ connected</dd></div>
          <div><dt>${voiceMetricIcon('bars')}Coverage</dt><dd>Known checks + unresolved</dd></div>
        </dl>
        <div class="layer-media-bottom">
          <section class="layer-media-timing" aria-label="Illustrative billing address goal contract">
            <p class="layer-detail-label">ILLUSTRATIVE GOAL CONTRACT</p>
            <pre><code>goal = correct_readback
       AND invoice_impact_explained</code></pre>
          </section>
          <section class="layer-goal-checks" aria-label="Illustrative goal contract findings">
            <p class="layer-detail-label">FINDINGS · BILLING ADDRESS CHANGE</p>
            <div><span>Readback: 40 Pine St</span><strong class="layer-check-pass">PASS ✓</strong></div>
            <div><span>Invoice impact: not explained</span><strong class="layer-check-fail">FAIL ✕</strong></div>
            <p class="layer-metric-insight">One required step missing → incomplete.</p>
          </section>
        </div>
        <p class="layer-detail-note">Illustrative conversation goal · backend persistence unproven · report unresolved checks separately.</p>
      </dialog>
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
