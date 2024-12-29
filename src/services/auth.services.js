import { UserRepository } from "../repositories/user.repository.js";
import { checkPassword } from "../utils/bcrypt.js";
import { CustomError } from "../utils/errors/custom.error.js";
import errors from "../utils/errors/dictionaty.errors.js";

export class AuthService {
  static async login(email, password) {
    const user = await UserRepository.findByEmail(email);

    if (!user) return CustomError.newError(errors.notFound, "Invalid email or password");

    const isPasswordValid = await checkPassword(password, user.password);

    if (!isPasswordValid) return CustomError.newError(errors.unauthorized, "Invalid email or password");
    /* 
    const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, {
        expiresIn: "1h",
      }); */

    //   return { message: "Login successfully", token };
    return { message: "Login successfully" };
  }
}
