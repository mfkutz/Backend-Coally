import { UserRepository } from "../repositories/user.repository.js";
import { hashPassword } from "../utils/bcrypt.js";
import { CustomError } from "../utils/errors/custom.error.js";
import errors from "../utils/errors/dictionaty.errors.js";

export class UserService {
  static async createUser(data) {
    const { email, password } = data;
    const userExists = await UserRepository.findByEmail(email);
    if (userExists) return CustomError.newError(errors.conflict, "User already exists");
    const hashedPassword = await hashPassword(password);
    data.password = hashedPassword;
    return await UserRepository.create(data);
  }

  static async getAllUsers() {
    const users = await UserRepository.getAll();
    if (!users) return CustomError.newError(errors.notFound, "There are no users");
    return users;
  }

  static async getUserById(id) {
    const user = await UserRepository.findById(id);
    if (!user) return CustomError.newError(errors.notFound, "User not found");
    return user;
  }

  static async updateUserById(id, updateFields) {
    const updatedUser = await UserRepository.update(id, updateFields);
    if (!updatedUser) return CustomError.newError(errors.notFound, "User not found");
    return updatedUser;
  }

  static async deleteUserById(id) {
    const deleteUser = await UserRepository.delete(id);
    if (!deleteUser) return CustomError.newError(errors.notFound, "User not found");
    return deleteUser;
  }
}
