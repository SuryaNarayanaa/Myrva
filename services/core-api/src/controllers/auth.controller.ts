import { Request, Response } from "express";
import { db } from "../config/db";
import { workers } from "../db/schemas/worker.schema";
import { eq } from "drizzle-orm";
import { workerOtps } from "../db/schemas/otp.schema";
import { sendOtpEmail } from "../utils/email";
import { generateToken } from "../utils/auth.utils";
import { createInsertSchema } from "drizzle-zod";
import { asyncHandler } from "../utils";
import { ResourceConflict } from "../errors";

const registerSchema = createInsertSchema(workers);

export const register = asyncHandler("Register User" , async(req: Request, res: Response) => {
    const validationResult = registerSchema.safeParse(req.body);
    if (!validationResult.success) {
        return res.status(400).json({ errors: validationResult.error.flatten() });
    }

    const { email } = validationResult.data;

    const existingWorker = await db.query.workers.findFirst({
        where: eq(workers.email, email),
    });

    if (existingWorker) {
        throw new ResourceConflict("Worker with this email already exists")
    }

    const newWorker = await db.insert(workers).values(validationResult.data).returning();

    return res.status(201).json(newWorker[0]);
});

export const login = async (req: Request, res: Response) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ message: "Email is required" });
    }

    const worker = await db.query.workers.findFirst({
        where: eq(workers.email, email),
    });

    if (!worker) {
        return res.status(404).json({ message: "Worker not found" });
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const expiresAt = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes

    await db.insert(workerOtps).values({
        workerId: worker.id,
        otp,
        expiresAt,
    }).onConflictDoUpdate({
        target: workerOtps.workerId,
        set: {
            otp,
            expiresAt,
        }
    });

    try {
        await sendOtpEmail(worker.email, otp);
        return res.status(200).json({ message: "OTP sent to your email" });
    } catch (error) {
        console.error("Error sending email:", error);
        return res.status(500).json({ message: "Failed to send OTP email" });
    }
};

export const verifyOtp = async (req: Request, res: Response) => {
    const { email, otp } = req.body;

    if (!email || !otp) {
        return res.status(400).json({ message: "Email and OTP are required" });
    }

    const worker = await db.query.workers.findFirst({
        where: eq(workers.email, email),
    });

    if (!worker) {
        return res.status(404).json({ message: "Worker not found" });
    }

    const workerOtp = await db.query.workerOtps.findFirst({
        where: (workerOtps, { and, eq }) => and(
            eq(workerOtps.workerId, worker.id),
            eq(workerOtps.otp, otp)
        ),
        orderBy: (workerOtps, { desc }) => [desc(workerOtps.expiresAt)],
    });

    if (!workerOtp || workerOtp.expiresAt < new Date()) {
        return res.status(400).json({ message: "Invalid or expired OTP" });
    }

    await db.delete(workerOtps).where(eq(workerOtps.id, workerOtp.id));

    const token = generateToken({ id: worker.id });

    return res.status(200).json({ token });
};
