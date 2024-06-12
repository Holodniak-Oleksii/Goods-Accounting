import { NextFunction, Response } from "express";
import jwt from "jsonwebtoken";

import { ExtendedRequest } from "../types";

export const verifyToken = (
  req: ExtendedRequest,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res
      .status(401)
      .json({ isAuth: false, message: "Access token is missing" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY as string) as {
      id: number;
    };
    req.userKey = { id: decoded.id };
    next();
  } catch (error) {
    return res
      .status(401)
      .json({ isAuth: false, message: "Invalid access token" });
  }
};
