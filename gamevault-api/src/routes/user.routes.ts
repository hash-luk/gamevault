import { Router } from "express";
import {
  register,
  getMe,
  deleteUser,
  updateUser,
} from "../controllers/user.controller";
import { authMiddleware } from "../middlewares/auth";

const router = Router();

router.get("/me", authMiddleware, getMe);
router.post("/", register);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;
