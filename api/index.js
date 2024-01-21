import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
mongoose.connect(process.env.MONGO).then(() => {
  console.log("Connected to DataBase");
});
const app = express();
app.listen(3000, () => {
  console.log(`Server is listening at port ${3000}`);
});
