import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { __dirname } from "./path.js";
import morgan from "morgan";
import { corsConfig } from "./config/cors.js";
import { connectDB } from "./config/db.js";
import routes from "./routes/index.js";
import errorHandler from "./middlewares/errorHandler.js";
import swaggerOptions, { swaggerUiOptions } from "./utils/swagger.js";
import swaggerJSDoc from "swagger-jsdoc";
import { serve, setup } from "swagger-ui-express";

import path from "path";

dotenv.config();

connectDB();

const app = express();
app.use(cors(corsConfig));

app.use(morgan("dev"));
app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "public")));
app.use(express.urlencoded({ extended: true }));

//Documentation Swagger
const specs = swaggerJSDoc(swaggerOptions);
app.use("/api/docs", serve, setup(specs, swaggerUiOptions));

//Routes
app.use("/api", routes);
app.use((req, res) => {
  res.status(404).json({ error: "Route not found", message: "The route you are looking for does not exist" });
});

app.use(errorHandler);

export default app;
