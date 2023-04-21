import { Request, Response } from "express";
import loginUserService from "../services/loginUser.services";
import { AppError } from "../errors";

const loginUserController = async (req: Request, res: Response) => {
  const userData = req.body;
  const user = await loginUserService(userData);

  return res.status(200).json(user);
};

export default loginUserController;
