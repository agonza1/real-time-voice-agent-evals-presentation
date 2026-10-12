# Demo backup provenance

Captured October 12, 2026 from the local VoiceAI QA evaluator on port 3012.

- Input: the built-in **synthetic** Billing Address Change transcript, loaded through `/eval?suite_id=call-center-voice-ai&scenario_id=billing-address-change&sample=1`.
- Action: **Evaluate evidence**, which ran deterministic transcript checks. No target voice call, real account update, or ASSERT semantic judge request was made.
- Actual result: score 100, verdict `needs_review`, semantic review required. Task completion and final state were not measured. Transcript present; action trace and final state absent.
- `contract.jpg`, `evidence.jpg`, `result.jpg`: actual unmodified evaluator screenshots. All identities, address, ZIP, and phone suffix shown are from the built-in synthetic sample.
- `report-excerpt.json`: selected actual fields from the downloaded report, retaining the complete synthetic transcript and scenario contract fingerprint. Workspace/user labels, other run metadata, and duplicate artifact structures are omitted. This is an excerpt, not a full native ASSERT export.
- `../../demo-backup.html`: embeds all three screenshots and the excerpt so it works without a server, network, or external assets. It reproduces saved views; it does not rerun evaluation.

The complete original report is retained on Alberto's local machine outside this repository. No real customer evidence is included in these assets.
