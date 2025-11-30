import express from "express";
import cors from "cors";
import logger from "../utils/logger.js";

// Import Routes
import userRoutes from "../routes/user.routes.js";
import productRoutes from "../routes/product.routes.js";

export default function createApp() {
  const app = express();

  // ---------- Built-in Middlewares ----------
  app.use(express.json()); // Parse JSON request body
  app.use(cors());         // Enable CORS
  logger.info("Middlewares loaded");

  // ---------- Custom Logger Middleware (Optional) ----------
  app.use((req, res, next) => {
    logger.info(`${req.method} ${req.url}`);
    next(); // Always call next() to move to next middleware / route
  });

  // ---------- Routes ----------
  app.use("/api/users", userRoutes);       // GET http://localhost:5000/api/users
  app.use("/api/products", productRoutes); // GET http://localhost:5000/api/products
  logger.info("All routes mounted");

  // ---------- Default Route ----------
  app.get("/", (req, res) => {
    res.send("API is running...");
  });

  // ---------- Global Error-handling Middleware ----------
  app.use((err, req, res, next) => {
    logger.error("Unhandled error: " + err.message);
    res.status(500).json({
      success: false,
      message: err.message || "Something went wrong",
    });
  });

  return app;
}
