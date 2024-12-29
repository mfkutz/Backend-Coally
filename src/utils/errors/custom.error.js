export class CustomError {
  static newError({ message, statusCode }, customMessage = null, details = null) {
    const error = new Error(customMessage || message);
    error.statusCode = statusCode;
    if (details) error.details = details;
    throw error;
  }
}
