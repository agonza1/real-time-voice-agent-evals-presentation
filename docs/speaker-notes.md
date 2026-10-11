# Speaker notes — Fall '26 Voice and Conversations on the Net

These speaker notes connect Alberto’s first voice agent with published WebRTC.ventures projects and the evaluation workflow for the Fall '26 audience. The cancellation and timing examples remain teaching fixtures.

## Title slide — orient the audience

“A voice agent can understand the words and still mishandle the conversation. Today is about evaluating the complete real-time system: what the caller experiences, what the agent is allowed to do, and what actually happens.”

Keep the Echo Show story on the next slide rather than revealing it over the title.

## Story slide — the engineering question evolved

In 2017, I built a voice assistant for the Echo Show. It could trigger impressive actions—but only when people used the phrases I had anticipated. The human had to adapt to the system.

Years later, putting an open-ended language model on a WebRTC call felt like magic. The conversation no longer had to follow my script.

But that changed the question. It was no longer just, “Can it understand me?” It became, “Can we keep the whole system under control when someone interrupts or a tool times out?”

Building those controls leads to the next question: how do we know they still work when the model, network, or workflow changes?

That is the question behind the Conversation Agent Evaluation (CAE) tool: testing the complete interaction, inspecting the evidence, and deciding whether the next version is ready for production.

## Projects — slide 3

“This is the range of voice work our team has built and continues to develop. AVA brings an AI participant into a meeting. The surgical system listens and organizes conversation evidence. CETA turns voice and avatars into a training environment. The agentic call center uses LiveKit to handle voice calls and transfers to humans. Each application has a different job, and each requires us to test more than the model.”

Spend about 15 seconds per example. Keep the technical stack for Q&A:

Use the capability labels to connect the examples to our engineering work: meeting integrations and voice agents, real-time media capture, WebRTC and AI orchestration, and SIP calling with warm transfers. The examples show systems we have built and continue to develop; the GPT-Live diagrams later in the talk explain a newer architecture pattern, not a claim about these deployments.

- [AVA Intellect](https://webrtc.ventures/successes/ai-voice-agents-that-collaborate-and-contribute/): configurable assistants, shared knowledge, tools, and integration with meeting platforms. The image is the published agent configuration UI.
- [Surgical audio](https://webrtc.ventures/successes/audio-listening-device-to-improve-surgical-outcomes/): Amazon Chime SDK capture with Symbl.ai transcription and conversation insights, plus postoperative speaker separation and oversight. Describe the system's purpose and functionality; this case study does not establish a quantified clinical improvement.
- [CETA Global / EBT-Sim](https://webrtc.ventures/successes/ai-roleplay-training-simulator-case-study/): WebRTC.ventures helped build real-time communication, the training UI, cloud infrastructure, and AI orchestration with CETA's team. Integration with the broader practitioner ecosystem continues. The system uses push-to-talk, Google speech services, Google ADK agents, and HeyGen avatars. Deliberate thinking pauses motivated push-to-talk rather than automatic turn ending. The visual comes from [CETA's public product page](https://www.cetaglobal.org/solutions/cetaaitraining), linked in the success story.
- [LiveKit production migration, slides 16–19](https://webrtc.ventures/wp-content/uploads/2026/07/Migrating-from-Kurento-to-LiveKit-in-Production.html#16): LiveKit SIP dispatches inbound calls and agents into a room. Scoped agents identify intent, search for human agents, check availability, transfer, or offer voicemail. The implementation retained STT → LLM → TTS with Azure providers. Do not describe this project as the full-duplex speech-to-speech architecture on slide 6.

The first three visuals are from public project materials. The call-center card uses a generated illustration selected by Alberto: SIP caller ↔ LiveKit voice agent, consultation/context handoff to a human, and the continuing caller–human conversation. These are conceptual roles and call phases, not a literal network topology or a deployed-product screenshot; the continuing-call line does not imply bypassing SIP/media infrastructure. The original published architecture diagram remains in the repository for reference, and the production-migration link is unchanged. Files and provenance are retained in `assets/projects/SOURCES.md`.

### Transition into the problem slide

"Building these systems taught us that a fluent answer is only one part of a successful call. Let’s start with a case where the words sound right, but the evidence tells us something different."

The cancellation case is a teaching fixture, not a claim that it happened in a customer deployment.

## Closing — production readiness

The question we started with was: how do we know the system still works as it changes?

A model score cannot answer that on its own. We need to measure the received conversation, verify the runtime protections and business outcomes, and re-test the changes we intend to release.

Runtime controls enforce the boundaries. Evaluation checks their behavior. The evaluation tool organizes that work, and vCon helps make the evidence portable.

Start with one important workflow. Define the contract, test the failure paths, and keep the evidence behind the release decision.

Production readiness is a systems property.

Leave the closing slide up during Q&A so attendees can scan the QR to [connect with Alberto on LinkedIn](https://www.linkedin.com/in/albertogonzaleztrastoy). Invite them to discuss voice AI and the evaluation topics, or get help building a system. The QR is a local asset and requires no network connection to display.

## 30-minute stage route

Plan for 20 minutes of presentation including a 3½-minute demo, one minute of delivery buffer, and nine minutes of Q&A. There are 18 main slides and three optional appendices. Keep the scope to one evaluation example; do not narrate every field or open every disclosure.

| Slide | Time | Finish by | Point and stage action |
| --- | --- | --- | --- |
| 1 · Title | 0:30 | 0:30 | Introduce evaluation of the complete real-time voice system. |
| 2 · Story | 0:50 | 1:20 | Move from voice commands to controlling actions and testing changes. |
| 3 · Projects | 1:00 | 2:20 | Emphasize our WebRTC, audio capture, avatar orchestration, and SIP engineering experience. |
| 4 · Problem | 0:50 | 3:10 | For a period-end request, the operation-matched readback shows no cancellation scheduled; the timeout alone proves neither success nor failure. |
| 5 · System | 0:45 | 3:55 | SIP establishes the session; RTP carries audio. Trace the conceptual cascade and return audio, with tool requests and results. |
| 6 · Two-path architecture | 0:40 | 4:35 | A newer architecture pattern: native audio continues while reasoning and tools run. |
| 7 · Continuous-voice sequence | 0:40 | 5:15 | The application applies the changed constraint and rejects stale results. |
| 8 · Four Cs | 1:00 | 6:15 | Conversation, comprehension, conduct, completion. Score each separately; ASR-specific measures apply only when ASR is present. |
| 9 · Timeline | 1:45 | 8:00 | Switch endpointing once, then restore. A faster system-endpoint-to-audio interval can hide premature turn acceptance. |
| 10 · Outcomes | 0:50 | 8:50 | Define completion and evidence-supported speech before introducing the tool. Unknown stays unknown; authorization is a separate check. |
| 11 · Workbench | 0:45 | 9:35 | Run → Evaluate → Compare. Name framework roles briefly. |
| 12 · First evaluation + live demo | 3:30 | 13:05 | Checklist in 20 seconds; spend the remaining time on one recorded call, one finding, and its supporting trace/state. Use a prepared captured result if a live run is slow. |
| 13 · vCon | 0:35 | 13:40 | Portable evidence, not a verdict. |
| 14 · vCon JSON | 0:45 | 14:25 | Magnify Dialog and Evaluation only. Unknown outcome requires review; the sample is illustrative, not a literal export. |
| 15 · ASSERT | 1:30 | 15:55 | Several behavior requirements → ASSERT Python framework → individual results. Highlight the failed caller correction; keep artifacts and sample-size limits in Engineering details. |
| 16 · Judge reliability | 1:50 | 17:45 | Facts → narrow semantic judgments → code policy. Open the fact-check example; keep provider comparisons for Q&A. |
| 17 · Release decision | 1:50 | 19:35 | Matched scenario cohort: speed improves while critical behavior regresses. Hold the candidate. These are illustrative data. |
| 18 · Close | 0:25 | 20:00 | Production readiness is a system property. Leave the contact QR visible. |
| Delivery buffer | 1:00 | 21:00 | Allow for transitions and opening the evaluator. |
| Q&A | 9:00 | 30:00 | Keep the closing visible; open appendix material when useful. |

The JSON explorer is slide 14. Appendix A1 contains standards and research; A2 contains the lost-ack experiment; A3 contains capabilities and roadmap. Normal forward navigation stops at the closing. End returns to the closing; Home returns to the title.

## Spoken bridge — workbench to evidence

“What would make this call pass? The caller wants cancellation at the end of the billing period. Verify identity and agree on the effective date. Canceling immediately violates that request, even if the response sounds fluent. Proof means checking that renewal is disabled and service remains active until the agreed date, using the tool result and state readback for this request.”

Summarize required behavior, forbidden behavior, and proof in this transition; these are example evaluation requirements, not generated ASSERT output or an executable configuration. Explicitly configured critical checks can block approval regardless of a weighted score. A description alone does not establish that a rule is enforced: CAE’s simple scenario creation currently does not extract forbidden actions from prose. The evaluation-design editor is a separate authoring path; its generated drafts require review. Keep that product distinction for Q&A.

Transition: “We have defined what to check. Now we need to preserve the conversation, tool result, and state evidence so we can actually check it.”

## Bridges between slides

- **4 → 5:** “Which part of the system can establish that this action happened?”
- **5 → 6 → 7:** “The cascade is one architecture. Newer native speech systems can listen while speaking and delegate work. The application still has to manage changed requests and stale results.”
- **7 → 8 → 9:** “The architecture changes, but we still evaluate the caller experience, speech, execution, and outcome. Start with this timing failure.”
- **9 → 10:** “Faster at one boundary does not establish success. What would count as a successful outcome?”
- **10 → 11 → 12:** “Now we can state the checks. Here is the workbench, and one evaluation with the evidence behind its finding.”
- **12 → 13 → 14:** “The report depends on captured observations. Keep the conversation, trace, and state together so another system can inspect them.”
- **14 → 15:** “The evidence is portable. Generate behavior-focused caller cases with ASSERT, then run them through CAE's voice execution.”
- **15 → 16:** “Take that same address-change failure. The caller corrected 14 to 40, but the agent confirmed 14. Follow the conversation evidence, interpret the correction, and retain the failed requirement.”
- **16 → 17:** “Apply that policy to matched scenarios. Would you release a faster version with these regressions?”
- **17 → 18:** “We build the conversation and verify the whole system. Keep the evidence and repeat the evaluation when it changes.”

## ASSERT + CAE voice-test workflow — slide 15

“ASSERT is a Python evaluation framework. Use it to generate behavior-focused cases from reviewed requirements. Review and freeze those cases in CAE. CAE runs the voice agent and captures the conversation and available evidence; ASSERT judges behavior afterward. CAE's deterministic findings remain separate. Generation integration is proposed; voice execution and ASSERT semantic review already have their own paths.”

Billing Address Change remains the scenario. Collecting the address, preserving caller corrections, explaining invoice impact, and avoiding full card numbers are its example behavior requirements. The displayed correction failure—caller says 40 Pine St, agent confirms 14—is illustrative, not a measured result or literal ASSERT output. These conversational requirements do not prove a backend update. Keep the same frozen cases when comparing agent versions; calibrate the judge on held-out human-labeled evidence.

The planned integration uses pinned ASSERT 0.3.0's test_set stage with reviewed behavior IDs as its taxonomy inputs, preserving the approved policy instead of regenerating it. It adapts caller prompts into reviewable CAE cases with normal, boundary, and adversarial coverage. Generated prompts and caller instructions are not prewritten target answers. CAE retains its voice execution/tester adapters; the proposal does not replace them with ASSERT's inference stage. ASSERT judgment consumes the saved executed conversation afterward. The main slide labels generation as proposed until the PR is merged and the deployment is verified. Current CAE draft generation uses CAE's configured LLM rather than upstream ASSERT generation.

The upstream framework and artifact names are described in the [ASSERT repository](https://github.com/responsibleai/ASSERT), checked October 9, 2026. The source generation artifact, adapted cases, approved spec version, agent configuration, evidence, and judge configuration remain linked for reproducibility. The details dialog leads with three linked observations: test setup, saved call, and judgment. A score should be traceable to the actual captured conversation and the settings used to produce it; storing versions does not guarantee bit-for-bit repeatability from a nondeterministic model. The billing-address finding is an illustrative readable record, not literal ASSERT JSON: its call-042/turn-6 pointer is fictional and no underlying recording is provided. Keep the original audio when a transcript is insufficient. The adjacent human-review comparison explains calibration: evaluate on independently labeled calls not used to tune the rubric, measure missed failures and false alarms, and review disagreements. It does not claim ASSERT is already calibrated. Optional disclosures retain generated test_set.jsonl, the approved CAE suite, CAE voice execution, ASSERT judge outputs, and sample-size limits.

Planned UI walkthrough: approve the Evaluation design's behavior requirements; select ASSERT for Generate runnable case drafts; inspect and edit the caller cases; approve, save a version, and publish it to Scenarios. In Runs, select the saved suite and a supported voice target. After execution, inspect the captured evidence and request ASSERT semantic review. Generating cases does not start a voice call or judge run.

The numeric strip in the optional sample-size disclosure is a calculation, not a benchmark. A plain-language example precedes it: with a true 3% failure rate, P(no failures in 100 independent calls) = 0.97^100 = 4.76%, rounded to about 5%. This explains how a clean sample can miss a nonzero rate; it is not a posterior probability that the system is safe. With zero observed failures in N independent Bernoulli trials with a stable failure probability, the exact one-sided 95% upper confidence bound is p_upper = 1 - 0.05^(1/N). For N = 100 it is 2.951%; for N = 1,000 it is 0.299%. The familiar approximation is 3/N. This bounds failure probability under the sampled protocol, not all production traffic. Generated scenarios can be correlated or unrepresentative; an imperfect judge can miss failures. Neither a reused test set nor a clean LLM-scored report automatically satisfies these assumptions. The [NIST binomial confidence interval reference](https://www.itl.nist.gov/div898/handbook/prc/section2/prc241.htm) gives the exact binomial method; the displayed values are calculated for zero failures with a one-sided alpha of 0.05. Audio, interruption timing, and receiver delivery need separate voice measurements.

## Outcome matrix — slide 10

The rows describe verified business state; the columns describe whether speech was supported at the time it was emitted. A task can finish while the agent confirms it without sufficient evidence. That claim might be true by luck, but the confirmation remains unsupported. Conversely, a truthful expression of uncertainty can be safe even if the backend already committed.

Authorization, privacy, and timing are separate checks; this matrix only addresses completion claims. An unknown state is not a failed task. Keep it unknown until operation-matched reconciliation establishes the result. The matrix applies the contract to separate business state from completion-claim support; the release review then uses those verdicts across matched scenarios.

## Continuous voice — slides 6 and 7

Slide 5 is a conceptual cascade, not a strictly serial scheduling or latency model: VAD, endpointing, and streaming recognition can overlap. SIP handles session signaling; RTP carries media, including WebRTC audio. For native speech-to-speech, ASR partial/final metrics apply only if that observation is available. Test audio entity and intent handling end to end; generated captions are not independent proof of what the model heard.

Frame slides 5–7 around engineering responsibilities: connect the caller, manage interruptions, coordinate tools, and verify action results before confirming completion. For native continuous voice, the application still owns permission checks, task updates, result correlation, and rejection of stale results. The on-slide controls are responsibilities to implement and evaluate, not guarantees supplied by a framework.

Both diagrams are in the main route: the two-path architecture follows the conventional system on slide 6, and the appointment sequence follows on slide 7. Legacy architecture-review URLs open slide 6 without replacing the sequence.

- `architecture`: trace the cyan audio loop first, then the delegated reasoning and tool requests below it. “The live conversation continues while deeper work runs. The result comes back to the voice model.”
- `sequence`: follow the appointment search from top to bottom. The cyan overlap highlights the caller adding “after 3pm” while the voice model speaks. Point to the application controls: apply the new constraint and discard stale results. These are checks for the evaluation, rather than capabilities proven by the illustration. Availability returns to the same conversation; “Shall I book it?” does not claim that a booking happened.

Both diagrams are illustrative. An implementation must update or supersede background work after a changed request and suppress stale results. Keep the vendor explanation and STT → LLM → TTS alternative in these notes rather than adding a second spoken pipeline to the diagram.

### Framework mapping behind the small labels

The LiveKit/Pipecat badges on slide 6 mean direct GPT-Live integrations, not that every model in either framework is full duplex. GPT-Live owns simultaneous listening and speaking; the adapters connect media and asynchronous delegation. Both support an OpenAI-hosted Responses reasoner or a backend controlled by your application. The backend returns text/context for the voice model to communicate, rather than a second spoken pipeline.

- [LiveKit GPT-Live plugin](https://docs.livekit.io/agents/models/realtime/plugins/gpt-live/): `GPTLiveModel` runs within `AgentSession`. Responses delegation runs the configured text model; custom `@function_tool` handlers execute in the agent process. Client delegation emits `delegation_created`; your application derives the request from chat context plus `pending_transcript`, runs its own workflow, and returns commentary or thinking with the delegation ID. Client mode does not execute registered `@function_tool` methods automatically.
- [Pipecat GPT-Live service](https://docs.pipecat.ai/api-reference/server/services/s2s/openai-live): `OpenAILiveLLMService` streams audio and supports `ResponsesDelegation` or `ClientDelegation`. The latter uses a `BackendLLMWorker` with its own LLM, context, and tools. Its outputs become commentary or silent context according to `prefers_spoken`; that flag is a hint rather than a guarantee of exact spoken wording.
- [OpenAI delegation and task-state guidance](https://developers.openai.com/api/docs/guides/live-delegation): application logic owns task state, permission checks, and verified results. The delegation event contains metadata rather than a structured task request. Speech interruption leaves backend work running. In slide 7, “App updates: after 3pm” therefore represents application behavior: update or supersede the active search and ignore stale results. Framework support does not supply that business rule automatically.

Checked October 6, 2026. Running either integration requires GPT-Live account access. Keep SDK class names and access details for Q&A.

“Some systems now keep a native speech model listening while it speaks, and delegate deeper work to another model. The caller still hears one conversation. What happens if they interrupt while that background work is running?”

The diagram synthesizes current vendor documentation; it is not an implemented evaluation tool architecture or a universal recommendation to use two models. Start with one agent and tools when that meets latency and quality requirements. Heavy actions need authorization and state verification regardless of model choice. For this architecture, test delayed results after a changed request, overlapping speech, duplicate operations, and premature completion claims.

- [OpenAI GPT-Live engineering, August 3, 2026](https://openai.com/index/continuous-voice-interaction-with-gpt-live/): continuous full-duplex inference, a dedicated media path, and asynchronous frontier-model/tool delegation. The voice model owns turn timing. Delegation still needs a latency budget; ongoing conversation cannot hide an arbitrarily slow result.
- [LiveKit subagent delegation](https://docs.livekit.io/agents/logic/patterns/subagent-delegation/): a fast primary model delegates reasoning without blocking conversation. Use scoped context, cancel abandoned reasoning, and reject duplicate delegations. Simpler single-agent and async-tool patterns should be evaluated first.
- [LiveKit realtime models](https://docs.livekit.io/agents/models/realtime/): distinguishes full-duplex models from turn-based speech-to-speech. Transcript timing and exact scripted output can motivate STT or separate TTS. Native audio does not guarantee verbatim speech.
- [Pipecat GPT-Live integration](https://docs.pipecat.ai/api-reference/server/services/s2s/openai-live): continuous audio with a delegated text backend, either OpenAI-hosted Responses delegation or a client-provided BackendLLMWorker. Results return as spoken commentary or silent context to the voice model. This is stronger evidence for the dual-path slide than parallel pipelines alone.
- [Pipecat async function example](https://github.com/pipecat-ai/pipecat/blob/main/examples/function-calling/function-calling-openai-async.py): a conventional STT → LLM → TTS pipeline can also keep conversation going during long tools, with explicit timeout and cancellation behavior.

Background reading: [gpt-realtime introduction, August 28, 2025](https://openai.com/index/introducing-gpt-realtime/) documents native speech and asynchronous functions; [OpenAI media infrastructure, May 4, 2026](https://openai.com/index/delivering-low-latency-voice-ai-at-scale/) explains low-latency transport. These address different layers; speech-to-speech alone does not establish model-level full duplex.

Research checked October 5, 2026. The August GPT-Live article describes an upcoming API; current LiveKit and Pipecat documentation now includes GPT-Live integrations. Avoid inferring account availability from the article alone. STT → LLM → TTS is an alternative speech pipeline, not a required extra synthesis stage for delegated reasoning. If both paths can generate speech, the application must coordinate output and interruption policy.

Transition: “These changes move the boundaries. They do not remove the four things we have to evaluate.”

## Four Cs — slide 8

“How it flows. What it understands. How it acts. What it achieves.”

Use the four Cs as a memory aid for the existing evaluation dimensions, not as four sequential runtime stages. Full-duplex systems can overlap listening, speaking, and tool work.

- **Conversation:** turn timing, interruptions, silence, audio continuity, and latency, plus WebRTC media-quality evidence: jitter, RTT, bitrate, packet loss, jitter-buffer discards/delay, concealment, and audio level. Did the conversation flow naturally?
- **Comprehension:** whether the agent preserved the caller’s entities, intent, and corrections across accents and noise. Judge observable understanding from the response and actions. When ASR exists, transcript accuracy, partial stability, and finalization delay help diagnose failures; native speech systems do not necessarily expose those ASR measures.
- **Conduct:** required and forbidden actions, policy checks, tool choice, fallback, and recovery. Did the agent take the right actions and follow the rules?
- **Completion:** whether the caller’s goal was achieved. Evaluate what the conversation establishes; where available, action receipts and final state provide additional confirmation of state transitions, durable completion, and agreement between speech and execution. Missing backend records do not make the whole call unjudgeable or automatically a failure.

“A call can sound smooth, misunderstand ‘at period end,’ execute the wrong cancellation, and leave the customer with the wrong result.” That is why we score each C separately: a good conversation score cannot erase a failed comprehension, conduct, or completion check.

Each C opens an optional engineering dialog. Use these for a technical question rather than opening all four during the main route. Conversation shows WebRTC media metrics and caller-side timing. Comprehension pairs transcript metrics with entity, intent, correction, and streaming checks. Conduct shows a caller correction and confirmation reflected in speech while an earlier request draft remains stale; the guard blocks the request built from that draft. Completion applies a conversation goal contract to address readback and invoice explanation, with optional state and handoff checks listed separately. These are teaching examples and reference checks, not captured calls, universal thresholds, ASSERT syntax, or claims that all metrics are implemented in CAE. The dialogs use the existing modal behavior: Escape or Close returns to the same slide and slide-navigation keys are suspended while a dialog is open.

The dialogs present compact icon grids and one visual example each; detailed definitions and scoring qualifications remain here. Conversation’s timing example uses aligned caller and received-agent audio: caller end at 3,200 ms, first agent audio at 3,900 ms (700 ms gap); interruption at 5,100 ms, agent audio stops at 5,320 ms (220 ms). The `getStats()` snippet demonstrates collection only; a real implementation must select the appropriate reports and correlate interval deltas with the audio timeline. Display seconds-based jitter, RTT, and average buffering as milliseconds, and bitrate as kb/s after conversion. Overlap can be intentional in full-duplex systems; choose codec/DTX-aware, case-specific budgets. Comprehension’s abbreviated WER/CER denominators mean reference words/characters. S, D, and I are substitutions, deletions, and insertions. Resolution time applies to successfully completed goals; report failures and timeouts separately.

Conversation’s WebRTC reference follows the [W3C stats definitions](https://www.w3.org/TR/webrtc-stats/), checked October 10, 2026. Collect audio `inbound-rtp` stats at each receiver to distinguish caller → agent from agent → caller. Preserve `id`, `ssrc`, `codecId`, `transportId`, direction, and timestamps. Resolve the transport’s `selectedCandidatePairId` for ICE RTT; do not select an arbitrary candidate pair. Browser support varies; missing fields are unavailable, not zero. With SIP/RTP or hosted media, equivalent receiver telemetry may come from the media server rather than browser `getStats()`.

- `jitter` is RTP interarrival jitter in seconds; multiply by 1,000 to display milliseconds. It is arrival variation, not added playout delay.
- `currentRoundTripTime` is the selected ICE pair’s latest STUN round-trip measurement in seconds. `remote-inbound-rtp.roundTripTime`, when present, is a separate RTCP-based RTT for outbound media. Neither establishes one-way mouth-to-ear delay.
- Received RTP payload bitrate is `8 × ΔbytesReceived / Δseconds` in bits per second. `bytesReceived` includes retransmissions and excludes RTP headers/padding. Use `bytesSent` for the sending direction; this is observed throughput, not available bandwidth. Interpret changes with codec, DTX, and speech/silence context.
- For a valid interval, estimated RTP loss fraction is `ΔpacketsLost / (ΔpacketsReceived + ΔpacketsLost)`, with a positive denominator. Loss counters can decrease with late/duplicate arrivals; flag negative deltas or counter resets rather than presenting a misleading percentage. Preserve raw counters and stream identity. Loss and jitter-buffer discards are distinct; do not add them as if they were the same event.
- `packetsDiscarded` counts packets discarded by the jitter buffer for early/late arrival. `concealedSamples` and `concealmentEvents` show synthesized replacement audio and its episodes. Interval concealed-sample fraction is `ΔconcealedSamples / ΔtotalSamplesReceived` when the denominator is positive. Concealment can cover loss or lateness, so received packet loss alone can miss playout impairment.
- Interval mean buffer delay is `ΔjitterBufferDelay / ΔjitterBufferEmittedCount` in seconds; require emitted samples in the interval. The numerator is cumulative time, not an instantaneous latency value.
- `audioLevel` is a linear 0–1 level estimate. Correlate an unexpected low level with expected speech and the audio; low level alone does not prove a muted microphone or unintelligibility. `totalAudioEnergy` / `totalSamplesDuration` can support interval RMS calculations where available.

Use distributions and impaired-interval counts alongside turn gap, interruption stop time, cut-offs, and received-audio review. No universal jitter/RTT/loss threshold or MOS estimate is claimed here. The dialog lists what to collect and interpret; it does not collect a live WebRTC session.

Comprehension’s WER formula follows [NIST SCLITE word-error scoring](https://github.com/usnistgov/SCTK/blob/master/doc/sclite.htm) and the [Speech service evaluation guide](https://learn.microsoft.com/en-us/azure/ai-services/speech-service/how-to-custom-speech-evaluate-data), checked October 10, 2026. WER is `100 × (substitutions + deletions + insertions) / reference words`; CER applies edit distance to the chosen character sequence. Fix reference preparation, punctuation/case handling, number normalization, tokenization, and the treatment of spaces before comparing runs. WER may exceed 100% because of insertions; empty references require explicit handling. Corpus WER sums edits and reference words, rather than averaging per-utterance percentages without weighting.

Name the audio observation point: ASR accuracy needs a human reference for the audio at the recognizer’s input. A source-audio reference can additionally reveal errors introduced by transport, but then the discrepancy is not attributable to ASR alone. Preserve those boundaries when interpreting transcript edits.

The 20-word teaching reference is: “Please update my billing address to forty Pine Street before the next invoice and confirm when this change takes effect.” Replace only “forty” with “fourteen” in the hypothetical ASR output: one substitution, zero deletions, zero insertions, 20 reference words, WER 5%. The dialog shows excerpts, not the full scoring input. The critical address is wrong even though aggregate WER is low. This does not establish that a recognizer actually made the error or that the agent necessarily followed it.

Entity fidelity compares critical field values with the case reference after documented normalization. Intent handling compares expected intent with observable response/action behavior, using calibrated annotations or judgment; it does not claim access to the model’s internal intent state. Correction retention checks the latest eligible caller correction in subsequent response/action evidence. Report denominators and unresolved cases for these product-defined measures; CER is not a replacement for entity or intent checks. Streaming ASR checks include revision frequency or token churn within a turn and end-of-speech-to-final-transcript lag, with defined event boundaries and aligned clocks. These diagnostics are conditional on exposed ASR output; native speech can still be evaluated from audio and responses.

Conduct checks the workflow’s declared required/forbidden behavior and tool contract. In its illustrative trace, an earlier request draft contains 14 Pine St. The caller corrects it to 40 Pine St, the agent reads back 40 Pine St, and the caller confirms. The application captures that confirmed value for this action, but a synchronization bug leaves the separate request draft unchanged. The tool-request builder reads the stale draft, so the proposed request carries 14 Pine St: the payload passes the assumed schema, but a pre-execution guard rejects it because its address differs from the confirmed value. No tool execution or backend change is shown. The explicit stale-field observation illustrates a state-synchronization bug, not a documented production incident; an incorrect request alone does not establish whether a real failure originated in audio delivery, ASR, comprehension, or argument construction. The comparison uses a trusted, action-correlated confirmed value, documented address normalization, and the latest eligible correction; it must not compare two unverified model guesses. On a mismatch, hold execution and rebuild the request from confirmed state; if the confirmed address is uncertain or stale, ask for confirmation again. Evaluation can check these observations when the evidence exposes them; this proposed application-side safeguard is not a universal CAE feature. Request logs are additional evidence, not a prerequisite for judging an observable prohibited request or missing explanation. Ordering needs event identity and trustworthy ordering/clock mapping; recovery and claim checks use evidence available at the time, not hindsight. Group violations by rule and severity instead of blending them into one average. Unsupported trace-only checks are unresolved, not invented violations. Semantic findings need held-out calibration and human review of ambiguous cases.

Completion’s example contract deliberately contains observable conversation requirements: correct address readback and explanation of next-invoice impact. The first passes and the second fails, so that contract is incomplete regardless of backend visibility. This is not a complete persistence contract. Add matched state readback or durable receipts when available; agent speech alone is not a backend state readback. A required handoff must be defined as a confirmed destination connection or accepted transfer, with appropriate evidence; offering a transfer is not completion. Resolution time uses the defined goal boundary and a consistent start event; summarize successful cases while reporting timeouts/abandonment separately. Outcome coverage reports known verdicts versus required applicable checks, alongside unresolved counts. Aggregate task success against frozen goal contracts, preserving pass/fail/unresolved/not-applicable outcomes and sample counts; do not hide unknowns by silently dropping them or turn missing telemetry into a failure of the whole call.

## Workbench — frameworks behind the workflow

“The framework names matter because each does a different job. FastAPI exposes run and evidence APIs; Pydantic validates their structured data. Pipecat drives tester conversations and voice transport. ASSERT supplies behavior contracts and, when enabled, semantic judgment over saved evidence.”

The tool's Python application owns orchestration, deterministic checks, evidence capture, normalization, reports, and comparisons. ASSERT 0.3 semantic judging is opt-in; it does not execute the target or replace the deterministic verdict. Pipecat includes tester agents and WebRTC/Daily transport adapters; this presentation's browser fixtures do not exercise those live transports.

A new rubric can re-score saved evidence, provided the evidence contains what the new checks require. A changed target agent needs another closed-loop run; re-scoring an old conversation cannot establish how that new agent behaves.

The web UI uses Next.js/React. SQLAlchemy with PostgreSQL stores product metadata and run indexes; ASSERT-compatible artifacts remain the evaluation result boundary. Keep those implementation details for Q&A unless the audience asks about deployment.

Implementation checked against ConversationAgentEvals commit `31671ee6a5d12e8e8a999c87d644642f17af8f64`:

- [API requirements](https://github.com/agonza1/ConversationAgentEvals/blob/31671ee6a5d12e8e8a999c87d644642f17af8f64/apps/api/requirements.txt): FastAPI, Pydantic, SQLAlchemy, and pinned `assert-ai==0.3.0`.
- [Pipecat requirements](https://github.com/agonza1/ConversationAgentEvals/blob/31671ee6a5d12e8e8a999c87d644642f17af8f64/apps/pipecat/requirements.txt): Pipecat with WebRTC, Silero, and Daily extras.
- [ASSERT integration boundary](https://github.com/agonza1/ConversationAgentEvals/blob/31671ee6a5d12e8e8a999c87d644642f17af8f64/docs/assert-boundary-and-schemas.md): local deterministic evaluation and explicit upstream semantic judge.
- [Web dependencies](https://github.com/agonza1/ConversationAgentEvals/blob/31671ee6a5d12e8e8a999c87d644642f17af8f64/apps/web/package.json): Next.js and React.

## Release comparison — slide 17

“Before release, compare the same billing-address scenarios on the current and candidate agents. The candidate responds faster, but regressions appear across conversation, comprehension, conduct, and completion. These are illustrative numbers, not measured production results.”

Point first to the p95 improvement (1,100 → 780 ms, both within the 1,200 ms example budget), then walk the four rows. Conversation: replies before the caller finishes rise from 2 to 12 per 100 calls, above the example limit of three. Comprehension: readbacks retaining 14 after the caller corrects to 40 rise from zero to eight. Conduct: proposed tool arguments differing from the confirmed address rise from zero to four; the stale-draft modal shows one possible cause. Completion: missing the required next-invoice explanation rises from one to six, above the example limit of one. The candidate fails all four dimension checks, so hold the release. The table displays both versions together; there is no version selector. Keep this on one slide to connect the four-dimension model with the release decision.

All 100 cases in each cohort include the caller correction, an applicable invoice explanation, and a proposed tool request. Available evidence includes aligned audio/transcripts, caller-confirmed values, and action-correlated request traces. Counts are per-call failures within each named check; they may overlap and must not be added into a total failed-call count. A comprehension failure is an incorrect spoken readback; the conduct row separately compares a proposed request with the confirmed value. That mismatch can be caught before execution and does not prove a wrong address persisted. Completion here measures one required goal step that can be evaluated from the conversation, not verified backend persistence or aggregate workflow success. In a real run, unsupported trace-dependent checks remain unresolved and their coverage is reported separately.

The current version is not perfect: two early replies and one missing explanation are within this example's budgets. Zero observed address errors is a threshold for this test set, not a guarantee of zero production errors. In both fixtures, required evidence is complete for 100/100 runs and there are no unanswered test turns. Scenarios, transport, load, and scoring requirements are matched; the agent version changes. These data do not isolate a single causal configuration change or claim a measured CAE feature.

The 95th percentile summarizes the upper end of response times. This fixture measures from the system's end-of-turn decision to received audio. Accepting the turn boundary too early can make this number look better while missing a caller's later qualifier, as in slide 9.

## Appendix A2 · Lost-ack experiment — optional three-minute Q&A demonstration

1. Begin in the default **Committed + acknowledgment lost** scenario. The backend committed, but the agent knows only that the tool timed out. Point to the unknown verified state, uncertainty in the caller response, and passing check for no unsupported completion. A passing protection check does not establish task completion.
2. Click **Check operation result**. Readback for the original operation establishes cancellation before confirmation is permitted. The caller response changes and the verdict becomes verified success. This is the new evidence the initial timeout did not provide.
3. Click **Reset: acknowledgment lost** to return to uncertainty. This restores the protected default, clears retry and reconciliation state, and removes any interruption setting.

Use **Explore other failures and inspect the evidence** for Q&A. The backend fixture truth, proposed completion claim, operation ledger, trace, and individual assertions are available there. Disabling the output gate in the lost-ack case produces an unsupported confirmation even though the action really happened. Selecting rejected/timeout and bypassing the gate reproduces the opening false-success case. Retry and interruption controls preserve their original fixture behavior. Restore the default with Reset and close the disclosure after exploration.

This optional appendix demonstrates evidence changing over time and checks the ordering of proof and speech. The main presentation already establishes the problem, evaluation requirements, and outcome matrix. Use the experiment if a question calls for a concrete reconciliation example. It does not demonstrate shipped CAE runtime protection or a live backend.

Transition: “Now we can distinguish a failed task from a failed protection. Those need different release decisions.”

## Rehearsal and fallback

Open `?present=1` and return to the title with Home. Use the arrow keys to advance; Space activates a focused button rather than advancing the slide. After an interaction, click the next-slide arrow to resume reliably.

Before going on stage, load the original Echo Show photo and leave disclosures closed. The photo is fetched from the pinned GitHub source and requires connectivity on initial load; do not rely on an untested browser cache. Keep the published site and a locally served checkout available.

If an interaction fails, explain its expected before/after result and move on.

Check the clock after slide 9 (8:00), the demo on slide 12 (13:05), and slide 16 (17:45). If behind, shorten the architecture narration, framework explanation, or JSON field tour. Preserve the outcome definitions, release decision, and closing. Keep provider comparisons and the lost-ack experiment for Q&A.

The event name follows the [official Fall '26 conference site](https://www.vonevolution.com/). The October 15 talk date is retained from the existing deck.

## First evaluation — slide 12

This slide opens the live demo in the middle of the talk. Before rehearsing, choose one real captured call and an inspectable finding in the evaluator, with a captured report available as backup. Show the requirement, the observed trace/state, and the verdict; avoid a broad UI tour or presenting a teaching fixture as a customer benchmark. This is an audience checklist, not an automatic CAE workflow. Start with one important business task. Write the required and forbidden behavior and expected state explicitly, then test pauses, interruptions, corrections, and unavailable tools on a controlled target or with imported evidence. Inspect the evidence behind each finding and compare the same cases after a change. Do not imply CAE's simple scenario form extracts these rules or that it injects every listed failure automatically.

The four icons carry the stage checklist. Choose one costly failure in a workflow such as cancellation at period end, an address change, or transfer to a human. Define what must happen, what must never happen, and the state that proves success. Exercise pauses, interruptions, corrections, and unavailable tools across representative calls. Inspect each finding and its supporting evidence, fix the agent, and re-run the same cases. Begin with a small test set you can explain.

## Appendix A3 — capabilities and roadmap

The former main-route capability list is available for Q&A. Distinguish configured scenario contracts from the simple scenario creation form and separate current product support from the presentation's teaching fixtures. Explain the roadmap only when asked.

## vCon JSON explorer — slide 14

Begin with the envelope, then select Dialog to show caller/agent turns and the recording pointer. Select Evaluation to show retained checks and state evidence. Keep the magnifier interaction; the excerpt is illustrative pseudo-JSON, not a complete runnable document or a measured result. Distinguish vCon core fields from CAE application conventions. This is a concrete view of the container from slide 13. The review fields are illustrative: needs_review and complete:null express unknown completion, not verified noncompletion. The current CAE exporter uses a bare base64url hash; the draft-aligned example uses the sha512- prefix required by vCon Core section 2.2. This is a presentation correction, not an exporter migration. The exported document is currently unsigned. Core also supports inline media.

## Judge reliability — slide 16

A semantic judge can infer facts that were never established, produce an unsupported explanation, or return an incorrect verdict. Separate the work: code checks declared events, terminal tool status, and recorded final-state predicates; models interpret specific conversational behaviors; code combines results into a proposed pass, fail, or review. The Decisions adapter requires the original deterministic result first and records a pending review; it does not automatically approve a release. Missing evidence, refusals, contradictions, and uncertainty must remain visible rather than turning into a pass.

Decision models constrain the output space. They do not guarantee correctness. OpenAI Decisions supports predicate, choice, and rubric score questions; Jev is another example. Keep arithmetic, date comparison, event ordering, and exact state assertions in code. Validate semantic judgments against human-labeled calls, including negation, caller corrections, missing evidence, option-order changes, and attempts to influence the judge. Measure false passes, missed critical violations, review rate, repeatability, and calibration on held-out examples. Do not equate a confidence value with a probability that a verdict is correct.

This is a proposed evaluation pattern, not a claim that CAE already integrates these decision providers. CAE currently separates its deterministic verdict from optional ASSERT semantic review. The proposed OpenAI Decisions integration should preserve that evidence boundary.

Sources checked October 8, 2026:
- [OpenAI Decisions](https://developers.openai.com/api/docs/guides/decisions): bounded predicate, choice, and score outputs, including refusals.
- [TypeSafe introduction](https://docs.typesafe.ai/introduction) and [Jev 1.13 limitations](https://docs.typesafe.ai/model-jaggedness/jev-1.13): narrow questions, composition in code, and known wrong-decision modes.
- [JudgeBench](https://arxiv.org/abs/2410.12784): evaluate judges on objective correctness.
- [GroundEval](https://arxiv.org/abs/2606.22737): 2026 preprint case studies contrasting plausible answers with recorded evidence paths; their results are not a universal judge failure rate.


### Component details for the engineering diagram

This example uses attributed conversation turns and its scenario requirements. Internal action traces and final-state evidence can strengthen evaluation when available, but are not required to identify this failed correction. Generic CAE checks also cover evidence presence, declared actions, explicit terminal tool status, and final-state completion when those inputs exist. Findings retain source paths or event indexes. A source artifact being present does not establish that it is truthful or authoritative.

The built-in cancellation rescue scenario checks order using trace list positions. This is not a universal causal or timestamp verifier. A stronger verified-before-action assertion requires trustworthy sequencing, sufficient event coverage, and operation correlation. When that evidence is unavailable, preserve insufficient evidence rather than inventing chronology.

The Decisions draft compiles each behavior rule into one named choice question over saved turns plus trace/state context. Examples include an unsupported completion claim, required/forbidden behavior, and resolution or fallback. It validates the answer set, names, types, complete probability distributions, and provider provenance. Provider confidence and selected-choice probability are separate fields; the draft gates both with a provisional configured threshold. Refusals and low-certainty answers become insufficient evidence. Complete answers and provenance are stored; no supporting quotation is invented.

The policy preserves deterministic failure and never promotes an original needs_review to pass. Model violations may propose fail; evidence gaps propose review. All proposals require the existing human confirmation before application, with snapshot and design enforcement checks. Release approval remains a separate workflow.

Architecture inspected against [CAE draft PR #157](https://github.com/agonza1/ConversationAgentEvals/pull/157), commit `2dd4aee`, including `openai_decisions_judge.py`, `design_enforcement.py`, `benchmark_catalog_extensions.py`, and `assert_taxonomy_adapter.py`. The draft's automated tests check integration and policy behavior, not semantic accuracy or calibrated thresholds.


### Detail modals — slide 16

The main slide now shows the compact flow. Activate **Check facts** for its input → checks → findings view, or **Judge behavior** for the side-by-side existing LLM/ASSERT and decision-model paths. These are presentation explanations, not provider-selection controls. Keep both modal walkthroughs brief; use the detailed comparison during Q&A when possible. Escape, the close button, or a click outside the dialog closes it and returns to the diagram. Slide navigation is suspended while a modal is open.

The traditional LLM/ASSERT path remains the existing semantic judge. OpenAI Decisions is an optional draft integration in PR #157; Jev is an alternative candidate, not a shipped CAE integration. Provider-specific confidence and probability semantics must not be conflated. Compare judge paths on human-labeled calls before switching; multiple judges agreeing does not prove execution.

### Visual component walkthroughs — slide 16

The fact-check modal continues Billing Address Change from slide 15 with three illustrative turns. Caller turn 01 requests 14 Pine St. Caller turn 02 corrects it to 40 Pine St. Agent turn 03 confirms 14 Pine St and explains that the address will appear on the next invoice. The comparison preserves a concrete failure without requiring access to the agent's private verification or billing tools. Earlier cancellation examples and Appendix A2 remain separate cases illustrating timeout ambiguity and recovery with richer backend evidence.

The values shown in the fact cards are clear, manually identified values from the illustrative dialogue, not output from a universal address extractor. The semantic step identifies turn 02 as superseding turn 01; the fact comparison then exposes 40 versus 14. Real recordings need speaker attribution and reliable audio/transcript alignment. Spoken number variants, ambiguous audio, corrections, retractions, and address normalization need contextual judgment; a raw string comparison is not a general solution. Review ambiguous cases rather than assigning a confident failure from an ASR error.

The configured policy preserves the failed correction requirement while retaining the other results. A weighted conversational score should not silently erase a declared critical failure. This is a proposed evaluation explanation, not a claim that CAE already enforces every illustrated check. Conversational evaluation remains useful across platforms without internal logs. For actual task completion, add an independent test-account UI/API readback or follow-up interaction when supported; that is an additional outcome check, not a prerequisite to assess the conversation or a claim that CAE currently supplies universal outcome adapters. A verbal confirmation alone does not prove the account was changed. The retired complete-verification-audit fixture is no longer used in this example.

The behavior modal uses the same correction and readback. The semantic judge interprets the caller's revised intent, associates the final confirmation with it, and evaluates the correction requirement. Evidence extraction and interpretation may precede fact comparison; the diagram describes responsibilities rather than a mandatory chronological pipeline. Provider comparisons remain optional for Q&A. Structured output or agreement between judges does not guarantee a correct judgment; calibrate against human-labeled calls. These are teaching examples, not measured CAE results.
