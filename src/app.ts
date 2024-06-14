import dotenv from "dotenv";
dotenv.config();

import express from "express";
import mysql from "mysql2";
import {
  checkAuth,
  loginUser,
  registerUser,
} from "./controllers/UserController";
import { verifyToken } from "./middleware";

const PORT = process.env.PORT || 5000;
const app = express();

const dbConfig = {
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
};

export const db = mysql.createPool(dbConfig).promise();
const cors = require("cors");

app.use(cors());
app.use(express.json());

// USER
app.post("/api/user/registration", registerUser);
app.post("/api/user/login", loginUser);
app.post("/api/user/check", verifyToken, checkAuth);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
