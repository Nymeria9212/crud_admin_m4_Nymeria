import { QueryConfig, QueryResult } from "pg";
import { client } from "../database";

const deleteUserService = async (id: number) => {
  const queryString: string = `
        DELETE FROM users
        WHERE 
        id=$1;
    `;
  const queryConfig: QueryConfig = {
    text: queryString,
    values: [id],
  };

  const queryResult: QueryResult = await client.query(queryConfig);
  return queryResult.rows;
};

export { deleteUserService };
