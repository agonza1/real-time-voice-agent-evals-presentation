window.VOICE_EVALS_VCON_ENRICHMENT = [
  {
    id: "vcon-enrichment",
    className: "vcon-enrichment-slide",
    html: `
      <div class="section-heading vcon-enrichment-heading">
        <p class="eyebrow">CAE-ALIGNED EXCERPT</p>
        <h2 id="vcon-enrichment-title">Illustrative vCon enrichment for a <span>voice-agent evaluation</span></h2>
        <p>Only the fields that connect conversation evidence to a CAE run are shown. This is not a complete vCon.</p>
      </div>
      <div class="vcon-enrichment-grid">
        <article class="vcon-fragment core-fragment">
          <div class="fragment-head"><span>01 · CORE ENVELOPE</span><b>IETF DRAFT-04</b></div>
          <p class="draft-version">draft-ietf-vcon-vcon-core-04</p>
          <dl class="fragment-fields">
            <div><dt>vcon</dt><dd>"0.4.0"</dd></div>
            <div><dt>uuid</dt><dd>portable conversation id</dd></div>
            <div><dt>created_at / updated_at</dt><dd>RFC 3339 timestamps</dd></div>
            <div><dt>subject</dt><dd>cancellation-rescue</dd></div>
          </dl>
          <div class="party-strip" aria-label="Parties array"><span>parties[0]</span><b>Caller</b><i>↔</i><span>parties[1]</span><b>Agent</b></div>
        </article>

        <article class="vcon-fragment dialog-fragment">
          <div class="fragment-head"><span>02 · DIALOG</span><b>ORIGINAL EVIDENCE</b></div>
          <div class="dialog-example">
            <div><span>text · parties [0]</span><strong>spoken source text</strong><small>text/plain · encoding none</small></div>
            <div><span>text · parties [1]</span><strong>agent speech sent to TTS</strong><small>text/plain · encoding none</small></div>
            <div class="recording-dialog"><span>recording · parties [0,1]</span><strong>HTTPS media URL + content_hash</strong><small>audio/wav · duration in seconds</small></div>
          </div>
          <p class="fragment-note"><strong>CAE portability rule:</strong> a recording lives in <code>dialog</code>, not in an attachment. Without an HTTPS URL and valid SHA-512 content hash, CAE keeps it local and records that status in analysis.</p>
        </article>

        <div class="analysis-stack">
          <article class="vcon-fragment analysis-fragment transcript-analysis">
            <div class="fragment-head"><span>03 · ANALYSIS</span><b>TRANSCRIPT</b></div>
            <p class="analysis-identity"><code>type: transcript</code><span>ConversationAgentEvals · CAE Execution</span></p>
            <code class="schema-label">cae-execution-transcript-v1</code>
            <ul>
              <li>spoken_text linked to dialog index</li>
              <li>peer_asr_receipt + optional word_error_rate</li>
              <li>turn_index, speaker, direction</li>
            </ul>
          </article>
          <article class="vcon-fragment analysis-fragment evaluation-analysis">
            <div class="fragment-head"><span>04 · ANALYSIS</span><b>EVALUATION</b></div>
            <p class="analysis-identity"><code>type: evaluation</code><span>ConversationAgentEvals · CAE Execution</span></p>
            <code class="schema-label">cae-execution-evidence-v1</code>
            <ul>
              <li>execution_run_id · suite_id · scenario_id · mode</li>
              <li>verdict · score · recording portability status</li>
              <li>portable final_state: complete, outcome, termination evidence</li>
            </ul>
          </article>
        </div>
      </div>
      <div class="vcon-enrichment-footer">
        <div><strong>Core vCon</strong><span>container, parties, dialog, analysis references</span></div>
        <i aria-hidden="true">+</i>
        <div><strong>CAE convention</strong><span>vendor/product/schema identify application-defined evidence</span></div>
        <p>Current CAE execution export is unsigned. Signing, encryption, redaction automation, and broader attachment profiles remain separate work.</p>
        <nav aria-label="vCon enrichment sources"><a href="https://datatracker.ietf.org/doc/draft-ietf-vcon-vcon-core/" rel="noreferrer" target="_blank">vCon Core draft ↗</a><a href="https://github.com/agonza1/ConversationAgentEvals/blob/main/apps/api/app/services/execution_vcon.py" rel="noreferrer" target="_blank">CAE implementation ↗</a></nav>
      </div>
    `
  }
];
