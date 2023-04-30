import { QueryConfig, QueryResult } from "pg";
import { client } from "../database";
import { AppError } from "../errors";

const retriverUserService = async (idUser: number) => {
  const queryString: string = `
        SELECT 
          "id",
          "name",
          "email",
          "admin",
          "active"
        FROM 
          users
        WHERE id=$1;
    `;

  const queryConfig: QueryConfig = {
    text: queryString,
    values: [idUser],
  };
  const queryResult: QueryResult = await client.query(queryConfig);
  const user = queryResult.rows[0];

  return user;
};

export default retriverUserService;
