import { Router } from "express";
import createUserController from "../controllers/createUser.controller";
import { userRequest } from "../schemas/users.schema";
import validateBody from "../middlewares/validateBody.middleware";
import retriverUserController from "../controllers/retriverUser.controller";
import deleteUserController from "../controllers/deleteUser.controller";
import updateUserController from "../controllers/updateUser.controller";
import recoverUserController from "../controllers/recoverUser.controller";
import readingUserController from "../controllers/readingUsers.controller";
import { emailExistMiddleware } from "../middlewares/emailExist.middleware";
import { userExistsMiddleware } from "../middlewares/userExists.middleware";

const userRouter: Router = Router();

userRouter.post(
  "",
  validateBody(userRequest),
  emailExistMiddleware,
  createUserController
);
userRouter.get("", readingUserController);
userRouter.get("/profile", retriverUserController);
userRouter.patch(
  "/:id",
  validateBody(userRequest),
  emailExistMiddleware,
  userExistsMiddleware,
  updateUserController
);
userRouter.delete("/:id", userExistsMiddleware, deleteUserController);
userRouter.put("/:id/recover", userExistsMiddleware, recoverUserController);

export default userRouter;
