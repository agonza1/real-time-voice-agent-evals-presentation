# Speaker notes — Fall '26 Voice and Conversations on the Net

These speaker notes tell Alberto’s first-voice-AI story for the Fall '26 audience. No customer incidents or production results have been added.

## Title slide — orient the audience

“A voice agent can understand the words and still mishandle the conversation. Today is about evaluating the complete real-time system: what the caller experiences, what the agent is allowed to do, and what actually happens.”

Keep the Echo Show story on the next slide rather than revealing it over the title.

## Story slide — the engineering question evolved

In 2017, I built a voice assistant for the Echo Show. It could trigger impressive actions—but only when people used the phrases I had anticipated. The human had to adapt to the system.

Years later, putting an open-ended language model on a WebRTC call felt like magic. The conversation no longer had to follow my script.

But that changed the question. It was no longer just, “Can it understand me?” It became, “Can we keep the whole system under control when someone interrupts or a tool times out?”

Building those controls leads to the next question: how do we know they still work when the model, network, or workflow changes?

That is the question behind the Conversation Agent Evaluation (CAE) tool: testing the complete interaction, inspecting the evidence, and deciding whether the next version is ready for production.

### Transition into the existing problem slide

“Let’s start with a case where the words sound right, but the evidence tells us something different.”

The cancellation case is a teaching fixture, not a claim that it happened in a customer deployment.

## Closing — production readiness

The question we started with was: how do we know the system still works as it changes?

A model score cannot answer that on its own. We need to measure the received conversation, verify the runtime protections and business outcomes, and re-test the changes we intend to release.

Runtime controls enforce the boundaries. Evaluation checks their behavior. The evaluation tool organizes that work, and vCon helps make the evidence portable.

Start with one important workflow. Define the contract, test the failure paths, and keep the evidence behind the release decision.

Production readiness is a systems property.

## 30-minute stage route

Plan for 25 minutes of presentation and five minutes of Q&A. The 19-slide route includes the new voice architecture slide. The time limits below include the interactions; do not narrate every field or open every disclosure.

| Slide | Time | Finish by | Point and stage action |
| --- | --- | --- | --- |
| 1 · Title | 0:30 | 0:30 | A model score cannot establish that a voice agent works as a system. |
| 2 · Story | 1:30 | 2:00 | Tell the Echo Show story. Move from understanding words to controlling actions to testing changes. |
| 3 · Problem | 1:00 | 3:00 | Contrast the confident confirmation with the verified active subscription. A timeout alone would leave state unknown; this example includes readback. |
| 4 · System | 0:45 | 3:45 | Trace input from caller through SIP/RTP or WebRTC to TTS, then return audio through Media to the Caller. Control exchanges tool requests and results with the Backend. The caller experiences the complete loop. |
| 5 · Continuous voice | 1:30 | 5:15 | Explain the live speech loop and asynchronous reasoning. Full duplex is model-specific; a second spoken cascade needs output coordination. |
| 6 · Four layers | 1:15 | 6:30 | Name each dimension. A good conversation score cannot excuse a wrong business action. |
| 7 · Timeline | 2:30 | 9:00 | Switch to aggressive endpointing, then restore the full-request trace. Faster output loses the billing-period qualifier. |
| 8 · vCon | 1:00 | 10:00 | The container carries observations and their provenance. It does not supply a verdict. |
| 9 · JSON explorer | 1:30 | 11:30 | Select Dialog, then Evaluation. Show where media and run evidence belong; skip a field-by-field tour. |
| 10 · Workbench | 1:15 | 12:45 | Introduce the Conversation Agent Evaluation (CAE) tool in one sentence: run or import, normalize evidence, check the contract, compare results. |
| 11 · Contract | 1:15 | 14:00 | Point to the forbidden completion claim and expected state. Distinguish the illustrative contract from planned extensions. |
| 12 · Loop | 0:45 | 14:45 | A changed rubric can re-score saved evidence; a changed agent needs another run. |
| 13 · Scorecard | 2:00 | 16:45 | Remove final-state evidence, observe the business result become unverified, then restore it. Timing and observed safe output remain supported. |
| 14 · Runtime demo | 3:00 | 19:45 | Run the gate contrast and lost-ack reconciliation described below. |
| 15 · Outcomes | 1:00 | 20:45 | Separate completed work, verified safe failure, and false success. Unknown is not failed. |
| 16 · Release review | 1:30 | 22:15 | Compare Baseline with Aggressive endpointing. Lower p95 cannot compensate for failed critical gates. |
| 17 · Boundary | 1:00 | 23:15 | Explain supported evaluation tool capabilities and the roadmap. These browser fixtures do not establish live telephony or production behavior. |
| 18 · Sources | 0:30 | 23:45 | Point to the linked standards and research. No bibliography recital. |
| 19 · Close | 1:15 | 25:00 | Return to the opening question. Start with one important workflow, define its contract, test its failure paths, and retain the evidence. |
| Q&A | 5:00 | 30:00 | Leave the closing slide and repository links visible. |

## Continuous voice — slide 5

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

## Runtime demo — three minutes

1. Start with **Rejected + timeout; readback confirms active** and the runtime output gate enabled. The model proposes a completion claim, but approved speech expresses uncertainty. This is an incomplete task with observed safe output.
2. Disable the gate once. Point to **FALSE SUCCESS** and the active backend state. Evaluation detects this violation; the runtime gate prevents it. Re-enable the gate immediately.
3. Select **Committed + acknowledgment lost**. The backend committed, but the agent cannot yet verify that fact. Keep the gate enabled and open **Advanced: reconcile, retry, or interrupt**.
4. Click **Reconcile original operation**. Evidence matched to the operation ID supports confirmation. A timeout describes the observation, not the final business outcome.
5. Restore the rejected/timeout scenario, leave the gate enabled, and close the advanced disclosure before moving on. Reserve retry and interruption controls for Q&A.

Transition: “Now we can distinguish a failed task from a failed protection. Those need different release decisions.”

## Rehearsal and fallback

Open `?present=1` and return to the title with Home. Use the arrow keys to advance; Space activates a focused button rather than advancing the slide. After an interaction, click the next-slide arrow to resume reliably.

Before going on stage, load the original Echo Show photo and leave disclosures closed. The photo is fetched from the pinned GitHub source and requires connectivity on initial load; do not rely on an untested browser cache. Keep the published site and a locally served checkout available.

If an interaction fails, explain its expected before/after result and move on.

Check the clock after slides 6 (6:30), 10 (12:45), and 14 (19:45). If behind, keep the JSON explorer on its default view, and omit lost-ack reconciliation. Preserve the gate contrast, release decision, and closing; those carry the argument.

The event name follows the [official Fall '26 conference site](https://www.vonevolution.com/). The October 15 talk date is retained from the existing deck.
