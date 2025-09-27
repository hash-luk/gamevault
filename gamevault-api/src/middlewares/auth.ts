import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "";

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.cookies._session;

  if (!token) {
    return res.status(401).json({ error: "Token not found" });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    const { userId } = decoded as { userId: number };

    console.log("Token", decoded);

    (req as any).userId = userId;
    next();
  } catch (err) {
    return res.status(401).json({ error: "Invalid token" });
  }
};
