import express from "express";

const app = express();
const PORT = 5000;
const INSTANCE_ID = process.env.HOSTNAME || "unknown";

app.get("/api", (req, res) => {
  res.json({
    message: "Response from backend",
    instance: INSTANCE_ID,
  });
});

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
