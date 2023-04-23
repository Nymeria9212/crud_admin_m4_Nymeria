import { NextFunction, Request, Response } from "express";

const verifyTokenMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).json({ message: "Token não encontrado" });
  }

  return next();
};

export default verifyTokenMiddleware;
