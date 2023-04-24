import { z } from "zod";
import {
  loginSchema,
  userPatchSchema,
  userReqPostSchema,
  userRequest,
  userSchemaReqLogin,
  userSchemaResponse,
} from "../schemas/users.schema";
import { type } from "os";

type TUser = z.infer<typeof userSchemaResponse>;

type TUserReq = z.infer<typeof userRequest>;
type TUserLoginReq = z.infer<typeof userSchemaReqLogin>;
type TUserReqPost = z.infer<typeof userReqPostSchema>;
type TUserPatch = z.infer<typeof userPatchSchema>;
type TLogin = z.infer<typeof loginSchema>;

export { TUser, TUserReq, TUserLoginReq, TUserReqPost, TUserPatch, TLogin };
