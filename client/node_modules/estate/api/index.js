import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import dotenv from "dotenv";
import path from "path";

import userRouter from "./routes/user.route.js";
import userAuth from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
import listingRouter from "./routes/listing.route.js";
dotenv.config();
const __dirname = path.resolve();
mongoose.connect(process.env.MONGO).then(() => {
  console.log("Connected to DataBase");
});
const app = express();
app.use(express.json());
app.use(morgan());
// app.use(cors());
app.use(cookieParser());
app.listen(3001, () => {
  console.log(`Server is listening at port ${3001}`);
});
app.use("/api/user", userRouter);
app.use("/api/auth", userAuth);
app.use("/api/listing", listingRouter);
app.use(express.static(path.join(__dirname, "/client/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server error ";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
