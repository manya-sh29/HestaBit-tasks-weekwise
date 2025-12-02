export const emailJob = {
  name: "sendEmail",
  data: {
    to: "manyas.hestabit@gmail.com",                     
    subject: "Welcome to HestaBit",
    body: "This is a sample notification from HestaBit.", 
  },
  opts: {
    attempts: 3,  
    backoff: { type: "exponential", delay: 5000 }, 
  },
};
