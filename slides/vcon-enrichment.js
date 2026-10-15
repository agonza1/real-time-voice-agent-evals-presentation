window.VOICE_EVALS_VCON_ENRICHMENT = [
  {
    id: "vcon-enrichment",
    className: "vcon-enrichment-slide",
    html: `
      <div class="section-heading vcon-enrichment-heading">
        <p class="eyebrow">ILLUSTRATIVE EVIDENCE + REVIEW</p>
        <h2 id="vcon-enrichment-title">Voice-agent evidence <span>inside vCon</span></h2>
        <p>Requirement → finding → evidence. Keep the unresolved outcome visible.</p>
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
<span class="json-line json-core">  <span class="json-key">"created_at"</span><span class="json-punctuation">:</span> <span class="json-string">"2026-10-15T14:50:00Z"</span><span class="json-punctuation">,</span></span>
<span class="json-line json-core">  <span class="json-key">"subject"</span><span class="json-punctuation">:</span> <span class="json-string">"cancellation-rescue"</span><span class="json-punctuation">,</span></span>
<span class="json-line json-core">  <span class="json-key">"parties"</span><span class="json-punctuation">:</span> <span class="json-punctuation">[</span> <span class="json-punctuation">{</span> <span class="json-key">"name"</span><span class="json-punctuation">:</span> <span class="json-string">"Caller"</span><span class="json-punctuation">,</span> <span class="json-ellipsis">…</span> <span class="json-punctuation">}</span><span class="json-punctuation">,</span> <span class="json-punctuation">{</span> <span class="json-key">"name"</span><span class="json-punctuation">:</span> <span class="json-string">"Agent"</span><span class="json-punctuation">,</span> <span class="json-ellipsis">…</span> <span class="json-punctuation">}</span> <span class="json-punctuation">]</span><span class="json-punctuation">,</span></span>
<span class="json-line json-neutral json-skip">  <span class="json-ellipsis">… envelope fields omitted …</span></span>
<span class="json-line json-dialog">  <span class="json-key">"dialog"</span><span class="json-punctuation">:</span> <span class="json-punctuation">[</span></span>
<span class="json-line json-dialog">    <span class="json-punctuation">{</span> <span class="json-key">"type"</span><span class="json-punctuation">:</span> <span class="json-string">"text"</span><span class="json-punctuation">,</span> <span class="json-key">"parties"</span><span class="json-punctuation">:</span> <span class="json-punctuation">[</span><span class="json-number">0</span><span class="json-punctuation">]</span><span class="json-punctuation">,</span> <span class="json-key">"body"</span><span class="json-punctuation">:</span> <span class="json-string">"Please cancel my plan."</span><span class="json-punctuation">,</span> <span class="json-ellipsis">…</span> <span class="json-punctuation">}</span><span class="json-punctuation">,</span></span>
<span class="json-line json-dialog">    <span class="json-punctuation">{</span> <span class="json-key">"type"</span><span class="json-punctuation">:</span> <span class="json-string">"text"</span><span class="json-punctuation">,</span> <span class="json-key">"parties"</span><span class="json-punctuation">:</span> <span class="json-punctuation">[</span><span class="json-number">1</span><span class="json-punctuation">]</span><span class="json-punctuation">,</span> <span class="json-key">"body"</span><span class="json-punctuation">:</span> <span class="json-string">"I couldn’t confirm cancellation."</span><span class="json-punctuation">,</span> <span class="json-ellipsis">…</span> <span class="json-punctuation">}</span><span class="json-punctuation">,</span></span>
<span class="json-line json-dialog">    <span class="json-punctuation">{</span> <span class="json-key">"type"</span><span class="json-punctuation">:</span> <span class="json-string">"recording"</span><span class="json-punctuation">,</span> <span class="json-key">"parties"</span><span class="json-punctuation">:</span> <span class="json-punctuation">[</span><span class="json-number">0</span><span class="json-punctuation">,</span> <span class="json-number">1</span><span class="json-punctuation">]</span><span class="json-punctuation">,</span> <span class="json-key">"url"</span><span class="json-punctuation">:</span> <span class="json-string">"https://…"</span><span class="json-punctuation">,</span></span>
<span class="json-line json-dialog">      <span class="json-key">"content_hash"</span><span class="json-punctuation">:</span> <span class="json-string">"sha512-pQ1j8Y…"</span><span class="json-punctuation">,</span> <span class="json-key">"duration"</span><span class="json-punctuation">:</span> <span class="json-number">18.2</span><span class="json-punctuation">,</span> <span class="json-ellipsis">…</span> <span class="json-punctuation">}</span></span>
<span class="json-line json-dialog">  <span class="json-punctuation">]</span><span class="json-punctuation">,</span></span>
<span class="json-line json-transcript">  <span class="json-key">"analysis"</span><span class="json-punctuation">:</span> <span class="json-punctuation">[</span></span>
<span class="json-line json-transcript">    <span class="json-punctuation">{</span> <span class="json-key">"type"</span><span class="json-punctuation">:</span> <span class="json-string">"transcript"</span><span class="json-punctuation">,</span> <span class="json-key">"schema"</span><span class="json-punctuation">:</span> <span class="json-string json-schema">"cae-execution-transcript-v1"</span><span class="json-punctuation">,</span></span>
<span class="json-line json-transcript">      <span class="json-key">"body"</span><span class="json-punctuation">:</span> <span class="json-punctuation">{</span> <span class="json-key">"turns"</span><span class="json-punctuation">:</span> <span class="json-punctuation">[</span> <span class="json-ellipsis">… spoken_text + peer_asr_receipt …</span> <span class="json-punctuation">]</span> <span class="json-punctuation">}</span><span class="json-punctuation">,</span> <span class="json-ellipsis">…</span> <span class="json-punctuation">}</span><span class="json-punctuation">,</span></span>
<span class="json-line json-evaluation">    <span class="json-punctuation">{</span> <span class="json-key">"type"</span><span class="json-punctuation">:</span> <span class="json-string">"evaluation"</span><span class="json-punctuation">,</span> <span class="json-key">"dialog"</span><span class="json-punctuation">:</span> <span class="json-punctuation">[</span><span class="json-number">0, 1</span><span class="json-punctuation">]</span><span class="json-punctuation">,</span></span>
<span class="json-line json-evaluation">      <span class="json-key">"vendor"</span><span class="json-punctuation">:</span> <span class="json-string">"Example evaluator"</span><span class="json-punctuation">,</span> <span class="json-key">"schema"</span><span class="json-punctuation">:</span> <span class="json-string json-schema">"illustrative-review-v1"</span><span class="json-punctuation">,</span></span>
<span class="json-line json-evaluation">      <span class="json-key">"mediatype"</span><span class="json-punctuation">:</span> <span class="json-string">"application/json"</span><span class="json-punctuation">,</span> <span class="json-key">"encoding"</span><span class="json-punctuation">:</span> <span class="json-string">"json"</span><span class="json-punctuation">,</span></span>
<span class="json-line json-evaluation">      <span class="json-key">"body"</span><span class="json-punctuation">:</span> <span class="json-punctuation">{</span></span>
<span class="json-line json-evaluation">        <span class="json-key">"verdict"</span><span class="json-punctuation">:</span> <span class="json-string">"needs_review"</span><span class="json-punctuation">,</span></span>
<span class="json-line json-evaluation">        <span class="json-key">"checks"</span><span class="json-punctuation">:</span> <span class="json-punctuation">[{</span> <span class="json-key">"requirement"</span><span class="json-punctuation">:</span> <span class="json-string">"State uncertainty"</span><span class="json-punctuation">,</span></span>
<span class="json-line json-evaluation">          <span class="json-key">"result"</span><span class="json-punctuation">:</span> <span class="json-string">"supported"</span><span class="json-punctuation">,</span> <span class="json-key">"evidence"</span><span class="json-punctuation">:</span> <span class="json-string">"dialog[1]"</span> <span class="json-punctuation">}],</span></span>
<span class="json-line json-evaluation">        <span class="json-key">"final_state"</span><span class="json-punctuation">:</span> <span class="json-punctuation">{</span> <span class="json-key">"complete"</span><span class="json-punctuation">:</span> <span class="json-boolean">null</span><span class="json-punctuation">,</span> <span class="json-key">"outcome"</span><span class="json-punctuation">:</span> <span class="json-string">"unknown"</span> <span class="json-punctuation">}</span><span class="json-punctuation">,</span></span>
<span class="json-line json-evaluation">        <span class="json-key">"review_reason"</span><span class="json-punctuation">:</span> <span class="json-string">"No matched operation result"</span></span>
<span class="json-line json-evaluation">      <span class="json-punctuation">}</span> <span class="json-punctuation">}</span></span>
<span class="json-line json-neutral">  <span class="json-punctuation">]</span></span>
<span class="json-line json-neutral"><span class="json-punctuation">}</span></span></code></pre>
        </article>

        <aside class="vcon-json-inspector" aria-label="Interactive vCon section magnifier">
          <div class="json-zoom-square" aria-live="polite" aria-label="Magnified vCon section">
            <article class="json-zoom-view" data-json-zoom-view="core" aria-hidden="true">
              <span class="zoom-kicker">CORE VCON</span>
              <h3>Portable envelope</h3>
              <pre><code><span class="json-punctuation">{</span>
  <span class="json-key">"vcon"</span><span class="json-punctuation">:</span> <span class="json-string">"0.4.0"</span><span class="json-punctuation">,</span>
  <span class="json-key">"uuid"</span><span class="json-punctuation">:</span> <span class="json-string">"4b4f…"</span><span class="json-punctuation">,</span>
  <span class="json-key">"subject"</span><span class="json-punctuation">:</span> <span class="json-string">"cancellation-rescue"</span><span class="json-punctuation">,</span>
  <span class="json-key">"parties"</span><span class="json-punctuation">:</span> <span class="json-punctuation">[</span>
    <span class="json-punctuation">{</span> <span class="json-key">"name"</span><span class="json-punctuation">:</span> <span class="json-string">"Caller"</span> <span class="json-punctuation">}</span><span class="json-punctuation">,</span>
    <span class="json-punctuation">{</span> <span class="json-key">"name"</span><span class="json-punctuation">:</span> <span class="json-string">"Agent"</span> <span class="json-punctuation">}</span>
  <span class="json-punctuation">]</span>
<span class="json-punctuation">}</span></code></pre>
            </article>
            <article class="json-zoom-view" data-json-zoom-view="dialog" aria-hidden="true">
              <span class="zoom-kicker">DIALOG EVIDENCE</span>
              <h3>Follow the finding to speech</h3>
              <pre><code><span class="json-key">"dialog"</span><span class="json-punctuation">:</span> <span class="json-punctuation">[</span>
  <span class="json-punctuation">{</span> <span class="json-key">"type"</span><span class="json-punctuation">:</span> <span class="json-string">"text"</span><span class="json-punctuation">,</span>
    <span class="json-key">"parties"</span><span class="json-punctuation">:</span> <span class="json-punctuation">[</span><span class="json-number">0</span><span class="json-punctuation">]</span><span class="json-punctuation">,</span>
    <span class="json-key">"body"</span><span class="json-punctuation">:</span> <span class="json-string">"Please cancel my plan."</span> <span class="json-punctuation">}</span><span class="json-punctuation">,</span>
  <span class="json-punctuation">{</span> <span class="json-key">"type"</span><span class="json-punctuation">:</span> <span class="json-string">"text"</span><span class="json-punctuation">,</span>
    <span class="json-key">"parties"</span><span class="json-punctuation">:</span> <span class="json-punctuation">[</span><span class="json-number">1</span><span class="json-punctuation">]</span><span class="json-punctuation">,</span>
    <span class="json-key">"body"</span><span class="json-punctuation">:</span>
      <span class="json-string">"I couldn’t confirm cancellation."</span> <span class="json-punctuation">}</span>
<span class="json-punctuation">]</span></code></pre>
              <p class="json-dialog-pointer"><code>dialog[1]</code> → agent’s uncertainty statement</p>
            </article>
            <article class="json-zoom-view" data-json-zoom-view="transcript" aria-hidden="true">
              <span class="zoom-kicker">TOOL TRANSCRIPT ANALYSIS</span>
              <h3>Speech provenance</h3>
              <pre><code><span class="json-punctuation">{</span>
  <span class="json-key">"type"</span><span class="json-punctuation">:</span> <span class="json-string">"transcript"</span><span class="json-punctuation">,</span>
  <span class="json-key">"vendor"</span><span class="json-punctuation">:</span> <span class="json-string">"ConversationAgentEvals"</span><span class="json-punctuation">,</span>
  <span class="json-key">"product"</span><span class="json-punctuation">:</span> <span class="json-string">"CAE Execution"</span><span class="json-punctuation">,</span>
  <span class="json-key">"schema"</span><span class="json-punctuation">:</span>
    <span class="json-string json-schema">"cae-execution-transcript-v1"</span><span class="json-punctuation">,</span>
  <span class="json-key">"body"</span><span class="json-punctuation">:</span> <span class="json-punctuation">{</span> <span class="json-key">"turns"</span><span class="json-punctuation">:</span> <span class="json-punctuation">[</span>
    <span class="json-ellipsis">… source speech + ASR receipt …</span>
  <span class="json-punctuation">]</span> <span class="json-punctuation">}</span>
<span class="json-punctuation">}</span></code></pre>
            </article>
            <article class="json-zoom-view is-active" data-json-zoom-view="evaluation" aria-hidden="false">
              <span class="zoom-kicker">ILLUSTRATIVE APPLICATION REVIEW</span>
              <h3>Why needs_review?</h3>
              <dl class="json-review-trail">
                <div><dt>Requirement</dt><dd>State uncertainty</dd></div>
                <div><dt>Finding</dt><dd class="json-review-supported">Supported by the dialogue ✓</dd></div>
                <div><dt>Evidence · <code>dialog[1]</code></dt><dd>“I couldn’t confirm cancellation.”</dd></div>
                <div><dt>Outcome · unknown</dt><dd>No matched operation result.</dd></div>
              </dl>
            </article>
          </div>

          <div class="json-focus-grid" role="group" aria-label="Choose a vCon section to magnify">
            <button class="json-focus-button core-focus" data-json-focus-button="core" aria-pressed="false" type="button"><span>01</span><b>Core envelope</b><small>version · parties</small></button>
            <button class="json-focus-button dialog-focus" data-json-focus-button="dialog" aria-pressed="false" type="button"><span>02</span><b>Dialog</b><small>text · recording</small></button>
            <button class="json-focus-button transcript-focus" data-json-focus-button="transcript" aria-pressed="false" type="button"><span>03</span><b>Transcript</b><small>speech provenance</small></button>
            <button class="json-focus-button evaluation-focus is-active" data-json-focus-button="evaluation" aria-pressed="true" type="button"><span>04</span><b>Evaluation</b><small>requirement · evidence · limits</small></button>
          </div>

          <article class="json-boundary-note">
            <strong>Dialogue supports the finding. Cancellation stays unknown.</strong>
            <p>Illustrative review fields, not a literal CAE export. External recordings use HTTPS + <code>sha512-&lt;base64url digest&gt;</code>.</p>
            <nav aria-label="vCon enrichment sources"><a href="https://datatracker.ietf.org/doc/html/draft-ietf-vcon-vcon-core-04#section-4.5" rel="noreferrer" target="_blank">vCon analysis ↗</a><a href="./assets/examples/vcon-review-example.json" rel="noreferrer" target="_blank">Full text-only example ↗</a></nav>
          </article>
        </aside>
      </div>
    `
  }
];
