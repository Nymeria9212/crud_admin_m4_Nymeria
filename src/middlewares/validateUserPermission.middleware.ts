import { NextFunction, Request, Response } from "express";
import { TUser } from "../interfaces/users.interfaces";
import { AppError } from "../errors";

const validatePermission = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const admin = res.locals.admin;
  const user: TUser = res.locals.user;
  if (!admin && user.admin === true) {
    throw new AppError("Insufficient Permission", 403);
  }

  return next();
};

export default validatePermission;
