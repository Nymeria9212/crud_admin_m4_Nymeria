import { Request, Response } from "express";

const deleteUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  return res.status(200).json();
};

export default deleteUserController;
