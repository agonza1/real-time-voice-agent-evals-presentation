window.VOICE_EVALS_SLIDES_PART_2 = [
  {
    id: "workbench",
    html: `
      <div class="section-heading">
        <p class="eyebrow">OPEN-SOURCE WORKBENCH</p>
        <h2 id="workbench-title">Conversation Agent Evaluation <span>(CAE) tool</span></h2>
        <p>Run → Evaluate → Compare</p>
      </div>
      <div class="workbench-stages">
        <article><span class="stage-number">01</span><h3>Run</h3><p>Execute a target or import evidence.</p><dl><dt>Target</dt><dd>WebRTC · API · recordings</dd><dt>Evidence</dt><dd>Audio, transcript, tools, and final state</dd></dl></article>
        <article><span class="stage-number">02</span><h3>Evaluate</h3><p>Check behavior against the scenario contract.</p><dl><dt>Normalize</dt><dd>vCon evidence with provenance</dd><dt>Judge</dt><dd>Deterministic checks + optional semantic judgment</dd></dl></article>
        <article><span class="stage-number">03</span><h3>Compare</h3><p>Compare matched scenarios and versions.</p><dl><dt>Report</dt><dd>Scores, traces, and regressions</dd><dt>Decide</dt><dd>Evidence informs approve or hold</dd></dl></article>
      </div>
      <div class="workbench-frameworks" aria-label="Frameworks used by the evaluation tool">
        <article><h3>FastAPI + Pydantic</h3><p>Python run APIs · typed evidence</p><small>Orchestration + deterministic checks</small></article>
        <article><h3>Pipecat</h3><p>Tester agent · streaming voice transport</p><small>Caller turns + WebRTC adapters</small></article>
        <article><h3><a href="https://github.com/responsibleai/ASSERT" rel="noreferrer" target="_blank">ASSERT 0.3 ↗</a></h3><p>Behavior contracts · evaluation rubrics</p><small>Optional semantic judge over saved evidence</small></article>
      </div>
      <p class="takeaway workbench-rescore">New rubric? <strong>Re-score saved evidence.</strong> Changed agent? <strong>Run again.</strong></p>
      <p class="micro-note">Re-scoring is not a new closed-loop test.</p>
    `
  },
  {
    id: "contract",
    html: `
      <div class="section-heading">
        <p class="eyebrow">SCENARIO CONTRACT</p>
        <h2 id="contract-title">Define what must happen <span>before the call</span></h2>
        <p>Critical checks override the weighted rubric.</p>
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
          <div class="code-card-head"><span>pass criteria</span><b>ILLUSTRATIVE CHECKS</b></div>
          <dl>
            <div><dt>Before the action</dt><dd>Verify identity and confirm cancellation scope.</dd></div>
            <div><dt>Completion evidence</dt><dd>Verify the canceled state for the requested operation.</dd></div>
            <div><dt>Missing evidence</dt><dd>Express uncertainty and offer recovery.</dd></div>
            <div><dt>Critical violation</dt><dd>An unsupported completion claim fails, regardless of the score.</dd></div>
          </dl>
        </article>
      </div>
    `
  },
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
    id: "demo",
    className: "demo-slide",
    html: `
<div class="section-heading">
        <p class="eyebrow">RUNTIME CONTROL + EVALUATION</p>
        <h2 id="demo-title">Prevent false confirmations.<br><span>Then test the protection.</span></h2>
        <p>Return to the opening case. Compare proposed speech with verified state.</p>
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
