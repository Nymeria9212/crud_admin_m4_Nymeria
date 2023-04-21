import { NextFunction, Request, Response } from "express";
import { ZodError, ZodTypeAny } from "zod";

const validateBody =
  (schema: ZodTypeAny) =>
  (req: Request, res: Response, next: NextFunction): Response | void => {
    try {
      const validateBody = schema.parse(req.body);

      req.body = validateBody;

      return next();
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(400).json({ message: error.flatten().fieldErrors });
      }
      console.error(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  };
export default validateBody;
