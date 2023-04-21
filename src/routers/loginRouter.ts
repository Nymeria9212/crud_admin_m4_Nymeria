import { Router } from "express";
import loginUserController from "../controllers/loginUser.controller";

const loginRouter: Router = Router();

loginRouter.post("", loginUserController);

export default loginRouter;
