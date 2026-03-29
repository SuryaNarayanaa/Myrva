// Export all schemas
export * from './schemas/policy.schema';
export * from './schemas/worker.schema';
export * from './schemas/claims.schema';
export * from './schemas/trigger.schema';
export * from './schemas/tier-event-coverage.schema';
export * from './schemas/risk-scores.schema';


import * as policySchema from './schemas/policy.schema';
import * as workerSchema from './schemas/worker.schema';
import * as claimsSchema from './schemas/claims.schema';
import * as triggerSchema from './schemas/trigger.schema';
import * as tierEventCoverageSchema from './schemas/tier-event-coverage.schema';
import * as riskScoresSchema from "./schemas/risk-scores.schema"


export const schema = {
  ...policySchema,
  ...workerSchema,
  ...claimsSchema,
  ...triggerSchema,
  ...tierEventCoverageSchema,
  ...riskScoresSchema
};

// TypeScript type inference exports
import { InferSelectModel, InferInsertModel } from 'drizzle-orm';

// Policy Types
export type PolicyPlan = InferSelectModel<typeof policySchema.policyPlans>;
export type NewPolicyPlan = InferInsertModel<typeof policySchema.policyPlans>;

export type PolicyTier = InferSelectModel<typeof policySchema.policyTiers>;
export type NewPolicyTier = InferInsertModel<typeof policySchema.policyTiers>;

// Worker Types
export type Zone = InferSelectModel<typeof workerSchema.zones>;
export type NewZone = InferInsertModel<typeof workerSchema.zones>;

export type Worker = InferSelectModel<typeof workerSchema.workers>;
export type NewWorker = InferInsertModel<typeof workerSchema.workers>;

export type IdentityVerification = InferSelectModel<typeof workerSchema.identityVerifications>;
export type NewIdentityVerification = InferInsertModel<typeof workerSchema.identityVerifications>;

export type WorkerAuth = InferSelectModel<typeof workerSchema.workerAuth>;
export type NewWorkerAuth = InferInsertModel<typeof workerSchema.workerAuth>;

export type WorkerSubscription = InferSelectModel<typeof workerSchema.workerSubscriptions>;
export type NewWorkerSubscription = InferInsertModel<typeof workerSchema.workerSubscriptions>;

export type PolicyRecord = InferSelectModel<typeof workerSchema.policyRecords>;
export type NewPolicyRecord = InferInsertModel<typeof workerSchema.policyRecords>;

// Claims Types
export type Claim = InferSelectModel<typeof claimsSchema.claims>;
export type NewClaim = InferInsertModel<typeof claimsSchema.claims>;

export type Payout = InferSelectModel<typeof claimsSchema.payouts>;
export type NewPayout = InferInsertModel<typeof claimsSchema.payouts>;

// Trigger Types
export type TriggerType = InferSelectModel<typeof triggerSchema.triggerTypes>;
export type NewTriggerType = InferInsertModel<typeof triggerSchema.triggerTypes>;

export type TriggerEvent = InferSelectModel<typeof triggerSchema.triggerEvents>;
export type NewTriggerEvent = InferInsertModel<typeof triggerSchema.triggerEvents>;

// Tier Event Coverage Types
export type TierEventCoverage = InferSelectModel<typeof tierEventCoverageSchema.tierEventCoverage>;
export type NewTierEventCoverage = InferInsertModel<typeof tierEventCoverageSchema.tierEventCoverage>;

// Risk Score Types

export type RiskScores = InferSelectModel<typeof riskScoresSchema.riskScores>
export type newRiskScores = InferInsertModel<typeof riskScoresSchema.riskScores> 
