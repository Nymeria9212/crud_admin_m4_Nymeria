import format from "pg-format";
import { TUser, TUserReq, TUserReqPost } from "../interfaces/users.interfaces";
import { QueryResult } from "pg";
import client from "../database/config";
import { hash } from "bcryptjs";
import { userReponseSchema, userSchemaResponse } from "../schemas/users.schema";

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
          RETURNING *;
  `,
    Object.keys(userData),
    Object.values(userData)
  );

  const queryResult: QueryResult<TUser> = await client.query(queryString);
  const newUser = userReponseSchema.parse(queryResult.rows[0]);

  return newUser;
};

export default createUserService;
