import dotenv from "dotenv";
dotenv.config();

import express from "express";
import mysql from "mysql2";

const PORT = process.env.PORT || 5000;
const app = express();

const dbConfig = {
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
};

export const db = mysql.createPool(dbConfig).promise();

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
