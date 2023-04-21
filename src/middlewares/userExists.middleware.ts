import { NextFunction, Request, Response } from "express";
import { QueryConfig, QueryResult } from "pg";
import { TUser } from "../interfaces/users.interfaces";
import { client } from "../database";
import { AppError } from "../errors";

const userExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const id: number = parseInt(req.params.id);

  const queryString: string = `
        SELECT *FROM
        users
        WHERE "id"=$1;
    `;

  const queryConfig: QueryConfig = {
    text: queryString,
    values: [id],
  };
  const queryResult: QueryResult<TUser> = await client.query(queryConfig);

  const userCount = queryResult.rowCount;
  console.log(userCount);
  if (userCount === 0) {
    throw new AppError("User not found", 404);
  }

  return next();
};

export { userExistsMiddleware };
