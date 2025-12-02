import app from "./app.js";
import { redisConnection } from "./src/utils/redis.js";
import { Worker } from "bullmq";
import emailProcessor from "./src/processors/email.processor.js";

async function startServer() {
  // Check Redis
  await redisConnection.ping();
  console.log("Redis connected!");

  // Register Worker (VERY IMPORTANT)
  new Worker("emailQueue", emailProcessor, {
    connection: redisConnection,
  });
  console.log("Email Worker started!");

  const PORT = process.env.PORT || 5008;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer();
