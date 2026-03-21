import { pgEnum, pgTable as table, uuid } from "drizzle-orm/pg-core";
import * as t from "drizzle-orm/pg-core";
import { timestamps } from "./column.helpers";
import { policyRecords, workerSubscriptions } from "./worker.schema";

export const claimStatus = pgEnum("claim_status", ["initiated","pending", "approved", "rejected", "paid_out"])
export const fraudStatus = pgEnum("fraud_status", ["pending", "cleared", "flagged"])
export const payoutMethod = pgEnum("payout_method", ["bank_transfer", "upi", "wallet"])
export const payoutStatus = pgEnum("payout_status", ["pending", "processing", "completed", "failed"])

export const claims = table("claims", {
    id: uuid("id").primaryKey().defaultRandom(),
    recordId: uuid("record_id").notNull().references(() => policyRecords.id),
    subscriptionId: uuid("subscription_id").notNull().references(() => workerSubscriptions.id),
    triggerEventId: uuid("trigger_event_id"),
    expectedIncomeLoss: t.doublePrecision().notNull(),
    coverageAmount: t.doublePrecision().notNull(),
    payoutAmount: t.doublePrecision().notNull(),
    status: claimStatus().notNull().default("initiated"),
    claimReason: t.text().notNull(),
    fraudScore: t.doublePrecision().default(0),
    fraudStatus: fraudStatus().notNull().default("pending"),
    autoApproved: t.boolean().default(false),
    ...timestamps
})

export const payouts = table("payouts", {
   id: uuid("id").primaryKey().defaultRandom(),
   claimId: uuid("claim_id").notNull().references(() => claims.id),
   subscriptionId: uuid("subscription_id").notNull().references(() => workerSubscriptions.id),
   poolId: uuid("pool_id"),
   amount: t.doublePrecision().notNull(),
   paymentMethod: payoutMethod().notNull().default("upi"),
   status: payoutStatus().notNull().default("pending"),
   transactionId: t.varchar({length: 255}),
   processedAt: t.timestamp(),
    ...timestamps
})
