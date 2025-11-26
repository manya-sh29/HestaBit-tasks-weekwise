import express from "express";
import cors from "cors";
import logger from "../utils/logger.js";
import testRoute from "../routes/testroute.js"

export default function createApp() {
  const app = express();

  // Load Middlewares
  app.use(express.json());
  app.use(cors());
  logger.info("Middlewares loaded");

  // Load Routes
  app.use("/api", testRoute);
  logger.info("Routes mounted");

  return app;
}
