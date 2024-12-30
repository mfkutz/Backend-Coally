import { Router } from "express";
import { AuthController } from "../controllers/auth.controller.js";
import { authenticate } from "../middlewares/auth.js";

const router = Router();

router.post("/login", AuthController.login);
router.get("/current", authenticate, AuthController.current);

export default router;
