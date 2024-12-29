import { Router } from "express";
import { TaskController } from "../controllers/task.controller.js";
import { handleInputErrors } from "../middlewares/validation.js";
import {
  validateCreateTask,
  validateUpdateTask,
  validateDeleteTask,
  validateGetTaskById,
  validateUpdateStatus,
} from "../validators/task.validators.js";
import { authenticate } from "../middlewares/auth.js";

const router = Router();

router.post("/", authenticate, validateCreateTask, handleInputErrors, TaskController.createTask);
router.get("/", authenticate, handleInputErrors, TaskController.getAll);
router.get("/:id", authenticate, validateGetTaskById, handleInputErrors, TaskController.getById);
router.put("/:id", authenticate, validateUpdateTask, handleInputErrors, TaskController.updateById);
router.delete("/:id", authenticate, validateDeleteTask, handleInputErrors, TaskController.deleteById);
router.put("/:id/status", authenticate, validateUpdateStatus, handleInputErrors, TaskController.updateStatus);

export default router;
