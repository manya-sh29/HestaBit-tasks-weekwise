import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "manyas.hestabit@gmail.com",      
    pass: "akpdkvwhudfskmpb",  
  },
});
