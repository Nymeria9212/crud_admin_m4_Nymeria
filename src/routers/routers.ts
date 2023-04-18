import { Router } from "express";
import createUserController from "../controllers/createUser.controller";

const userRouter: Router = Router();

userRouter.post("", createUserController);
userRouter.get("/id");
userRouter.patch("/id");

export default userRouter;
