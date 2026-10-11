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
          <img class="project-image livekit-image" src="./assets/projects/livekit-call-flow.webp" alt="Detail of the published LiveKit call-center architecture: SIP calling, an inbound agent, and STT, LLM, and TTS providers" loading="eager" decoding="async">
          <figcaption><p class="project-capability">SIP + warm transfers</p><h3>Agentic call center</h3><p>LiveKit voice agents handle SIP calls and warm transfers to humans.</p><a href="https://webrtc.ventures/wp-content/uploads/2026/07/Migrating-from-Kurento-to-LiveKit-in-Production.html#16" target="_blank" rel="noopener noreferrer">Production migration ↗</a></figcaption>
        </figure>
      </div>
      <p class="takeaway">WebRTC media · SIP integration · Voice agents · AI avatars<br><strong>We build the whole interaction.</strong></p>
      <p class="projects-provenance">Published project visuals · WebRTC.ventures and CETA Global · Links open the original stories.</p>
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
        <h2 id="layer-conversation-title">Measure the caller’s experience</h2>
        <div class="layer-detail-layout">
          <dl class="layer-detail-checks">
            <div><dt>Measure</dt><dd>Turn gap, interruption stop time, cut-offs, silence, and audible glitches. Report median / p95 timing alongside failure counts.</dd></div>
            <div><dt>Capture</dt><dd>Separate caller and received-agent audio with aligned timestamps and annotated turn boundaries. Runtime events help locate the delay.</dd></div>
            <div><dt>Check</dt><dd>Compare against the case’s turn-taking policy and latency budget. Token or TTS generation time alone does not measure what the caller heard.</dd></div>
          </dl>
          <section class="layer-detail-example" aria-label="Illustrative conversation timing record">
            <p class="layer-detail-label">ILLUSTRATIVE TIMING RECORD · ms</p>
            <pre><code>caller_turn_end:       3200
receiver_reply_start:  3900
turn_gap:              700

caller_interrupt:     5100
receiver_speech_stop:  5320
barge_in_stop:         220</code></pre>
            <p class="layer-detail-result">Measure at received audio. Use one aligned time base.</p>
          </section>
        </div>
        <p class="layer-detail-note">Full-duplex overlap can be intentional. Flag unwanted cut-offs or ignored interruptions; do not treat every overlap as a failure. These timestamps are teaching data, not measured results.</p>
      </dialog>
      <dialog id="layer-comprehension-details" class="judge-dialog layer-detail-dialog" aria-labelledby="layer-comprehension-title" style="--detail-accent: var(--violet)">
        <button class="dialog-close" type="button" data-close-evaluation-dialog aria-label="Close Comprehension engineering details">×</button>
        <p class="eyebrow">02 · COMPREHENSION · INTENT + ENTITIES</p>
        <h2 id="layer-comprehension-title">Track meaning across corrections</h2>
        <div class="layer-detail-layout">
          <dl class="layer-detail-checks">
            <div><dt>Measure</dt><dd>Critical entity accuracy, intent handling, and preservation of the caller’s latest correction across accents and noise.</dd></div>
            <div><dt>Capture</dt><dd>Caller audio, the expected meaning for the case, and the agent’s spoken response. Link each finding to the relevant audio or transcript spans.</dd></div>
            <div><dt>Check</dt><dd>Compare the response with the latest request. With ASR, also inspect transcript accuracy, partial revisions, and finalization delay to diagnose the failure.</dd></div>
          </dl>
          <section class="layer-detail-example" aria-label="Illustrative address correction evaluation record">
            <p class="layer-detail-label">ILLUSTRATIVE EVALUATION RECORD</p>
            <pre><code>behavior: preserve_latest_address
caller: "40 Pine St, not 14."
expected_address: "40 Pine St"
agent_readback:   "14 Pine St"

verdict: FAIL
evidence: caller 00:12 → agent 00:18</code></pre>
            <p class="layer-detail-result">A fluent reply can preserve the wrong number.</p>
          </section>
        </div>
        <p class="layer-detail-note">Evaluate observable understanding from responses and actions. Word error rate alone does not establish preserved meaning; native speech models may expose no ASR stream.</p>
      </dialog>
      <dialog id="layer-conduct-details" class="judge-dialog layer-detail-dialog" aria-labelledby="layer-conduct-title" style="--detail-accent: var(--amber)">
        <button class="dialog-close" type="button" data-close-evaluation-dialog aria-label="Close Conduct engineering details">×</button>
        <p class="eyebrow">03 · CONDUCT · REQUIREMENTS + POLICY</p>
        <h2 id="layer-conduct-title">Check decisions against the contract</h2>
        <div class="layer-detail-layout">
          <dl class="layer-detail-checks">
            <div><dt>Specify</dt><dd>Required steps, forbidden requests, permitted tool arguments, and expected recovery or escalation for this workflow.</dd></div>
            <div><dt>Capture</dt><dd>Conversation evidence supports checks on requests and explanations. Available tool traces add argument, retry, and execution-order checks.</dd></div>
            <div><dt>Check</dt><dd>Use deterministic comparisons for structured facts and calibrated semantic judgment for paraphrased behavior. Return a finding for each requirement with evidence.</dd></div>
          </dl>
          <section class="layer-detail-example" aria-label="Illustrative forbidden behavior evaluation record">
            <p class="layer-detail-label">ILLUSTRATIVE EVALUATION RECORD</p>
            <pre><code>rule: never_request_full_card_number
agent: "Read all 16 card digits."

finding: prohibited_request
verdict: FAIL
evidence_ref: agent_audio[9.0:11.5]</code></pre>
            <p class="layer-detail-result">This violation is observable in the conversation.</p>
          </section>
        </div>
        <p class="layer-detail-note">Requirements belong to the product’s policy. This example record is illustrative, not ASSERT syntax or an implemented universal CAE rule. Semantic findings still need calibration.</p>
      </dialog>
      <dialog id="layer-completion-details" class="judge-dialog layer-detail-dialog" aria-labelledby="layer-completion-title" style="--detail-accent: var(--green)">
        <button class="dialog-close" type="button" data-close-evaluation-dialog aria-label="Close Completion engineering details">×</button>
        <p class="eyebrow">04 · COMPLETION · CALLER GOAL</p>
        <h2 id="layer-completion-title">Define what “done” means</h2>
        <p class="judge-dialog-intro">Billing address change: correct address, confirmation, and next-invoice impact.</p>
        <div class="layer-detail-layout">
          <dl class="layer-detail-checks">
            <div><dt>Specify</dt><dd>Explicit goal checks and expected final state. A successful tool status may still leave the caller’s workflow incomplete.</dd></div>
            <div><dt>Capture</dt><dd>Conversation evidence for the resolution and explanation; optional receipts or a state adapter for additional persistence checks.</dd></div>
            <div><dt>Check</dt><dd>Report achieved, missing, and unobservable checks separately. A missing explanation is an observable failure even without backend access.</dd></div>
          </dl>
          <section class="layer-detail-example" aria-label="Illustrative incomplete billing address workflow record">
            <p class="layer-detail-label">ILLUSTRATIVE OUTCOME RECORD</p>
            <pre><code>goal_checks:
  address_readback: PASS  # 40 Pine St
  invoice_impact:   FAIL  # not explained
caller_goal: INCOMPLETE

# Additional state evidence, if supplied:
stored_address: "40 Pine St"
write_receipt: matched_to_this_case</code></pre>
            <p class="layer-detail-result">The address can be saved while the caller’s goal remains incomplete.</p>
          </section>
        </div>
        <p class="layer-detail-note">Keep conversation resolution and verified persistence distinct. Missing backend evidence does not make the whole call unjudgeable or automatically a failure.</p>
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
