import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { createAccessToken, verifyPassword } from "../utils/crypto";

const prisma = new PrismaClient();

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = await prisma.user.findUnique({ where: { email } });

  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  if (!verifyPassword(password, user.password)) {
    return res.status(401).json({ error: "Invalid credentials" });
  }

  const token = createAccessToken(user.id);

  res.cookie("_session", token, {
    httpOnly: true,
    secure: false,
    sameSite: "lax",
    path: "/",
    maxAge: 1000 * 60 * 60,
  });

  res.json({ success: true });
};

export const signOut = (req: Request, res: Response) => {
  res.clearCookie("_session", {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
  });

  return res.status(200).json({ message: "Signed out successfully" });
};
