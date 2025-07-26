import { Router } from "express";
import { signOut } from "../controllers/auth.controller";

const router = Router();

router.post("/", signOut);

export default router;
