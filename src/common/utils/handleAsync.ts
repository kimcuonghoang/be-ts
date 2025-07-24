import { Request, Response, NextFunction } from "express";
import { createError } from "./error";

const handleAsync =
  (fn: (req: Request, res: Response, next: NextFunction) => Promise<any>) =>
  (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch((error) => {
      next(
        createError(
          error.message || "Internal Server Error",
          error.statusCode || 500
        )
      );
      console.error("Async error:", error);
    });
  };

export default handleAsync;
