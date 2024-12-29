import { TaskRepository } from "../repositories/task.repository.js";
import { UserRepository } from "../repositories/user.repository.js";
import { CustomError } from "../utils/errors/custom.error.js";
import errors from "../utils/errors/dictionaty.errors.js";

export class TaskService {
  static async createTask(data, userId) {
    if (!data.title || data.title.trim() === "") {
      throw CustomError.newError(errors.badRequest, "The task cannot be empty");
    }
    const newTask = await TaskRepository.create({ ...data, user: userId });
    await UserRepository.addTaskToUser(userId, newTask._id);
    return newTask;
  }

  static async getAllTasks(userId) {
    const tasks = await TaskRepository.getAll(userId);
    if (!tasks || tasks.length === 0) return CustomError.newError(errors.notFound, "No tasks found");
    return tasks;
  }

  static async getTaskById(userId, taskId) {
    const task = await TaskRepository.getById(userId, taskId);
    if (!task) return CustomError.newError(errors.notFound, "Task not found or not authorized to view it");
    return task;
  }

  static async updateTaskById(userId, taskId, updateFields) {
    const updatedTask = await TaskRepository.update(userId, taskId, updateFields);
    if (!updatedTask) return CustomError.newError(errors.notFound, "Task not found or not authorized to update");
    return updatedTask;
  }

  static async deleteTaskById(userId, taskId) {
    const task = await TaskRepository.delete(userId, taskId);
    if (!task) return CustomError.newError(errors.notFound, "Task not found or not authorized to delete");
    return task;
  }

  static async updateTaskStatus(userId, taskId, status) {
    if (typeof status !== "boolean") {
      return CustomError.newError(errors.badRequest, "Status must be a boolean");
    }

    const task = await TaskRepository.updateStatus(userId, taskId, status);
    if (!task) {
      return CustomError.newError(errors.notFound, "Task not found or not authorized to update");
    }

    return task;
  }
}
