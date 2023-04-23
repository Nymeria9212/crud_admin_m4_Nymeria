import { Request, Response } from "express";
import createUserService from "../services/createUser.services";
import { TUser, TUserReq } from "../interfaces/users.interfaces";
import { userRequest } from "../schemas/users.schema";

const createUserController = async (
  req: Request,
  res: Response
): Promise<Response<TUser>> => {
  const userData: TUserReq = userRequest.parse(req.body);

  const newUser = await createUserService(userData);

  return res.status(201).json(newUser);
};

export default createUserController;
