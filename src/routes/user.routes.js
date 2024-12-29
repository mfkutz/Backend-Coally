import { Router } from "express";
import { UserController } from "../controllers/user.controller.js";
import { handleInputErrors } from "../middlewares/validation.js";
import {
  validateCreateUser,
  validateUpdateUser,
  validateGetUserById,
  validateDeleteUser,
} from "../validators/user.validators.js";

const router = Router();

router.post("/", validateCreateUser, handleInputErrors, UserController.createUser);
router.get("/:id", validateGetUserById, handleInputErrors, UserController.getUserById);
router.get("/", UserController.getAllUsers);
router.put("/:id", validateUpdateUser, handleInputErrors, UserController.updateUserById);
router.delete("/:id", validateDeleteUser, handleInputErrors, UserController.deleteUserById);

export default router;
