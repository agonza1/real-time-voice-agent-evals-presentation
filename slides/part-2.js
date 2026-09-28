window.VOICE_EVALS_SLIDES_PART_2 = [
  {
    id: "vcon",
    html: `
      <div class="vcon-layout">
        <div class="vcon-copy">
          <p class="eyebrow">PORTABLE EVIDENCE</p>
          <h2 id="vcon-title">A vCon gives the conversation <span>a portable evidence envelope</span></h2>
          <p class="large-copy">One structured object can carry the interaction across systems and trust boundaries.</p>
          <div class="draft-notice"><strong>Standards status:</strong> vCon Core is an active IETF Internet-Draft and work in progress. It does not define a universal voice-agent score or verdict.</div>
          <a class="source-link" href="https://datatracker.ietf.org/doc/draft-ietf-vcon-vcon-core/" rel="noreferrer" target="_blank">Read the vCon Core draft ↗</a>
        </div>
        <article class="vcon-object">
          <div class="vcon-object-head"><b>vCon</b><span>Conversation Data Container</span></div>
          <div class="object-row"><span>PARTIES</span><b>caller · AI agent · observer</b></div>
          <div class="object-row"><span>DIALOG</span><b>audio · video · text · messages</b></div>
          <div class="object-row"><span>ANALYSIS</span><b>transcript · metrics · evaluations</b></div>
          <div class="object-row"><span>ATTACHMENTS</span><b>tool trace · logs · backend proof</b></div>
          <div class="object-row security-row"><span>SECURITY</span><b>signed · encrypted · redacted forms</b></div>
          <div class="cae-convention"><span>CAE CONVENTION</span><strong>Versioned runtime traces, assertions, metrics, and final-state proof</strong></div>
        </article>
      </div>
    `
  },
  {
    id: "workbench",
    html: `
      <div class="section-heading">
        <p class="eyebrow">OPEN-SOURCE WORKBENCH</p>
        <h2 id="workbench-title">ConversationAgentEvals evaluates <span>the full system</span></h2>
        <p>Supported target execution and imported evidence converge on one evaluation workflow.</p>
      </div>
      <div class="workbench-flow">
        <div class="input-stack">
          <article><span>TARGET</span><b>SIP · WebRTC · API · recording</b></article>
          <article><span>EVIDENCE</span><b>audio · transcript · tool trace · final state</b></article>
          <article><span>CONTRACT</span><b>goal · actions · policy · expected outcome</b></article>
        </div>
        <span aria-hidden="true" class="flow-arrow">→</span>
        <div class="normalizer-core"><span>vCon</span><strong>CAE normalizer</strong><small>correlate · package · preserve provenance</small></div>
        <span aria-hidden="true" class="flow-arrow">→</span>
        <div class="judge-stack">
          <article><span>DETERMINISTIC</span><b>tool success · state transition · SLO thresholds</b></article>
          <article><span>SEMANTIC</span><b>naturalness · relevance · communicative action</b></article>
          <article><span>REPORT</span><b>layered scorecard · trace · regression comparison</b></article>
        </div>
      </div>
      <div class="integration-row">
        <a href="https://github.com/agonza1/ConversationAgentEvals" rel="noreferrer" target="_blank"><b>ConversationAgentEvals</b><span>orchestration, evidence, reports</span></a>
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
        <p>Software owns the contract. The model still owns natural wording.</p>
      </div>
      <div class="contract-grid">
        <article class="code-card">
          <div class="code-card-head"><span>cancellation_rescue.yaml</span><b>CAE TODAY</b></div>
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
          <div class="code-card-head"><span>proposed extensions</span><b>VON ROADMAP</b></div>
          <dl>
            <div><dt>allowed_claims</dt><dd>Bind consequential language to authoritative evidence.</dd></div>
            <div><dt>failure_injection</dt><dd>Generalized tool, runtime, transport, or ASR failure drills.</dd></div>
            <div><dt>conversational_slos</dt><dd>Scenario-specific latency and interruption thresholds—not universal constants.</dd></div>
            <div><dt>recovery_contract</dt><dd>Required uncertainty disclosure, fallback, escalation, or handoff.</dd></div>
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
        <h2 id="loop-title">Run → capture → normalize → assert → <span>compare</span></h2>
        <p>The output is reusable evidence—not a one-off demo score.</p>
      </div>
      <ol class="evaluation-loop">
        <li><span>01</span><b>Define</b><small>scenario contract</small></li>
        <li><span>02</span><b>Run</b><small>supported live target or import</small></li>
        <li><span>03</span><b>Capture</b><small>synchronized evidence</small></li>
        <li><span>04</span><b>Normalize</b><small>vCon + provenance</small></li>
        <li><span>05</span><b>Assert</b><small>facts before language</small></li>
        <li><span>06</span><b>Report</b><small>layered scorecard</small></li>
        <li><span>07</span><b>Compare</b><small>baseline + regression</small></li>
        <li><span>08</span><b>Improve</b><small>agent, flow, or infra</small></li>
      </ol>
      <div class="loop-callout"><span>ONE RUN</span><strong>MANY EVALUATIONS</strong><p>Re-score the same evidence as policies, metrics, or judges evolve.</p></div>
    `
  },
  {
    id: "scorecard",
    html: `
      <div class="section-heading">
        <p class="eyebrow">LAYERED RESULT</p>
        <h2 id="scorecard-title">The task failed. <span>The behavior remained safe.</span></h2>
        <p>Do not hide that distinction behind one average score.</p>
      </div>
      <div class="scorecard">
        <div class="scorecard-head"><span>RUN 0247 · CANCELLATION / TOOL TIMEOUT</span><b>ILLUSTRATIVE</b></div>
        <div class="metric-column">
          <article><span>Conversation experience</span><div><b>End-to-end turn latency</b><strong>1.42 s</strong><i class="pass-pill">PASS</i></div><div><b>Interruption recovery</b><strong>380 ms</strong><i class="pass-pill">PASS</i></div></article>
          <article><span>Speech boundary</span><div><b>Task-critical entity survival</b><strong>100%</strong><i class="pass-pill">PASS</i></div><div><b>Final commit after audio end</b><strong>520 ms</strong><i class="pass-pill">PASS</i></div></article>
        </div>
        <div class="outcome-column">
          <article><span>Agent execution</span><p>Correct cancel tool selected; tool timed out; safe recovery language selected.</p></article>
          <article><span>Business outcome</span><p>Subscription remained active; no false confirmation; recovery or handoff offered.</p></article>
          <div class="classification"><b>TASK NOT COMPLETED</b><strong>BEHAVIOR SAFE</strong></div>
        </div>
      </div>
      <p class="micro-note">Illustrative values only. Thresholds must be calibrated per workflow, population, environment, and risk.</p>
    `
  },
  {
    id: "demo",
    className: "demo-slide",
    html: `
      <div class="section-heading">
        <p class="eyebrow">INTERACTIVE FIXTURE</p>
        <h2 id="demo-title">Break the agent <span>on purpose</span></h2>
        <p>Use the same caller turn and tool result to expose three very different outcomes.</p>
      </div>
      <div class="demo-grid">
        <article class="demo-controls">
          <div class="demo-script"><span>CALLER</span><blockquote>“Please cancel my plan. I don’t want another renewal.”</blockquote></div>
          <div class="demo-path"><i></i><span>verify → request cancellation → tool result → spoken claim → final state</span></div>
          <div class="scenario-buttons" role="group" aria-label="Select fixture outcome">
            <button data-demo-scenario="success" type="button"><i class="green-bg"></i>Business success</button>
            <button class="active" data-demo-scenario="safe" type="button"><i class="amber-bg"></i>Safe failure</button>
            <button data-demo-scenario="false" type="button"><i class="danger-bg"></i>False success</button>
          </div>
          <p class="fixture-label">SCRIPTED FIXTURE · NOT LIVE SIP/PSTN OR PRODUCTION MEDIA PROOF</p>
        </article>
        <article class="demo-result" data-state="safe" id="demoResult">
          <div class="result-topline"><span>CAE CLASSIFICATION</span><b id="demoBadge">SAFE FAILURE</b></div>
          <div class="agent-speech"><span>AGENT SAYS</span><p id="demoSpeech">“I couldn’t confirm the cancellation. I can connect you to a specialist so we don’t give you the wrong information.”</p></div>
          <div class="evidence-table">
            <div><span>tool.status</span><strong id="demoTool">timeout</strong></div>
            <div><span>subscription.status</span><strong id="demoState">active</strong></div>
            <div><span>spoken claim</span><strong id="demoClaim">uncertainty disclosed</strong></div>
            <div><span>recovery</span><strong id="demoRecovery">handoff offered</strong></div>
          </div>
          <p class="result-summary" id="demoSummary">Task incomplete, but the agent stayed truthful and recoverable.</p>
        </article>
      </div>
    `
  }
];
