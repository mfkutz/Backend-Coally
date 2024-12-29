import { UserRepository } from "../repositories/user.repository.js";
import { checkPassword } from "../utils/bcrypt.js";
import { CustomError } from "../utils/errors/custom.error.js";
import errors from "../utils/errors/dictionaty.errors.js";
import { generateJWT } from "../utils/jwt.js";

export class AuthService {
  static async login(email, password) {
    const user = await UserRepository.findByEmail(email);

    if (!user) return CustomError.newError(errors.notFound, "Invalid email or password");

    const isPasswordValid = await checkPassword(password, user.password);

    if (!isPasswordValid) return CustomError.newError(errors.unauthorized, "Invalid email or password");

    const token = generateJWT({ id: user.id });
    return token;
  }
}
