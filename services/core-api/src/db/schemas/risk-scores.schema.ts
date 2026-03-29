import { pgEnum , pgTable as table, uuid} from "drizzle-orm/pg-core";
import * as t from "drizzle-orm/pg-core"
import {timestamps} from "./column.helpers"
import { workers } from "./worker.schema";

export const scoreType = pgEnum("score_type", [ "weekly","onboarding", "claim-time"])


export const riskScores = table("risk_scores", {
    id: uuid("id").primaryKey().defaultRandom(),
    workerId: uuid("worker_id").notNull().references(()=>workers.id),
    riskScore: t.doublePrecision().notNull(),
    disruptionForecast: t.doublePrecision().notNull(),
    scoreType: scoreType().notNull(),
    modelVersion: t.text().notNull(),
    calculatedAt: t.timestamp("calculated_at").notNull().defaultNow(),
    ...timestamps
})
