import express from "express";
import cors from "cors";

// Routes
import productRoutes from "./src/routes/product.routes.js";

// Error Middleware
import errorHandler from "./src/middlewares/error.middleware.js";

const app = express();

// ------------------ Middlewares ------------------
app.use(express.json());
app.use(cors());

// ------------------ Routes ------------------
app.use("/api", productRoutes);

// ------------------ Global Error Handler ------------------
// This must always be the LAST middleware
app.use(errorHandler);

export default app;
