import { pgEnum, pgTable as table, uuid } from "drizzle-orm/pg-core";
import * as t from "drizzle-orm/pg-core";
import { timestamps } from "./column.helpers";
import { zones } from "./worker.schema";

export const triggerTypes = table("trigger_types", {
    id: uuid("id").primaryKey().defaultRandom(),
    triggerName: t.varchar({length: 255}).notNull(),
    description: t.text().notNull(),
    isActive: t.boolean().default(true),
})

export const triggerEventStatus = pgEnum("trigger_event_status", ["detected", "validated", "rejected"])

export const triggerEvents = table("trigger_events", {
    id: uuid("id").primaryKey().defaultRandom(),
    triggerTypeId: uuid("trigger_type_id").notNull().references(() => triggerTypes.id),
    zoneId: uuid("zone_id").references(() => zones.id),
    eventValue: t.jsonb(),
    severityScore: t.doublePrecision().default(0),
    source: t.varchar({length: 255}),
    startTime: t.timestamp().notNull(),
    endTime: t.timestamp(),
    status: triggerEventStatus().notNull().default("detected"),
    detectedAt: t.timestamp().defaultNow().notNull(),
    ...timestamps
})
