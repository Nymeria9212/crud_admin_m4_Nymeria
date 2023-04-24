import { Request, Response } from "express";
import loginUserService from "../services/loginUser.services";
import { TUserLoginReq } from "../interfaces/users.interfaces";

const loginUserController = async (req: Request, res: Response) => {
  const userData: TUserLoginReq = req.body;
  const token = await loginUserService(userData);

  return res.status(200).json(token);
};

export default loginUserController;
