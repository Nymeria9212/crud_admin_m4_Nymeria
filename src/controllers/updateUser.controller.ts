import { Request, Response } from "express";
import updateUserService from "../services/updateUser.services";
import { TUser, TUserPatch } from "../interfaces/users.interfaces";
import { AppError } from "../errors";

const updateUserController = async (req: Request, res: Response) => {
  const userData: TUserPatch = req.body;
  const idUser: number = parseInt(res.locals.id);
  const id: number = parseInt(req.params.id);
  const admin = res.locals.admin;
  const user: TUser = res.locals.user;

  if (!admin && user.admin === true) {
    throw new AppError("Insufficient Permission", 403);
  }
  if (id === idUser) {
    const updateUser = await updateUserService(id, userData);
    return res.status(200).json(updateUser);
  }

  if (admin) {
    const updateUser = await updateUserService(id, userData);
    return res.status(200).json(updateUser);
  }

  return new AppError("Insufficient Permission", 403);
};

export default updateUserController;
