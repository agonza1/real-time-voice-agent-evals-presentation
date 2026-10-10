import assert from 'node:assert/strict';
import test from 'node:test';
import '../scripts/engineering-model.js';
const m = globalThis.VoiceEvalEngineering;

test('latency comparison uses the same response pipeline and exposes premature reply', () => {
  const eager=m.latency('eager'), patient=m.latency('patient');
  for (const run of [eager,patient]) assert.equal(run.received-run.endpoint,500);
  assert.equal(eager.receiveAfterCallerEnd,-700); assert.equal(eager.premature,true);
  assert.equal(patient.receiveAfterCallerEnd,700); assert.equal(patient.premature,false);
  assert.throws(()=>m.latency('made-up'));
});
test('default runtime control blocks false confirmation before TTS',()=>{
  const run=m.controlRun();
  assert.equal(run.verdict,'SAFE FAILURE'); assert.equal(run.unsupported,false);
  assert.equal(run.permitted,false); assert.match(run.speech,/cannot confirm/);
  assert.equal(run.knowledge,'active'); assert.equal(run.commits,0);
});
test('bypassing the gate is an explicit preventable anti-pattern',()=>{
  const run=m.controlRun({scenario:'failure',gate:false});
  assert.equal(run.verdict,'FALSE SUCCESS'); assert.equal(run.unsupported,true);
  assert.equal(run.checks.claim_supported_before_speech,false);
});
test('lost acknowledgment is unknown to the agent even when the operation committed',()=>{
  const run=m.controlRun({scenario:'lost'});
  assert.equal(run.truth,'canceled'); assert.equal(run.knowledge,'unknown');
  assert.equal(run.verdict,'PENDING RECONCILIATION'); assert.equal(run.commits,1);
  assert.match(run.speech,/cannot confirm/);
});
test('a lucky truthful guess is still unsupported at speech time',()=>{
  const run=m.controlRun({scenario:'lost',gate:false});
  assert.equal(run.truth,'canceled'); assert.equal(run.unsupported,true);
  assert.equal(run.verdict,'UNSUPPORTED CONFIRMATION');
});
test('reconciliation must match the original operation',()=>{
  const ok=m.controlRun({scenario:'lost',reconciled:true});
  const wrong=m.controlRun({scenario:'lost',reconciled:true,proofOperationId:'op-other'});
  assert.equal(ok.verdict,'VERIFIED SUCCESS'); assert.equal(ok.knowledge,'canceled');
  assert.equal(wrong.knowledge,'unknown'); assert.equal(wrong.permitted,false);
});
test('same logical operation can be retried without duplicating effects',()=>{
  for(let retries=0;retries<=20;retries++){
    const run=m.controlRun({scenario:'lost',retries});
    assert.equal(run.requests,retries+1);assert.equal(run.commits,1);
    assert.equal(run.knowledge,'unknown');assert.equal(run.checks.at_most_one_effect,true);
  }
  assert.throws(()=>m.controlRun({retries:-1}));assert.throws(()=>m.controlRun({retries:21}));
});
test('interruption suppresses stale speech but does not reverse a committed effect',()=>{
  const run=m.controlRun({scenario:'lost',reconciled:true,interrupted:true});
  assert.equal(run.truth,'canceled');assert.equal(run.commits,1);
  assert.equal(run.verdict,'STALE RESPONSE BLOCKED');assert.match(run.speech,/No speech/);
  assert.equal(run.checks.superseded_response_suppressed,true);
});
test('gate holds for every fixture combination, including repeated requests',()=>{
  for(const scenario of ['success','failure','lost']) for(const reconciled of [true,false]) for(const interrupted of [true,false]) for(const retries of [0,1,20]) {
    const run=m.controlRun({scenario,reconciled,interrupted,retries,gate:true});
    assert.equal(run.unsupported,false,JSON.stringify({scenario,reconciled,interrupted,retries}));
  }
});
test('release review cannot trade critical regressions for faster responses',()=>{
  const baseline=m.releaseReview('baseline'), candidate=m.releaseReview('candidate');
  assert.ok(candidate.p95<baseline.p95);assert.equal(candidate.decision,'HOLD');
  assert.equal(candidate.failures.length,2);assert.equal(baseline.failures.length,0);
  assert.equal(baseline.runs,100);assert.equal(candidate.runs,100);
});

test('fact checks reject duplicate effects, unrelated proof, and proof received after confirmation',()=>{
  const {evidence}=m.controlRun({scenario:'lost',retries:1,reconciled:true});
  assert.deepEqual(m.recoveryFactChecks(evidence),{oneRecordedEffect:true,sameRequest:true,proofBeforeConfirmation:true});
  assert.equal(m.recoveryFactChecks({...evidence,effects:[...evidence.effects,...evidence.effects]}).oneRecordedEffect,false);
  const wrong={...evidence,proof:{...evidence.proof,operationId:'op-other'}};
  assert.equal(m.recoveryFactChecks(wrong).sameRequest,false);
  assert.equal(m.recoveryFactChecks(wrong).proofBeforeConfirmation,false);
  assert.equal(m.recoveryFactChecks({...evidence,proof:{...evidence.proof,receivedAt:800}}).proofBeforeConfirmation,false);
  assert.equal(m.recoveryFactChecks({...evidence,proof:{...evidence.proof,state:'active'}}).proofBeforeConfirmation,false);
});
test('fact checks retain incomplete evidence and absent confirmation as unestablished or not applicable',()=>{
  assert.deepEqual(m.recoveryFactChecks({complete:false}),{oneRecordedEffect:null,sameRequest:null,proofBeforeConfirmation:null});
  const {evidence}=m.controlRun({scenario:'lost'});
  assert.equal(m.recoveryFactChecks(evidence).sameRequest,null);
  assert.equal(m.recoveryFactChecks(evidence).proofBeforeConfirmation,null);
  const unverified=m.controlRun({scenario:'lost',gate:false});
  assert.equal(m.recoveryFactChecks(unverified.evidence).proofBeforeConfirmation,false);
});

test('an address update with matched completion proof still fails skipped verification',()=>{
  const evidence=m.billingAddressEvidence;
  assert.deepEqual(m.addressChangeFactChecks(evidence),{verifiedBeforeUpdate:false,requestedAddressSaved:true,proofBeforeConfirmation:true});
  const verified={...evidence,verification:{succeeded:true,accountId:evidence.accountId,succeededAt:40}};
  assert.equal(m.addressChangeFactChecks(verified).verifiedBeforeUpdate,true);
  assert.equal(m.addressChangeFactChecks({...verified,verification:{...verified.verification,succeededAt:200}}).verifiedBeforeUpdate,false);
  assert.equal(m.addressChangeFactChecks({...verified,verification:{...verified.verification,accountId:'other'}}).verifiedBeforeUpdate,false);
});

test('address proof must match account, operation, requested address, and confirmation ordering',()=>{
  const evidence=m.billingAddressEvidence;
  for(const change of [{operationId:'other'},{accountId:'other'},{address:'old-address'}]) {
    const result=m.addressChangeFactChecks({...evidence,proof:{...evidence.proof,...change}});
    assert.equal(result.requestedAddressSaved,false);
    assert.equal(result.proofBeforeConfirmation,false);
  }
  assert.equal(m.addressChangeFactChecks({...evidence,proof:{...evidence.proof,receivedAt:800}}).proofBeforeConfirmation,false);
  assert.deepEqual(m.addressChangeFactChecks({...evidence,complete:false}),{verifiedBeforeUpdate:null,requestedAddressSaved:null,proofBeforeConfirmation:null});
  assert.equal(m.addressChangeFactChecks({...evidence,proof:null}).requestedAddressSaved,null);
});
