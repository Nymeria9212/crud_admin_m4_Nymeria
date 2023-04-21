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

const userRequest = userSchemaResponse.omit({ id: true });

export { userSchemaResponse, userRequest, userSchemaReqLogin };
