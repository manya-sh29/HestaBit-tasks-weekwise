import { Worker } from "bullmq";
import { redisConnection } from "../utils/redis.js";
import emailProcessor from "../processors/email.processor.js";

export const emailWorker = new Worker(
  "emailQueue",            // Queue name EXACT match
  emailProcessor,          // Processor function
  { connection: redisConnection }
);

emailWorker.on("completed", (job) => {
  console.log(`Email job completed: ${job.id}`);
});

emailWorker.on("failed", (job, err) => {
  console.log(`Email job failed: ${job.id}, Error: ${err.message}`);
});
