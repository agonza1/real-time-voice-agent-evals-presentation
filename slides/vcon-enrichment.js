window.VOICE_EVALS_VCON_ENRICHMENT = [
  {
    id: "vcon-enrichment",
    className: "vcon-enrichment-slide",
    html: `
      <div class="section-heading vcon-enrichment-heading">
        <p class="eyebrow">CAE-ALIGNED EXCERPT</p>
        <h2 id="vcon-enrichment-title">Illustrative vCon enrichment for a <span>voice-agent evaluation</span></h2>
        <p>A deliberately abbreviated pseudo-JSON view. Hover, focus, or click a section to magnify the fields that matter.</p>
      </div>

      <div class="vcon-json-layout" data-json-explorer data-json-focus="core">
        <article class="vcon-json-panel" aria-label="Abbreviated illustrative vCon pseudo JSON">
          <div class="vcon-json-toolbar">
            <div class="json-window-title"><i></i><i></i><i></i><span>vcon-run-0247.json</span></div>
            <b>HIGH-LEVEL PSEUDO JSON · CURRENT CAE SHAPE</b>
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
<span class="json-line json-dialog">    <span class="json-punctuation">{</span> <span class="json-key">"type"</span><span class="json-punctuation">:</span> <span class="json-string">"text"</span><span class="json-punctuation">,</span> <span class="json-key">"parties"</span><span class="json-punctuation">:</span> <span class="json-punctuation">[</span><span class="json-number">1</span><span class="json-punctuation">]</span><span class="json-punctuation">,</span> <span class="json-key">"body"</span><span class="json-punctuation">:</span> <span class="json-string">"I couldn’t confirm…"</span><span class="json-punctuation">,</span> <span class="json-ellipsis">…</span> <span class="json-punctuation">}</span><span class="json-punctuation">,</span></span>
<span class="json-line json-dialog">    <span class="json-punctuation">{</span> <span class="json-key">"type"</span><span class="json-punctuation">:</span> <span class="json-string">"recording"</span><span class="json-punctuation">,</span> <span class="json-key">"parties"</span><span class="json-punctuation">:</span> <span class="json-punctuation">[</span><span class="json-number">0</span><span class="json-punctuation">,</span> <span class="json-number">1</span><span class="json-punctuation">]</span><span class="json-punctuation">,</span> <span class="json-key">"url"</span><span class="json-punctuation">:</span> <span class="json-string">"https://…"</span><span class="json-punctuation">,</span></span>
<span class="json-line json-dialog">      <span class="json-key">"content_hash"</span><span class="json-punctuation">:</span> <span class="json-string">"pQ1j8Y…"</span><span class="json-punctuation">,</span> <span class="json-key">"duration"</span><span class="json-punctuation">:</span> <span class="json-number">18.2</span><span class="json-punctuation">,</span> <span class="json-ellipsis">…</span> <span class="json-punctuation">}</span></span>
<span class="json-line json-dialog">  <span class="json-punctuation">]</span><span class="json-punctuation">,</span></span>
<span class="json-line json-transcript">  <span class="json-key">"analysis"</span><span class="json-punctuation">:</span> <span class="json-punctuation">[</span></span>
<span class="json-line json-transcript">    <span class="json-punctuation">{</span> <span class="json-key">"type"</span><span class="json-punctuation">:</span> <span class="json-string">"transcript"</span><span class="json-punctuation">,</span> <span class="json-key">"schema"</span><span class="json-punctuation">:</span> <span class="json-string json-schema">"cae-execution-transcript-v1"</span><span class="json-punctuation">,</span></span>
<span class="json-line json-transcript">      <span class="json-key">"body"</span><span class="json-punctuation">:</span> <span class="json-punctuation">{</span> <span class="json-key">"turns"</span><span class="json-punctuation">:</span> <span class="json-punctuation">[</span> <span class="json-ellipsis">… spoken_text + peer_asr_receipt …</span> <span class="json-punctuation">]</span> <span class="json-punctuation">}</span><span class="json-punctuation">,</span> <span class="json-ellipsis">…</span> <span class="json-punctuation">}</span><span class="json-punctuation">,</span></span>
<span class="json-line json-evaluation">    <span class="json-punctuation">{</span> <span class="json-key">"type"</span><span class="json-punctuation">:</span> <span class="json-string">"evaluation"</span><span class="json-punctuation">,</span> <span class="json-key">"schema"</span><span class="json-punctuation">:</span> <span class="json-string json-schema">"cae-execution-evidence-v1"</span><span class="json-punctuation">,</span></span>
<span class="json-line json-evaluation">      <span class="json-key">"body"</span><span class="json-punctuation">:</span> <span class="json-punctuation">{</span> <span class="json-key">"vcon_core_draft"</span><span class="json-punctuation">:</span> <span class="json-string">"draft-ietf-vcon-vcon-core-04"</span><span class="json-punctuation">,</span></span>
<span class="json-line json-evaluation">        <span class="json-key">"execution_run_id"</span><span class="json-punctuation">:</span> <span class="json-string">"run-0247"</span><span class="json-punctuation">,</span> <span class="json-key">"scenario_id"</span><span class="json-punctuation">:</span> <span class="json-string">"cancel-timeout"</span><span class="json-punctuation">,</span></span>
<span class="json-line json-evaluation">        <span class="json-key">"verdict"</span><span class="json-punctuation">:</span> <span class="json-string">"safe_failure"</span><span class="json-punctuation">,</span> <span class="json-key">"score"</span><span class="json-punctuation">:</span> <span class="json-number">0.82</span><span class="json-punctuation">,</span></span>
<span class="json-line json-evaluation">        <span class="json-key">"final_state"</span><span class="json-punctuation">:</span> <span class="json-punctuation">{</span> <span class="json-key">"complete"</span><span class="json-punctuation">:</span> <span class="json-boolean">false</span><span class="json-punctuation">,</span> <span class="json-key">"outcome"</span><span class="json-punctuation">:</span> <span class="json-string">"handoff_offered"</span> <span class="json-punctuation">}</span><span class="json-punctuation">,</span></span>
<span class="json-line json-evaluation">        <span class="json-key">"recording"</span><span class="json-punctuation">:</span> <span class="json-punctuation">{</span> <span class="json-key">"status"</span><span class="json-punctuation">:</span> <span class="json-string">"portable"</span> <span class="json-punctuation">}</span><span class="json-punctuation">,</span> <span class="json-ellipsis">…</span> <span class="json-punctuation">}</span> <span class="json-punctuation">}</span></span>
<span class="json-line json-neutral">  <span class="json-punctuation">]</span></span>
<span class="json-line json-neutral"><span class="json-punctuation">}</span></span></code></pre>
        </article>

        <aside class="vcon-json-inspector" aria-label="Interactive vCon section magnifier">
          <div class="json-zoom-square" aria-live="polite" aria-label="Magnified vCon section">
            <article class="json-zoom-view is-active" data-json-zoom-view="core" aria-hidden="false">
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
              <h3>Speech and portable media</h3>
              <pre><code><span class="json-key">"dialog"</span><span class="json-punctuation">:</span> <span class="json-punctuation">[</span>
  <span class="json-punctuation">{</span> <span class="json-key">"type"</span><span class="json-punctuation">:</span> <span class="json-string">"text"</span><span class="json-punctuation">,</span>
    <span class="json-key">"parties"</span><span class="json-punctuation">:</span> <span class="json-punctuation">[</span><span class="json-number">0</span><span class="json-punctuation">]</span><span class="json-punctuation">,</span>
    <span class="json-key">"body"</span><span class="json-punctuation">:</span> <span class="json-string">"Please cancel…"</span> <span class="json-punctuation">}</span><span class="json-punctuation">,</span>
  <span class="json-punctuation">{</span> <span class="json-key">"type"</span><span class="json-punctuation">:</span> <span class="json-string">"recording"</span><span class="json-punctuation">,</span>
    <span class="json-key">"url"</span><span class="json-punctuation">:</span> <span class="json-string">"https://…"</span><span class="json-punctuation">,</span>
    <span class="json-key">"content_hash"</span><span class="json-punctuation">:</span> <span class="json-string">"pQ1j8Y…"</span> <span class="json-punctuation">}</span>
<span class="json-punctuation">]</span></code></pre>
            </article>
            <article class="json-zoom-view" data-json-zoom-view="transcript" aria-hidden="true">
              <span class="zoom-kicker">CAE TRANSCRIPT ANALYSIS</span>
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
            <article class="json-zoom-view" data-json-zoom-view="evaluation" aria-hidden="true">
              <span class="zoom-kicker">CAE EVALUATION ANALYSIS</span>
              <h3>Run and outcome evidence</h3>
              <pre><code><span class="json-punctuation">{</span>
  <span class="json-key">"type"</span><span class="json-punctuation">:</span> <span class="json-string">"evaluation"</span><span class="json-punctuation">,</span>
  <span class="json-key">"schema"</span><span class="json-punctuation">:</span>
    <span class="json-string json-schema">"cae-execution-evidence-v1"</span><span class="json-punctuation">,</span>
  <span class="json-key">"body"</span><span class="json-punctuation">:</span> <span class="json-punctuation">{</span>
    <span class="json-key">"execution_run_id"</span><span class="json-punctuation">:</span> <span class="json-string">"run-0247"</span><span class="json-punctuation">,</span>
    <span class="json-key">"verdict"</span><span class="json-punctuation">:</span> <span class="json-string">"safe_failure"</span><span class="json-punctuation">,</span>
    <span class="json-key">"final_state"</span><span class="json-punctuation">:</span> <span class="json-punctuation">{</span>
      <span class="json-key">"complete"</span><span class="json-punctuation">:</span> <span class="json-boolean">false</span><span class="json-punctuation">,</span>
      <span class="json-key">"outcome"</span><span class="json-punctuation">:</span> <span class="json-string">"handoff_offered"</span>
    <span class="json-punctuation">}</span>
  <span class="json-punctuation">}</span>
<span class="json-punctuation">}</span></code></pre>
            </article>
          </div>

          <div class="json-focus-grid" role="group" aria-label="Choose a vCon section to magnify">
            <button class="json-focus-button core-focus is-active" data-json-focus-button="core" aria-pressed="true" type="button"><span>01</span><b>Core envelope</b><small>version · parties</small></button>
            <button class="json-focus-button dialog-focus" data-json-focus-button="dialog" aria-pressed="false" type="button"><span>02</span><b>Dialog</b><small>text · recording</small></button>
            <button class="json-focus-button transcript-focus" data-json-focus-button="transcript" aria-pressed="false" type="button"><span>03</span><b>Transcript</b><small>speech provenance</small></button>
            <button class="json-focus-button evaluation-focus" data-json-focus-button="evaluation" aria-pressed="false" type="button"><span>04</span><b>Evaluation</b><small>run · outcome</small></button>
          </div>

          <article class="json-boundary-note">
            <strong>Accurate boundary</strong>
            <p>Core vCon defines the container. CAE’s two schema names are application conventions. A portable recording is a <code>dialog</code> item and requires an HTTPS URL plus a base64url SHA-512 <code>content_hash</code>. The current CAE execution export is unsigned.</p>
            <nav aria-label="vCon enrichment sources"><a href="https://datatracker.ietf.org/doc/draft-ietf-vcon-vcon-core/" rel="noreferrer" target="_blank">vCon Core draft ↗</a><a href="https://github.com/agonza1/ConversationAgentEvals/blob/main/apps/api/app/services/execution_vcon.py" rel="noreferrer" target="_blank">CAE implementation ↗</a></nav>
          </article>
        </aside>
      </div>
    `
  }
];
