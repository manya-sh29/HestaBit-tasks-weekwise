import express from "express";
import cors from "cors";
import logger from "../utils/logger.js";

import testRoute from "../routes/testroute.js";
import testRoute1 from "../routes/testroute1.js";
import testRoute2 from "../routes/testroute2.js";
import testRoute3 from "../routes/testroute3.js";

export default function createApp() {
  const app = express();

  // Load Middlewares
  app.use(express.json());
  app.use(cors());
  logger.info("Middlewares loaded");

  // Load Routes
  app.use("/api/tes", testRoute);
  app.use("/api/tes1", testRoute1);
  app.use("/api/tes2", testRoute2);
  app.use("/api/tes3", testRoute3);
  logger.info("Routes mounted");

  // -----------------------------
  // Count total endpoints
  // -----------------------------
  const routeFiles = [testRoute, testRoute1, testRoute2, testRoute3];
  let totalEndpoints = 0;

  routeFiles.forEach((r) => {
    const routes = r.stack.filter((s) => s.route); // only actual routes
    totalEndpoints += routes.length;
  });

  logger.info(`✔ Routes mounted: ${totalEndpoints} endpoints`);

  return app;
}
