import { Request, Response } from "express";
import retriverUserService from "../services/retriveUser.services";
import readingUsersServices from "../services/readingUsers.services";

const readingUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const users = await readingUsersServices();

  return res.status(200).json(users);
};
export default readingUserController;
