import express from "express";
import logger from "./src/utils/logger.js";    
import { validate } from "./src/middlewares/validate.js"; // zod validator middleware (optional)

// Day-4 security middlewares
import { securityMiddleware } from "./src/middlewares/security.js";

// Import Routes
import userRoutes from "./src/routes/user.route.js";
import productRoutes from "./src/routes/product.route.js";

export default function createApp() {
  const app = express();

  // -------- Global Middlewares --------
  app.use(express.json({ limit: "20kb" }));
  app.use(express.urlencoded({ extended: true, limit: "20kb" }));

  // Apply all security middlewares
  securityMiddleware(app);

  logger.info("Middlewares loaded");


  app.get("/test-hpp", (req, res) => res.json(req.query)); 

  // -------- Routes --------
  app.use("/api/users", userRoutes);
  app.use("/api/products", productRoutes);
  logger.info("Routes mounted");

  // -------- Test Route --------
  app.get("/", (req, res) => {
    res.send("API is working");
  });

  return app;
}
