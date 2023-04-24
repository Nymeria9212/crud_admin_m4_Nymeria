import { Router } from "express";
import loginUserController from "../controllers/loginUser.controller";
import validateBody from "../middlewares/validateBody.middleware";
import { userSchemaReqLogin } from "../schemas/users.schema";

const loginRouter: Router = Router();

loginRouter.post("", validateBody(userSchemaReqLogin), loginUserController);

export default loginRouter;
