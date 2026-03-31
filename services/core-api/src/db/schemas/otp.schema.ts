import { pgTable as table, uuid, varchar, timestamp } from "drizzle-orm/pg-core";
import { workers } from "./worker.schema";

export const workerOtps = table("worker_otps", {
  id: uuid("id").primaryKey().defaultRandom(),
  workerId: uuid("worker_id").notNull().references(() => workers.id, { onDelete: "cascade" }).unique(),
  otp: varchar("otp", { length: 6 }).notNull(),
  expiresAt: timestamp("expires_at", { withTimezone: true }).notNull(),
});
