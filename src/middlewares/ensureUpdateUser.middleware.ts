import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors";

const ensureUpdateUserMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const id: number = parseInt(req.params.id);
  const idUser = res.locals.idUser;
  if (id !== idUser) {
    throw new AppError("Insufficient Permission", 403);
  }
  next();
};

export default ensureUpdateUserMiddleware;
