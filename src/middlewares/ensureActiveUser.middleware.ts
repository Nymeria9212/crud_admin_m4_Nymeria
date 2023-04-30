import { Request, Response } from "express";
import { NextFunction } from "express-serve-static-core";
import { AppError } from "../errors";

const ensureActiveUser = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const user = res.locals.user;
  if ((user.active = false)) {
    throw new AppError("Wrong email/password", 401);
  }
  return next();
};
export default ensureActiveUser;
