import { Router } from "express";
import loginUserController from "../controllers/loginUser.controller";
import validateBody from "../middlewares/validateBody.middleware";
import { userSchemaReqLogin } from "../schemas/users.schema";
import ensureUserLogin from "../middlewares/ensureUserLogin.middleware";
import validatePassword from "../middlewares/validatePassword.middleware";
import ensureActiveUser from "../middlewares/ensureActiveUser.middleware";

const loginRouter: Router = Router();

loginRouter.post(
  "",
  validateBody(userSchemaReqLogin),
  ensureUserLogin,
  ensureActiveUser,
  validatePassword,
  loginUserController
);

export default loginRouter;
