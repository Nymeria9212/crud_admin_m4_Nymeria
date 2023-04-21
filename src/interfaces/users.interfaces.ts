import { z } from "zod";
import {
  userRequest,
  userSchemaReqLogin,
  userSchemaResponse,
} from "../schemas/users.schema";
import { type } from "os";

type TUser = z.infer<typeof userSchemaResponse>;

type TUserReq = z.infer<typeof userRequest>;
type TUserLogin = z.infer<typeof userSchemaReqLogin>;

export { TUser, TUserReq, TUserLogin };
