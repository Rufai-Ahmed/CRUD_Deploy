import { Application, Request, Response } from "express";
import userR from "./router/userRouter";

export const mainApp = (app: Application) => {
  try {
    app.use("", userR);

    app.use("/", (req: Request, res: Response) => {
      try {
        return res.status(200).json({
          msg: "Welcome to TG's API",
        });
      } catch (error) {
        console.log(error);
        return res.status(404).json({
          msg: "Error encountered",
        });
      }
    });
  } catch (error) {
    console.log(error);
  }
};
