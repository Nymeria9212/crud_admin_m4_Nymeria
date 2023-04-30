import { QueryConfig, QueryResult } from "pg";
import { AppError } from "../errors";
import { NextFunction, Request, Response } from "express";
import {
  TUser,
  TUserLoginReq,
  TUserReqPost,
} from "../interfaces/users.interfaces";
import { client } from "../database";
import { userSchemaReqLogin } from "../schemas/users.schema";

const ensureUserLogin = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const userData: TUserLoginReq = userSchemaReqLogin.parse(req.body);

  const queryString: string = `
    SELECT *
    FROM
        users
    WHERE "email"= $1;
`;
  const queryConfig: QueryConfig = {
    text: queryString,
    values: [userData.email],
  };

  const queryResult: QueryResult<TUser> = await client.query(queryConfig);
  const user = queryResult.rows[0];

  res.locals.user = user;
  if (queryResult.rowCount === 0) {
    throw new AppError("Wrong email/password", 401);
  }

  return next();
};

export default ensureUserLogin;
