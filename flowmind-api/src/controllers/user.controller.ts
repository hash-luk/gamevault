import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { hashPassword } from "../utils/crypto";

const prisma = new PrismaClient();

export const getUser = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const user = await prisma.user.findUnique({ where: { id } });

  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  res.json(user);
};

export const register = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  const hashed = await hashPassword(password);
  const user = await prisma.user.create({
    data: {
      name,
      email,
      password: hashed,
    },
  });
  res.json(user);
};

export const updateUser = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const { name, email } = req.body;

  try {
    const user = await prisma.user.update({
      where: {
        id,
        status: "active",
      },
      data: {
        name,
        email,
      },
    });

    return res.json({ success: true });
  } catch (error: any) {
    if (error.code === "P20225") {
      return res.status(404).json({ error: "User not found" });
    }

    return res.status(500).json({ error: "Failed to update user" });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);

  try {
    const user = await prisma.user.update({
      where: { id },
      data: { status: "inactive" },
    });
    return res.json({ success: true, user });
  } catch (error: any) {
    if (error.code === "P2025") {
      return res.status(404).json({ error: "User not found" });
    }

    return res.status(500).json({ error: "Failed to inactive user" });
  }
};
