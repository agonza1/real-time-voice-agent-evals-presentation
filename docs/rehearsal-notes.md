# 20-minute rehearsal — Fall '26 Voice and Conversations on the Net

Use these as cues, not a word-for-word script. Times include pointing, pauses, and the demo. Start a stopwatch at slide 1; mark the actual finish time at slides 4, 9, 12, and 18. The target is 20:00, leaving one minute of buffer and nine minutes of Q&A in the 30-minute slot. Supporting engineering qualifications remain in [speaker-notes.md](speaker-notes.md).

| Slide | Budget | Finish by | Say / do |
| --- | --- | --- | --- |
| **1 · Title** | 0:30 | 0:30 | “A voice agent can sound right and still get the call wrong. We’ll look at the complete system, one evaluation workflow, and the evidence behind a release decision.” |
| **2 · Story** | 0:50 | 1:20 | “My 2017 Echo Show assistant needed the phrases I anticipated. Open-ended voice on WebRTC changed that. The question moved from ‘Can it understand me?’ to ‘Can we control it?’ and now ‘Does it still work after a change?’” Point to the three questions. |
| **3 · Projects** | 1:00 | 2:20 | “We build the real-time systems around the model: meeting agents, surgical audio capture, avatar training, and SIP calls with warm transfers. These projects involve media, orchestration, interruptions, and human handoff.” Spend about 15 seconds per card; skip stack details. |
| **4 · Problem** | 0:50 | 3:10 | “The caller asks to cancel at period end. The reply is fluent, but the matched state readback shows cancellation was not scheduled. The timeout alone tells us nothing about whether the action happened.” Point left → right. “What evidence would make us trust the answer?” |
| **5 · System** | 0:45 | 3:55 | “SIP establishes the call; RTP carries media. Recognition, turn detection, reasoning, tools, and speech all affect the result. These stages can overlap. Follow the return audio to the caller: evaluation has to cover the whole loop.” Trace the arrows once. |
| **6 · Two paths** | 0:40 | 4:35 | “Newer native voice models can listen while speaking and delegate deeper reasoning or tools. LiveKit and Pipecat connect the media and delegation paths. The application still owns permissions, correlation, and stale-result handling.” Point to the separate boxes; no provider comparison. |
| **7 · Changed request** | 0:40 | 5:15 | “While work is running, the caller changes the instruction. Listening continuously helps, but the app must update that task and reject an obsolete result. Interrupting speech does not automatically undo a tool operation.” Follow the sequence. |
| **8 · Four dimensions** | 1:00 | 6:15 | “Conversation: could we hear and take turns? Comprehension: did we retain the intent and correction? Conduct: did we follow rules with the right arguments? Completion: did the required goal happen? Keep these results separate so we know what to fix.” Point to each icon; leave dialogs closed. |
| **9 · Timing** | 1:45 | 8:00 | “Faster from which boundary? This interval starts at the system’s end-of-turn decision. Accepting the turn too early can improve that number while losing the rest of the request.” Click **Aggressive endpointing**, point to the lost qualifier, then restore **Wait for the full request**. “Normal cooperative overlap is fine; suppressing an unfinished request is the failure.” |
| **10 · Outcomes** | 0:50 | 8:50 | “Define what completion means before scoring the call. For period-end cancellation, service should remain active until that date and renewal should stop. A spoken claim and verified state are different observations. Unknown remains unknown; permission is another check.” |
| **11 · Workbench** | 0:45 | 9:35 | “VoiceAI QA, our Conversation Agent Evaluation tool: run a target or import evidence, evaluate it, and compare versions. Python APIs organize the work; Pipecat supports voice testing; ASSERT can judge behavior against rubrics. Available evidence determines which checks we can establish.” |
| **12 · Demo** | 3:30 | 13:05 | “Start with one workflow, explicit rules, a few failure cases, and evidence you can inspect. I’ll show the billing-address scenario using clearly labeled synthetic evidence.” Follow the demo card below. |
| **13 · vCon** | 0:35 | 13:40 | “vCon packages conversation evidence for another tool to inspect. It can carry media, transcripts, provenance, and analysis. The envelope preserves observations; it does not make a verdict true.” |
| **14 · Inspect evidence** | 0:45 | 14:25 | “Here is an illustrative envelope. Start with the evaluation, then follow it back to the dialogue. An unresolved outcome stays marked for review.” Magnify **Evaluation** and **Dialog** only; skip individual JSON fields. |
| **15 · ASSERT** | 1:30 | 15:55 | “ASSERT is a Python evaluation framework. Requirements become behavior-focused tests and individual judgments, rather than one vague ‘was it good?’ score. The address scenario has several requirements. Here, preserving the correction fails even though other behavior passes. ASSERT case generation into CAE is proposed; CAE retains voice execution.” Trace requirements → framework → results; leave Engineering details closed. |
| **16 · Trust the judge** | 1:50 | 17:45 | “Recorded values establish what was said. A semantic judge interprets corrections, paraphrases, and policy. Code combines those findings into a proposed verdict. Schema-valid output can still be wrong: compare judgments with independently human-labeled calls and preserve critical failures.” Optionally open **Check facts** for at most 20 seconds; skip the provider comparison. |
| **17 · Release** | 1:50 | 19:35 | “Same scenarios, same checks, two versions. The candidate is faster, but harmful cut-offs, lost corrections, wrong tool values, and missing invoice explanations increase. Would you ship it?” Pause, then point to **Do not release**. “These are illustrative counts. Failures can overlap; don’t add the rows into one total. This completion check is a spoken goal step, not proof of backend persistence.” |
| **18 · Close** | 0:25 | 20:00 | “Production readiness is a systems property. Define the contract, test the failure paths, keep the evidence, and repeat when the system changes. Start with one workflow you can explain.” Leave the QR visible for Q&A. |

## Demo card — 3:30 including slide 12

Primary route: [Billing Address Change sample](http://127.0.0.1:3012/eval?suite_id=call-center-voice-ai&scenario_id=billing-address-change&sample=1). This demonstrates the live evaluator UI over **synthetic imported evidence**, not a new voice call or customer benchmark. Do not wait for a fresh external voice call or ASSERT judgment on stage.

1. **0:00–0:20 · Checklist.** Point to workflow → rules → failures → inspect. Open the prepared evaluator tab.
2. **0:20–0:55 · Contract.** Expand **What this scenario checks**. Name verification, address confirmation, and invoice impact. “The scenario says what success means.”
3. **0:55–1:35 · Evidence.** Show the synthetic transcript and its source label. “This is an imported sample. The live tool can also inspect captured agent runs.” Point to the caller's address and the agent's confirmation.
4. **1:35–2:30 · Evaluation.** The prepared deterministic result shows **100**, **Needs review**, and five keyword-matched required actions. “The wording matches the checks, but semantic policy review is still pending. This is a diagnostic score, not a success certificate.” Do not request a fresh judge call on stage or describe its unapplied judgment as active.
5. **2:30–3:10 · Limits.** Point to transcript-only mode: task completion and final state are not measured. The exported report confirms action trace and final-state evidence are absent. “We can review what the agent said. Whether an account really changed is a separate question.” Missing evidence is not a failed backend operation. The later 14 → 40 correction sequence is another illustrative case within this workflow; this built-in sample uses 12 Market St.
6. **3:10–3:30 · Return.** “Now keep that evidence portable and make the checks reusable.” Return to the deck and advance to slide 13.

If a page or result takes more than **10 seconds**, switch to the offline backup: “I have the same prepared example saved locally; let’s follow the evidence there.” The backup is a saved demonstration, not a fresh evaluation. Do not troubleshoot on stage.

Backup: [demo-backup.html](../demo-backup.html), also linked from slide 12. Save this single file to the stage laptop and open it in its normal browser; images, report excerpt, CSS, and navigation are embedded. Steps 1–4 match the demo card. **Left/right arrows** navigate; **1–4** jump to a view. No audio is included because this input was a transcript, not a captured voice call. The original complete report is retained locally at `C:/Users/alber/.codex/visualizations/2026/10/06/01a11168-d488-76b3-a221-e0d86dc31821/billing-address-demo-full-report.json`; the public backup omits workspace/run metadata. The excerpt preserves the actual findings and synthetic transcript.

Preparation verified the actual evaluation and its export. The browser automation policy permits only HTTP/HTTPS, so direct `file:` opening could not be tested through automation. Check opening the saved HTML from disk once on the stage laptop. No service was stopped to simulate an outage.

## Rehearsal checkpoints

- **3:10 at slide 4:** finish the story; avoid describing every project implementation.
- **8:00 after slide 9:** restore patient endpointing and move on.
- **13:05 after the demo:** return to slide 13 even if one optional demo view was skipped.
- **20:00 at close:** if behind, skip all detail dialogs and shorten slide 17 to speed → four regressions → hold.
- Before the room opens: load slide 12, the prepared evaluator result, and the standalone backup in separate tabs. Confirm the backup opens directly from disk with no service connection. Keep the notes on a second screen or printed.

This is a rehearsal guide and demo preparation record; it does not claim a spoken 20-minute rehearsal has already been completed.
