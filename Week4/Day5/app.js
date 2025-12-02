import express from "express";
import { tracingMiddleware } from "./src/utils/tracing.js";
import emailRoutes from "./src/routes/email.routes.js";

const app = express();
app.use(express.json());
app.use(tracingMiddleware);

app.use("/api/v1/email", emailRoutes);

export default app;
