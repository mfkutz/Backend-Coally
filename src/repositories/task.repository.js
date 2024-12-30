import { TaskModel } from "../models/tasks.model.js";
import { UserModel } from "../models/user.model.js";

export class TaskRepository {
  static async create(data) {
    return await TaskModel.create(data);
  }

  static async getAll(userId) {
    return await TaskModel.find({ user: userId });
  }

  static async getById(userId, taskId) {
    return await TaskModel.findOne({ _id: taskId, user: userId });
  }

  static async update(userId, taskId, updateFields) {
    return await TaskModel.findOneAndUpdate({ _id: taskId, user: userId }, updateFields, { new: true });
  }

  static async delete(userId, taskId) {
    const task = await TaskModel.findOneAndDelete({ _id: taskId, user: userId });
    if (task) {
      await UserModel.updateOne({ _id: userId }, { $pull: { tasks: taskId } });
    }
    return task;
  }

  static async updateStatus(userId, taskId, status) {
    return await TaskModel.findOneAndUpdate({ _id: taskId, user: userId }, { status }, { new: true });
  }
}
