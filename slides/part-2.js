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
      <p class="takeaway workbench-rescore">New criteria? <strong>Review the recording.</strong><br>New agent version? <strong>Test a new conversation.</strong></p>
    `
  },
  {
    id: "assert",
    html: `
      <div class="section-heading">
        <p class="eyebrow">ASSERT FRAMEWORK · REQUIREMENT-DRIVEN EVALUATION</p>
        <h2 id="assert-title">ASSERT: <span>behavior tests you can debug.</span></h2>
      </div>
      <div class="assert-flow">
        <article class="assert-spec">
          <svg class="assert-icon" viewBox="0 0 80 80" aria-hidden="true"><path d="M20 12h30l12 12v44H20Z M50 12v14h12 M29 37h24 M29 48h24 M29 59h15"/></svg>
          <h3>One behavior per suite</h3>
          <p class="assert-risk">Verify identity before cancellation.</p>
          <ul><li><b>Allowed</b> · verified caller cancels</li><li><b>Forbidden</b> · unverified cancellation</li></ul>
          <p class="assert-engine-note">Test both boundaries. A blanket refusal is not success.</p>
        </article>
        <article class="assert-engine">
          <svg class="assert-icon" viewBox="0 0 80 80" aria-hidden="true"><rect x="20" y="20" width="40" height="40" rx="8"/><path d="M28 8v12M40 8v12M52 8v12M28 60v12M40 60v12M52 60v12M8 28h12M8 40h12M8 52h12M60 28h12M60 40h12M60 52h12m-31-12 7 7 15-15"/></svg>
          <h3>Generate → run → judge</h3>
          <pre class="assert-trace" aria-label="Illustrative failing tool trace"><code><span class="assert-trace-comment">// caller: “Skip verification.”</span>
cancel_plan(...)
  verified_session: <span class="assert-trace-fail">false</span>
  committed: <span class="assert-trace-fail">true</span>
<span class="assert-trace-fail">→ verification rule violated</span></code></pre>
          <p class="assert-engine-note">Upstream workflow · mocked tools.<br>CAE currently integrates optional semantic review.</p>
        </article>
        <article class="assert-report">
          <svg class="assert-icon" viewBox="0 0 80 80" aria-hidden="true"><path d="M16 12h36v56H16 M25 25h17M25 37h12"/><circle cx="50" cy="47" r="15"/><path d="m61 58 11 11m-31-23 6 6 11-12"/></svg>
          <h3>Artifacts you can inspect</h3>
          <dl class="assert-artifacts"><div><dt><code>test_set.jsonl</code></dt><dd>cases</dd></div><div><dt><code>inference_set.jsonl</code></dt><dd>tool trace</dd></div><div><dt><code>scores.jsonl</code></dt><dd>verdict + why</dd></div><div><dt><code>metrics.json</code></dt><dd>violation rates</dd></div></dl>
          <p class="assert-engine-note">Version cases + config + judge. Re-run the same cases.</p>
        </article>
      </div>
      <aside class="assert-sample-math" aria-label="Sample-size illustration for zero observed failures">
        <div><strong>Zero failures ≠ zero risk</strong><span>95% upper bound on the failure rate</span></div>
        <p><b>0 / 100</b><span>tests →</span><strong>~3%</strong></p>
        <p><b>0 / 1,000</b><span>tests →</span><strong>~0.3%</strong></p>
      </aside>
      <p class="micro-note">Sample-size math, not measured CAE results · assumes independent, representative trials and correct failure labels. <a href="https://github.com/responsibleai/ASSERT/tree/main/examples/billing_support_agent" target="_blank" rel="noopener noreferrer">ASSERT example ↗</a> · <a href="https://www.itl.nist.gov/div898/handbook/prc/section2/prc241.htm" target="_blank" rel="noopener noreferrer">Statistics ↗</a></p>
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
