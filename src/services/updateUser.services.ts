import { Request } from "express";
import { TUserPatch, TUserReqPost } from "../interfaces/users.interfaces";
import format from "pg-format";
import { object } from "zod";
import { QueryConfig, QueryResult } from "pg";
import { client } from "../database";

const updateUserService = async (id: number, userData: TUserPatch) => {
  const queryString: string = format(
    `
        UPDATE users
        SET (%I)=(%L)
        WHERE id=$1
        RETURNING "id", "name", "email",
    `,
    Object.keys(userData),
    Object.values(userData)
  );
  const queryConfig: QueryConfig = {
    text: queryString,
    values: [id],
  };
  const queryResult: QueryResult = await client.query(queryConfig);
  return queryResult.rows[0];
};

export default updateUserService;
