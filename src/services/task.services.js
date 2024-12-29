import { TaskRepository } from "../repositories/task.repository.js";
import { CustomError } from "../utils/errors/custom.error.js";
import errors from "../utils/errors/dictionaty.errors.js";

export class TaskService {
  static async createTask(data) {
    if (!data.title || data.title.trim() === "") {
      return CustomError.newError(errors.badRequest, "the task cannot be empty");
    }
    const newTask = await TaskRepository.create(data);
    return newTask;
  }

  static async getAllTasks() {
    const tasks = await TaskRepository.getAll();
    if (!tasks) return CustomError.newError(errors.notFound, "Nothing to do :)");
    return tasks;
  }

  static async getTaskById(id) {
    const task = await TaskRepository.getById(id);
    if (!task) return CustomError.newError(errors.notFound, "Task not found");
    return task;
  }

  static async updateTaskById(id, updateFields) {
    const updatedTask = await TaskRepository.update(id, updateFields);
    if (!updatedTask) return CustomError.newError(errors.notFound, "Task not found");
    return updatedTask;
  }

  static async deleteTaskById(id) {
    const task = await TaskRepository.delete(id);
    if (!task) return CustomError.newError(errors.notFound, "Task not found");
    return task;
  }
}
