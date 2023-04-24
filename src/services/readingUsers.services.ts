import { QueryResult } from "pg";
import "dotenv/config";
import { client } from "../database";
import { TUser } from "../interfaces/users.interfaces";
import { AppError } from "../errors";
import jwt from "jsonwebtoken";

const readingUsersServices = async (): Promise<Array<TUser>> => {
  const queryString: string = `
        SELECT 
          "id",
          "name",
          "email"
        FROM 
          users;
    
    `;
  const queryResult: QueryResult<TUser> = await client.query(queryString);

  return queryResult.rows;
};
export default readingUsersServices;
