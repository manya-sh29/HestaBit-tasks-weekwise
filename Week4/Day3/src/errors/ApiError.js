// Simple custom error class for clean error handling
class ApiError extends Error {
  constructor(message, statusCode) {
    super(message);                // set the error message
    this.statusCode = statusCode;  // store the HTTP status code
    this.isOperational = true;     // tells app this is a known/expected error
  }
}

export default ApiError;
