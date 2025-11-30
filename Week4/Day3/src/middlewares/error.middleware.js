// ---------------- Custom Typed Error Class ----------------
class AppError extends Error {
  constructor(message, statusCode = 500, type = "GENERAL") {
    super(message);
    this.statusCode = statusCode;   // ✔ Error Code
    this.type = type;               // ✔ Type of Error
    this.isOperational = true;      // Helps identify custom vs internal errors
  }
}

// ---------------- Centralized Error Middleware ----------------
const errorHandler = (err, req, res, next) => {
  const status = err.statusCode || 500;
  const errorType = err.type || "INTERNAL";

  return res.status(status).json({
    success: false,
    message: err.message || "Internal Server Error",
    code: status,                   // ✔ consistent error code
    type: errorType,                // ✔ typed error
    timestamp: new Date(),          // ✔ uniform format
    path: req.originalUrl,          // ✔ centralized handling
  });
};

export { AppError };
export default errorHandler;
