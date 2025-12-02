// src/routes/email.routes.js
import { Router } from "express";
import { addEmailJob } from "../queues/emailQueue.js";

const router = Router();

router.get("/send", async (req, res) => {
  await addEmailJob();       // Queue me job chala jayega
  res.send("Email job added!");
});

export default router;
