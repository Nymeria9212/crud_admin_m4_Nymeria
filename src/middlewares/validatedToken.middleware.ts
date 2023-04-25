import { NextFunction, Request, Response } from "express";

import jwt from "jsonwebtoken";
import { AppError } from "../errors";

const validateTokenMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  let token = req.headers.authorization;

  if (!token) {
    throw new AppError("Token is missing", 401);
  }
  token = token.split(" ")[1];
  jwt.verify(token, process.env.SECRET_KEY!, (err: any, decoded: any) => {
    if (err) {
      throw new AppError(err.message, 401);
    }
    res.locals.admin = decoded.admin;
    res.locals.idUser = decoded.id;
  });

  return next();
};
export default validateTokenMiddleware;
