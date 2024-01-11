import express, { Application, json } from "express";
import cors from "cors";
import { mainApp } from "./mainApp";
import { dbConfig } from "./utils/dbConfig";

const app: Application = express();
const port: number = 4000;

app.use(cors());
app.use(json());

mainApp(app);

const server = app.listen(port, () => {
  dbConfig();
});

process
  .on("uncaughtException", (error: Error) => {
    console.log(error);

    process.exit(1);
  })
  .on("unhandledRejection", (reason: any) => {
    console.log(reason);
    server.close(() => {
      process.exit(1);
    });
  });
