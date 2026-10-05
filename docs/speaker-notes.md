# Speaker notes — Fall '26 Voice and Conversations on the Net

These are new speaker notes adapted from Alberto’s previously shared first-voice-AI story. They are not a transcript of the ClueCon recording. No customer incidents or production results have been added.

## Title slide — orient the audience

“A voice agent can understand the words and still mishandle the conversation. Today is about evaluating the complete real-time system: what the caller experiences, what the agent is allowed to do, and what actually happens.”

Keep the Echo Show story on the next slide rather than revealing it over the title.

## Story slide — same origin, next engineering question

Some of you heard the beginning of this story at ClueCon.

In 2017, I built a voice assistant for the Echo Show. It could trigger impressive actions—but only when people used the phrases I had anticipated. The human had to adapt to the system.

Years later, putting an open-ended language model on a WebRTC call felt like magic. The conversation no longer had to follow my script.

But that changed the question. It was no longer just, “Can it understand me?” It became, “Can we keep the whole system under control when someone interrupts or a tool times out?”

At ClueCon, I focused on the architecture behind those controls. Today is the next chapter: how do we know they still work when the model, network, or workflow changes?

That is the question behind ConversationAgentEvals: testing the complete interaction, inspecting the evidence, and deciding whether the next version is ready for production.

### Transition into the existing problem slide

“Let’s start with a case where the words sound right, but the evidence tells us something different.”

The cancellation case is a teaching fixture, not a claim that it happened in a customer deployment.

## Closing — production readiness

The question we started with was: how do we know the system still works as it changes?

A model score cannot answer that on its own. We need to measure the received conversation, verify the runtime protections and business outcomes, and re-test the changes we intend to release.

Runtime controls enforce the boundaries. Evaluation checks their behavior. CAE organizes that work, and vCon helps make the evidence portable.

Start with one important workflow. Define the contract, test the failure paths, and keep the evidence behind the release decision.

Production readiness is a systems property.

## 30-minute stage route

Plan for 25 minutes of presentation and five minutes of Q&A. The 19-slide sequence stays intact. The time limits below include the interactions; do not narrate every field or open every disclosure.

| Slide | Time | Finish by | Point and stage action |
| --- | --- | --- | --- |
| 1 · Title | 0:30 | 0:30 | A model score cannot establish that a voice agent works as a system. |
| 2 · Story | 1:30 | 2:00 | Tell the Echo Show story. Move from understanding words to controlling actions to testing changes. |
| 3 · Problem | 1:00 | 3:00 | Contrast the confident confirmation with the verified active subscription. A timeout alone would leave state unknown; this example includes readback. |
| 4 · System | 0:45 | 3:45 | Trace caller to backend once. The caller experiences the complete loop. |
| 5 · Four layers | 1:15 | 5:00 | Name each dimension. A good conversation score cannot excuse a wrong business action. |
| 6 · Timeline | 2:00 | 7:00 | Switch to aggressive endpointing, then restore the full-request trace. Faster output loses the billing-period qualifier. |
| 7 · Audio evidence | 2:00 | 9:00 | Play source and received audio once each. Explain that muting the negation is a deliberate teaching edit, with hypothetical ASR. |
| 8 · vCon | 1:00 | 10:00 | The container carries observations and their provenance. It does not supply a verdict. |
| 9 · JSON explorer | 1:30 | 11:30 | Select Dialog, then Evaluation. Show where media and run evidence belong; skip a field-by-field tour. |
| 10 · Workbench | 1:15 | 12:45 | Explain CAE in one sentence: run or import, normalize evidence, check the contract, compare results. |
| 11 · Contract | 1:15 | 14:00 | Point to the forbidden completion claim and expected state. Distinguish the illustrative contract from planned extensions. |
| 12 · Loop | 0:45 | 14:45 | A changed rubric can re-score saved evidence; a changed agent needs another run. |
| 13 · Scorecard | 2:00 | 16:45 | Remove final-state evidence, observe the business result become unverified, then restore it. Timing and observed safe output remain supported. |
| 14 · Runtime demo | 3:00 | 19:45 | Run the gate contrast and lost-ack reconciliation described below. |
| 15 · Outcomes | 1:00 | 20:45 | Separate completed work, verified safe failure, and false success. Unknown is not failed. |
| 16 · Release review | 1:30 | 22:15 | Compare Baseline with Aggressive endpointing. Lower p95 cannot compensate for failed critical gates. |
| 17 · Boundary | 1:00 | 23:15 | Explain supported CAE capabilities and the roadmap. These browser fixtures do not establish live telephony or production behavior. |
| 18 · Sources | 0:30 | 23:45 | Point to the linked standards and research. No bibliography recital. |
| 19 · Close | 1:15 | 25:00 | Return to the opening question. Start with one important workflow, define its contract, test its failure paths, and retain the evidence. |
| Q&A | 5:00 | 30:00 | Leave the closing slide and repository links visible. |

## Runtime demo — three minutes

1. Start with **Rejected + timeout; readback confirms active** and the runtime output gate enabled. The model proposes a completion claim, but approved speech expresses uncertainty. This is an incomplete task with observed safe output.
2. Disable the gate once. Point to **FALSE SUCCESS** and the active backend state. Evaluation detects this violation; the runtime gate prevents it. Re-enable the gate immediately.
3. Select **Committed + acknowledgment lost**. The backend committed, but the agent cannot yet verify that fact. Keep the gate enabled and open **Advanced: reconcile, retry, or interrupt**.
4. Click **Reconcile original operation**. Evidence matched to the operation ID supports confirmation. A timeout describes the observation, not the final business outcome.
5. Restore the rejected/timeout scenario, leave the gate enabled, and close the advanced disclosure before moving on. Reserve retry and interruption controls for Q&A.

Transition: “Now we can distinguish a failed task from a failed protection. Those need different release decisions.”

## Rehearsal and fallback

Open `?present=1` and return to the title with Home. Use the arrow keys to advance; Space activates a focused button rather than advancing the slide. After an interaction, click the next-slide arrow to resume reliably.

Before going on stage, load the original Echo Show photo, test both audio buttons through the venue output, and leave disclosures closed. The photo is fetched from the pinned GitHub source and requires connectivity on initial load; do not rely on an untested browser cache. Keep the published site and a locally served checkout available.

If audio playback fails, use the two visible utterances: losing “not” reverses the intended action. Continue without diagnosing playback on stage. If an interaction fails, explain its expected before/after result and move on.

Check the clock after slides 5 (5:00), 10 (12:45), and 14 (19:45). If behind, show the audio text without playback, keep the JSON explorer on its default view, and omit lost-ack reconciliation. Preserve the gate contrast, release decision, and closing; those carry the argument.

The event name follows the [official Fall '26 conference site](https://www.vonevolution.com/). The October 15 talk date is retained from the existing deck.
