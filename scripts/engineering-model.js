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
      [0, "agent application", "Cancellation request submitted; verified identity and scope assumed for this fixture."],
      [180, "backend", committed ? "Cancellation applied once (fixture ground truth)." : "Cancellation rejected; no business effect."],
      [240, "agent application", scenario === "success" ? "Acknowledgment received by application." : "No acknowledgment received before timeout; outcome cannot be inferred from timeout alone."]
    ];
    if (interrupted) events.push([280, "caller/runtime", "Caller interrupts; response generation g-1 is superseded. This does not undo the effect."]);
    if (scenario === "failure") events.push([360, "state observer", "Check of the original request confirms the subscription is active."]);
    if (retries) events.push([450, "application/backend", `${retries} retry request(s) repeat the original request. Backend fixture deduplicates; at most one state change. Retry acknowledgments remain unavailable in the lost-ack mode.`]);
    if (scenario === "lost" && reconciled) events.push([600, "agent application", verified ? "Operation-matched result received; cancellation confirmed for the original request." : "A canceled result is received, but it belongs to another request."]);
    events.push([750, "application output gate", gate ? (permitted ? "Verified, current-generation confirmation released for speech; audio is not measured." : "Completion action blocked; safe fallback or silence selected.") : "Gate deliberately bypassed: unchecked completion action released."]);
    // Structured fixture observations, distinct from the narrative event labels.
    // The output event is a release decision, not measured TTS or receiver audio.
    const evidence = {
      complete: true, operationId,
      effects: committed ? [{ operationId, committedAt: 180 }] : [],
      proof: scenario !== "lost" || reconciled ? {
        operationId: proofOperationId, state: committed ? "canceled" : "active",
        receivedAt: scenario === "success" ? 240 : scenario === "failure" ? 360 : 600
      } : null,
      confirmation: emittedCompletion ? { releasedAt: 750 } : null
    };
    return {
      operationId, tool, knowledge, truth: committed ? "canceled" : "active", evidence,
      requests: 1 + retries, commits: committed ? 1 : 0,
      responseGeneration: interrupted ? "g-1 superseded" : "g-1 current", speech, verdict,
      permitted, unsupported, gateDecision: gate ? (permitted ? "allow verified claim" : "block completion claim") : "BYPASSED (anti-pattern)",
      tone: unsupported ? "fail" : (permitted ? "pass" : "warn"), events,
      explanation: unsupported ? "This is a preventable runtime-control violation. The evaluator detects it; the evaluator did not prevent the speech." :
        interrupted ? "Speech cancellation and transaction cancellation are separate. Reconcile the operation, but do not revive the superseded response." :
        knowledge === "unknown" ? "The agent has no operation-matched confirmation. Missing proof means unknown—not failure. Reconcile the original operation before claiming success." :
        permitted ? "Evidence matches this operation before the application releases its completion claim. The fixture verifies that ordering; actual speech is not measured." :
        "The protected system blocks the model’s unsupported confirmation and emits uncertainty. The task is incomplete; sampled output behavior is safe.",
      checks: { claim_supported_before_speech: !unsupported, superseded_response_suppressed: !interrupted || !emittedCompletion, at_most_one_effect: true }
    };
  }
  // Example post-run checks. null means unestablished or not applicable.
  // Requires complete, trusted logs on one comparable event clock.
  function recoveryFactChecks({ complete, operationId, effects, proof, confirmation } = {}) {
    if (!complete || !operationId || !Array.isArray(effects)) {
      return { oneRecordedEffect: null, sameRequest: null, proofBeforeConfirmation: null };
    }
    const sameRequest = proof ? proof.operationId === operationId : null;
    const supportsCancellation = sameRequest === true && proof.state === "canceled";
    return {
      oneRecordedEffect: effects.filter((effect) => effect.operationId === operationId).length === 1,
      sameRequest,
      proofBeforeConfirmation: !confirmation ? null : supportsCancellation &&
        Number.isFinite(proof.receivedAt) && Number.isFinite(confirmation.releasedAt) &&
        proof.receivedAt < confirmation.releasedAt
    };
  }
  // Slide 15/16 share an intentionally unverified address-update example.
  const billingAddressEvidence = Object.freeze({
    complete: true, operationId: "A", accountId: "account-1", requestedAddress: "new-billing-address",
    verification: null,
    update: { operationId: "A", accountId: "account-1", committedAt: 180 },
    proof: { operationId: "A", accountId: "account-1", address: "new-billing-address", receivedAt: 600 },
    confirmation: { releasedAt: 750 }
  });
  function addressChangeFactChecks({ complete, operationId, accountId, requestedAddress, verification, update, proof, confirmation } = {}) {
    if (!complete || !operationId || !accountId || !requestedAddress || !update || !Number.isFinite(update.committedAt)) {
      return { verifiedBeforeUpdate: null, requestedAddressSaved: null, proofBeforeConfirmation: null };
    }
    const matchedUpdate = update.operationId === operationId && update.accountId === accountId;
    const requestedAddressSaved = proof ? matchedUpdate && proof.operationId === operationId &&
      proof.accountId === accountId && proof.address === requestedAddress : null;
    return {
      verifiedBeforeUpdate: matchedUpdate && Boolean(verification && verification.succeeded === true &&
        verification.accountId === accountId && Number.isFinite(verification.succeededAt) && verification.succeededAt < update.committedAt),
      requestedAddressSaved,
      proofBeforeConfirmation: !confirmation ? null : requestedAddressSaved === true &&
        Number.isFinite(proof.receivedAt) && Number.isFinite(confirmation.releasedAt) && proof.receivedAt < confirmation.releasedAt
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
  root.VoiceEvalEngineering = Object.freeze({ latency, controlRun, recoveryFactChecks, billingAddressEvidence, addressChangeFactChecks, releaseReview });
})(globalThis);
