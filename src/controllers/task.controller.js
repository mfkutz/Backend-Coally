import { TaskService } from "../services/task.services.js";

export class TaskController {
  static async createTask(req, res, next) {
    try {
      const userId = req.recover_user._id;
      const newTask = await TaskService.createTask(req.body, userId);
      res.status(201).json(newTask);
    } catch (error) {
      next(error);
    }
  }

  static async getAll(req, res, next) {
    try {
      const userId = req.recover_user._id;
      const tasks = await TaskService.getAllTasks(userId);
      res.status(200).json(tasks);
    } catch (error) {
      next(error);
    }
  }

  static async getById(req, res, next) {
    try {
      const userId = req.recover_user._id;
      const { id } = req.params;
      const task = await TaskService.getTaskById(userId, id);
      res.status(200).json(task);
    } catch (error) {
      next(error);
    }
  }

  static async updateById(req, res, next) {
    try {
      const userId = req.recover_user._id;
      const { id } = req.params;
      const updateFields = req.body;
      const updatedTask = await TaskService.updateTaskById(userId, id, updateFields);
      res.status(200).json({ message: "Task updated successfully", data: updatedTask });
    } catch (error) {
      next(error);
    }
  }

  static async deleteById(req, res, next) {
    try {
      const userId = req.recover_user._id;
      const { id } = req.params;
      await TaskService.deleteTaskById(userId, id);
      res.status(200).json({ message: "Task deleted" });
    } catch (error) {
      next(error);
    }
  }

  static async updateStatus(req, res, next) {
    try {
      const userId = req.recover_user._id;
      const { id } = req.params;
      const { status } = req.body;
      const updatedTask = await TaskService.updateTaskStatus(userId, id, status);
      res.status(200).json({
        message: "Task status updated successfully",
        data: updatedTask,
      });
    } catch (error) {
      next(error);
    }
  }
}
