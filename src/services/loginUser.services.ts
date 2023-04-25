import { QueryConfig, QueryResult } from "pg";
import "dotenv/config";
import { TLogin } from "../interfaces/users.interfaces";

import jwt from "jsonwebtoken";
import { Request, Response } from "express";

const loginUserService = async (
  req: Request,
  res: Response
): Promise<TLogin> => {
  const user = res.locals.user;
  const token: string = jwt.sign(
    { admin: user.admin },
    process.env.SECRET_KEY!,
    {
      expiresIn: "1d",
      subject: user.id.toString(),
    }
  );
  return { token };
};
export default loginUserService;
