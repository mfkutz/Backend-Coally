import { TaskModel } from "../models/tasks.model.js";

export class TaskRepository {
  static async create(data) {
    return await TaskModel.create(data);
  }

  static async getAll() {
    return await TaskModel.find();
  }

  static async getById(id) {
    return await TaskModel.findById(id);
  }

  static async update(id, updateFields) {
    return await TaskModel.findByIdAndUpdate(id, updateFields, { new: true });
  }

  static async delete(id) {
    return await TaskModel.findByIdAndDelete(id);
  }
}
