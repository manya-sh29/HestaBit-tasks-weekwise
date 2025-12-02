import { Queue } from "bullmq";
import { emailJob } from "../jobs/email.job.js";
import { redisConnection } from "../utils/redis.js";

export const emailQueue = new Queue("emailQueue", {
  connection: redisConnection,
});

export const addEmailJob = () => {
  return emailQueue.add(emailJob.name, emailJob.data, emailJob.opts);
};
