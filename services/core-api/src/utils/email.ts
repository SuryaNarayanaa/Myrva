import nodemailer from "nodemailer";
import { EMAIL_FROM, EMAIL_HOST, EMAIL_PASS, EMAIL_PORT, EMAIL_USER } from "../config/env";

const transporter = nodemailer.createTransport({
  host: EMAIL_HOST,
  port: EMAIL_PORT,
  secure: EMAIL_PORT === 465,
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS,
  },
});

export const sendOtpEmail = async (to: string, otp: string) => {
  const mailOptions = {
    from: EMAIL_FROM,
    to,
    subject: "Your OTP for Myrva",
    text: `Your OTP is ${otp}`,
    html: `<b>Your OTP is ${otp}</b>`,
  };

  await transporter.sendMail(mailOptions);
};
