import { QueryConfig, QueryResult } from "pg";
import { AppError } from "../errors";
import { NextFunction, Request, Response } from "express";
import { TUser, TUserReqPost } from "../interfaces/users.interfaces";
import { client } from "../database";

const ensureUserLogin = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const userData: TUserReqPost = req.body;

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

  if ((user.active = false)) {
    throw new AppError("Wrong email/password", 401);
  }

  return next();
};

export default ensureUserLogin;
