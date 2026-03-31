CREATE TYPE "public"."claim_status" AS ENUM('initiated', 'pending', 'approved', 'rejected', 'paid_out');--> statement-breakpoint
CREATE TYPE "public"."fraud_status" AS ENUM('pending', 'cleared', 'flagged');--> statement-breakpoint
CREATE TYPE "public"."payout_method" AS ENUM('bank_transfer', 'upi', 'wallet');--> statement-breakpoint
CREATE TYPE "public"."payout_status" AS ENUM('pending', 'processing', 'completed', 'failed');--> statement-breakpoint
CREATE TYPE "public"."score_type" AS ENUM('weekly', 'onboarding', 'claim-time');--> statement-breakpoint
CREATE TYPE "public"."trigger_event_status" AS ENUM('detected', 'validated', 'rejected');--> statement-breakpoint
CREATE TYPE "public"."platform_type" AS ENUM('swiggy', 'zomato', 'blinkit', 'dunzo', 'other');--> statement-breakpoint
CREATE TYPE "public"."vehicle_type" AS ENUM('bike', 'cycle', 'scooter');--> statement-breakpoint
CREATE TYPE "public"."worker_verification_status" AS ENUM('pending', 'verified', 'rejected');--> statement-breakpoint
CREATE TYPE "public"."worker_status" AS ENUM('active', 'inactive', 'suspended', 'banned');--> statement-breakpoint
CREATE TABLE "claims" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"record_id" uuid NOT NULL,
	"subscription_id" uuid NOT NULL,
	"trigger_event_id" uuid,
	"expected_income_loss" double precision NOT NULL,
	"coverage_amount" double precision NOT NULL,
	"payout_amount" double precision NOT NULL,
	"status" "claim_status" DEFAULT 'initiated' NOT NULL,
	"claim_reason" text NOT NULL,
	"fraud_score" double precision DEFAULT 0,
	"fraud_status" "fraud_status" DEFAULT 'pending' NOT NULL,
	"auto_approved" boolean DEFAULT false,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"deleted_at" timestamp
);
--> statement-breakpoint
CREATE TABLE "payouts" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"claim_id" uuid NOT NULL,
	"subscription_id" uuid NOT NULL,
	"pool_id" uuid,
	"amount" double precision NOT NULL,
	"payment_method" "payout_method" DEFAULT 'upi' NOT NULL,
	"status" "payout_status" DEFAULT 'pending' NOT NULL,
	"transaction_id" varchar(255),
	"processed_at" timestamp,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"deleted_at" timestamp
);
--> statement-breakpoint
CREATE TABLE "worker_otps" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"worker_id" uuid NOT NULL,
	"otp" varchar(6) NOT NULL,
	"expires_at" timestamp with time zone NOT NULL
);
--> statement-breakpoint
CREATE TABLE "policy_plans" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar(255) NOT NULL,
	"description" text NOT NULL,
	"duration_days" integer NOT NULL,
	"grace_period_days" integer NOT NULL,
	"max_cool_down_days" integer NOT NULL,
	"is_active" boolean DEFAULT false,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"deleted_at" timestamp
);
--> statement-breakpoint
CREATE TABLE "policy_tiers" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"plan_id" uuid NOT NULL,
	"tier_name" varchar(255) NOT NULL,
	"description" text NOT NULL,
	"default_coverage_percentage" double precision NOT NULL,
	"default_weekly_premium" double precision NOT NULL,
	"is_active" boolean DEFAULT false,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"deleted_at" timestamp
);
--> statement-breakpoint
CREATE TABLE "risk_scores" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"worker_id" uuid NOT NULL,
	"risk_score" double precision NOT NULL,
	"disruption_forecast" double precision NOT NULL,
	"score_type" "score_type" NOT NULL,
	"model_version" text NOT NULL,
	"calculated_at" timestamp DEFAULT now() NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"deleted_at" timestamp
);
--> statement-breakpoint
CREATE TABLE "tier_event_coverage" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"tier_id" uuid NOT NULL,
	"trigger_type_id" uuid NOT NULL,
	"min_threshold" double precision NOT NULL,
	"max_threshold" double precision NOT NULL,
	"payout_percentage" double precision NOT NULL,
	"max_payout_amount" double precision,
	"cooldown_hours" integer DEFAULT 0,
	"is_active" boolean DEFAULT true
);
--> statement-breakpoint
CREATE TABLE "trigger_events" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"trigger_type_id" uuid NOT NULL,
	"zone_id" uuid,
	"event_value" jsonb,
	"severity_score" double precision DEFAULT 0,
	"source" varchar(255),
	"start_time" timestamp NOT NULL,
	"end_time" timestamp,
	"status" "trigger_event_status" DEFAULT 'detected' NOT NULL,
	"detected_at" timestamp DEFAULT now() NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"deleted_at" timestamp
);
--> statement-breakpoint
CREATE TABLE "trigger_types" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"trigger_name" varchar(255) NOT NULL,
	"description" text NOT NULL,
	"is_active" boolean DEFAULT true
);
--> statement-breakpoint
CREATE TABLE "identity_verifications" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"worker_id" uuid NOT NULL,
	"aadhaar_number" varchar(255) NOT NULL,
	"pan_number" varchar(255) NOT NULL,
	"face_verified" boolean DEFAULT false,
	"device_verified" boolean DEFAULT false,
	"verification_status" "worker_verification_status" DEFAULT 'pending',
	"verified_at" timestamp,
	"expired_at" timestamp,
	"attempts" integer DEFAULT 0
);
--> statement-breakpoint
CREATE TABLE "policy_records" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"pool_id" uuid,
	"subscription_id" uuid NOT NULL,
	"weekly_premium" double precision NOT NULL,
	"start_date" date NOT NULL,
	"end_date" date NOT NULL,
	"max_claims_per_period" integer NOT NULL,
	"max_payout_per_period" double precision NOT NULL,
	"claims_made" integer DEFAULT 0,
	"total_payout_given" double precision DEFAULT 0,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"deleted_at" timestamp
);
--> statement-breakpoint
CREATE TABLE "worker_auth" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"worker_id" uuid NOT NULL,
	"password_hash" text NOT NULL,
	"salt" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"deleted_at" timestamp
);
--> statement-breakpoint
CREATE TABLE "worker_subscriptions" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"worker_id" uuid NOT NULL,
	"tier_id" uuid NOT NULL,
	"plan_id" uuid NOT NULL,
	"start_date" date NOT NULL,
	"end_date" date NOT NULL,
	"last_payment_date" date,
	"next_due_date" date,
	"is_auto_renew" boolean DEFAULT false,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"deleted_at" timestamp
);
--> statement-breakpoint
CREATE TABLE "workers" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar(255) NOT NULL,
	"phone_no" varchar(255) NOT NULL,
	"email" varchar(255) NOT NULL,
	"zone_id" uuid NOT NULL,
	"platform" "platform_type" DEFAULT 'swiggy' NOT NULL,
	"vehicle_type" "vehicle_type" DEFAULT 'bike' NOT NULL,
	"status" "worker_status" DEFAULT 'active' NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"deleted_at" timestamp,
	CONSTRAINT "workers_email_unique" UNIQUE("email")
);
--> statement-breakpoint
CREATE TABLE "zones" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"zone_name" varchar(255) NOT NULL,
	"city" varchar(255) NOT NULL,
	"state" varchar(255) NOT NULL,
	"is_active" boolean DEFAULT false
);
--> statement-breakpoint
ALTER TABLE "claims" ADD CONSTRAINT "claims_record_id_policy_records_id_fk" FOREIGN KEY ("record_id") REFERENCES "public"."policy_records"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "claims" ADD CONSTRAINT "claims_subscription_id_worker_subscriptions_id_fk" FOREIGN KEY ("subscription_id") REFERENCES "public"."worker_subscriptions"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "payouts" ADD CONSTRAINT "payouts_claim_id_claims_id_fk" FOREIGN KEY ("claim_id") REFERENCES "public"."claims"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "payouts" ADD CONSTRAINT "payouts_subscription_id_worker_subscriptions_id_fk" FOREIGN KEY ("subscription_id") REFERENCES "public"."worker_subscriptions"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "worker_otps" ADD CONSTRAINT "worker_otps_worker_id_workers_id_fk" FOREIGN KEY ("worker_id") REFERENCES "public"."workers"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "policy_tiers" ADD CONSTRAINT "policy_tiers_plan_id_policy_plans_id_fk" FOREIGN KEY ("plan_id") REFERENCES "public"."policy_plans"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "risk_scores" ADD CONSTRAINT "risk_scores_worker_id_workers_id_fk" FOREIGN KEY ("worker_id") REFERENCES "public"."workers"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "tier_event_coverage" ADD CONSTRAINT "tier_event_coverage_tier_id_policy_tiers_id_fk" FOREIGN KEY ("tier_id") REFERENCES "public"."policy_tiers"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "tier_event_coverage" ADD CONSTRAINT "tier_event_coverage_trigger_type_id_trigger_types_id_fk" FOREIGN KEY ("trigger_type_id") REFERENCES "public"."trigger_types"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "trigger_events" ADD CONSTRAINT "trigger_events_trigger_type_id_trigger_types_id_fk" FOREIGN KEY ("trigger_type_id") REFERENCES "public"."trigger_types"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "trigger_events" ADD CONSTRAINT "trigger_events_zone_id_zones_id_fk" FOREIGN KEY ("zone_id") REFERENCES "public"."zones"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "identity_verifications" ADD CONSTRAINT "identity_verifications_worker_id_workers_id_fk" FOREIGN KEY ("worker_id") REFERENCES "public"."workers"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "policy_records" ADD CONSTRAINT "policy_records_subscription_id_worker_subscriptions_id_fk" FOREIGN KEY ("subscription_id") REFERENCES "public"."worker_subscriptions"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "worker_auth" ADD CONSTRAINT "worker_auth_worker_id_workers_id_fk" FOREIGN KEY ("worker_id") REFERENCES "public"."workers"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "worker_subscriptions" ADD CONSTRAINT "worker_subscriptions_worker_id_workers_id_fk" FOREIGN KEY ("worker_id") REFERENCES "public"."workers"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "worker_subscriptions" ADD CONSTRAINT "worker_subscriptions_tier_id_policy_tiers_id_fk" FOREIGN KEY ("tier_id") REFERENCES "public"."policy_tiers"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "worker_subscriptions" ADD CONSTRAINT "worker_subscriptions_plan_id_policy_tiers_id_fk" FOREIGN KEY ("plan_id") REFERENCES "public"."policy_tiers"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "workers" ADD CONSTRAINT "workers_zone_id_zones_id_fk" FOREIGN KEY ("zone_id") REFERENCES "public"."zones"("id") ON DELETE no action ON UPDATE no action;