// Load environment variables based on NODE_ENV
import dotenv from "dotenv";
dotenv.config({ path: `.env.${process.env.NODE_ENV || "local"}` });

// Import logger
import logger from "./src/utils/logger.js";

// Import loaders
import connectDB from "./src/loaders/db.js";
import createApp from "./src/loaders/app.js";

// Start the server inside an async function
const startServer = async () => {
  try {
    // 1. Connect to Database
    await connectDB();
    logger.info("Database connected successfully");

    // 2. Load Express app
    const app = createApp();
    logger.info("Express App initialized");

    // 3. Start server
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      logger.info(`Server started on port ${PORT}`);
    });

  } catch (error) {
    logger.error("Server failed to start: " + error.message);
    process.exit(1);
  }
};

startServer();
