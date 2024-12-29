import { UserService } from "../services/user.services.js";

export class UserController {
  static async createUser(req, res, next) {
    try {
      const userData = req.body;
      const newUser = await UserService.createUser(userData);
      res.status(201).json(newUser);
    } catch (error) {
      next(error);
    }
  }

  static async getAllUsers(req, res, next) {
    try {
      const users = await UserService.getAllUsers();
      res.status(200).json(users);
    } catch (error) {
      next(error);
    }
  }

  static async getUserById(req, res, next) {
    try {
      const { id } = req.params;
      const user = await UserService.getUserById(id);
      res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  }

  static async updateUserById(req, res, next) {
    try {
      const { id } = req.params;
      const updateFields = req.body;
      const updatedUser = await UserService.updateUserById(id, updateFields);
      res.status(200).json({ message: "User updated successfully", updatedUser });
    } catch (error) {
      next(error);
    }
  }

  static async deleteUserById(req, res, next) {
    try {
      const { id } = req.params;
      const deleteUser = await UserService.deleteUserById(id);
      res.status(200).json({ message: "User deleted" });
    } catch (error) {
      next(error);
    }
  }
}
