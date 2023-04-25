import { NextFunction, Request, Response } from "express";
import { TUserReqPost } from "../interfaces/users.interfaces";
import { AppError } from "../errors";
import * as bcrypt from "bcryptjs";

const validatePassword = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const userData: TUserReqPost = req.body;

  const user = res.locals.user;
  const passwordValid: boolean = await bcrypt.compare(
    userData.password,
    user.password
  );

  if (!passwordValid) {
    throw new AppError("Wrong email/password", 401);
  }

  return next();
};

export default validatePassword;
