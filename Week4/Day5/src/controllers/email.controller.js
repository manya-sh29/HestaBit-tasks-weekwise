import { emailQueue } from "../queues/emailQueue.js";
export const sendEmail = async (req, res) => {
  try {
    const { email } = req.body;
    await emailQueue.add("sendEmail", { email });
    res.json({ message: "Email job added to queue" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to add email job" });
  }
};
