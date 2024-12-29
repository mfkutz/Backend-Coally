import { UserModel } from "../models/user.model.js";
import { CustomError } from "../utils/errors/custom.error.js";
import errors from "../utils/errors/dictionaty.errors.js";

export class UserRepository {
  static async create(data) {
    return await UserModel.create(data);
  }

  static async getAll() {
    return await UserModel.find();
  }

  static async findById(id) {
    return await UserModel.findById(id).select("_id first_name last_name email");
  }

  static async findByEmail(email) {
    return await UserModel.findOne({ email });
  }

  static async update(id, updateFields) {
    return await UserModel.findByIdAndUpdate(id, updateFields, { new: true });
  }

  static async delete(id) {
    return await UserModel.findByIdAndDelete(id);
  }

  static async addTaskToUser(userId, taskId) {
    try {
      return await UserModel.findByIdAndUpdate(userId, { $push: { tasks: taskId } }, { new: true });
    } catch (error) {
      return CustomError.newError(errors.fatal, "Error adding task to user");
    }
  }
}
