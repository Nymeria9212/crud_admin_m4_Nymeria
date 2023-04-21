import { QueryConfig, QueryResult } from "pg";
import { TUser, TUserLogin } from "../interfaces/users.interfaces";
import { client } from "../database";
import { AppError } from "../errors";
import { compareSync } from "bcryptjs";

const loginUserService = async (userData: TUserLogin) => {
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
  if (user === undefined) {
    throw new AppError("Wrong email/password", 401);
  }

  const passwordValid: boolean = compareSync(userData.password, user.password);

  if (!passwordValid) {
    throw new AppError("Wrong email/password", 401);
  }
  return user;
};
export default loginUserService;
