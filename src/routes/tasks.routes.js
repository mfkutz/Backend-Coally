import { Router } from "express";
import { TaskController } from "../controllers/task.controller.js";
import { handleInputErrors } from "../middlewares/validation.js";
import {
  validateCreateTask,
  validateUpdateTask,
  validateDeleteTask,
  validateGetTaskById,
} from "../validators/task.validators.js";

const router = Router();

router.post("/", validateCreateTask, handleInputErrors, TaskController.createTask);
router.get("/", handleInputErrors, TaskController.getAll);
router.get("/:id", validateGetTaskById, handleInputErrors, TaskController.getById);
router.put("/:id", validateUpdateTask, handleInputErrors, TaskController.updateById);
router.delete("/:id", validateDeleteTask, handleInputErrors, TaskController.deleteById);

export default router;
