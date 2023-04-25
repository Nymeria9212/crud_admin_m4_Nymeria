import { Request, Response } from "express";
import updateUserService from "../services/updateUser.services";
import { TUserPatch } from "../interfaces/users.interfaces";

const updateUserController = async (req: Request, res: Response) => {
  const userData: TUserPatch = req.body;
  const id: number = parseInt(req.params.id);
  const updateUser = await updateUserService(id, userData);

  return res.status(200).json(updateUser);
};

export default updateUserController;
