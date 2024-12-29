import { body, param } from "express-validator";

export const validateCreateTask = [body("title").notEmpty().withMessage("The task cannot go empty")];

export const validateUpdateTask = [
  param("id").isMongoId().withMessage("Invalid ID"),
  body("title").optional().notEmpty().withMessage("Title cannot be empty"),
];

export const validateDeleteTask = [param("id").isMongoId().withMessage("Invalid ID")];

export const validateGetTaskById = [param("id").isMongoId().withMessage("Invalid ID")];

export const validateUpdateStatus = [
  param("id").isMongoId().withMessage("Invalid ID"),
  body("status").isBoolean().withMessage("Status must be a boolean value"),
];
