import { z } from "zod";

const userSchemaResponse = z.object({
  id: z.number(),
  name: z.string().max(20),
  email: z.string().email().max(100),
  password: z.string().max(120),
  admin: z.boolean().nullish(),
  active: z.boolean().nullish(),
});
const userReponseSchema = userSchemaResponse.omit({ password: true });
const userSchemaReqLogin = userSchemaResponse.omit({
  id: true,
  name: true,
  admin: true,
  active: true,
});

const userReqPostSchema = userSchemaResponse.omit({ id: true, active: true });

const userRequest = userSchemaResponse.omit({ id: true });

const userPathRequest = userRequest.partial();
const loginSchema = z.object({
  token: z.string(),
});

export {
  userSchemaResponse,
  userRequest,
  userSchemaReqLogin,
  userReqPostSchema,
  userPathRequest,
  loginSchema,
  userReponseSchema,
};
