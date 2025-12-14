const express = require("express");
const os = require("os");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send(
    `Express app running inside Docker
User: ${os.userInfo().username}
Platform: ${os.platform()}`
  );
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
