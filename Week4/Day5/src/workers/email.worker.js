import { Worker } from "bullmq";
import { redisConnection } from "../utils/redis.js";
import logger from "../utils/logger.js";
import nodemailer from "nodemailer";   // ⭐ ADDED

// ⭐ SMTP Transporter
const transporter = nodemailer.createTransport({
  service: "gmail", // ⭐ Using Gmail
  auth: {
    user: "yourgmail@gmail.com", // ⭐ Your Gmail
    pass: "your-app-password",   // ⭐ App password (not normal password)
  },
});

const worker = new Worker(
  "email-queue",
  async (job) => {
    logger.info(`Processing email job: ${job.id}`);

    // ⭐ EMAIL SEND LOGIC
    const mailOptions = {
      from: "yourgmail@gmail.com",
      to: job.data.to,        
      subject: job.data.subject,
      text: job.data.body,
    };

    await transporter.sendMail(mailOptions); 
    console.log("Email sent to:", job.data.to);
  },
  { connection: redisConnection }
);

worker.on("completed", (job) => {
  logger.info(`Job completed: ${job.id}`);
});

worker.on("failed", (job, err) => {
  logger.error(`Job failed: ${job.id} Error: ${err.message}`);
});
