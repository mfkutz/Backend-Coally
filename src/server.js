import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import { corsConfig } from "./config/cors.js";
import { connectDB } from "./config/db.js";
import routes from "./routes/index.js";
import errorHandler from "./middlewares/errorHandler.js";

dotenv.config();

connectDB();

const app = express();
app.use(cors(corsConfig));

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes
app.use("/api", routes);
app.use((req, res) => {
  res.status(404).json({ error: "Route not found", message: "The route you are looking for does not exist" });
});

app.use(errorHandler);

export default app;
