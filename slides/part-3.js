window.VOICE_EVALS_SLIDES_PART_3 = [
  {
    id: "outcomes",
    html: `
      <div class="section-heading">
        <p class="eyebrow">TWO SEPARATE VERDICTS</p>
        <h2 id="outcomes-title">Did the task finish?<br><span>Was the response safe?</span></h2>
        <p>Judge the business state and the agent's response separately.</p>
      </div>
      <div class="outcome-matrix-wrap"><table class="outcome-matrix"><thead><tr><th scope="col">Verified business state</th><th scope="col">Safe response</th><th scope="col">Unsafe response</th></tr></thead><tbody>
        <tr><th scope="row">Task completed</th><td class="matrix-safe"><strong>Verified success</strong><span>Confirmation has supporting evidence.</span></td><td class="matrix-unsafe"><strong>Unsupported confirmation</strong><span>The claim lacked proof at speech time.</span></td></tr>
        <tr><th scope="row">Task not completed</th><td class="matrix-recovery"><strong>Safe failure</strong><span>Truthful explanation and recovery.</span></td><td class="matrix-unsafe"><strong>False success</strong><span>The agent claims an action that did not happen.</span></td></tr>
      </tbody></table></div>
      <p class="takeaway"><strong>State unknown? Keep it unknown until reconciled.</strong></p>
      <p class="micro-note">A truthful expression of uncertainty can be safe even when the task actually committed.</p>
    `
  },
  {
    id: "comparison",
    html: `
<div class="section-heading">
        <p class="eyebrow">REGRESSION → RELEASE DECISION</p>
        <h2 id="comparison-title">Faster is not enough<br><span>to approve the release.</span></h2>
        <p>Proposed change: answer sooner after a pause. Test the same calls on both versions.</p>
      </div>
      <p class="release-example-label">ILLUSTRATIVE NUMBERS · 100 TEST CALLS FOR EACH VERSION</p>
      <div class="comparison-wrap"><table class="comparison-table eng-release-table"><thead><tr><th scope="col">Measure</th><th scope="col">Current version<small>Waits longer before answering</small></th><th scope="col">Proposed change<small>Shorter wait before answering</small></th><th scope="col">Requirement to approve<small>Example thresholds</small></th></tr></thead><tbody>
        <tr><th scope="row">Response time · 95th percentile*</th><td>1,100 ms</td><td class="release-better">780 ms</td><td>≤ 1,200 ms</td></tr>
        <tr><th scope="row">Replies before the caller finishes</th><td>2 / 100</td><td class="release-regression">12 / 100</td><td>At most 3 / 100</td></tr>
        <tr><th scope="row">Cancels at the wrong time</th><td>0 / 100</td><td class="release-regression">4 / 100</td><td>0 in these test calls</td></tr>
      </tbody></table></div>
      <div id="releaseDecision" class="eng-release-decision" aria-live="polite"></div>
      <p class="micro-note">*End-of-turn decision → received audio. Early cutoffs can make this look faster. Synthetic counts—not production results or guarantees.</p>
    `
  },
  {
    id: "start",
    html: `
      <div class="section-heading">
        <p class="eyebrow">YOUR FIRST EVALUATION</p>
        <h2 id="start-title">Start with one <span>important workflow.</span></h2>
        <p>Pick a failure that matters. Make it repeatable.</p>
      </div>
      <ol class="start-steps">
        <li><span>01</span><h3>Choose the workflow</h3><p>Cancel at period end.<br>Change an address.<br>Transfer to a human.</p><small>Start with one costly failure.</small></li>
        <li><span>02</span><h3>Write the checks</h3><p>What must happen?<br>What must never happen?<br>What state proves success?</p><small>Declare the rules explicitly.</small></li>
        <li><span>03</span><h3>Exercise the failures</h3><p>Add a pause.<br>Interrupt or correct.<br>Make a tool unavailable.</p><small>Repeat across representative calls.</small></li>
        <li><span>04</span><h3>Inspect and repeat</h3><p>Read the findings.<br>Check the supporting evidence.<br>Fix and re-run.</p><small>Compare the same cases after changes.</small></li>
      </ol>
      <div class="start-action"><strong>Begin with a small test set you can explain.</strong><a data-evaluator-link href="https://github.com/agonza1/ConversationAgentEvals" target="_blank" rel="noopener noreferrer">Open the conversation evaluator ↗</a></div>
      <p class="micro-note">Evaluation checklist · use controlled test targets or imported evidence for failure cases.</p>
    `
  },
  {
    id: "boundary",
    html: `
      <div class="section-heading">
        <p class="eyebrow">APPENDIX · CAPABILITIES + ROADMAP</p>
        <h2 id="boundary-title">What the evaluation tool supports—<span>and what comes next</span></h2>
        <p>Product capabilities ≠ teaching fixtures.</p>
      </div>
      <div class="boundary-grid">
        <article class="shipped-card">
          <div class="boundary-head"><span>EVALUATION TOOL TODAY</span><b>SUPPORTED</b></div>
          <ul class="clean-list"><li>Supported target execution or imported evidence</li><li>Normalize, report, compare, export</li><li>Configured scenarios: goals, required/forbidden actions, state, rubrics</li><li>Transcript, vCon, media, trace, state, and artifact contracts</li><li>Local ASSERT-compatible evaluation; optional upstream judge</li></ul>
        </article>
        <article class="roadmap-card">
          <div class="boundary-head"><span>PLANNED IN THE TOOL</span><b>ROADMAP</b></div>
          <ul class="clean-list"><li>Claim rules and conversational SLOs</li><li>Tool, runtime, media, and ASR failure injection</li><li>SIP/SIPREC evidence adapters</li><li>Conserver enrichment, routing, and storage</li><li>Verified signing and redaction workflows</li></ul>
        </article>
      </div>
      <div class="honesty-boundary"><strong>NOT PROVEN BY THESE FIXTURES:</strong><span>generic SIP/PSTN proof</span><span>production network proof</span><span>browser-mic interoperability proof</span><span>production full-duplex barge-in</span></div>
      <p class="micro-note">The simple scenario form does not extract forbidden actions from prose. Evaluation designs are authored separately.</p>
    `
  },
  {
    id: "standards",
    html: `
      <div class="section-heading">
        <p class="eyebrow">APPENDIX · STANDARDS + RESEARCH</p>
        <h2 id="standards-title">Standards and research<br><span>behind the workbench</span></h2>
        <p>Capture and evaluation foundations—not universal latency targets.</p>
      </div>
      <div class="sources-grid">
        <article>
          <h3>Standards and specifications</h3>
          <a href="https://datatracker.ietf.org/doc/draft-ietf-vcon-vcon-core/" rel="noreferrer" target="_blank"><b>IETF vCon Core</b><span>portable conversation container · Internet-Draft</span></a>
          <a href="https://www.rfc-editor.org/rfc/rfc3550" rel="noreferrer" target="_blank"><b>RTP/RTCP · RFC 3550</b><span>media transport + feedback</span></a>
          <a href="https://www.rfc-editor.org/rfc/rfc7866" rel="noreferrer" target="_blank"><b>SIPREC · RFC 7866</b><span>session recording protocol</span></a>
          <a href="https://www.rfc-editor.org/rfc/rfc7865" rel="noreferrer" target="_blank"><b>SIPREC metadata · RFC 7865</b><span>recording metadata</span></a>
          <a href="https://www.w3.org/TR/webrtc-stats/" rel="noreferrer" target="_blank"><b>WebRTC Statistics API</b><span>browser media telemetry</span></a>
          <a href="https://www.itu.int/rec/T-REC-P.805/en" rel="noreferrer" target="_blank"><b>ITU-T P.805</b><span>conversational quality</span></a>
          <a href="https://www.itu.int/rec/T-REC-P.851/en" rel="noreferrer" target="_blank"><b>ITU-T P.851</b><span>spoken-dialogue quality</span></a>
        </article>
        <article>
          <h3>Evaluation research</h3>
          <a href="https://aclanthology.org/P97-1035/" rel="noreferrer" target="_blank"><b>PARADISE</b><span>task success plus interaction cost</span></a>
          <a href="https://arxiv.org/abs/2406.12045" rel="noreferrer" target="_blank"><b>τ-bench</b><span>tools + final database state</span></a>
          <a href="https://arxiv.org/abs/2410.17196" rel="noreferrer" target="_blank"><b>VoiceBench</b><span>speech robustness</span></a>
          <a href="https://arxiv.org/abs/2603.13686" rel="noreferrer" target="_blank"><b>τ-Voice</b><span>task-oriented voice-agent evaluation</span></a>
          <a href="https://arxiv.org/abs/2605.13841" rel="noreferrer" target="_blank"><b>EVA-Bench</b><span>real-time spoken-agent evaluation</span></a>
          <a href="https://arxiv.org/abs/2604.04847" rel="noreferrer" target="_blank"><b>Full-Duplex-Bench-v3</b><span>latency, turn-taking, and interruption</span></a>
          <a href="https://arxiv.org/abs/2306.05685" rel="noreferrer" target="_blank"><b>Judging LLM-as-a-Judge</b><span>judge bias + calibration</span></a>
        </article>
      </div>
    `
  },
  {
    id: "close",
    className: "closing-slide",
    shellClass: "closing-shell",
    html: `
      <div class="closing-main">
      <div class="closing-takeaway">
      <p class="eyebrow">THE PRODUCTION STANDARD</p>
      <h2 id="close-title" class="closing-statement">Production readiness is <span>a systems property.</span></h2>
      <p class="closing-proof">Conversation. Controls. Outcomes.<br><strong>Then re-test every change.</strong></p>
      <div class="closing-principles">
        <article><span>01</span><b>Measure the complete loop</b><p>Media, turns, actions, recovery, state.</p></article>
        <article><span>02</span><b>Verify the protections</b><p>Runtime controls enforce policy. Evaluation verifies.</p></article>
        <article><span>03</span><b>Make releases evidence-led</b><p>Keep vCon evidence. Check regressions before release.</p></article>
      </div>
      </div>
      <aside class="closing-connect" aria-labelledby="connect-title">
        <p class="eyebrow">Q&A · KEEP THE CONVERSATION GOING</p>
        <h3 id="connect-title">Let’s connect.</h3>
        <p>Discuss voice AI, explore these topics,<br>or get help building your next system.</p>
        <a class="closing-linkedin" href="https://www.linkedin.com/in/albertogonzaleztrastoy" rel="noreferrer" target="_blank">
          <img src="./assets/linkedin-qr.png" width="656" height="656" alt="Scan to open Alberto González’s LinkedIn profile">
          <strong>Alberto González</strong>
          <span>Scan to connect on LinkedIn ↗</span>
        </a>
      </aside>
      </div>
      <div class="closing-cta"><strong>DEFINE THE CONTRACT. TEST THE FAILURE PATHS. KEEP THE EVIDENCE.</strong><div><a href="https://github.com/agonza1/ConversationAgentEvals" rel="noreferrer" target="_blank">Conversation Agent Evaluation (CAE) tool ↗</a><a href="https://github.com/agonza1/real-time-voice-agent-evals-presentation" rel="noreferrer" target="_blank">presentation source ↗</a><a href="#vcon-enrichment">Revisit vCon JSON →</a><a href="#standards">Appendix: sources →</a><a href="#demo">Appendix: lost acknowledgment →</a><a href="#boundary">Appendix: capabilities →</a></div></div>
    `
  }
];
