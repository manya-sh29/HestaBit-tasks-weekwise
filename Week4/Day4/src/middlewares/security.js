import helmet from "helmet";
import cors from "cors";
import rateLimit from "express-rate-limit";
import express from "express";
import { hppProtection } from "./hppProtection.js";


export const securityMiddleware = (app) => {
  // Security headers
  app.use(helmet());

  // CORS Policy
  const corsOptions = {
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  };
  app.use(cors(corsOptions));

  // Rate Limiting
  const limiter = rateLimit({
    windowMs: 10 * 60 * 1000, // 10 minutes
    max: 200,
    message: {
      status: 429,
      message: "Too many requests. Try again later.",
    },
  });
  app.use(limiter);

  // Payload Limit
  app.use(
    express.json({
      limit: "10kb",
    })
  );

  app.use(hppProtection());   


  console.log("✔ Security middlewares applied");
};
