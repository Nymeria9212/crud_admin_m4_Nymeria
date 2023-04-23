import { QueryConfig, QueryResult } from "pg";
import { client } from "../database";

const deleteUserService = async (id: number) => {
  const queryString: string = `
        UPDATE users
        SET 
        ("active")=(false)
        WHERE id=$1;
    `;
  const queryConfig: QueryConfig = {
    text: queryString,
    values: [id],
  };

  const queryResult: QueryResult = await client.query(queryConfig);
};

export { deleteUserService };
