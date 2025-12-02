import app from "./app.js";
import { redisConnection } from "./src/utils/redis.js";

redisConnection.ping().then(() => console.log("Redis connected!"));

const PORT = process.env.PORT || 5008;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
