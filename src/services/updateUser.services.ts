import { Request } from "express";
import {
  TUser,
  TUserPatch,
  TUserReqPost,
} from "../interfaces/users.interfaces";
import format from "pg-format";
import { object } from "zod";
import { QueryConfig, QueryResult } from "pg";
import { client } from "../database";
import { userReponseSchema, userSchemaResponse } from "../schemas/users.schema";

const updateUserService = async (id: number, userData: TUserPatch) => {
  const queryString: string = format(
    `
        UPDATE users
            SET(%I) = ROW(%L)
        WHERE
            id = $1
        RETURNING*;
    `,
    Object.keys(userData),
    Object.values(userData)
  );

  const queryConfig: QueryConfig = {
    text: queryString,
    values: [id],
  };

  const queryResult: QueryResult<TUser> = await client.query(queryConfig);
  const updateUserdata = queryResult.rows[0];

  const updateUser = userReponseSchema.parse(updateUserdata);

  return updateUser;
};

export default updateUserService;
