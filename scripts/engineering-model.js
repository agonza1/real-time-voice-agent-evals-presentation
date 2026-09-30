/* Pure, deterministic TEACHING FIXTURES. No live agent, network, ASR, or CAE engine. */
(function (root) {
  "use strict";
  function choice(value, allowed) {
    if (!allowed.includes(value)) throw new TypeError(`Unsupported fixture choice: ${value}`);
    return value;
  }
  function latency(policy) {
    choice(policy, ["patient", "eager"]);
    const end = policy === "eager" ? 1400 : 2800;
    return {
      policy, firstClauseEnd: 1200, qualifierStart: 1800, callerEnd: 2600,
      endpoint: end, token: end + 130, generated: end + 300, received: end + 500,
      receiveAfterCallerEnd: end + 500 - 2600,
      premature: end + 500 < 2600,
      events: [
        ["Caller: first clause", 0, 1200, "caller"],
        ["Caller: timing qualifier", 1800, 2600, "caller"],
        ["End-of-turn accepted", end, end, "endpoint"],
        ["First token", end + 130, end + 130, "model"],
        ["First generated audio", end + 300, end + 300, "tts"],
        ["First receiver audio", end + 500, end + 500, "receiver"]
      ]
    };
  }
  function evidence(includeFinalState = true) {
    return {
      schema: "presentation-evidence/v1", provenance: "scripted-teaching-fixture",
      run_id: "run-0247", operation_id: "op-247", execution: "complete",
      evidence_status: includeFinalState ? "complete for shown checks" : "partial: final_state missing",
      clocks: { type: "single synthetic monotonic timeline", unit: "ms" },
      measurements: { speech_end_to_receiver_audio_ms: 1420, interruption_to_speech_stop_ms: 380 },
      action_trace: [{ operation_id: "op-247", result: "timeout" }, { action: "output_gate", unsupported_confirmation: "blocked" }],
      captured_output: "I could not confirm cancellation. I can connect you to a specialist.",
      ...(includeFinalState ? { final_state: { operation_id: "op-247", subscription_status: "active", source: "authoritative readback (fixture)", observed_after_attempt: true } } : {}),
      findings: {
        business_outcome: includeFinalState ? "verified_not_completed" : "unverified",
        output_safety: "safe output observed in this fixture; not proof of all behavior",
        reason: includeFinalState ? "Readback for this operation confirms the subscription stayed active." : "A timeout does not establish the final state. No business verdict without its required evidence."
      },
      note: "Teaching JSON, not a conformant vCon export or an actual CAE run."
    };
  }
  function controlRun({ scenario = "failure", gate = true, reconciled = false, retries = 0, interrupted = false, proofOperationId = "op-247" } = {}) {
    choice(scenario, ["success", "failure", "lost"]);
    if (!Number.isSafeInteger(retries) || retries < 0 || retries > 20) throw new TypeError("Retries must be an integer in [0, 20].");
    const operationId = "op-247";
    const committed = scenario !== "failure";
    const tool = scenario === "success" ? "acknowledged success" : "timeout";
    const verified = (scenario !== "lost" || reconciled) && proofOperationId === operationId;
    const knowledge = verified ? (committed ? "canceled" : "active") : "unknown";
    // A structured communicative action is gated before TTS. This is NOT a
    // keyword filter over arbitrary model prose and not a general safety engine.
    const permitted = knowledge === "canceled" && !interrupted;
    const emittedCompletion = !gate || permitted;
    const unsupported = emittedCompletion && (!permitted);
    let speech = "I cannot confirm cancellation. I can connect you to a specialist.";
    let verdict = knowledge === "unknown" ? "PENDING RECONCILIATION" : "SAFE FAILURE";
    if (emittedCompletion) {
      speech = "Your subscription has been canceled.";
      verdict = unsupported ? (committed ? "UNSUPPORTED CONFIRMATION" : "FALSE SUCCESS") : "VERIFIED SUCCESS";
    } else if (interrupted) {
      speech = "[No speech: superseded response suppressed. Wait for the caller’s next turn.]";
      verdict = "STALE RESPONSE BLOCKED";
    }
    const events = [
      [0, "runtime", "Verified identity and scope assumed for this fixture; op-247 submitted."],
      [180, "backend", committed ? "op-247 commits once (fixture ground truth)." : "op-247 rejected; no business effect."],
      [240, "transport", scenario === "success" ? "Acknowledgment delivered to runtime." : "Acknowledgment absent at timeout; outcome cannot be inferred from timeout alone."]
    ];
    if (interrupted) events.push([280, "caller/runtime", "Caller interrupts; response generation g-1 is superseded. This does not undo the effect."]);
    if (scenario === "failure") events.push([360, "state observer", "Readback associated with op-247 confirms active."]);
    if (retries) events.push([450, "runtime/backend", `${retries} retry request(s) reuse op-247. Backend fixture deduplicates; at most one commit. Retry acknowledgments remain unavailable in the lost-ack mode.`]);
    if (scenario === "lost" && reconciled) events.push([600, "state observer", `Readback returns canceled for ${proofOperationId}; ${verified ? "matched" : "mismatched"} operation identity.`]);
    events.push([750, "runtime → TTS", gate ? (permitted ? "Verified, current-generation confirmation permitted." : "Completion action blocked; safe fallback or silence selected.") : "Gate deliberately bypassed: unchecked completion action emitted."]);
    return {
      operationId, tool, knowledge, truth: committed ? "canceled" : "active",
      requests: 1 + retries, commits: committed ? 1 : 0,
      responseGeneration: interrupted ? "g-1 superseded" : "g-1 current", speech, verdict,
      permitted, unsupported, gateDecision: gate ? (permitted ? "allow verified claim" : "block completion claim") : "BYPASSED (anti-pattern)",
      tone: unsupported ? "fail" : (permitted ? "pass" : "warn"), events,
      explanation: unsupported ? "This is a preventable runtime-control violation. The evaluator detects it; the evaluator did not prevent the speech." :
        interrupted ? "Speech cancellation and transaction cancellation are separate. Reconcile the operation, but do not revive the superseded response." :
        knowledge === "unknown" ? "The backend committed, but the agent has no verified acknowledgment or readback yet. The gate preserves uncertainty until reconciliation." :
        permitted ? "Evidence matches this operation before the completion claim reaches TTS. The evaluator can verify that ordering." :
        "The protected system blocks the model’s unsupported confirmation and emits uncertainty. The task is incomplete; sampled output behavior is safe.",
      checks: { claim_supported_before_speech: !unsupported, superseded_response_suppressed: !interrupted || !emittedCompletion, at_most_one_effect: true }
    };
  }
  function releaseReview(version) {
    choice(version, ["baseline", "candidate"]);
    const data = version === "baseline" ? { runs: 100, p95: 1100, premature: 2, wrongTiming: 0, evidence: 100, unanswered: 0 } : { runs: 100, p95: 780, premature: 12, wrongTiming: 4, evidence: 100, unanswered: 0 };
    const failures = [];
    if (data.p95 > 1200) failures.push("response deadline");
    if (data.premature > 3) failures.push("premature-response budget");
    if (data.wrongTiming !== 0) failures.push("correct cancellation timing");
    if (data.evidence !== data.runs) failures.push("required evidence coverage");
    if (data.unanswered !== 0) failures.push("answered-turn requirement");
    return { ...data, failures, decision: failures.length ? "HOLD" : "MEETS THIS TEST GATE", explanation: failures.length ? "Lower latency does not compensate for cutting callers off or canceling at the wrong time." : "This illustrative cohort meets the configured requirements. It is not a guarantee of zero failures in production." };
  }
  root.VoiceEvalEngineering = Object.freeze({ latency, evidence, controlRun, releaseReview });
})(globalThis);
