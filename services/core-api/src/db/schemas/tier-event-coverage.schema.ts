import { pgTable as table, uuid } from "drizzle-orm/pg-core";
import * as t from "drizzle-orm/pg-core";
import { policyTiers } from "./policy.schema";
import { triggerTypes } from "./trigger.schema";

export const tierEventCoverage = table("tier_event_coverage", {
    id: uuid("id").primaryKey().defaultRandom(),
    tierId: uuid("tier_id").notNull().references(() => policyTiers.id),
    triggerTypeId: uuid("trigger_type_id").notNull().references(() => triggerTypes.id),
    minThreshold: t.doublePrecision().notNull(),
    maxThreshold: t.doublePrecision().notNull(),
    payoutPercentage: t.doublePrecision().notNull(),
    maxPayoutAmount: t.doublePrecision(),
    cooldownHours: t.integer().default(0),
    isActive: t.boolean().default(true),
})
