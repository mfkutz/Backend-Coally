import { TaskService } from "../services/task.services.js";

export class TaskController {
  static async createTask(req, res, next) {
    try {
      const newTask = await TaskService.createTask(req.body);
      res.status(201).json(newTask);
    } catch (error) {
      next(error);
    }
  }

  static async getAll(req, res, next) {
    try {
      const tasks = await TaskService.getAllTasks();
      res.status(200).json(tasks);
    } catch (error) {
      next(error);
    }
  }

  static async getById(req, res, next) {
    try {
      const { id } = req.params;
      const task = await TaskService.getTaskById(id);
      res.status(200).json(task);
    } catch (error) {
      next(error);
    }
  }

  static async updateById(req, res, next) {
    try {
      const { id } = req.params;
      const updateFields = req.body;
      const updatedTask = await TaskService.updateTaskById(id, updateFields);
      res.status(200).json({ message: "Task updated successfully", data: updatedTask });
    } catch (error) {
      next(error);
    }
  }

  static async deleteById(req, res, next) {
    try {
      const { id } = req.params;
      const task = await TaskService.deleteTaskById(id);
      res.status(200).json({ message: "Task deleted" });
    } catch (error) {
      next(error);
    }
  }
}
