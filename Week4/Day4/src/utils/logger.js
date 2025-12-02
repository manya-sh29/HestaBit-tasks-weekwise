import winston from "winston";

// Simple format: show time + level + message
const logFormat = winston.format.printf((info) => {
  return `[${info.timestamp}] ${info.level.toUpperCase()}: ${info.message}`;
});

// Create logger
const logger = winston.createLogger({
  level: "info", // log info, warn, error
  format: winston.format.combine(
    winston.format.timestamp(),
    logFormat
  ),
  transports: [
    //Show logs in console (useful for development)
    new winston.transports.Console(),

    //Save only errors in error.log
    new winston.transports.File({
      filename: "logs/error.log",
      level: "error",
    }),

    //Save ALL logs (info + error) in combined.log
    new winston.transports.File({
      filename: "logs/combined.log",
    }),
  ],
});

export default logger;
