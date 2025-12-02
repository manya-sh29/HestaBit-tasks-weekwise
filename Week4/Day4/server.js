// server.js
import dotenv from "dotenv";
import createApp from "./app.js";
import connectDB from "./src/config/db.js";

dotenv.config();

const app = createApp();
const PORT = process.env.PORT || 5000;

// --------------------------
// Connect to Database
// --------------------------
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`✔ Server running at http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ Failed to connect to DB", err);
  });
