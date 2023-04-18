import { Request, Response } from "express";
import createUserService from "../services/createUser.services";
import { TUserReq } from "../interfaces/users.interfaces";

const createUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userData: TUserReq = req.body;

  const newUser = createUserService(userData);

  return res.status(201).json(newUser);
};

export default createUserController;