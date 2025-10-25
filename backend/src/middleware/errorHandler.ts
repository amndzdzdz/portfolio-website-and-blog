import { Request, Response, NextFunction } from "express";
const StatusCode = require("../config/statusCodes");

const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = res.statusCode || 500;

  switch (statusCode) {
    case StatusCode.NOT_FOUND:
      res.status(statusCode).json({
        title: "Not Found",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case StatusCode.BAD_REQUEST:
      res.status(statusCode).json({
        title: "Bad Request",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case StatusCode.UNAUTHORIZED:
      res.status(statusCode).json({
        title: "Not authorized",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case StatusCode.FORBIDDEN:
      res.status(statusCode).json({
        title: "Forbidden",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case StatusCode.TIME_OUT:
      res.status(statusCode).json({
        title: "Time out",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    default:
      res.status(500).json({
        title: "An unexpected error occured",
        message: err.message,
        stackTrace: err.stack,
      });
  }
};

module.exports = errorHandler;
