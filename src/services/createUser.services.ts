import format from "pg-format";
import { TUser, TUserReq, TUserReqPost } from "../interfaces/users.interfaces";
import { QueryResult } from "pg";
import client from "../database/config";
import { hash } from "bcryptjs";

const createUserService = async (userData: TUserReqPost) => {
  const hashedPassword = await hash(userData.password, 10);
  userData.password = hashedPassword;

  const queryString: string = format(
    `
      INSERT INTO
          users
          (%I)
      VALUES
          (%L)
          RETURNING "id", "name", "email";
  `,
    Object.keys(userData),
    Object.values(userData)
  );

  const queryResult: QueryResult<TUser> = await client.query(queryString);

  return queryResult.rows[0];
};

export default createUserService;
