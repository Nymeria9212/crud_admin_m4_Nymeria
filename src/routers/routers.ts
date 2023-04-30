import { Router } from "express";
import createUserController from "../controllers/createUser.controller";
import validateBody from "../middlewares/validateBody.middleware";
import retriverUserController from "../controllers/retriverUser.controller";
import deleteUserController from "../controllers/deleteUser.controller";
import updateUserController from "../controllers/updateUser.controller";
import recoverUserController from "../controllers/recoverUser.controller";
import readingUserController from "../controllers/readingUsers.controller";
import { emailExistMiddleware } from "../middlewares/emailExist.middleware";
import { userExistsMiddleware } from "../middlewares/userExists.middleware";
import validateTokenMiddleware from "../middlewares/validatedToken.middleware";
import ensureAdminToken from "../middlewares/ensureAdminToken.middleware";
import { userPathRequest, userRequest } from "../schemas/users.schema";
import validatePermission from "../middlewares/validateUserPermission.middleware";

const userRouter: Router = Router();

userRouter.post(
  "",
  validateBody(userRequest),
  emailExistMiddleware,
  createUserController
);
userRouter.get(
  "",
  validateTokenMiddleware,
  ensureAdminToken,
  readingUserController
);
userRouter.get("/profile", validateTokenMiddleware, retriverUserController);
userRouter.patch(
  "/:id",

  userExistsMiddleware,
  validateBody(userPathRequest),
  emailExistMiddleware,
  validateTokenMiddleware,
  validatePermission,
  updateUserController
);
userRouter.delete(
  "/:id",
  userExistsMiddleware,
  validateTokenMiddleware,
  validatePermission,
  deleteUserController
);
userRouter.put("/:id/recover", userExistsMiddleware, recoverUserController);

export default userRouter;
