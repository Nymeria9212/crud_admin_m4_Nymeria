import "dotenv/config";
import { TLogin, TUser } from "../interfaces/users.interfaces";
import jwt, { sign } from "jsonwebtoken";
import { Request, Response } from "express";
import { Console } from "console";

const loginUserService = async (
  req: Request,
  res: Response
): Promise<TLogin> => {
  const user: TUser = res.locals.user;

  const token = sign({ admin: user.admin }, String(process.env.SECRET_KEY!), {
    expiresIn: process.env.EXPIRES_IN,
    subject: String(user.id),
  });
  return { token };
};
export default loginUserService;
