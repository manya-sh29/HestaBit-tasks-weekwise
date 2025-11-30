// server.js
import mongoose from "mongoose";
import createApp from "./src/loaders/app.js";

const app = createApp();
const PORT = 5000;

// MongoDB connection
const DB_URI = "mongodb://127.0.0.1:27017/mydb2";

mongoose.connect(DB_URI)  // no options needed in Mongoose 7+
  .then(() => {
    console.log("MongoDB connected");

    // Start server only after DB is connected
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error("MongoDB connection error:", err);
  });
