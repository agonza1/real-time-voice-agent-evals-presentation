# Speaker notes — Fall '26 Voice and Conversations on the Net

These speaker notes connect voice technology milestones and Alberto’s own experience with published WebRTC.ventures projects and the evaluation workflow for the Fall '26 audience. The cancellation and timing examples remain teaching fixtures.

For stage delivery, use the concise [30-minute rehearsal notes](rehearsal-notes.md). The [standalone demo backup](../demo-backup.html) contains actual evaluator screenshots and an exported-result excerpt from clearly labeled synthetic billing-address evidence. It can open directly from disk without services.

## Title slide — orient the audience

“A voice agent can understand the words and still mishandle the conversation. Today is about evaluating the complete real-time system: what the caller experiences, what the agent is allowed to do, and what actually happens.”

Keep the Echo Show story on the next slide rather than revealing it over the title.

## Story slide — the engineering question evolved

Keep this to the existing 1:15 budget: point across the five industry milestones, then to the photo and the control/evaluation bridge. This is a selective history, not a claim that voice technology began with these products or that each generation replaced the last.

### What to say

“In the 1960s, you could already call a computer, check inventory, and place an order. What changed is how we express the request.

Siri and Alexa brought voice assistants into our phones and homes. In 2017, my Echo Show prototype worked—but people needed the phrases I anticipated.

Google Duplex demonstrated natural phone conversations in 2018. The crucial engineering detail: bounded tasks and human fallback.

GPT-4 marked a shift toward more open-ended language. Putting an LLM on a WebRTC call felt like magic. The Realtime API followed in 2024 with streaming speech-to-speech.

But understanding a request is not completing it correctly.

Better models expand what the system can do. We define what it may do—and test that it did the right thing.

That’s the perspective we bring from building real-time systems: the conversation, and everything around it.”

### Historical anchors and qualifications — reference, not stage copy

- **1960s · Early IVR / audio response.** IBM’s *System/360 Introduction to Teleprocessing* (July 1968), printed page 11 / PDF page 11, describes a caller entering a product number with telephone buttons, hearing an inventory-derived delivery estimate, and entering an order. It names the IBM 7770 and 7772. Use “early IVR,” not an unsupported exact first-invention date. The example is keypad input with recorded-word output, not speech recognition or an LLM. [IBM manual, Audio Response](https://bitsavers.trailing-edge.com/pdf/ibm/datacomm/GC30-2007-1_IBM_System360_Introduction_to_Teleprocessing_196807.pdf#page=11).
- **2011 and 2014 · Voice assistants.** The Siri milestone is its introduction on iPhone 4S, not the first-ever Siri app or first voice assistant. Apple announced it October 4, 2011. Amazon dates the Echo launch to November 6, 2014. [Apple announcement](https://www.apple.com/newsroom/2011/10/04Apple-Launches-iPhone-4S-iOS-5-iCloud/) · [Amazon retrospective](https://www.amazon.science/blog/alexa-at-five-looking-back-looking-forward). The exact-phrases limitation describes Alberto’s prototype; do not generalize it to every Siri or Alexa interaction.
- **2018 · Google Duplex.** Google’s May 8 announcement describes natural phone conversations in narrowly trained domains, with self-monitoring and a human operator for tasks it cannot finish autonomously. Naturalness did not imply general-purpose autonomy. [Google Research](https://research.google/blog/google-duplex-an-ai-system-for-accomplishing-real-world-tasks-over-the-phone/).
- **2023 · GPT-4 and LLM-based voice.** GPT-4 was announced March 14, 2023 with text output; the slide places it inside a speech-recognition → text LLM → speech-synthesis pipeline. Do not describe the original GPT-4 launch as native speech-to-speech or the invention of conversational AI. Alberto’s later WebRTC experience is a personal milestone, not a claim about a deployment on the launch date. [GPT-4 announcement](https://openai.com/index/gpt-4-research/) · [Realtime announcement’s comparison with cascaded voice](https://openai.com/index/introducing-the-realtime-api/).
- **2024 · Real-time speech.** October 1 marks the Realtime API **public beta**, with streaming audio input/output; it does not date the invention of real-time speech or claim general availability in 2024. This is a historical anchor, not a comparison of today’s providers. [Realtime API announcement](https://openai.com/index/introducing-the-realtime-api/).

The through-line is engineering responsibility, not product ranking: a more flexible conversational interface still needs authorization, reliable state, safe fallback, and evidence-supported outcomes. Runtime controls enforce those boundaries; VoiceAI QA (CAE) tests their behavior as models, networks, tools, and workflows change. Keep the project examples on the next slide.

## Projects — slide 3

“This is the range of voice work our team has built and continues to develop. AVA brings an AI participant into a meeting. The surgical system listens and organizes conversation evidence. CETA turns voice and avatars into a training environment. The agentic call center uses LiveKit to handle voice calls and transfers to humans. Each application has a different job, and each requires us to test more than the model.”

Spend about 20 seconds per example. Keep the technical stack for Q&A:

Use the capability labels to connect the examples to our engineering work: meeting integrations and voice agents, real-time media capture, live avatars and AI orchestration, and SIP calling with warm transfers. The examples show systems we have built and continue to develop; the GPT-Live diagrams later in the talk explain a newer architecture pattern, not a claim about these deployments.

- [AVA Intellect](https://webrtc.ventures/successes/ai-voice-agents-that-collaborate-and-contribute/): configurable assistants, shared knowledge, tools, and integration with meeting platforms. The image is the published agent configuration UI.
- [Surgical audio](https://webrtc.ventures/successes/audio-listening-device-to-improve-surgical-outcomes/): Amazon Chime SDK capture with Symbl.ai transcription and conversation insights, plus postoperative speaker separation and oversight. Describe the system's purpose and functionality; this case study does not establish a quantified clinical improvement.
- [CETA Global / EBT-Sim](https://webrtc.ventures/successes/ai-roleplay-training-simulator-case-study/): WebRTC.ventures helped build real-time communication, the training UI, cloud infrastructure, and AI orchestration with CETA's team. Integration with the broader practitioner ecosystem continues. The current case study describes a WebSocket voice/session pipeline with push-to-talk, Google speech services, Google ADK agents, and HeyGen avatars; do not label its voice transport WebRTC. Deliberate thinking pauses motivated push-to-talk rather than automatic turn ending. The visual comes from [CETA's public product page](https://www.cetaglobal.org/solutions/cetaaitraining), linked in the success story. Case-study transport description checked October 11, 2026.
- [LiveKit production migration, slides 16–19](https://webrtc.ventures/wp-content/uploads/2026/07/Migrating-from-Kurento-to-LiveKit-in-Production.html#16): LiveKit SIP dispatches inbound calls and agents into a room. Scoped agents identify intent, search for human agents, check availability, transfer, or offer voicemail. The implementation retained STT → LLM → TTS with Azure providers. Do not describe this project as the full-duplex speech-to-speech architecture on slide 5.

The first three visuals are from public project materials. The call-center card uses a generated illustration selected by Alberto: SIP caller ↔ LiveKit voice agent, consultation/context handoff to a human, and the continuing caller–human conversation. These are conceptual roles and call phases, not a literal network topology or a deployed-product screenshot; the continuing-call line does not imply bypassing SIP/media infrastructure. The original published architecture diagram remains in the repository for reference, and the production-migration link is unchanged. Files and provenance are retained in `assets/projects/SOURCES.md`.

### Transition into the system architecture

“These systems combine speech, reasoning, retrieval, and actions. We need to evaluate how those components work together.”

## Closing — production readiness

The question we started with was: how do we know the system still works as it changes?

A model score cannot answer that on its own. We need to measure the received conversation, verify the runtime protections and business outcomes, and re-test the changes we intend to release.

Runtime controls enforce the boundaries. Evaluation checks their behavior. The evaluation tool organizes that work, and vCon helps make the evidence portable.

Start with one important workflow. Define the contract, test the failure paths, and keep the evidence behind the release decision.

Production readiness is a systems property.

Leave the closing slide up during Q&A so attendees can scan the QR to [connect with Alberto on LinkedIn](https://www.linkedin.com/in/albertogonzaleztrastoy). Invite them to discuss voice AI and the evaluation topics, or get help building a system. The QR is a local asset and requires no network connection to display.

## 30-minute stage route

Plan for a 28:45 talk including a five-minute demo, with a 1:15 buffer in the 30-minute slot. Q&A follows afterward. There are 17 main slides and three optional appendices. The budgets include transitions and planned interactions; keep the scope to one evaluation example rather than a broad product tour.

Treat this as a pacing budget until a spoken rehearsal confirms it. Slide 5 explains the paths; slide 6 demonstrates a changed request during delegation. The vCon slides introduce the container, then inspect one evaluation. Slide 14 defines reusable behavior tests, slide 15 explains responsible judgment, and slide 16 applies results to a release. Reuse the address workflow without retelling the same dialogue. During the main route, allow about 40 seconds for Conduct, 30 seconds for the ASSERT evidence trail, and 30 seconds for the fact-check dialog, alongside the endpointing toggle, one demo result, and the JSON magnifier. Keep other dimension dialogs, file/statistics disclosures, provider comparison, and appendices for Q&A. Follow the added engineering cues in rehearsal-notes.md.

| Slide | Time | Finish by | Point and stage action |
| --- | --- | --- | --- |
| 1 · Title | 0:45 | 0:45 | Introduce evaluation of the complete real-time voice system. |
| 2 · Story | 1:15 | 2:00 | Trace IVR → assistants → Duplex → LLM voice → real-time speech; connect the Echo Show / WebRTC milestones to control and evaluation. |
| 3 · Projects | 1:30 | 3:30 | Emphasize our WebRTC, audio capture, avatar orchestration, and SIP engineering experience. |
| 4 · System | 1:15 | 4:45 | SIP establishes the session; RTP carries audio. Trace the conceptual cascade and return audio, with tool requests and results. |
| 5 · Two-path architecture | 1:30 | 6:15 | A newer architecture pattern: native audio continues while reasoning and tools run. |
| 6 · Continuous-voice sequence | 1:15 | 7:30 | The application applies the changed constraint and rejects stale results. |
| 7 · Four Cs | 2:00 | 9:30 | Conversation, comprehension, conduct, completion. Show the stale draft in Conduct for about 40 seconds; ASR-specific measures apply only when ASR is present. |
| 8 · Timeline | 2:15 | 11:45 | Switch endpointing once, then restore. A faster system-endpoint-to-audio interval can hide premature turn acceptance. |
| 9 · Outcomes | 1:15 | 13:00 | Define completion and evidence-supported speech before introducing the tool. Unknown stays unknown; authorization is a separate check. |
| 10 · Workbench | 1:15 | 14:15 | Run → Evaluate → Compare. Name framework roles briefly. |
| 11 · First evaluation + live demo | 5:00 | 19:15 | Use the prepared synthetic Billing Address Change transcript and deterministic result: diagnostic 100, needs review, semantic review pending, backend state unmeasured. Follow the five-minute demo card; switch to the standalone backup after 10 seconds of waiting. |
| 12 · vCon | 0:45 | 20:00 | Portable evidence, not a verdict. |
| 13 · vCon JSON | 1:15 | 21:15 | Capture → calculate → assess. Start on Evaluation; open Captured evidence. 700 ms gap and matching IDs are separate from unknown cancellation. Synthetic fixture; optional judge not run. |
| 14 · ASSERT | 2:30 | 23:45 | Several behavior requirements → ASSERT Python framework → individual results. Highlight the failed caller correction; show setup → saved call → judgment for about 30 seconds. Keep file/statistics disclosures for Q&A. |
| 15 · Judge reliability | 2:15 | 26:00 | Distinguish established values from semantic interpretation. Explain human calibration and a proposed verdict, not automatic release approval. Show fact details for about 30 seconds; keep provider comparisons for Q&A. |
| 16 · Release decision | 2:00 | 28:00 | Matched scenario cohort: speed improves while critical behavior regresses. Hold the candidate. These are illustrative data. |
| 17 · Close | 0:45 | 28:45 | Production readiness is a system property. Leave the contact QR visible. |
| Buffer | 1:15 | 30:00 | Allow for transitions or finish early. |
| Q&A | After talk | After 30:00 | Keep the closing visible; open appendix material when useful. |

The JSON explorer is slide 13. Appendix A1 contains standards and research; A2 contains the lost-ack experiment; A3 contains capabilities and roadmap. Normal forward navigation stops at the closing. End returns to the closing; Home returns to the title.

## Spoken bridge — workbench to evidence

“What would make this call pass? The caller wants cancellation at the end of the billing period. Verify identity and agree on the effective date. Canceling immediately violates that request, even if the response sounds fluent. Proof means checking that renewal is disabled and service remains active until the agreed date, using the tool result and state readback for this request.”

Summarize required behavior, forbidden behavior, and proof in this transition; these are example evaluation requirements, not generated ASSERT output or an executable configuration. Explicitly configured critical checks can block approval regardless of a weighted score. A description alone does not establish that a rule is enforced: CAE’s simple scenario creation currently does not extract forbidden actions from prose. The evaluation-design editor is a separate authoring path; its generated drafts require review. Keep that product distinction for Q&A.

Transition: “We have defined what to check. Now we need to preserve the conversation, tool result, and state evidence so we can actually check it.”

## Bridges between slides

- **3 → 4:** “These systems combine speech, reasoning, retrieval, and actions. We need to evaluate how those components work together.”
- **4 → 5 → 6:** “The cascade is one architecture. Newer native speech systems can listen while speaking and delegate work. The application still has to manage changed requests and stale results.”
- **6 → 7 → 8:** “The architecture changes, but we still evaluate the caller experience, speech, execution, and outcome. Start with this timing failure.”
- **8 → 9:** “Faster at one boundary does not establish success. What would count as a successful outcome?”
- **9 → 10 → 11:** “Now we can state the checks. Here is the workbench, and one evaluation with the evidence behind its finding.”
- **11 → 12 → 13:** “The report depends on captured observations. Keep the conversation, trace, and state together so another system can inspect them.”
- **13 → 14:** “Now make the checks reusable. ASSERT orchestrates an LLM to draft caller cases from the requirements. Review them, run the voice agent in CAE, and use a separate LLM call to judge the saved conversation.”
- **14 → 15:** “The score is useful only if we can trust how it was reached. Compare the recorded values, interpret the correction, and check the judge against human-reviewed calls. Keep critical failures visible.”
- **15 → 16:** “Apply that policy to matched scenarios. Would you release a faster version with these regressions?”
- **16 → 17:** “We build the conversation and verify the whole system. Keep the evidence and repeat the evaluation when it changes.”

## ASSERT + CAE voice-test workflow — slide 14

“ASSERT is a Python framework, not the model. It organizes requirements, prompts, model calls, and artifacts. A configured LLM drafts caller cases through ASSERT. We review and freeze them in CAE, which runs the voice agent and records observations and code-check findings. A separate configured LLM judges the saved evidence against the rubric through ASSERT. That assessment does not overwrite the original evidence or prove execution.”

Billing Address Change remains the scenario. Collecting the address, preserving caller corrections, explaining invoice impact, and avoiding full card numbers are its example behavior requirements. The displayed correction failure—caller says 40 Pine St, agent confirms 14—is illustrative, not a measured result or literal ASSERT output. These conversational requirements do not prove a backend update. Keep the same frozen cases when comparing agent versions; calibrate the judge on held-out human-labeled evidence.

CAE now has an ASSERT generation adapter on its main branch, verified October 14, 2026. The checked `upstream_assert_generation.py` Git blob is `a58c9ab6c117c9b1bde97ff40218d6cf7aa7b3b6`, matching the inspected local file. This replaces the previous “proposed integration” description; it is source verification, not a claim that every deployment has configured credentials or that a generation run was demonstrated. The adapter uses pinned ASSERT 0.3.0's native test_set stage with reviewed behavior IDs as taxonomy inputs. Its CAE transport supplies the selected LLM's structured text generation. It requests normal, boundary, and adversarial variants; generated diversity does not establish representative coverage or valid cases. Drafts require human review, versioning, and publication. Generated prompts are caller instructions, not target answers. CAE retains its voice executor rather than using ASSERT's target-inference stage. CAE also exposes its separate custom LLM generator; selecting that is not the same as running ASSERT generation. Sources: [generation adapter](https://github.com/agonza1/ConversationAgentEvals/blob/main/apps/api/app/services/upstream_assert_generation.py), [native-stage transport](https://github.com/agonza1/ConversationAgentEvals/blob/main/apps/api/app/integrations/cae_assert_generation_cli.py), and [upstream test-set stage](https://github.com/responsibleai/ASSERT/blob/main/assert_ai/stages/test_set.py).

For semantic review, CAE adapts the approved contract and saved conversation/available evidence into ASSERT inputs, invokes its judge-only stage with a configured LLM, validates the score structure, and retains the raw score artifact and assessment. It does not run the target again. The [judge adapter](https://github.com/agonza1/ConversationAgentEvals/blob/main/apps/api/app/services/upstream_assert_judge.py) preserves deterministic results and constructs a proposed review under CAE policy; the assessment is not automatic release approval. Generation model, target voice model, and judge model are different roles, even when the same provider or model serves more than one role. Shared models can have correlated errors; do not imply independent validation merely because the calls are separate.

Use “observations and code findings,” not “facts,” as a blanket label. A captured tool request establishes the request as recorded; a receipt/state observation may establish a separate execution claim within its trust boundary. Code can check exact argument equality, declared ordering, schemas, or supplied state predicates. Keyword checks are deterministic heuristics, not proof that a requirement was semantically met—the earlier demo's 100/needs_review result illustrates this. LLM judges interpret meaning and policy but can hallucinate, overlook a correction, or produce the wrong rationale. Valid JSON/schema proves structure only. Missing observations stay unresolved; neither layer can invent unavailable execution evidence.

ASSERT's engineering value is reusable requirement-driven prompting, orchestration, behavior IDs, and inspectable artifacts. A carefully built direct LLM judge could implement the same properties; framework adoption alone does not prove better accuracy. Keep generation and judge prompts/configuration, model identifiers, input evidence, approved cases, and outputs linked. Calibrate against independently human-labeled held-out calls, report false passes and false alarms, and preserve explicit critical failures rather than hiding them in an average.

The upstream framework and artifact names are described in the [ASSERT repository](https://github.com/responsibleai/ASSERT), checked October 14, 2026. The source generation artifact, adapted cases, approved spec version, agent configuration, evidence, and judge configuration remain linked for reproducibility. The details dialog leads with three linked observations: test setup, saved call, and judgment. A score should be traceable to the actual captured conversation and the settings used to produce it; storing versions does not guarantee bit-for-bit repeatability from a nondeterministic model. The billing-address finding is an illustrative readable record, not literal ASSERT JSON: its call-042/turn-6 pointer is fictional and no underlying recording is provided. Keep the original audio when a transcript is insufficient. The adjacent human-review comparison explains calibration: evaluate on independently labeled calls not used to tune the rubric, measure missed failures and false alarms, and review disagreements. It does not claim ASSERT is already calibrated. The engineering disclosure includes a conceptual pipeline, not literal API calls. Optional disclosures retain generated test_set.jsonl, the approved CAE suite, CAE voice execution, ASSERT judge outputs, and sample-size limits.

Configured UI route (verify provider readiness before a demo): approve the Evaluation design's behavior requirements; select ASSERT for Generate runnable case drafts; inspect and edit the caller cases; approve, save a version, and publish it to Scenarios. In Runs, select the saved suite and a supported voice target. After execution, inspect the captured evidence and request ASSERT semantic review. Generating cases does not start a voice call or judge run.

The numeric strip in the optional sample-size disclosure is a calculation, not a benchmark. A plain-language example precedes it: with a true 3% failure rate, P(no failures in 100 independent calls) = 0.97^100 = 4.76%, rounded to about 5%. This explains how a clean sample can miss a nonzero rate; it is not a posterior probability that the system is safe. With zero observed failures in N independent Bernoulli trials with a stable failure probability, the exact one-sided 95% upper confidence bound is p_upper = 1 - 0.05^(1/N). For N = 100 it is 2.951%; for N = 1,000 it is 0.299%. The familiar approximation is 3/N. This bounds failure probability under the sampled protocol, not all production traffic. Generated scenarios can be correlated or unrepresentative; an imperfect judge can miss failures. Neither a reused test set nor a clean LLM-scored report automatically satisfies these assumptions. The [NIST binomial confidence interval reference](https://www.itl.nist.gov/div898/handbook/prc/section2/prc241.htm) gives the exact binomial method; the displayed values are calculated for zero failures with a one-sided alpha of 0.05. Audio, interruption timing, and receiver delivery need separate voice measurements.

## Outcome matrix — slide 9

The rows describe verified business state; the columns describe whether speech was supported at the time it was emitted. A task can finish while the agent confirms it without sufficient evidence. That claim might be true by luck, but the confirmation remains unsupported. Conversely, a truthful expression of uncertainty can be safe even if the backend already committed.

Authorization, privacy, and timing are separate checks; this matrix only addresses completion claims. An unknown state is not a failed task. Keep it unknown until operation-matched reconciliation establishes the result. The matrix applies the contract to separate business state from completion-claim support; the release review then uses those verdicts across matched scenarios.

## Continuous voice — slides 5 and 6

Slide 4 is a conceptual cascade, not a strictly serial scheduling or latency model: VAD, endpointing, streaming recognition, and output generation can overlap. SIP handles session signaling; RTP carries media, with SRTP protecting WebRTC audio. The SIP leg and WebRTC leg may have different signaling and transport endpoints. For native speech-to-speech, ASR partial/final metrics apply only if that observation is available. Test audio entity and intent handling end to end; generated captions are not independent proof of what the model heard.

Frame slides 4–6 around engineering responsibilities: connect the caller, manage interruptions, coordinate tools, and verify action results before confirming completion. For native continuous voice, the application still owns permission checks, task updates, result correlation, and rejection of stale results. The on-slide controls are responsibilities to implement and evaluate, not guarantees supplied by a framework.

Both diagrams are in the main route: the conventional system is slide 4, the two-path architecture is slide 5, and the appointment sequence is slide 6. Legacy architecture-review URLs open slide 5 without replacing the sequence.

- `architecture`: trace the cyan audio loop first, then the delegated reasoning and tool requests below it. “The live conversation continues while deeper work runs. The result comes back to the voice model.”
- `sequence`: follow the appointment search from top to bottom. The cyan overlap highlights the caller adding “after 3pm” while the voice model speaks. Point to the application controls: apply the new constraint and discard stale results. These are checks for the evaluation, rather than capabilities proven by the illustration. Availability returns to the same conversation; “Shall I book it?” does not claim that a booking happened.

Both diagrams are illustrative. An implementation must update or supersede background work after a changed request and suppress stale results. Keep the vendor explanation and STT → LLM → TTS alternative in these notes rather than adding a second spoken pipeline to the diagram.

### Framework mapping behind the small labels

The LiveKit/Pipecat badges on slide 5 mean direct GPT-Live integrations, not that every model in either framework is full duplex. GPT-Live owns simultaneous listening and speaking; the adapters connect media and asynchronous delegation. Both support an OpenAI-hosted Responses reasoner or a backend controlled by your application. The backend returns text/context for the voice model to communicate, rather than a second spoken pipeline.

- [LiveKit GPT-Live plugin](https://docs.livekit.io/agents/models/realtime/plugins/gpt-live/): `GPTLiveModel` runs within `AgentSession`. Responses delegation runs the configured text model; custom `@function_tool` handlers execute in the agent process. Client delegation emits `delegation_created`; your application derives the request from chat context plus `pending_transcript`, runs its own workflow, and returns commentary or thinking with the delegation ID. Client mode does not execute registered `@function_tool` methods automatically.
- [Pipecat GPT-Live service](https://docs.pipecat.ai/api-reference/server/services/s2s/openai-live): `OpenAILiveLLMService` streams audio and supports `ResponsesDelegation` or `ClientDelegation`. The latter uses a `BackendLLMWorker` with its own LLM, context, and tools. Its outputs become commentary or silent context according to `prefers_spoken`; that flag is a hint rather than a guarantee of exact spoken wording.
- [OpenAI delegation and task-state guidance](https://developers.openai.com/api/docs/guides/live-delegation): application logic owns task state, permission checks, and verified results. The delegation event contains metadata rather than a structured task request. Speech interruption leaves backend work running. In slide 6, “App updates: after 3pm” therefore represents application behavior: update or supersede the active search and ignore stale results. Framework support does not supply that business rule automatically.

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

## Four Cs — slide 7

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

Background-noise assessment requires separate audio analysis, not an `RTCPeerConnection.getStats()` noise field. A level meter cannot separate speech from noise, and the `noiseSuppression` capture setting describes requested/enabled processing rather than measured quality. For detection, declare the classifier, noise categories, observation point, and time windows, and validate detections against reviewed audio. For quality, an optional model such as [Microsoft DNSMOS](https://github.com/microsoft/DNS-Challenge/tree/master/DNSMOS) can estimate perceptual speech/background quality; these are model estimates, not calibrated noise power or SNR in dB. SNR needs a declared signal/noise estimation method or a controlled mixture with known components. Preserve whether audio is before or after suppression and avoid treating background conversation, music, or desired non-speech signals as universally unwanted. No noise detector or live quality measurement is implemented by this teaching dialog. Sources checked October 14, 2026.

Use distributions and impaired-interval counts alongside turn gap, interruption stop time, cut-offs, and received-audio review. No universal jitter/RTT/loss threshold or MOS estimate is claimed here. The dialog lists what to collect and interpret; it does not collect a live WebRTC session.

Comprehension’s WER formula is linked to the maintained [Microsoft Speech evaluation guide](https://learn.microsoft.com/en-us/azure/ai-services/speech-service/how-to-custom-speech-evaluate-data#evaluate-word-error-rate-wer), checked October 14, 2026. The on-slide link replaces the historical SCLITE repository document. WER is `100 × (substitutions + deletions + insertions) / reference words`; CER applies edit distance to the chosen character sequence. Fix reference preparation, punctuation/case handling, number normalization, tokenization, and the treatment of spaces before comparing runs. WER may exceed 100% because of insertions; empty references require explicit handling. Corpus WER sums edits and reference words, rather than averaging per-utterance percentages without weighting. The linked guide explains WER; it does not validate our entity checks, provide universal release thresholds, or define CER normalization.

Decision models are an optional judging method, not a fifth evaluation dimension. In Comprehension, a bounded question can ask whether the response preserved the caller's intent or latest correction; compare the relevant caller context with the actual response, not ASR edits alone. The displayed Yes / No / Unclear choices are an illustrative output contract with no selected result, not an executed judge call or literal provider payload. In Conduct, semantic judgment can interpret policy compliance, while exact argument equality and declared event ordering stay in code. The [OpenAI Decisions guide](https://developers.openai.com/api/docs/guides/decisions) documents bounded choices; it does not prove a chosen judgment is correct. Calibrate either use on held-out human labels, preserve refusals/insufficient evidence, and do not infer backend execution from a semantic answer. Provider integration remains optional/proposed as described on slide 15.

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

## Release comparison — slide 16

“Before release, compare the same billing-address scenarios on the current and candidate agents. The candidate responds faster, but regressions appear across conversation, comprehension, conduct, and completion. These are illustrative numbers, not measured production results.”

Point first to the p95 improvement (1,100 → 780 ms, both within the 1,200 ms example budget), then walk the four rows. Conversation: harmful cut-offs of unfinished requests rise from 2 to 12 per 100 calls, above the example limit of three. Comprehension: readbacks retaining 14 after the caller corrects to 40 rise from zero to eight. Conduct: proposed tool arguments differing from the confirmed address rise from zero to four; the stale-draft modal shows one possible cause. Completion: missing the required next-invoice explanation rises from one to six, above the example limit of one. The candidate fails all four dimension checks, so hold the release. The table displays both versions together; there is no version selector. Keep this on one slide to connect the four-dimension model with the release decision.

The conversation check excludes acknowledgments and cooperative overlap. Define a cut-off as premature substantive turn acceptance that suppresses or ignores an unfinished request, using aligned audio and the subsequent response. Full-duplex listening while speaking is not itself a violation. These 2/12 teaching counts represent that declared failure, not all overlapping speech. Actual labels need a reviewed annotation policy.

All 100 cases in each cohort include the caller correction, an applicable invoice explanation, and a proposed tool request. Available evidence includes aligned audio/transcripts, caller-confirmed values, and action-correlated request traces. Counts are per-call failures within each named check; they may overlap and must not be added into a total failed-call count. A comprehension failure is an incorrect spoken readback; the conduct row separately compares a proposed request with the confirmed value. That mismatch can be caught before execution and does not prove a wrong address persisted. Completion here measures one required goal step that can be evaluated from the conversation, not verified backend persistence or aggregate workflow success. In a real run, unsupported trace-dependent checks remain unresolved and their coverage is reported separately.

The current version is not perfect: two caller cut-offs and one missing explanation are within this example's budgets. Zero observed address errors is a threshold for this test set, not a guarantee of zero production errors. In both fixtures, required evidence is complete for 100/100 runs and there are no unanswered test turns. Scenarios, transport, load, and scoring requirements are matched; the agent version changes. These data do not isolate a single causal configuration change or claim a measured CAE feature.

The 95th percentile summarizes the upper end of response times. This fixture measures from the system's end-of-turn decision to received audio. Accepting the turn boundary too early can make this number look better while missing a caller's later qualifier, as in slide 8.

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

Check the clock after slide 8 (11:45), the demo on slide 11 (19:15), and slide 15 (26:00). If behind, shorten the architecture narration, framework explanation, or JSON field tour. Preserve the outcome definitions, release decision, and closing. Keep provider comparisons and the lost-ack experiment for Q&A.

The event name follows the [official Fall '26 conference site](https://www.vonevolution.com/). The October 15 talk date is retained from the existing deck.

## First evaluation — slide 11

This slide opens the five-minute evaluator demo. Preload the built-in synthetic Billing Address Change transcript and its prepared deterministic result. It scores 100 but remains needs_review, with semantic review pending and backend state unmeasured. The standalone backup contains the actual saved views and report excerpt. Show the requirement, supporting conversation, evaluation basis, and verdict; avoid a broad UI tour or presenting a teaching fixture as a customer benchmark. This is an audience checklist, not an automatic CAE workflow. Start with one important business task. Write the required and forbidden behavior and evidence for each goal explicitly, then test pauses, interruptions, corrections, and unavailable tools on a controlled target or with imported evidence. Evaluate observable conversation goals without internal logs; distinguish them from independently verified backend state. Inspect the evidence behind each finding and compare the same cases after a change. Do not imply CAE's simple scenario form extracts these rules or that it injects every listed failure automatically.

The four icons carry the stage checklist. Choose one costly failure in a workflow such as cancellation at period end, an address change, or transfer to a human. Define what must happen, what must never happen, and what evidence can establish each goal. Exercise pauses, interruptions, corrections, and unavailable tools across representative calls. Inspect each finding and its supporting evidence, fix the agent, and re-run the same cases. Begin with a small test set you can explain.

## Appendix A3 — capabilities and roadmap

The former main-route capability list is available for Q&A. Distinguish configured scenario contracts from the simple scenario creation form and separate current product support from the presentation's teaching fixtures. Explain the roadmap only when asked.

## Emerging response-latency proposal — slide 8; optional detail on slide 13

Point to the small MRL note after restoring patient endpointing: “Measure from the caller’s transmitted speech end. State whether the response has arrived or reached modeled playout.” Spend about 10 seconds here within the existing 2:15 budget; keep the vCon **Latency example** for Q&A.

Source: [draft-nygate-ippm-mrl-00](https://www.ietf.org/archive/id/draft-nygate-ippm-mrl-00.html), checked October 14, 2026. This is an individual proposal, not an adopted standard. It distinguishes Ingress and Playout MRL. Its method uses offline sample annotation and a single caller clock. Playout refers to a declared de-jitter model, not physical speaker output. Keep signed results. The report format is mrl-report/1; minimum summaries include mean, p50, p95, maximum, attempted/reported/discarded counts, and method/calibration information. Follow the complete draft before claiming conformance.

Our two teaching cases stay distinct. The existing vCon fixture contains a 700 ms receiver gap; the added draft-MRL check is null/not_measured. The detail modal has a separate synthetic clock example: 184840 minus 184220 gives 620 ms to arrival; 184895 minus 184220 gives 675 ms to modeled release. No capture, calibration or model execution backs those illustrative timestamps. The 55 ms difference must not be presented as a measured network delay or inferred buffer target.

For a real vCon export, preserve the original capture as an attachment or integrity-checked reference. Put derived measurement reports in analysis, linked to the input attachment and relevant dialogue. Keep diagnostic VAD, ASR, model/tool and TTS spans available when exposed; retain clock mapping for cross-host spans. A streaming system overlaps stages, so diagnose the critical path rather than summing overlapping durations or component percentiles. Native speech systems may not expose separate ASR/TTS stages. Add p90/p99 when sample size supports them; show no-response/fallback rates alongside latency and retain exclusion reasons so bad calls do not disappear. Segment comparisons by transport, model/configuration, region, device, codec, tool use, streaming and cold versus later turns. These are dashboard recommendations, not extra mandatory fields invented for the draft.

## vCon JSON explorer — slide 13

“Keep the inputs, the calculations, and the model’s assessment separate. The test receiver records speech boundaries, RTP statistics, recognizer output, and tool events. Code calculates the gap and correlates the response. An optional model can judge how the agent communicated uncertainty. Neither can turn a timeout into proof that cancellation happened.”

Use 25 seconds for the three layers, 25 for **Captured evidence**, and 25 for the unknown outcome. All observations in this teaching fixture are synthetic: no call, recognizer, backend, or judge was run. The semantic report explicitly says not_run and has no assessments. When actually run, preserve each requirement’s verdict, rationale, supporting evidence pointers, and the model, prompt, and rubric versions. Do not present the report placeholder as an LLM result.

The [full evidence example](../assets/examples/vcon-review-example.json) uses vCon Core 0.4.0 containers from [draft-04](https://datatracker.ietf.org/doc/html/draft-ietf-vcon-vcon-core-04), checked October 14, 2026. This is a work-in-progress Internet-Draft, not a finalized RFC. Conversation text is in dialog. Supplementary collector observations are JSON attachments with start, contributing party, dialog index, media type, encoding, and body. The collector has its own parties entry; attachment.party identifies the contributor, not the speaker. Each attachment.dialog links to one relevant turn, while events retain their own clock and timestamps. Attachments can contain observations from before that turn; their dialog reference is an association, not a timing boundary.

Derived calculations and optional semantic review are separate analysis entries of type report. analysis.dialog and analysis.attachment use the draft’s integer index references. Vendor, product, schema, media type, encoding, and body identify each report. The illustrative-capture-v1, illustrative-checks-v1, and illustrative-judge-v1 formats are application payloads, not IETF-defined metrics, published schemas, or claims that CAE exports these fields today. Capture schema metadata sits inside attachment.body; report schema uses the standard analysis.schema field. Application evidence strings use RFC 6901 JSON Pointers relative to this vCon, while the standard outer index references remain intact. A pointer resolves to an input, not another verdict.

The four dimensions organize inputs rather than pretending that a recording contains every observation. Conversation has inbound RTP snapshots and receiver-side speech timestamps. Comprehension retains ASR text, producer/model version, and provider-defined confidence; no independent audio-aligned reference exists, so WER is not measured. Conduct retains the tool name, arguments, request/operation IDs, response, and time; ID correlation checks only identity of the recorded exchange, not authorization or policy compliance. Completion retains any available receipt/readback and explicitly records missing state. Here, the agent’s uncertainty statement and timeout leave the backend outcome not observable. Conversational goals remain assessable without private backend access; an independent UI/API readback can strengthen a separate execution check when available.

The 700 ms response gap is 3900 minus 3200 on the same synthetic test clock. It ends at received audio, not speaker playout. The two snapshots belong to the same inbound stream, direction, SSRC, and Opus codec. Their deltas give 25.6 kb/s RTP payload bitrate and 1% interval packet loss. Jitter remains in seconds in the observations. Real collectors must retain original timestamp origins and conversion, handle stream changes, counter resets and negative loss deltas, and declare coverage; an unexercised interruption is not a zero-latency success. These are example calculations, not universal quality thresholds or proof of audibility. No media is included in this fixture; production recordings may be inline or HTTPS references with a sha512-prefixed integrity digest as specified by the draft. A digest checks content integrity, not the truth of an observation.

The existing [CAE exporter](https://github.com/agonza1/ConversationAgentEvals/blob/main/apps/api/app/services/execution_vcon.py) uses its own cae-execution-evidence-v1 application summary. This richer record illustrates a useful portable capture contract; it does not change that exporter or claim universal collection support. Producer/version, capture point, clock, event IDs, units, evidence coverage, and separate calculation/judge provenance make the data inspectable. Schema-valid JSON does not authenticate inputs, establish a backend commit, or calibrate a judge.

## Judge reliability — slide 15

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


### Detail modals — slide 15

The main slide now shows the compact flow. Activate **Check facts** for its input → checks → findings view, or **Judge behavior** for the side-by-side existing LLM/ASSERT and decision-model paths. These are presentation explanations, not provider-selection controls. Keep both modal walkthroughs brief; use the detailed comparison during Q&A when possible. Escape, the close button, or a click outside the dialog closes it and returns to the diagram. Slide navigation is suspended while a modal is open.

The traditional LLM/ASSERT path remains the existing semantic judge. OpenAI Decisions is an optional draft integration in PR #157; Jev is an alternative candidate, not a shipped CAE integration. Provider-specific confidence and probability semantics must not be conflated. Compare judge paths on human-labeled calls before switching; multiple judges agreeing does not prove execution.

### Visual component walkthroughs — slide 15

The fact-check modal continues Billing Address Change from slide 14 with three illustrative turns. Caller turn 01 requests 14 Pine St. Caller turn 02 corrects it to 40 Pine St. Agent turn 03 confirms 14 Pine St and explains that the address will appear on the next invoice. The comparison preserves a concrete failure without requiring access to the agent's private verification or billing tools. Earlier cancellation examples and Appendix A2 remain separate cases illustrating timeout ambiguity and recovery with richer backend evidence.

The values shown in the fact cards are clear, manually identified values from the illustrative dialogue, not output from a universal address extractor. The semantic step identifies turn 02 as superseding turn 01; the fact comparison then exposes 40 versus 14. Real recordings need speaker attribution and reliable audio/transcript alignment. Spoken number variants, ambiguous audio, corrections, retractions, and address normalization need contextual judgment; a raw string comparison is not a general solution. Review ambiguous cases rather than assigning a confident failure from an ASR error.

The configured policy preserves the failed correction requirement while retaining the other results. A weighted conversational score should not silently erase a declared critical failure. This is a proposed evaluation explanation, not a claim that CAE already enforces every illustrated check. Conversational evaluation remains useful across platforms without internal logs. For actual task completion, add an independent test-account UI/API readback or follow-up interaction when supported; that is an additional outcome check, not a prerequisite to assess the conversation or a claim that CAE currently supplies universal outcome adapters. A verbal confirmation alone does not prove the account was changed. The retired complete-verification-audit fixture is no longer used in this example.

The behavior modal uses the same correction and readback. The semantic judge interprets the caller's revised intent, associates the final confirmation with it, and evaluates the correction requirement. Evidence extraction and interpretation may precede fact comparison; the diagram describes responsibilities rather than a mandatory chronological pipeline. Provider comparisons remain optional for Q&A. Structured output or agreement between judges does not guarantee a correct judgment; calibrate against human-labeled calls. These are teaching examples, not measured CAE results.
