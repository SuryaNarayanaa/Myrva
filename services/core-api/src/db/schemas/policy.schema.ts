import { pgTable as table, uuid } from "drizzle-orm/pg-core";
import * as t from "drizzle-orm/pg-core";
import { timestamps } from "./column.helpers";

export const policyPlans = table("policy_plans", {
    id: uuid("id").primaryKey().defaultRandom(),
    name: t.varchar({length: 255}).notNull(),
    description: t.text().notNull(),
    durationDays : t.integer().notNull(),
    gracePeriodDays: t.integer().notNull(),
    maxCoolDownDays: t.integer().notNull(),
    isActive: t.boolean().default(false),
    ...timestamps
})

export const policyTiers = table("policy_tiers", {
    id: uuid("id").primaryKey().defaultRandom(),
    planId: uuid("plan_id").notNull().references(() => policyPlans.id),
    tierName: t.varchar({length: 255}).notNull(),
    description: t.text().notNull(),
    defaultCoveragePercentage: t.doublePrecision().notNull(),
    defaultWeeklyPremium: t.doublePrecision().notNull(),
    isActive: t.boolean().default(false),
    ...timestamps
})
