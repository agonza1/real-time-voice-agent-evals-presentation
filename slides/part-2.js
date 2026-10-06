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
        <p class="eyebrow">APPENDIX · FAILURE-PATH EXPERIMENT</p>
        <h2 id="demo-title">When can the agent <span>confirm completion?</span></h2>
        <p>Lose the acknowledgment, then reconcile the same operation.</p>
      </div>
      <div class="eng-toolbar recovery-controls" role="group" aria-label="Lost acknowledgment experiment">
        <span class="recovery-request">“Please cancel my plan.”</span>
        <button type="button" id="resetControl">Reset: acknowledgment lost</button>
        <button type="button" id="reconcileOperation">Check operation result</button>
      </div>
      <div class="recovery-flow" aria-live="polite">
        <article class="recovery-step"><span class="recovery-step-label">01 · OPERATION EVIDENCE</span><h3>What the agent knows</h3><dl><div><dt>Tool response</dt><dd id="toolObservation"></dd></div><div><dt>Verified subscription state</dt><dd id="agentKnowledge"></dd></div></dl><p class="recovery-proof">Confirmation requires evidence for the original operation.</p></article>
        <article class="recovery-step recovery-speech"><span class="recovery-step-label">02 · RUNTIME OUTPUT</span><h3>What the caller hears</h3><p id="allowedSpeech" class="recovery-quote"></p><p id="claimDecision" class="recovery-decision"></p></article>
        <article class="recovery-step recovery-evaluation" id="controlResult"><span class="recovery-step-label">03 · EVALUATION</span><h3>Did the protection hold?</h3><p id="completionAssertion" class="recovery-assertion"></p><p id="controlVerdict" class="recovery-verdict"></p><p class="recovery-proof">Check the evidence available when speech was permitted.</p></article>
      </div>
      <p class="takeaway"><strong>A timeout does not tell you whether the action happened.</strong></p>
      <details class="eng-details" id="advancedDrill"><summary>Explore other failures and inspect the evidence</summary>
        <div class="recovery-advanced-grid">
          <div><label class="eng-select">Operation / acknowledgment<select id="operationScenario"><option value="success">Committed + acknowledged</option><option value="failure">Rejected + timeout; readback confirms active</option><option value="lost" selected>Committed + acknowledgment lost</option></select></label>
          <label class="eng-switch"><input id="runtimeGate" type="checkbox" checked> Runtime output gate enabled</label><p id="gateStatus" class="eng-label"></p>
          <button type="button" id="retryOperation">Retry the original request</button><label class="eng-switch"><input id="interruptSpeech" type="checkbox"> Caller interrupts this response generation</label><p class="micro-note">Stopping speech does not undo a commit. Suppress stale responses; reconcile the effect.</p></div>
          <div><p class="eng-proposal">Model proposal: “Your subscription has been canceled.”</p><p class="recovery-truth">Backend state (fixture): <strong id="fixtureTruth"></strong></p><p id="operationLedger" class="eng-ledger"></p><p id="controlExplanation" class="result-summary"></p><p id="controlAssertions"></p></div>
        </div>
        <ol id="operationTrace" class="eng-event-list"></ol>
      </details>
      <p class="fixture-label">SCRIPTED FIXTURE · NOT LIVE SIP/PSTN OR PRODUCTION MEDIA PROOF</p>
      <p class="eng-sources"><a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/" target="_blank" rel="noopener noreferrer">Timeouts and idempotency ↗</a><a href="https://docs.livekit.io/agents/logic/tools/definition/" target="_blank" rel="noopener noreferrer">Speech interruption ≠ tool cancellation ↗</a></p>
    `
  }
];
