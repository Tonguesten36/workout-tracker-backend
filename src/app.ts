import express from "express";
import { AppDataSource } from "./configs/data-source";
import "reflect-metadata";  // Required for TypeORM
require('dotenv').config();

const app = express();

AppDataSource.initialize()
  .then(() => {
    console.log("Database connected to port", process.env.DB_PORT);

    // Other middleware and routes
    app.listen(3000, () => {
      console.log("Server is running on port", process.env.PORT);
    });
  })
  .catch((error) => console.log("Error during Data Source initialization", error));
