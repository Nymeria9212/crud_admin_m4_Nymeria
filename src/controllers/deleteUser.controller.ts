import { Request, Response } from "express";
import { deleteUserService } from "../services/deleteUser.services";
import { AppError } from "../errors";

const deleteUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const idUser: number = parseInt(req.params.id);
  const id: number = parseInt(res.locals.id);
  const admin = res.locals.admin;

  if (id === idUser && !admin) {
    const deleteUser = deleteUserService(idUser);
  }
  if (admin) {
    const deleteUser = deleteUserService(idUser);
  }

  if (id !== idUser && !admin) {
    throw new AppError("Insufficient Permission", 403);
  }

  return res.status(204).json();
};

export default deleteUserController;
