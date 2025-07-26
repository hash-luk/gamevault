import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function hashPassword(password: string) {
  return await bcrypt.hash(password, 10);
}

export async function verifyPassword(
  plaiPassword: string,
  hashedPassword: string
) {
  try {
    return await bcrypt.compare(plaiPassword, hashedPassword);
  } catch (e) {
    return false;
  }
}

export function createAccessToken(userID: number) {
  const JWT_SECRET = process.env.JWT_SECRET || "defaultsecret";
  return jwt.sign({ userId: userID }, JWT_SECRET, { expiresIn: "1d" });
}
