import { QueryConfig, QueryResult } from "pg";
import { client } from "../database";

const retriverUserService = async () => {
  const queryString: string = `
        SELECT 
          "id",
          "name",
          "email"
        FROM 
          users
        WHERE id=$1;
    
    `;

  const queryConfig: QueryConfig = {
    text: queryString,
    values: [],
  };
  const queryResult: QueryResult = await client.query(queryConfig);

  return queryResult.rows;
};

export default retriverUserService;
