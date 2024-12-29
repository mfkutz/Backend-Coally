import { Router } from "express";
import tasks from "./tasks.routes.js";
import users from "./user.routes.js";
import authRoutes from "./auth.routes.js";

const router = Router();

router.use("/tasks", tasks);
router.use("/user", users);
router.use("/auth", authRoutes);

export default router;
