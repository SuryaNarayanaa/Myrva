import { pgEnum, pgTable as table, uuid } from "drizzle-orm/pg-core";
import * as t from "drizzle-orm/pg-core";
import { timestamps } from "./column.helpers";
import { policyTiers } from "./policy.schema";

export const platformEnum = pgEnum("platform_type", ["swiggy", "zomato", "blinkit", "dunzo", "other"])
export const vehicleType = pgEnum("vehicle_type", ["bike", "cycle", "scooter"])
export const workerStatus = pgEnum("worker_status", ["active", "inactive", "suspended", "banned"])
export const verificationStatus = pgEnum("worker_verification_status",["pending", "verified", "rejected"])

export const zones = table("zones", {
  id: uuid("id").primaryKey().defaultRandom(),
  zoneName: t.varchar({length: 255}).notNull(),
  city: t.varchar({length: 255}).notNull(),
  state: t.varchar({length: 255}).notNull(),
  isActive: t.boolean().default(false),
})

export const workers = table("workers", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: t.varchar({length: 255}).notNull(),
  phoneNo : t.varchar({length: 255}).notNull(),
  email: t.varchar({length: 255}).notNull().unique(),
  zoneId: uuid("zone_id").notNull().references(() => zones.id),
  platform: platformEnum().notNull().default("swiggy"),
  vehicleType: vehicleType().notNull().default("bike"),
  status : workerStatus().notNull().default("active"),
  ...timestamps
})

export const identityVerifications = table("identity_verifications", {
  id: uuid("id").primaryKey().defaultRandom(),
  workerId: uuid("worker_id").notNull().references(() => workers.id),
  aadhaarNumber: t.varchar({length: 255}).notNull(),
  panNumber: t.varchar({length: 255}).notNull(),
  faceVerified: t.boolean().default(false),
  deviceVerified: t.boolean().default(false),
  verificationStatus : verificationStatus().default("pending"),
  verifiedAt: t.timestamp(),
  expiredAt: t.timestamp(),
  attempts: t.integer().default(0),
})

export const workerAuth = table("worker_auth", {
  id : uuid("id").primaryKey().defaultRandom(),
  workerId: uuid("worker_id").notNull().references(() => workers.id),
  passwordHash: t.text().notNull(),
  salt: t.text().notNull(),
  ...timestamps
})

export const workerSubscriptions = table("worker_subscriptions", {
  id: uuid("id").primaryKey().defaultRandom(),
  workerId: uuid("worker_id").notNull().references(() => workers.id),
  tierId: uuid("tier_id").notNull().references(() => policyTiers.id),
  planId: uuid("plan_id").notNull().references(() => policyTiers.id),
  startDate: t.date().notNull(),
  endDate: t.date().notNull(),
  lastPaymentDate: t.date(),
  nextDueDate: t.date(),
  isAutoRenew: t.boolean().default(false),
  ...timestamps
})

export const policyRecords = table("policy_records", {
  id: uuid("id").primaryKey().defaultRandom(),
  poolId: uuid("pool_id"),
  subscriptionId: uuid("subscription_id").notNull().references(() => workerSubscriptions.id),
  weeklyPremium: t.doublePrecision().notNull(),
  startDate: t.date().notNull(),
  endDate: t.date().notNull(),
  maxClaimsPerPeriod: t.integer().notNull(),
  maxPayoutPerPeriod: t.doublePrecision().notNull(),
  claimsMade: t.integer().default(0),
  totalPayoutGiven: t.doublePrecision().default(0),
  ...timestamps
})
