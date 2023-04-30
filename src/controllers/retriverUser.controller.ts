import { Request, Response } from "express";
import retriverUserService from "../services/retriveUser.services";

const retriverUserController = async (req: Request, res: Response) => {
  const id: number = parseInt(res.locals.id);

  const user = await retriverUserService(id);
  return res.status(200).json(user);
};

export default retriverUserController;
