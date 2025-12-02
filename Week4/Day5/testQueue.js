import { emailQueue } from "./src/queues/emailQueue.js";

emailQueue.add("sendEmailTest", { email: "test@example.com" })
  .then(() => console.log("Job added"))
  .catch(err => console.error("Queue error:", err));
