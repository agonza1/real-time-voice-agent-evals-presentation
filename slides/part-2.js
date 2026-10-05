window.VOICE_EVALS_SLIDES_PART_2 = [
  {
    id: "vcon",
    html: `
      <div class="vcon-layout">
        <div class="vcon-copy">
          <p class="eyebrow">PORTABLE EVIDENCE</p>
          <h2 id="vcon-title">vCon: <span>a portable evidence envelope</span></h2>
          <p class="large-copy">Carry the conversation and evidence across systems.</p>
          <div class="draft-notice"><strong>IETF Internet-Draft.</strong> A container—not a score or verdict.</div>
          <a class="source-link" href="https://datatracker.ietf.org/doc/draft-ietf-vcon-vcon-core/" rel="noreferrer" target="_blank">Read the vCon Core draft ↗</a>
        </div>
        <article class="vcon-object">
          <div class="vcon-object-head"><b>vCon</b><span>Conversation Data Container</span></div>
          <div class="object-row"><span>PARTIES</span><b>caller · AI agent · observer</b></div>
          <div class="object-row"><span>DIALOG</span><b>audio · video · text · messages</b></div>
          <div class="object-row"><span>ANALYSIS</span><b>transcript · metrics · evaluations</b></div>
          <div class="object-row"><span>ATTACHMENTS</span><b>tool trace · logs · backend proof</b></div>
          <div class="object-row security-row"><span>SECURITY</span><b>signed · encrypted · redacted forms</b></div>
          <div class="cae-convention"><span>EVALUATION TOOL CONVENTION</span><strong>Versioned traces, checks, and state evidence</strong></div>
        </article>
      </div>
    `
  },
  {
    id: "workbench",
    html: `
      <div class="section-heading">
        <p class="eyebrow">OPEN-SOURCE WORKBENCH</p>
        <h2 id="workbench-title">Conversation Agent Evaluation <span>(CAE) tool</span></h2>
        <p>One evaluation workflow: run a target or import evidence.</p>
      </div>
      <div class="workbench-flow">
        <div class="input-stack">
          <article><span>TARGET</span><b>WebRTC · API · imported recordings</b></article>
          <article><span>EVIDENCE</span><b>audio · transcript · tool trace · final state</b></article>
          <article><span>CONTRACT</span><b>goal · actions · policy · expected outcome</b></article>
        </div>
        <span aria-hidden="true" class="flow-arrow">→</span>
        <div class="normalizer-core"><span>vCon</span><strong>Evidence normalizer</strong><small>correlate · preserve provenance</small></div>
        <span aria-hidden="true" class="flow-arrow">→</span>
        <div class="judge-stack">
          <article><span>DETERMINISTIC</span><b>tool success · state change · thresholds</b></article>
          <article><span>SEMANTIC</span><b>naturalness · relevance · communicative action</b></article>
          <article><span>REPORT</span><b>scorecard · trace · regression comparison</b></article>
        </div>
      </div>
      <div class="integration-row">
        <a href="https://github.com/agonza1/ConversationAgentEvals" rel="noreferrer" target="_blank"><b>Conversation Agent Evaluation (CAE) tool</b><span>orchestration, evidence, reports</span></a>
        <a href="https://github.com/agonza1/agentic-contact-center" rel="noreferrer" target="_blank"><b>Agentic Contact Center</b><span>optional reference target</span></a>
        <a href="https://github.com/agonza1/rtc-asr" rel="noreferrer" target="_blank"><b>rtc-asr</b><span>optional streaming ASR evidence</span></a>
        <a href="https://github.com/responsibleai/ASSERT" rel="noreferrer" target="_blank"><b>ASSERT</b><span>compatible contracts and judging</span></a>
      </div>
    `
  },
  {
    id: "contract",
    html: `
      <div class="section-heading">
        <p class="eyebrow">SCENARIO CONTRACT</p>
        <h2 id="contract-title">Define what must happen <span>before the call</span></h2>
        <p>Runtime enforces. Evaluation verifies. Scores cannot excuse critical violations.</p>
      </div>
      <div class="contract-grid">
        <article class="code-card">
          <div class="code-card-head"><span>cancellation_rescue.yaml</span><b>ILLUSTRATIVE CONTRACT</b></div>
          <pre><span class="key">goal:</span> cancel the caller's subscription
<span class="key">required_actions:</span>
  - verify identity
  - confirm cancellation scope
<span class="key">forbidden_actions:</span>
  - claim completion without proof
  - expose the tool before verification
<span class="key">expected_final_state:</span>
  subscription.status: canceled
<span class="key">rubric:</span>
  truthfulness: 35
  recovery: 25
  task_completion: 40</pre>
        </article>
        <article class="extension-card">
          <div class="code-card-head"><span>proposed extensions</span><b>PLANNED EXTENSIONS</b></div>
          <dl>
            <div><dt>allowed_claims</dt><dd>Require evidence for consequential claims.</dd></div>
            <div><dt>failure_injection</dt><dd>Tool, runtime, transport, and ASR drills.</dd></div>
            <div><dt>conversational_slos</dt><dd>Latency and interruption targets by scenario.</dd></div>
            <div><dt>recovery_contract</dt><dd>Uncertainty, fallback, escalation, or handoff.</dd></div>
          </dl>
        </article>
      </div>
    `
  },
  {
    id: "loop",
    html: `
<div class="section-heading">
        <p class="eyebrow">EVALUATION LOOP</p>
        <h2 id="loop-title">Run → Evaluate → <span>Compare</span></h2>
        <p>Evidence-backed checks. A release decision.</p>
      </div>
      <ol class="eng-loop">
        <li><span>01</span><h3>Run</h3><p>Run a target<br>or import evidence.</p><small>trace + media + state evidence</small></li>
        <li><span>02</span><h3>Evaluate</h3><p>Check evidence and behavior<br>against the contract.</p><small>findings + evidence gaps</small></li>
        <li><span>03</span><h3>Compare</h3><p>Compare matched runs.<br>Approve or hold the release.</p><small>regressions + release decision</small></li>
      </ol>
      <p class="takeaway"><strong>New rubric? Re-score the evidence. Changed agent? Run it again.</strong></p>
      <p class="micro-note">Re-scoring is not a new closed-loop test.</p>
    `
  },
  {
    id: "scorecard",
    html: `
<div class="section-heading">
        <p class="eyebrow">LAYERED RESULT</p>
        <h2 id="scorecard-title">A conclusion is only as strong<br><span>as its evidence.</span></h2>
        <p>Remove state evidence. See which conclusions remain.</p>
      </div>
      <div class="eng-toolbar">
        <label class="eng-switch"><input id="includeFinalState" type="checkbox" checked> Include authoritative final-state evidence</label>
        <button type="button" id="inspectEvidence">Inspect evidence</button>
        <span class="eng-label">ILLUSTRATIVE RUN · NOT A TOOL BENCHMARK RESULT</span>
      </div>
      <div id="evidenceStatus" class="eng-status-strip" aria-live="polite"></div>
      <div class="scorecard">
        <div class="scorecard-head"><span>RUN 0247 · OP-247 · TOOL TIMEOUT</span><b>EVIDENCE-SCOPED CHECKS</b></div>
        <div class="metric-column">
          <article><span>Conversation experience</span><div><b>Speech-end → receiver audio</b><strong>1.42 s</strong><i class="pass-pill">MEASURED</i></div><div><b>Interruption → speech stops</b><strong>380 ms</strong><i class="pass-pill">MEASURED</i></div></article>
          <article><span>Runtime behavior</span><p>Gate blocked the claim. Captured output disclosed uncertainty and offered handoff.</p></article>
        </div>
        <div class="outcome-column" aria-live="polite">
          <article><span>Business outcome</span><p id="scoreOutcome"></p></article>
          <article><span>Supported conclusion</span><p id="scoreReason"></p></article>
          <div class="classification"><b id="scoreVerdict"></b><strong>SAFE OUTPUT OBSERVED</strong></div>
        </div>
      </div>
      <p class="takeaway">Missing evidence is <strong>not</strong> a pass—and not automatically a product failure.</p>
      <dialog id="evidenceDialog" class="help-dialog eng-evidence-dialog" aria-labelledby="evidenceDialogTitle">
        <form method="dialog"><button class="dialog-close" aria-label="Close evidence">×</button><h3 id="evidenceDialogTitle">What supports this conclusion?</h3><p>Teaching artifact · not a conformant vCon export.</p><pre id="evidenceJson"></pre><div class="eng-toolbar"><button type="button" id="downloadEvidence">Download JSON</button><a href="#vcon-enrichment" id="evidenceToVcon">Where this fits in vCon →</a></div></form>
      </dialog>
    `
  },
  {
    id: "demo",
    className: "demo-slide",
    html: `
<div class="section-heading">
        <p class="eyebrow">RUNTIME CONTROL + EVALUATION</p>
        <h2 id="demo-title">Prevent false confirmations.<br><span>Then test the protection.</span></h2>
        <p>Runtime prevents unsupported claims. The evaluation tool verifies the protection.</p>
      </div>
      <div class="eng-demo-grid">
        <article class="eng-panel">
          <p class="card-kicker">SAME REQUEST · “PLEASE CANCEL MY PLAN.”</p>
          <label class="eng-select">Operation / acknowledgment<select id="operationScenario"><option value="success">Committed + acknowledged</option><option value="failure" selected>Rejected + timeout; readback confirms active</option><option value="lost">Committed + acknowledgment lost</option></select></label>
          <label class="eng-switch"><input id="runtimeGate" type="checkbox" checked> Runtime output gate enabled</label>
          <p id="gateStatus" class="eng-label"></p>
          <details class="eng-details" id="advancedDrill"><summary>Advanced: reconcile, retry, or interrupt</summary>
            <div class="eng-toolbar"><button type="button" id="reconcileOperation">Reconcile original operation</button><button type="button" id="retryOperation">Retry with same operation ID</button></div>
            <label class="eng-switch"><input id="interruptSpeech" type="checkbox"> Caller interrupts this response generation</label>
            <p class="micro-note">Stopping speech does not undo a commit. Suppress stale responses; reconcile the effect.</p>
          </details>
          <p id="operationLedger" class="eng-ledger"></p>
          <p class="fixture-label">SCRIPTED FIXTURE · NOT LIVE SIP/PSTN OR PRODUCTION MEDIA PROOF</p>
        </article>
        <article class="eng-panel eng-result" id="controlResult" aria-live="polite">
          <div class="result-topline"><span>OBSERVED BEHAVIOR</span><b id="controlVerdict"></b></div>
          <div class="eng-proposal"><span>Model proposes</span><p>“Your subscription has been canceled.”</p></div>
          <div class="agent-speech"><span>RUNTIME-APPROVED SPEECH</span><p id="allowedSpeech"></p></div>
          <div class="evidence-table"><div><span>tool observation</span><strong id="toolObservation"></strong></div><div><span>agent’s verified state</span><strong id="agentKnowledge"></strong></div><div><span>claim gate</span><strong id="claimDecision"></strong></div><div><span>backend state (fixture)</span><strong id="fixtureTruth"></strong></div></div>
          <p id="controlExplanation" class="result-summary"></p>
        </article>
      </div>
      <details class="eng-details eng-trace-detail"><summary>Trace and assertions</summary><ol id="operationTrace" class="eng-event-list"></ol><p id="controlAssertions"></p></details>
      <p class="eng-sources"><a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/" target="_blank" rel="noopener noreferrer">Timeouts and idempotency ↗</a><a href="https://docs.livekit.io/agents/logic/tools/definition/" target="_blank" rel="noopener noreferrer">Speech interruption ≠ tool cancellation ↗</a></p>
    `
  }
];
