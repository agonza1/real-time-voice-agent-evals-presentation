// Continuous-voice diagrams: architecture first, then the conversation sequence.
(() => {
  const sources = `<p class="eng-sources voice-option-sources"><a href="https://openai.com/index/continuous-voice-interaction-with-gpt-live/" target="_blank" rel="noopener noreferrer">OpenAI · GPT-Live ↗</a><a href="https://docs.livekit.io/agents/models/realtime/plugins/gpt-live/" target="_blank" rel="noopener noreferrer">LiveKit ↗</a><a href="https://docs.pipecat.ai/api-reference/server/services/s2s/openai-live" target="_blank" rel="noopener noreferrer">Pipecat ↗</a><span>Illustrative architecture · full duplex depends on the model.</span></p>`;
  const markers = (prefix) => `<defs><marker id="${prefix}-cyan-arrow" markerWidth="10" markerHeight="10" refX="8" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8" fill="var(--cyan)"/></marker><marker id="${prefix}-violet-arrow" markerWidth="10" markerHeight="10" refX="8" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8" fill="var(--violet)"/></marker><marker id="${prefix}-green-arrow" markerWidth="10" markerHeight="10" refX="8" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8" fill="var(--green)"/></marker></defs>`;
  window.VOICE_EVALS_DUAL_VOICE_OPTIONS = {
    architecture: {
      className: "voice-option-slide",
      html: `
        <div class="section-heading"><p class="eyebrow">CONTINUOUS VOICE · ARCHITECTURE</p><h2 id="dual-voice-architecture-title">One conversation. <span>Two paths.</span></h2><p>Keep audio flowing. Coordinate tools and verified results.</p></div>
        <svg class="voice-option-diagram voice-architecture-diagram" viewBox="0 0 1280 480" role="img" aria-labelledby="voice-architecture-title voice-architecture-desc">
          <title id="voice-architecture-title">A continuous voice loop delegates work to a separate reasoner.</title>
          <desc id="voice-architecture-desc">Caller audio flows into the native speech-to-speech voice model while generated speech returns to the caller. The model listens while speaking. It delegates work asynchronously to a reasoning model, which exchanges requests and results with tools. Results return to the voice model.</desc>
          ${markers("voice-architecture")}
          <text x="40" y="32" class="voice-svg-kicker cyan">LIVE AUDIO</text>
          <rect x="40" y="76" width="270" height="138" rx="20" class="voice-svg-node cyan-node"/>
          <text x="175" y="155" class="voice-svg-node-name" text-anchor="middle">Caller</text>
          <rect x="670" y="76" width="350" height="138" rx="20" class="voice-svg-node cyan-node"/>
          <text x="845" y="135" class="voice-svg-node-name" text-anchor="middle">GPT-Live</text>
          <text x="845" y="177" class="voice-svg-sub" text-anchor="middle">native speech ↔ speech</text>
          <path d="M335 115 H645" class="voice-svg-arrow cyan-arrow"/>
          <text x="490" y="96" class="voice-svg-label cyan" text-anchor="middle">listen</text>
          <path d="M645 180 H335" class="voice-svg-arrow cyan-arrow"/>
          <text x="490" y="214" class="voice-svg-label cyan" text-anchor="middle">speak</text>
          <text x="40" y="335" class="voice-svg-node-name cyan">Full duplex</text>
          <text x="40" y="377" class="voice-svg-label">Listen while speaking.</text>
          <text x="1040" y="305" class="voice-svg-kicker violet">BACKGROUND WORK</text>
          <path d="M747 240 V323" class="voice-svg-arrow violet-arrow"/>
          <text x="727" y="288" class="voice-svg-sub violet" text-anchor="end">async task</text>
          <path d="M875 323 V240" class="voice-svg-arrow green-arrow"/>
          <text x="895" y="288" class="voice-svg-sub green">result</text>
          <rect x="670" y="348" width="285" height="108" rx="18" class="voice-svg-node violet-node"/>
          <text x="812" y="412" class="voice-svg-node-name" text-anchor="middle">Reasoning LLM</text>
          <text x="812" y="440" class="voice-svg-backend-mode" text-anchor="middle">Hosted / your backend</text>
          <rect x="1050" y="348" width="190" height="108" rx="18" class="voice-svg-node violet-node"/>
          <text x="1145" y="412" class="voice-svg-node-name" text-anchor="middle">Tools</text>
          <path d="M973 380 H1030" class="voice-svg-arrow violet-arrow"/>
          <path d="M1030 430 H973" class="voice-svg-arrow green-arrow"/>
        </svg>
        <div class="voice-frameworks" aria-label="LiveKit and Pipecat provide GPT-Live integrations with asynchronous delegation">
          <div class="voice-framework-names"><a href="https://docs.livekit.io/agents/models/realtime/plugins/gpt-live/" target="_blank" rel="noopener noreferrer" title="LiveKit GPTLiveModel">LiveKit</a><a href="https://docs.pipecat.ai/api-reference/server/services/s2s/openai-live" target="_blank" rel="noopener noreferrer" title="Pipecat OpenAILiveLLMService">Pipecat</a></div>
          <span class="voice-framework-arrow" aria-hidden="true">↔</span>
          <p>GPT-Live <span>+ async delegation</span></p>
        </div>
        ${sources}
      `
    },
    sequence: {
      className: "voice-option-slide",
      html: `
        <div class="section-heading"><p class="eyebrow">CONTINUOUS VOICE · IN ACTION</p><h2 id="dual-voice-title">Keep talking <span>while work runs.</span></h2></div>
        <svg class="voice-option-diagram" viewBox="0 0 1280 500" role="img" aria-labelledby="voice-sequence-title voice-sequence-desc">
          <title id="voice-sequence-title">An appointment search continues while the caller adds a constraint.</title>
          <desc id="voice-sequence-desc">The caller asks for a Tuesday appointment. The voice model delegates an availability search. While the model says it will check, it listens to the caller adding after 3pm. Application logic updates or supersedes the delegated request and rejects stale results. Tools return 3:30pm availability, which the reasoner sends to the voice model. The model asks whether to book it. No booking has been made.</desc>
          ${markers("voice-sequence")}
          <text x="140" y="30" class="voice-svg-lane" text-anchor="middle">Caller</text>
          <text x="480" y="30" class="voice-svg-lane cyan" text-anchor="middle">Voice model</text>
          <text x="820" y="30" class="voice-svg-lane violet" text-anchor="middle">Reasoner</text>
          <text x="1140" y="30" class="voice-svg-lane violet" text-anchor="middle">Tools</text>
          <path d="M140 52 V475 M480 52 V475 M820 52 V475 M1140 52 V475" class="voice-svg-lifeline"/>
          <path d="M145 94 H475" class="voice-svg-arrow cyan-arrow"/>
          <text x="310" y="79" class="voice-svg-message" text-anchor="middle">“Find a Tuesday appointment.”</text>
          <path d="M485 143 H815" class="voice-svg-arrow violet-arrow"/>
          <text x="650" y="128" class="voice-svg-message" text-anchor="middle">Start async search</text>
          <rect x="70" y="162" width="475" height="105" rx="12" class="voice-svg-overlap"/>
          <rect x="474" y="172" width="12" height="82" rx="4" class="voice-svg-speaking"/>
          <path d="M469 197 H145" class="voice-svg-arrow cyan-arrow"/>
          <text x="307" y="182" class="voice-svg-message" text-anchor="middle">“I’ll check.”</text>
          <path d="M145 240 H469" class="voice-svg-arrow cyan-arrow"/>
          <text x="307" y="225" class="voice-svg-message" text-anchor="middle">“After 3pm.”</text>
          <text x="575" y="199" class="voice-svg-label cyan">FULL DUPLEX</text>
          <text x="575" y="232" class="voice-svg-sub">listens while speaking</text>
          <path d="M485 292 H815" class="voice-svg-arrow violet-arrow"/>
          <text x="650" y="277" class="voice-svg-message" text-anchor="middle">App updates: after 3pm</text>
          <path d="M825 340 H1135" class="voice-svg-arrow violet-arrow"/>
          <text x="980" y="325" class="voice-svg-message" text-anchor="middle">Search slots</text>
          <path d="M1135 388 H825" class="voice-svg-arrow green-arrow"/>
          <text x="980" y="373" class="voice-svg-message" text-anchor="middle">3:30pm available</text>
          <path d="M815 432 H485" class="voice-svg-arrow green-arrow"/>
          <text x="650" y="417" class="voice-svg-message" text-anchor="middle">3:30pm available</text>
          <path d="M475 480 H145" class="voice-svg-arrow cyan-arrow"/>
          <text x="310" y="465" class="voice-svg-message" text-anchor="middle">“3:30 is available. Book it?”</text>
        </svg>
        <p class="takeaway">Application controls: <strong>apply new constraints.</strong><br><strong>Reject stale results.</strong> Verify before confirming.</p>
        ${sources}
      `
    }
  };
})();
