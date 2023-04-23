import { QueryResult } from "pg";
import { client } from "../database";

const retriverUserService = async () => {
  const queryString: string = `
        SELECT *
        FROM users;
    
    `;
  const queryResult: QueryResult = await client.query(queryString);

  return queryResult.rows;
};

export default retriverUserService;
