import jwt from "jsonwebtoken";
import { UserRepository } from "../repositories/user.repository.js";

export const authenticate = async (req, res, next) => {
  const bearer = req.headers.authorization;
  if (!bearer) {
    const error = new Error("No Autorizado");
    res.status(401).json({ error: error.message });
    return;
  }
  const [, token] = bearer.split(" ");
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (typeof decoded === "object" && decoded.id) {
      const user = await UserRepository.findById(decoded.id);

      if (user) {
        req.recover_user = user;
        next();
      } else {
        res.status(500).json({ error: "Invalid Token" });
      }
    }
  } catch (error) {
    res.status(500).json({ error: "Invalid Token" });
  }
};
