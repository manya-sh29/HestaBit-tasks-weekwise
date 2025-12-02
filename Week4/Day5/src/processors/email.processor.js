import { sendEmail } from "../utils/sendEmail.js";

export default async function emailProcessor(job) {
  console.log("Processing email job:", job.data);

  await sendEmail({
    to: job.data.to,
    subject: job.data.subject,
    body: job.data.body,
  });

  return { status: "Email sent successfully!" };
}
