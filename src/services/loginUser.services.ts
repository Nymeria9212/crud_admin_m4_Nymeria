import { QueryConfig, QueryResult } from "pg";
import "dotenv/config";
import { TLogin, TUser, TUserLoginReq } from "../interfaces/users.interfaces";
import { client } from "../database";
import { AppError } from "../errors";
import * as bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const loginUserService = async (userData: TUserLoginReq): Promise<TLogin> => {
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
  if (queryResult.rowCount === 0) {
    throw new AppError("Wrong email/password", 401);
  }

  const passwordValid: boolean = await bcrypt.compare(
    userData.password,
    user.password
  );

  if (!passwordValid) {
    throw new AppError("Wrong email/password", 401);
  }

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
