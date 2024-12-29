import mongoose from "mongoose";
import colors from "colors";
import { exit } from "node:process";
import winstonLogger from "../utils/winston.util.js";

export const connectDB = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.DATABASE_URL);
    const url = `${connection.host}:${connection.port}`;
    winstonLogger.info(`MongoDB Connected to: ${url}`);
  } catch (error) {
    winstonLogger.error(colors.red.bold("Error connecting to MongoDB"));
    exit(1);
  }
};
