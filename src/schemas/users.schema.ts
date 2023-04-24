import { z } from "zod";

const userSchemaResponse = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
  admin: z.boolean().optional(),
  active: z.boolean().optional(),
});

const userSchemaReqLogin = z.object({
  email: z.string().email(),
  password: z.string(),
});

const userReqPostSchema = userSchemaResponse.omit({ id: true, active: true });
const userPatchSchema = userSchemaResponse.omit({
  id: true,
  admin: true,
  active: true,
});

const userRequest = userSchemaResponse.omit({ id: true });

const loginSchema = z.object({
  token: z.string(),
});

export {
  userSchemaResponse,
  userRequest,
  userSchemaReqLogin,
  userReqPostSchema,
  userPatchSchema,
  loginSchema,
};
