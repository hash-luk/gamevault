import { Router } from "express";
import {
  register,
  getUser,
  deleteUser,
  updateUser,
} from "../controllers/user.controller";

const router = Router();

router.get("/:id", getUser);
router.post("/", register);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;
