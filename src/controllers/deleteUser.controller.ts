import { Request, Response } from "express";
import { deleteUserService } from "../services/deleteUser.services";

const deleteUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const id: number = parseInt(req.params.id);
  const deleteUser = deleteUserService(id);
  console.log(id);

  return res.status(204).json();
};

export default deleteUserController;
