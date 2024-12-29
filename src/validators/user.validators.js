import { body, param } from "express-validator";

export const validateCreateUser = [
  body("first_name").notEmpty().withMessage("First name is required"),
  body("last_name").notEmpty().withMessage("Last name is required"),
  body("email").isEmail().withMessage("Invalid email format"),
  body("password").isLength({ min: 8 }).withMessage("Password must be at least 8 characters long"),
];

export const validateUpdateUser = [
  param("id").isMongoId().withMessage("Invalid ID"),
  body("first_name").optional().notEmpty().withMessage("First name cannot be empty"),
  body("last_name").optional().notEmpty().withMessage("Last name cannot be empty"),
  body("email").optional().isEmail().withMessage("Invalid email format"),
  body("password").optional().isLength({ min: 8 }).withMessage("Password must be at least 8 characters long"),
];

export const validateGetUserById = [param("id").isMongoId().withMessage("Invalid ID")];

export const validateDeleteUser = [param("id").isMongoId().withMessage("Invalid ID")];
