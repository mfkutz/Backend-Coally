import { AuthService } from "../services/auth.services.js";

export class AuthController {
  static async login(req, res, next) {
    try {
      const { email, password } = req.body;
      const result = await AuthService.login(email, password);
      res.send(result);
    } catch (error) {
      next(error);
    }
  }
}
