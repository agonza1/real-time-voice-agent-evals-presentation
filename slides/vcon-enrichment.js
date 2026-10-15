window.VOICE_EVALS_VCON_ENRICHMENT = [
  {
    id: "vcon-enrichment",
    className: "vcon-enrichment-slide",
    html: `
      <div class="section-heading vcon-enrichment-heading">
        <p class="eyebrow">ILLUSTRATIVE EVIDENCE + REVIEW</p>
        <h2 id="vcon-enrichment-title">Voice-agent evidence <span>inside vCon</span></h2>
        <p>Capture → calculate → assess. Link each result to its inputs.</p>
      </div>
      <div class="vcon-json-layout" data-json-explorer data-json-focus="evaluation">
        <article class="vcon-json-panel" aria-label="Abbreviated illustrative vCon pseudo JSON">
          <div class="vcon-json-toolbar">
            <div class="json-window-title"><i></i><i></i><i></i><span>vcon-run-0247.json</span></div>
            <b>PSEUDO JSON · DRAFT-ALIGNED REVIEW EXAMPLE</b>
          </div>
          <pre class="vcon-json-code"><code><span class="json-line json-neutral"><span class="json-punctuation">{</span></span>
<span class="json-line json-core">  <span class="json-key">"vcon"</span><span class="json-punctuation">:</span> <span class="json-string">"0.4.0"</span><span class="json-punctuation">,</span></span>
<span class="json-line json-core">  <span class="json-key">"uuid"</span><span class="json-punctuation">:</span> <span class="json-string">"4b4f…"</span><span class="json-punctuation">,</span></span>
<span class="json-line json-core">  <span class="json-key">"parties"</span><span class="json-punctuation">:</span> <span class="json-punctuation">[</span> <span class="json-ellipsis">… Caller, Agent, Test collector …</span> <span class="json-punctuation">]</span><span class="json-punctuation">,</span></span>
<span class="json-line json-neutral json-skip">  <span class="json-ellipsis">… envelope fields omitted …</span></span>
<span class="json-line json-dialog">  <span class="json-key">"dialog"</span><span class="json-punctuation">:</span> <span class="json-punctuation">[</span></span>
<span class="json-line json-dialog">    <span class="json-punctuation">{</span> <span class="json-key">"type"</span><span class="json-punctuation">:</span> <span class="json-string">"text"</span><span class="json-punctuation">,</span> <span class="json-key">"parties"</span><span class="json-punctuation">:</span> <span class="json-punctuation">[</span><span class="json-number">0</span><span class="json-punctuation">]</span><span class="json-punctuation">,</span></span>
<span class="json-line json-dialog">      <span class="json-key">"body"</span><span class="json-punctuation">:</span> <span class="json-string">"Please cancel my plan."</span><span class="json-punctuation">,</span> … <span class="json-punctuation">}</span><span class="json-punctuation">,</span></span>
<span class="json-line json-dialog">    <span class="json-punctuation">{</span> <span class="json-key">"type"</span><span class="json-punctuation">:</span> <span class="json-string">"text"</span><span class="json-punctuation">,</span> <span class="json-key">"parties"</span><span class="json-punctuation">:</span> <span class="json-punctuation">[</span><span class="json-number">1</span><span class="json-punctuation">]</span><span class="json-punctuation">,</span></span>
<span class="json-line json-dialog">      <span class="json-key">"body"</span><span class="json-punctuation">:</span> <span class="json-string">"I couldn’t confirm cancellation."</span><span class="json-punctuation">,</span> … <span class="json-punctuation">}</span></span>
<span class="json-line json-dialog">  <span class="json-punctuation">]</span><span class="json-punctuation">,</span></span>
<span class="json-line json-transcript">  <span class="json-key">"attachments"</span><span class="json-punctuation">:</span> <span class="json-punctuation">[</span></span>
<span class="json-line json-transcript">    <span class="json-punctuation">{</span> <span class="json-key">"party"</span><span class="json-punctuation">:</span> <span class="json-number">2</span><span class="json-punctuation">,</span> <span class="json-key">"dialog"</span><span class="json-punctuation">:</span> <span class="json-number">0</span><span class="json-punctuation">,</span> <span class="json-key">"start"</span><span class="json-punctuation">:</span> <span class="json-string">"2026-10-14T14:50:00Z"</span><span class="json-punctuation">,</span></span>
<span class="json-line json-transcript">      <span class="json-key">"body"</span><span class="json-punctuation">:</span> <span class="json-punctuation">{</span> <span class="json-key">"asr"</span><span class="json-punctuation">:</span> <span class="json-punctuation">{</span> <span class="json-key">"confidence"</span><span class="json-punctuation">:</span> <span class="json-punctuation">{</span> <span class="json-key">"value"</span><span class="json-punctuation">:</span> <span class="json-number">0.92</span> <span class="json-punctuation">}</span><span class="json-punctuation">,</span> <span class="json-ellipsis">… }, …</span> <span class="json-punctuation">}</span><span class="json-punctuation">,</span> … <span class="json-punctuation">}</span><span class="json-punctuation">,</span></span>
<span class="json-line json-transcript">    <span class="json-punctuation">{</span> <span class="json-key">"party"</span><span class="json-punctuation">:</span> <span class="json-number">2</span><span class="json-punctuation">,</span> <span class="json-key">"dialog"</span><span class="json-punctuation">:</span> <span class="json-number">1</span><span class="json-punctuation">,</span></span>
<span class="json-line json-transcript">      <span class="json-key">"body"</span><span class="json-punctuation">:</span> <span class="json-punctuation">{</span> <span class="json-key">"rtc_stats"</span><span class="json-punctuation">:</span> <span class="json-punctuation">{</span> <span class="json-ellipsis">… raw snapshots …</span> <span class="json-punctuation">}</span><span class="json-punctuation">,</span></span>
<span class="json-line json-transcript">        <span class="json-key">"tool_events"</span><span class="json-punctuation">:</span> <span class="json-punctuation">[</span> <span class="json-ellipsis">… request + timeout …</span> <span class="json-punctuation">]</span><span class="json-punctuation">,</span></span>
<span class="json-line json-transcript">        <span class="json-key">"coverage"</span><span class="json-punctuation">:</span> <span class="json-punctuation">{</span> <span class="json-key">"backend_state"</span><span class="json-punctuation">:</span> <span class="json-string">"not_captured"</span><span class="json-punctuation">,</span> <span class="json-ellipsis">… }, …</span> <span class="json-punctuation">}</span><span class="json-punctuation">,</span> … <span class="json-punctuation">}</span></span>
<span class="json-line json-transcript">  <span class="json-punctuation">]</span><span class="json-punctuation">,</span></span>
<span class="json-line json-evaluation">  <span class="json-key">"analysis"</span><span class="json-punctuation">:</span> <span class="json-punctuation">[</span></span>
<span class="json-line json-evaluation">    <span class="json-punctuation">{</span> <span class="json-key">"type"</span><span class="json-punctuation">:</span> <span class="json-string">"report"</span><span class="json-punctuation">,</span> <span class="json-key">"dialog"</span><span class="json-punctuation">:</span> <span class="json-punctuation">[</span><span class="json-number">0</span><span class="json-punctuation">,</span> <span class="json-number">1</span><span class="json-punctuation">]</span><span class="json-punctuation">,</span> <span class="json-key">"attachment"</span><span class="json-punctuation">:</span> <span class="json-punctuation">[</span><span class="json-number">0</span><span class="json-punctuation">,</span> <span class="json-number">1</span><span class="json-punctuation">]</span><span class="json-punctuation">,</span></span>
<span class="json-line json-evaluation">      <span class="json-key">"vendor"</span><span class="json-punctuation">:</span> <span class="json-string">"Example evaluator"</span><span class="json-punctuation">,</span> <span class="json-key">"schema"</span><span class="json-punctuation">:</span> <span class="json-string">"illustrative-checks-v1"</span><span class="json-punctuation">,</span></span>
<span class="json-line json-evaluation">      <span class="json-key">"body"</span><span class="json-punctuation">:</span> <span class="json-punctuation">{</span> <span class="json-key">"checks"</span><span class="json-punctuation">:</span> <span class="json-punctuation">[</span></span>
<span class="json-line json-evaluation">        <span class="json-punctuation">{</span> <span class="json-key">"metric"</span><span class="json-punctuation">:</span> <span class="json-string">"response_gap"</span><span class="json-punctuation">,</span> <span class="json-key">"value"</span><span class="json-punctuation">:</span> <span class="json-number">700</span><span class="json-punctuation">,</span> <span class="json-key">"unit"</span><span class="json-punctuation">:</span> <span class="json-string">"ms"</span><span class="json-punctuation">,</span></span>
<span class="json-line json-evaluation">          <span class="json-key">"evidence"</span><span class="json-punctuation">:</span> <span class="json-punctuation">[</span><span class="json-string">"/attachments/0/body/events/0"</span><span class="json-punctuation">,</span> <span class="json-ellipsis">…] }, …</span> <span class="json-punctuation">]</span><span class="json-punctuation">,</span></span>
<span class="json-line json-evaluation">        <span class="json-key">"final_state"</span><span class="json-punctuation">:</span> <span class="json-punctuation">{</span> <span class="json-key">"complete"</span><span class="json-punctuation">:</span> <span class="json-boolean">null</span><span class="json-punctuation">,</span> <span class="json-key">"outcome"</span><span class="json-punctuation">:</span> <span class="json-string">"unknown"</span> <span class="json-punctuation">}</span><span class="json-punctuation">,</span> <span class="json-ellipsis">… }, …</span> <span class="json-punctuation">}</span><span class="json-punctuation">,</span></span>
<span class="json-line json-evaluation">    <span class="json-punctuation">{</span> <span class="json-key">"type"</span><span class="json-punctuation">:</span> <span class="json-string">"report"</span><span class="json-punctuation">,</span> <span class="json-key">"schema"</span><span class="json-punctuation">:</span> <span class="json-string">"illustrative-judge-v1"</span><span class="json-punctuation">,</span></span>
<span class="json-line json-evaluation">      <span class="json-key">"body"</span><span class="json-punctuation">:</span> <span class="json-punctuation">{</span> <span class="json-key">"status"</span><span class="json-punctuation">:</span> <span class="json-string">"not_run"</span><span class="json-punctuation">,</span> <span class="json-key">"assessments"</span><span class="json-punctuation">:</span> <span class="json-punctuation">[</span><span class="json-punctuation">]</span><span class="json-punctuation">,</span> <span class="json-ellipsis">… }, …</span> <span class="json-punctuation">}</span></span>
<span class="json-line json-evaluation">  <span class="json-punctuation">]</span></span>
<span class="json-line json-neutral"><span class="json-punctuation">}</span></span></code></pre>
        </article>
        <aside class="vcon-json-inspector" aria-label="Interactive vCon section magnifier">
          <div class="json-zoom-square" aria-live="polite" aria-label="Magnified vCon section">
            <article class="json-zoom-view" data-json-zoom-view="core" aria-hidden="true">
              <span class="zoom-kicker">CORE VCON · DRAFT-04</span>
              <h3>Portable envelope</h3>
              <pre><code><span class="json-key">"vcon"</span><span class="json-punctuation">:</span> <span class="json-string">"0.4.0"</span><span class="json-punctuation">,</span>
<span class="json-key">"parties"</span><span class="json-punctuation">:</span> <span class="json-punctuation">[</span>
  <span class="json-punctuation">{</span> <span class="json-key">"name"</span><span class="json-punctuation">:</span> <span class="json-string">"Caller"</span> <span class="json-punctuation">}</span><span class="json-punctuation">,</span>
  <span class="json-punctuation">{</span> <span class="json-key">"name"</span><span class="json-punctuation">:</span> <span class="json-string">"Agent"</span> <span class="json-punctuation">}</span><span class="json-punctuation">,</span>
  <span class="json-punctuation">{</span> <span class="json-key">"name"</span><span class="json-punctuation">:</span> <span class="json-string">"Test collector"</span> <span class="json-punctuation">}</span>
<span class="json-punctuation">]</span></code></pre>
              <p class="json-dialog-pointer">Collector is the attachment contributor.</p>
            </article>
            <article class="json-zoom-view" data-json-zoom-view="dialog" aria-hidden="true">
              <span class="zoom-kicker">DIALOG · CONVERSATION CONTENT</span>
              <h3>Keep what was said</h3>
              <dl class="json-review-trail">
                <div><dt>Caller · <code>/dialog/0/body</code></dt><dd>“Please cancel my plan.”</dd></div>
                <div><dt>Agent · <code>/dialog/1/body</code></dt><dd>“I couldn’t confirm cancellation.”</dd></div>
                <div><dt>Media, when available</dt><dd>Recording + integrity hash</dd></div>
              </dl>
            </article>
            <article class="json-zoom-view" data-json-zoom-view="transcript" aria-hidden="true">
              <span class="zoom-kicker">ATTACHMENTS · COLLECTOR OBSERVATIONS</span>
              <h3>Inputs for the four dimensions</h3>
              <dl class="json-review-trail json-capture-trail">
                <div><dt>◉ Conversation</dt><dd>RTP counters + turn timestamps</dd></div>
                <div><dt>≋ Comprehension</dt><dd>ASR text + provider confidence</dd></div>
                <div><dt>⌘ Conduct</dt><dd>Tool name, arguments + response</dd></div>
                <div><dt>✓ Completion</dt><dd>State / receipt, when available</dd></div>
              </dl>
              <p class="json-dialog-pointer">Retain source, clock, IDs + missing inputs.</p>
            </article>
            <article class="json-zoom-view is-active" data-json-zoom-view="evaluation" aria-hidden="false">
              <span class="zoom-kicker">EVALUATION · SEPARATE REPORTS</span>
              <h3>Evidence first. Judgment separate.</h3>
              <dl class="json-review-trail json-evaluation-trail">
                <div><dt>01 · Captured inputs</dt><dd>Audio / text · telemetry · tool events</dd></div>
                <div><dt>02 · Calculated checks</dt><dd><code>gap: 700 ms · IDs match ✓</code></dd></div>
                <div><dt>03 · Optional LLM assessment</dt><dd>Verdict + rationale + evidence refs</dd></div>
              </dl>
              <p class="json-dialog-pointer">This fixture: judge not run · outcome unknown.</p>
            </article>
          </div>
          <div class="json-focus-grid" role="group" aria-label="Choose a vCon section to magnify">
            <button class="json-focus-button core-focus" data-json-focus-button="core" aria-pressed="false" type="button"><span>01</span><b>Core envelope</b><small>version · parties</small></button>
            <button class="json-focus-button dialog-focus" data-json-focus-button="dialog" aria-pressed="false" type="button"><span>02</span><b>Dialog</b><small>text · recording</small></button>
            <button class="json-focus-button transcript-focus" data-json-focus-button="transcript" aria-pressed="false" type="button"><span>03</span><b>Captured evidence</b><small>ASR · media · tools · state</small></button>
            <button class="json-focus-button evaluation-focus is-active" data-json-focus-button="evaluation" aria-pressed="true" type="button"><span>04</span><b>Evaluation</b><small>code checks ≠ judge assessment</small></button>
          </div>
          <article class="json-boundary-note">
            <strong>No matched operation result → outcome unknown.</strong>
            <p>Synthetic data · app schemas, not a literal CAE export. ASR confidence ≠ correctness. External recordings use HTTPS + <code>sha512-&lt;base64url digest&gt;</code>.</p>
            <nav aria-label="vCon enrichment sources"><a href="https://datatracker.ietf.org/doc/html/draft-ietf-vcon-vcon-core-04#section-4.4" rel="noreferrer" target="_blank">vCon draft-04 ↗</a><a href="./assets/examples/vcon-review-example.json" rel="noreferrer" target="_blank">Full evidence example ↗</a><button type="button" data-evaluation-dialog="mrl-evidence-details" aria-controls="mrl-evidence-details" aria-haspopup="dialog">Latency example ↗</button></nav>
          </article>
        </aside>
      </div>
      <dialog id="mrl-evidence-details" class="judge-dialog mrl-dialog" aria-labelledby="mrl-evidence-title">
        <button class="dialog-close" type="button" data-close-evaluation-dialog aria-label="Close response latency example">×</button>
        <p class="eyebrow">RESPONSE LATENCY · ILLUSTRATIVE EVENT ARITHMETIC</p>
        <h2 id="mrl-evidence-title">Keep the measurement behind the number.</h2>
        <ol class="mrl-event-sequence" aria-label="Separate synthetic caller-clock timing example, not a draft-compliant measurement">
          <li><svg class="layer-metric-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M2 12h3l2-7 4 14 3-10 2 3h6"/></svg><span>Last speech sample sent</span><code>184220 ms</code></li>
          <li><svg class="layer-metric-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 12h18m-6-6 6 6-6 6M3 5v14"/></svg><span>Response onset arrives</span><code>184840 ms</code></li>
          <li><svg class="layer-metric-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 9h4l5-4v14l-5-4H3ZM16 9a5 5 0 0 1 0 6m3-9a9 9 0 0 1 0 12"/></svg><span>Modeled buffer release</span><code>184895 ms</code></li>
        </ol>
        <div class="mrl-example-results"><p><span>To arrival</span><strong>620 ms</strong></p><p><span>To modeled playout</span><strong>675 ms</strong></p><small>Same synthetic caller clock · no capture or calibration supplied</small></div>
        <div class="mrl-vcon-map">
          <section><h3>Attachments · preserve inputs</h3><p>Capture bytes + packet timestamps<br>Source, clock + integrity hash</p></section>
          <span aria-hidden="true">→</span>
          <section><h3>Analysis · report results</h3><p>Method + arrival / playout results<br>Settings, uncertainty + capture refs</p></section>
        </div>
        <p class="mrl-scope-note"><strong>Current vCon fixture: 700 ms receiver gap.</strong> Draft MRL is <code>not_measured</code>; the required capture and method evidence are absent.</p>
        <p class="judge-detail-note">The draft uses an annotated speech endpoint, one caller clock, and a declared de-jitter model; modeled playout excludes speaker hardware. Retain negative results. Separate first-audio timing from useful-answer quality.</p>
        <p class="eng-sources"><a href="https://www.ietf.org/archive/id/draft-nygate-ippm-mrl-00.html#section-9.2" target="_blank" rel="noopener noreferrer">Individual draft · report format ↗</a><a href="./assets/examples/vcon-review-example.json" target="_blank" rel="noopener noreferrer">Fixture + missing measurements ↗</a></p>
      </dialog>
    `
  }
];
