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

- [AVA Intellect](https://webrtc.ventures/successes/ai-voice-agents-that-collaborate-and-contribute/): configurable assistants, shared knowledge, tools, and integration with meeting platforms. The image is the published agent configuration UI.
- [Surgical audio](https://webrtc.ventures/successes/audio-listening-device-to-improve-surgical-outcomes/): Amazon Chime SDK capture with Symbl.ai transcription and conversation insights, plus postoperative speaker separation and oversight. Describe the system's purpose and functionality; this case study does not establish a quantified clinical improvement.
- [CETA Global / EBT-Sim](https://webrtc.ventures/successes/ai-roleplay-training-simulator-case-study/): WebRTC.ventures helped build real-time communication, the training UI, cloud infrastructure, and AI orchestration with CETA's team. Integration with the broader practitioner ecosystem continues. The system uses push-to-talk, Google speech services, Google ADK agents, and HeyGen avatars. Deliberate thinking pauses motivated push-to-talk rather than automatic turn ending. The visual comes from [CETA's public product page](https://www.cetaglobal.org/solutions/cetaaitraining), linked in the success story.
- [LiveKit production migration, slides 16–19](https://webrtc.ventures/wp-content/uploads/2026/07/Migrating-from-Kurento-to-LiveKit-in-Production.html#16): LiveKit SIP dispatches inbound calls and agents into a room. Scoped agents identify intent, search for human agents, check availability, transfer, or offer voicemail. The implementation retained STT → LLM → TTS with Azure providers. Do not describe this project as the full-duplex speech-to-speech architecture on slide 6.

All four visuals are from public project materials. The LiveKit image is a detail of its published architecture, rather than a product UI. Original files and provenance are retained in `assets/projects/SOURCES.md`.

### Transition into the problem slide

“Let’s start with a case where the words sound right, but the evidence tells us something different.”

The cancellation case is a teaching fixture, not a claim that it happened in a customer deployment.

## Closing — production readiness

The question we started with was: how do we know the system still works as it changes?

A model score cannot answer that on its own. We need to measure the received conversation, verify the runtime protections and business outcomes, and re-test the changes we intend to release.

Runtime controls enforce the boundaries. Evaluation checks their behavior. The evaluation tool organizes that work, and vCon helps make the evidence portable.

Start with one important workflow. Define the contract, test the failure paths, and keep the evidence behind the release decision.

Production readiness is a systems property.

## 30-minute stage route

Plan for 25 minutes of presentation and five minutes of Q&A. There are 17 main slides, followed by two optional appendix slides. The route takes 22:15, leaving 2:45 for transitions or demo variation. Do not narrate every field or open every disclosure.

| Slide | Time | Finish by | Point and stage action |
| --- | --- | --- | --- |
| 1 · Title | 0:30 | 0:30 | A model score cannot establish that a voice agent works as a system. |
| 2 · Story | 1:00 | 1:30 | Tell the Echo Show story. Move from understanding words to controlling actions to testing changes. |
| 3 · Projects | 1:00 | 2:30 | Give each project 15 seconds: meeting agents, surgical audio, avatar training, and the agentic call center. |
| 4 · Problem | 1:00 | 3:30 | Contrast the confident confirmation with the verified active subscription. A timeout alone leaves state unknown; this example includes readback. |
| 5 · System | 0:45 | 4:15 | Trace input through SIP/RTP or WebRTC to TTS, then return audio to the Caller. Control exchanges requests and results with the Backend. |
| 6 · Two-path architecture | 0:45 | 5:00 | Trace the live caller/voice-model loop, then background reasoning and tools. Results return to the voice model. |
| 7 · Continuous-voice sequence | 1:00 | 6:00 | Follow the appointment sequence. The caller adds a constraint while the model speaks; the delegated search returns a current result. |
| 8 · Four layers | 1:15 | 7:15 | Name each dimension. A good conversation score cannot excuse a wrong business action. |
| 9 · Timeline | 2:30 | 9:45 | Switch to aggressive endpointing, then restore the full-request trace. Faster output loses the billing-period qualifier. |
| 10 · Workbench | 2:00 | 11:45 | Introduce the Conversation Agent Evaluation (CAE) tool through Run → Evaluate → Compare, then explain framework roles. New rubric: re-score; changed agent: run again. |
| 11 · Contract | 1:30 | 13:15 | Define required actions and expected state. Unsupported completion is a critical violation regardless of the weighted score. |
| 12 · vCon | 1:00 | 14:15 | The container carries observations and provenance. It does not supply a verdict. |
| 13 · Lost-ack experiment | 3:00 | 17:15 | Follow operation evidence → caller response → evaluation. Check the original operation and show when confirmation becomes supported. |
| 14 · Outcomes | 1:00 | 18:15 | Read the two axes: business state and safe response. Unknown state stays outside this verified-state matrix. |
| 15 · Release review | 2:00 | 20:15 | Compare Baseline with Aggressive endpointing. Lower p95 cannot compensate for failed critical gates. |
| 16 · Boundary | 1:00 | 21:15 | Explain supported capabilities and the roadmap. Browser fixtures do not establish live telephony or production behavior. |
| 17 · Close | 1:00 | 22:15 | Return to the opening question. Define one important workflow contract, test its failure paths, and retain the evidence. |
| Delivery buffer | 2:45 | 25:00 | Allow room for transitions and interaction variation. |
| Q&A | 5:00 | 30:00 | Leave the closing slide and repository links visible. |

Appendix A1 contains the vCon JSON explorer; A2 contains standards and research. Open them from the closing links only when useful for a question. Normal forward navigation stops at the closing slide. End always returns to the closing slide; Home returns to the title.

## Bridges between slides

- **4 → 5:** “The confirmation sounds convincing. Which part of the system can establish that the action happened?” The active state is verified by readback, not inferred from timeout.
- **5 → 6:** “This is the conventional STT–LLM–TTS cascade. Native speech systems change those components and can overlap listening with speaking. We still evaluate the whole interaction.”
- **6 → 7:** “Here are those same components during a call. The caller adds a new constraint while the search is running.”
- **7 → 8:** “A new caller constraint can arrive while work is running. That affects the conversation, the execution, and the eventual outcome.”
- **8 → 9:** “Start with speech timing: what did the system hear before it answered?”
- **9 → 10:** “Now we need a repeatable workflow to collect these observations and compare changes.”
- **10 → 11:** “Before judging a run, define what success and a critical violation mean for that scenario.”
- **11 → 12:** “To check the contract later, retain the media, tool trace, and state evidence together.”
- **12 → 13:** “Now change the failure: the action commits, but its acknowledgment never arrives. What can the agent safely say?”
- **13 → 14:** “The task result and the safety of the response are separate verdicts.”
- **14 → 15:** “Apply those verdicts across the same scenarios before approving a new version.”
- **15 → 16:** “These release decisions depend on evidence. Here is what the tool supports today and what still needs building.”
- **16 → 17:** “Start with one workflow, keep its evidence, and repeat the test when the system changes.”

## Outcome matrix — slide 14

The rows describe verified business state; the columns describe whether speech was supported at the time it was emitted. A task can finish while the agent confirms it without sufficient evidence. That claim might be true by luck, but the confirmation remains unsafe. Conversely, a truthful expression of uncertainty can be safe even if the backend already committed.

An unknown state is not a failed task. Keep it unknown until operation-matched reconciliation establishes the result. The matrix adds a classification lens after the demo rather than repeating its operation ledger.

## Continuous voice — slides 6 and 7

Both diagrams are in the main route: the two-path architecture follows the conventional system on slide 6, and the appointment sequence follows on slide 7. Legacy architecture-review URLs open slide 6 without replacing the sequence.

- `architecture`: trace the cyan audio loop first, then the delegated reasoning and tool requests below it. “The live conversation continues while deeper work runs. The result comes back to the voice model.”
- `sequence`: follow the appointment search from top to bottom. The cyan overlap highlights the caller adding “after 3pm” while the voice model speaks. The active task must incorporate that new constraint. Availability returns to the same conversation; “Shall I book it?” does not claim that a booking happened.

Both diagrams are illustrative. An implementation must update or supersede background work after a changed request and suppress stale results. Keep the vendor explanation and STT → LLM → TTS alternative in these notes rather than adding a second spoken pipeline to the diagram.

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

## Lost-ack experiment — three minutes

1. Begin in the default **Committed + acknowledgment lost** scenario. The backend committed, but the agent knows only that the tool timed out. Point to the unknown verified state, uncertainty in the caller response, and passing check for no unsupported completion. A passing protection check does not establish task completion.
2. Click **Check operation result**. Readback for the original operation establishes cancellation before confirmation is permitted. The caller response changes and the verdict becomes verified success. This is the new evidence the initial timeout did not provide.
3. Click **Reset: acknowledgment lost** to return to uncertainty. This restores the protected default, clears retry and reconciliation state, and removes any interruption setting.

Use **Explore other failures and inspect the evidence** for Q&A. The backend fixture truth, proposed completion claim, operation ledger, trace, and individual assertions are available there. Disabling the output gate in the lost-ack case produces an unsupported confirmation even though the action really happened. Selecting rejected/timeout and bypassing the gate reproduces the opening false-success case. Retry and interruption controls preserve their original fixture behavior. Restore the default with Reset and close the disclosure after exploration.

This slide demonstrates evidence changing over time and checks the ordering of proof and speech. The opening slide establishes the problem, the contract defines requirements, and the next matrix classifies business state and response safety. The experiment does not demonstrate shipped CAE runtime protection or a live backend.

Transition: “Now we can distinguish a failed task from a failed protection. Those need different release decisions.”

## Rehearsal and fallback

Open `?present=1` and return to the title with Home. Use the arrow keys to advance; Space activates a focused button rather than advancing the slide. After an interaction, click the next-slide arrow to resume reliably.

Before going on stage, load the original Echo Show photo and leave disclosures closed. The photo is fetched from the pinned GitHub source and requires connectivity on initial load; do not rely on an untested browser cache. Keep the published site and a locally served checkout available.

If an interaction fails, explain its expected before/after result and move on.

Check the clock after slides 8 (7:15), 10 (11:45), and 13 (17:15). If behind, shorten the framework explanation and use the delivery buffer. Preserve the lost-ack reconciliation, release decision, and closing; those carry the argument. Keep optional failure controls, the JSON explorer, and sources for Q&A.

The event name follows the [official Fall '26 conference site](https://www.vonevolution.com/). The October 15 talk date is retained from the existing deck.
