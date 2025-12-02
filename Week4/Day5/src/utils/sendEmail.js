import { transporter } from "./mailTransporter.js";

export async function sendEmail({ to, subject, body }) {
  return transporter.sendMail({
    from: "manyas.hestabit@gmail.com",
    to,
    subject,
    html: body,
  });
}
