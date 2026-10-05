/* Presentation experiments only; never call real tools or collect microphone audio. */
(() => {
  "use strict";
  const model = globalThis.VoiceEvalEngineering;
  if (!model) throw new Error("Engineering fixture model did not load.");
  const byId = (id) => document.getElementById(id);
  const put = (id, text) => { byId(id).textContent = text; };
  const pressed = (selector, attribute, key) => document.querySelectorAll(selector).forEach((button) => button.setAttribute("aria-pressed", String(button.dataset[attribute] === key)));

  function showLatency(policy) {
    const run = model.latency(policy);
    pressed("[data-endpoint]", "endpoint", policy);
    const trace = byId("endpointTrace");
    trace.replaceChildren();
    run.events.forEach(([label, start, end, kind]) => {
      const row = document.createElement("div"); row.className = "eng-trace-row";
      const name = document.createElement("span"); name.textContent = label;
      const track = document.createElement("div"); track.className = "eng-track";
      const bar = document.createElement("i"); bar.className = `eng-bar eng-${kind}`;
      bar.style.left = `${start / 3600 * 100}%`; bar.style.width = `${Math.max(0.8, (end - start) / 3600 * 100)}%`;
      const time = document.createElement("b"); time.textContent = `${start}${end !== start ? `–${end}` : ""} ms`;
      track.append(bar); row.append(name, track, time); trace.append(row);
    });
    const readings = [["First token", run.token], ["Generated audio", run.generated], ["Receiver audio", run.received], ["After complete request", run.receiveAfterCallerEnd]];
    byId("latencyReadings").replaceChildren(...readings.map(([label, value]) => {
      const tile = document.createElement("div"); const name = document.createElement("span"); name.textContent = label;
      const number = document.createElement("strong"); number.textContent = `${value.toLocaleString()} ms`;
      if (value < 0) number.className = "eng-danger";
      tile.append(name, number); return tile;
    }));
    put("endpointInsight", run.premature ? "700 ms BEFORE the caller finishes: quicker response, incomplete timing instruction." : "700 ms AFTER the complete request: the billing-period qualifier is preserved.");
  }
  document.querySelectorAll("[data-endpoint]").forEach((b) => b.addEventListener("click", () => showLatency(b.dataset.endpoint)));
  showLatency("patient");

  let reconciled = false, retries = 0;
  function updateControl() {
    const scenario = byId("operationScenario").value;
    const run = model.controlRun({ scenario, gate: byId("runtimeGate").checked, reconciled, retries, interrupted: byId("interruptSpeech").checked });
    put("controlVerdict", run.verdict); byId("controlResult").dataset.tone = run.tone;
    const claimPass = run.checks.claim_supported_before_speech;
    put("completionAssertion", `${claimPass ? "PASS" : "FAIL"} · No unsupported completion`);
    byId("completionAssertion").dataset.pass = String(claimPass);
    put("allowedSpeech", run.speech); put("toolObservation", run.tool); put("agentKnowledge", run.knowledge);
    put("claimDecision", run.gateDecision); put("fixtureTruth", run.truth); put("controlExplanation", run.explanation);
    put("gateStatus", byId("runtimeGate").checked ? "ON: VALIDATE STRUCTURED COMPLETION ACTION BEFORE TTS" : "BYPASSED: DELIBERATE ANTI-PATTERN, NOT AN INEVITABLE AI FAILURE");
    put("operationLedger", `${run.operationId} · ${run.requests} request(s) · ${run.commits} commit(s) · ${run.responseGeneration}`);
    byId("reconcileOperation").disabled = scenario !== "lost" || reconciled;
    byId("retryOperation").disabled = retries >= 20;
    byId("operationTrace").replaceChildren(...run.events.map(([ms, actor, event]) => {
      const item = document.createElement("li"); const code = document.createElement("code"); code.textContent = `${ms} ms · ${actor}`;
      const text = document.createElement("span"); text.textContent = event; item.append(code, text); return item;
    }));
    put("controlAssertions", Object.entries(run.checks).map(([key, pass]) => `${pass ? "PASS" : "FAIL"}: ${key.replaceAll("_", " ")}`).join(" · "));
  }
  byId("operationScenario").addEventListener("change", () => { reconciled = false; retries = 0; updateControl(); });
  byId("resetControl").addEventListener("click", () => {
    byId("operationScenario").value = "lost";
    byId("runtimeGate").checked = true;
    byId("interruptSpeech").checked = false;
    reconciled = false; retries = 0; updateControl();
  });
  ["runtimeGate", "interruptSpeech"].forEach((id) => byId(id).addEventListener("change", updateControl));
  byId("reconcileOperation").addEventListener("click", () => { reconciled = true; updateControl(); });
  byId("retryOperation").addEventListener("click", () => { retries = Math.min(20, retries + 1); updateControl(); });
  updateControl();

  function showRelease(version) {
    pressed("[data-release]", "release", version);
    const result = model.releaseReview(version), panel = byId("releaseDecision");
    panel.dataset.tone = result.failures.length ? "fail" : "pass";
    const verdict = document.createElement("strong"); verdict.textContent = result.decision;
    const reason = document.createElement("p"); reason.textContent = result.explanation;
    const checks = document.createElement("small"); checks.textContent = result.failures.length ? `Failed gates: ${result.failures.join("; ")}.` : "All configured gates met in this synthetic cohort.";
    panel.replaceChildren(verdict, reason, checks);
  }
  document.querySelectorAll("[data-release]").forEach((b) => b.addEventListener("click", () => showRelease(b.dataset.release)));
  showRelease("candidate");

})();
