import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import dotenv from "dotenv";
import cors from "cors";
import userRouter from "./routes/user.route.js";
import userAuth from "./routes/auth.route.js";
dotenv.config();
mongoose.connect(process.env.MONGO).then(() => {
  console.log("Connected to DataBase");
});
const app = express();
app.use(express.json());
app.use(morgan());
app.use(cors());
app.listen(3001, () => {
  console.log(`Server is listening at port ${3001}`);
});
app.use("/api/user", userRouter);
app.use("/api/auth", userAuth);
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server error ";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
