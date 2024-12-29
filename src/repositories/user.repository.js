import { UserModel } from "../models/user.model.js";

export class UserRepository {
  static async create(data) {
    return await UserModel.create(data);
  }

  static async getAll() {
    return await UserModel.find();
  }

  static async findById(id) {
    return await UserModel.findById(id);
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
}
