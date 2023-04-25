import { Request, Response } from "express";
import loginUserService from "../services/loginUser.services";

const loginUserController = async (req: Request, res: Response) => {
  const token = await loginUserService(req, res);

  return res.status(200).json(token);
};

export default loginUserController;
